
import { useState } from "react";
import { useGetAnomaliesQuery, useUpdateAnomalyStatusMutation, useTriggerAnomalyDetectionMutation } from "@/lib/redux/query";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { ChartRadialLabel } from "@/components/ui/charts/RadialChart";
import { Loader2, AlertTriangle, CheckCircle, Info, RefreshCw, Eye, X } from "lucide-react";

const COLORS = {
    CRITICAL: "#ef4444", // red-500
    WARNING: "#f97316", // orange-500
    INFO: "#38bdf8",    // sky-400
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

    if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin h-8 w-8 text-purple-400" /></div>;

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
                        <Card className="h-full flex flex-col items-center justify-center p-6 text-gray-400 bg-slate-800/60 backdrop-blur-sm border-slate-700">
                            <CheckCircle className="h-12 w-12 mb-2 text-green-400" />
                            <p className="text-gray-300">No active anomalies</p>
                        </Card>
                    )}
                </div>

                {/* List Card */}
                <Card className="p-6 col-span-2 bg-slate-800/40 backdrop-blur-md border-slate-600">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-white">Detected Issues</h3>
                        <button
                            onClick={handleTrigger}
                            disabled={isTriggering}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-600 hover:to-teal-600 disabled:opacity-50 text-sm font-medium transition-all shadow-lg shadow-cyan-500/20"
                        >
                            <RefreshCw className={`h-4 w-4 ${isTriggering ? 'animate-spin' : ''}`} />
                            {isTriggering ? 'Scanning...' : 'Scan Now'}
                        </button>
                    </div>

                    <div className="overflow-auto max-h-[500px]">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-slate-600 hover:bg-transparent">
                                    <TableHead className="text-gray-300">Severity</TableHead>
                                    <TableHead className="text-gray-300">Anomaly Type</TableHead>
                                    <TableHead className="text-gray-300">Description</TableHead>
                                    <TableHead className="text-gray-300">Timestamp</TableHead>
                                    <TableHead className="text-gray-300">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {anomalies && anomalies.length > 0 ? (
                                    anomalies.map((anomaly) => (
                                        <TableRow key={anomaly._id} className="border-slate-700 hover:bg-slate-700/30">
                                            <TableCell>
                                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-bold
                                                    ${anomaly.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                                        anomaly.severity === 'WARNING' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                                                            'bg-sky-500/20 text-sky-400 border border-sky-500/30'}`}>
                                                    <AlertTriangle className="h-3 w-3" />
                                                    {anomaly.severity}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="font-medium text-white">{anomaly.type.replace(/_/g, " ")}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-gray-400 text-sm">{anomaly.description}</span>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col text-sm text-gray-300">
                                                    <span>{format(new Date(anomaly.recordTimestamp), "MMM d, yyyy")}</span>
                                                    <span className="text-xs text-gray-500">{format(new Date(anomaly.recordTimestamp), "HH:mm")}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {anomaly.resolutionStatus === 'OPEN' ? (
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleStatusUpdate(anomaly._id, 'ACKNOWLEDGED')}
                                                            className="p-2 bg-slate-700 text-cyan-400 hover:bg-slate-600 rounded-full transition-colors" title="View">
                                                            <Eye className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate(anomaly._id, 'RESOLVED')}
                                                            className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-full transition-colors" title="Dismiss">
                                                            <X className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <span className="text-xs text-gray-500 font-medium px-2 py-1 bg-slate-700 rounded">
                                                        {anomaly.resolutionStatus}
                                                    </span>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center py-8 text-gray-400">
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
