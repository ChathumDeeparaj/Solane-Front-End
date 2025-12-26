
import { useState } from "react";
import { useGetAnomaliesQuery, useUpdateAnomalyStatusMutation, useTriggerAnomalyDetectionMutation } from "@/lib/redux/query";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { ChartRadialLabel } from "@/components/ui/charts/RadialChart";
import { Loader2, AlertTriangle, CheckCircle, Info, RefreshCw } from "lucide-react";

const COLORS = {
    CRITICAL: "#ef4444", // red-500
    WARNING: "#f97316", // orange-500
    INFO: "#023D54",    // Brand Dark
};

const AnomalyList = ({ solarUnitId }) => {
    const { data: anomalies, isLoading, refetch } = useGetAnomaliesQuery({ solarUnitId }, {
        pollingInterval: 10000 // Poll every 10 seconds for updates
    });
    const [updateStatus] = useUpdateAnomalyStatusMutation();
    const [triggerDetection, { isLoading: isTriggering }] = useTriggerAnomalyDetectionMutation();

    const handleStatusUpdate = async (id, status) => {
        await updateStatus({ id, resolutionStatus: status });
        refetch();
    };

    const handleTrigger = async () => {
        await triggerDetection();
        setTimeout(refetch, 1000); // Wait a bit for async job
    };

    if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8 text-brand-dark" /></div>;

    const stats = anomalies ? [
        { label: "Critical", value: anomalies.filter(a => a.severity === "CRITICAL").length, fill: COLORS.CRITICAL },
        { label: "Warning", value: anomalies.filter(a => a.severity === "WARNING").length, fill: COLORS.WARNING },
        { label: "Info", value: anomalies.filter(a => a.severity === "INFO").length, fill: COLORS.INFO },
    ].filter(s => s.value > 0) : [];

    const totalAnomalies = stats.reduce((acc, curr) => acc + curr.value, 0);

    const chartConfig = {
        value: { label: "Anomalies" },
        CRITICAL: { label: "Critical", color: COLORS.CRITICAL },
        WARNING: { label: "Warning", color: COLORS.WARNING },
        INFO: { label: "Info", color: COLORS.INFO },
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Card */}
                <div className="col-span-1 h-full">
                    {stats.length > 0 ? (
                        <ChartRadialLabel
                            data={stats}
                            config={chartConfig}
                            title="Anomaly Severity"
                            description="Distribution by severity level"
                            footerText={`Total Anomalies: ${totalAnomalies}`}
                            footerSubText="Real-time detection"
                        />
                    ) : (
                        <Card className="h-full flex flex-col items-center justify-center p-6 text-gray-400">
                            <CheckCircle className="h-12 w-12 mb-2" />
                            <p>No active anomalies</p>
                        </Card>
                    )}
                </div>

                {/* List Card */}
                <Card className="p-6 col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Detected Issues</h3>
                        <button
                            onClick={handleTrigger}
                            disabled={isTriggering}
                            className="flex items-center gap-2 px-3 py-1.5 bg-brand-light/20 text-brand-dark rounded-md hover:bg-brand-light/30 disabled:opacity-50 text-sm font-medium transition-colors"
                        >
                            <RefreshCw className={`h-4 w-4 ${isTriggering ? 'animate-spin' : ''}`} />
                            {isTriggering ? 'Scanning...' : 'Scan Now'}
                        </button>
                    </div>

                    <div className="overflow-auto max-h-[500px]">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Severity</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Detected At</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {anomalies && anomalies.length > 0 ? (
                                    anomalies.map((anomaly) => (
                                        <TableRow key={anomaly._id} className="group hover:bg-gray-50">
                                            <TableCell>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                            ${anomaly.severity === 'CRITICAL' ? 'bg-red-100 text-red-800 border-red-200' :
                                                        anomaly.severity === 'WARNING' ? 'bg-orange-100 text-orange-800 border-orange-200' :
                                                            'bg-brand-light/20 text-brand-dark border-brand-dark/10'}`}>
                                                    {anomaly.severity}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-gray-900">{anomaly.type.replace(/_/g, " ")}</span>
                                                    <span className="text-xs text-gray-500">{anomaly.description}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col text-sm text-gray-600">
                                                    <span>{format(new Date(anomaly.recordTimestamp), "MMM d, yyyy")}</span>
                                                    <span className="text-xs">{format(new Date(anomaly.recordTimestamp), "HH:mm")}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {anomaly.resolutionStatus === 'OPEN' ? (
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleStatusUpdate(anomaly._id, 'ACKNOWLEDGED')}
                                                            className="p-1.5 text-brand-dark hover:bg-brand-dark/5 rounded" title="Acknowledge">
                                                            <Info className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate(anomaly._id, 'RESOLVED')}
                                                            className="p-1.5 text-green-600 hover:bg-green-50 rounded" title="Resolve">
                                                            <CheckCircle className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <span className="text-xs text-gray-400 font-medium">
                                                        {anomaly.resolutionStatus}
                                                    </span>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                                            No anomalies found. System is healthy.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AnomalyList;
