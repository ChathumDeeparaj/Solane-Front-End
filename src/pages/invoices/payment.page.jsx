import { useParams } from "react-router";
import { useGetInvoiceByIdQuery } from "@/lib/redux/query";
import CheckoutForm from "./components/CheckoutForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentPage() {
    const { id } = useParams();
    const { data: invoice, isLoading, error } = useGetInvoiceByIdQuery(id);

    if (isLoading) return <div className="p-8">Loading invoice details...</div>;
    if (error || !invoice) return <div className="p-8 text-red-500">Invoice not found</div>;

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold">Pay Invoice</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Invoice Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p><strong>Amount Due:</strong> {invoice.totalEnergyGenerated.toFixed(2)} kWh * Rate</p>
                    <p><strong>Billing Period:</strong> {new Date(invoice.billingPeriodStart).toLocaleDateString()} - {new Date(invoice.billingPeriodEnd).toLocaleDateString()}</p>
                </CardContent>
            </Card>

            <div className="border rounded-lg p-4 bg-background">
                <CheckoutForm invoiceId={id} />
            </div>
        </div>
    );
}
