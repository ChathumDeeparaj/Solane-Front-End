import { useGetAllInvoicesQuery } from "@/lib/redux/query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; // Assuming table component exists or I'll check shortly. If not, I'll use div grid.

// Checking components/ui existing structure from previous context:
// I saw badge, button, card. I did NOT see table in the list_dir output from Step 125, but "drawer", "input" etc were there. 
// "sidebar.jsx" etc.
// Let's stick to a Card/Grid layout or simple HTML table styled with Tailwind to avoid missing component errors if Table isn't standard shadcn installed yet.
// Actually, I'll check if Table exists first, but to be safe and fast I will use standard standard HTML/Tailwind table structure.

export default function AdminInvoicesPage() {
    const [filter, setFilter] = useState("All");
    const { data: invoices, isLoading, error } = useGetAllInvoicesQuery(
        filter === "All" ? undefined : filter
    );

    if (isLoading) return <div className="text-white p-8">Loading invoices...</div>;
    if (error) return <div className="p-8 text-white-500">Error loading invoices</div>;

    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold">All Invoices</h1>
                <div className="space-x-2">
                    {["All", "PENDING", "PAID", "FAILED"].map((status) => (
                        <Button
                            key={status}
                            variant={filter === status ? "default" : "outline"}
                            onClick={() => setFilter(status)}
                            size="sm"
                        >
                            {status}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="rounded-md border">
                <div className="w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">User</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Unit Serial</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Period</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Energy</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Date</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {invoices?.length === 0 ? (
                                <tr><td colSpan={6} className="p-4 text-center">No invoices found</td></tr>
                            ) : (
                                invoices?.map((invoice) => (
                                    <tr key={invoice._id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle">
                                            <div className="font-medium">{invoice.userId?.firstName} {invoice.userId?.lastName}</div>
                                            <div className="text-xs text-muted-foreground">{invoice.userId?.email}</div>
                                        </td>
                                        <td className="p-4 align-middle">{invoice.solarUnitId?.serialNumber}</td>
                                        <td className="p-4 align-middle">
                                            {format(new Date(invoice.billingPeriodStart), "MMM d")} - {format(new Date(invoice.billingPeriodEnd), "MMM d, yyyy")}
                                        </td>
                                        <td className="p-4 align-middle">{invoice.totalEnergyGenerated.toFixed(2)} kWh</td>
                                        <td className="p-4 align-middle">
                                            <Badge
                                                variant={
                                                    invoice.paymentStatus === "PAID"
                                                        ? "success"
                                                        : invoice.paymentStatus === "PENDING"
                                                            ? "warning"
                                                            : "destructive"
                                                }
                                                className={
                                                    invoice.paymentStatus === "PAID" ? "bg-green-500 hover:bg-green-600" :
                                                        invoice.paymentStatus === "PENDING" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-red-500"
                                                }
                                            >
                                                {invoice.paymentStatus}
                                            </Badge>
                                        </td>
                                        <td className="p-4 align-middle">{format(new Date(invoice.createdAt), "MMM d, yyyy")}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
