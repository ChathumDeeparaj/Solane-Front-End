import { useGetInvoicesQuery } from "@/lib/redux/query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Link } from "react-router";
import { useState } from "react";

export default function InvoicesPage() {
    const { data: invoices, isLoading, error } = useGetInvoicesQuery();
    const [filter, setFilter] = useState("All");

    if (isLoading) return <div className="p-8">Loading invoices...</div>;
    if (error) return <div className="p-8 text-red-500">Error loading invoices</div>;

    const filteredInvoices = invoices?.filter((invoice) => {
        if (filter === "All") return true;
        return invoice.paymentStatus === filter.toUpperCase();
    });

    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Invoices</h1>
                <div className="space-x-2">
                    {["All", "Pending", "Paid"].map((status) => (
                        <Button
                            key={status}
                            variant={filter === status ? "default" : "outline"}
                            onClick={() => setFilter(status)}
                        >
                            {status}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid gap-4">
                {filteredInvoices?.length === 0 ? (
                    <p>No invoices found.</p>
                ) : (
                    filteredInvoices?.map((invoice) => (
                        <Card key={invoice._id}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {format(new Date(invoice.billingPeriodStart), "MMM d, yyyy")} -{" "}
                                    {format(new Date(invoice.billingPeriodEnd), "MMM d, yyyy")}
                                </CardTitle>
                                <Badge
                                    variant={
                                        invoice.paymentStatus === "PAID"
                                            ? "success" // Assuming success variant exists, otherwise default
                                            : invoice.paymentStatus === "PENDING"
                                                ? "warning"
                                                : "destructive"
                                    }
                                    className={
                                        invoice.paymentStatus === "PAID" ? "bg-green-500" :
                                            invoice.paymentStatus === "PENDING" ? "bg-yellow-500" : "bg-red-500"
                                    }
                                >
                                    {invoice.paymentStatus}
                                </Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <div className="text-2xl font-bold">
                                            {invoice.totalEnergyGenerated.toFixed(2)} kWh
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Unit: {invoice.solarUnitId?.serialNumber || "N/A"}
                                        </p>
                                    </div>
                                    {invoice.paymentStatus === "PENDING" && (
                                        <Button asChild>
                                            <Link to={`/dashboard/invoices/${invoice._id}/pay`}>
                                                Pay Now
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
