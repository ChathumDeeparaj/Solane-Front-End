import { useSearchParams, Link } from "react-router";
import { useGetSessionStatusQuery } from "../../lib/redux/query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

export default function PaymentCompletePage() {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    const { data, isLoading } = useGetSessionStatusQuery(sessionId, {
        skip: !sessionId,
    });

    if (isLoading) return <div className="p-8">Verifying payment...</div>;

    const isSuccess = data?.paymentStatus === "paid";

    return (
        <div className="flex h-[80vh] items-center justify-center p-8">
            <Card className="w-full max-w-md text-center">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        {isSuccess ? (
                            <CheckCircle className="h-16 w-16 text-green-500" />
                        ) : (
                            <XCircle className="h-16 w-16 text-red-500" />
                        )}
                    </div>
                    <CardTitle className="text-2xl">
                        {isSuccess ? "Payment Successful!" : "Payment Failed"}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isSuccess && (
                        <p className="text-muted-foreground">
                            Thank you for your payment. Your invoice has been marked as paid.
                            <br />
                            Amount Paid: ${(data.amountTotal / 100).toFixed(2)}
                        </p>
                    )}
                    <Button asChild className="w-full">
                        <Link to="/dashboard/invoices">Back to Invoices</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
