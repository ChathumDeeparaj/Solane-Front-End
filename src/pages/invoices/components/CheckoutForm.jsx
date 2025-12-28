import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useAuth } from "@clerk/clerk-react";

// Initialize Stripe ONCE, outside component
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutForm({ invoiceId }) {
    const { getToken } = useAuth();

    // Stripe calls this to get the client secret
    const fetchClientSecret = useCallback(async () => {
        const token = await getToken();

        // Note: We use the existing API base URL env var or fallback
        // The user's snippet used direct fetch. I will match that but ensure URL is correct.
        const baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : "http://localhost:8000";

        const response = await fetch(
            `${baseUrl}/api/payments/create-checkout-session`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ invoiceId }),
            }
        );

        const data = await response.json();
        return data.clientSecret;
    }, [invoiceId, getToken]);

    return (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    );
}
