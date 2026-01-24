import { Card } from "@/components/ui/card";
import { ChartLine, Clock } from "lucide-react";

const AnalyticsPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-6">Analytics</h1>

            <Card className="rounded-md p-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-brand-light/20 flex items-center justify-center mb-6">
                    <ChartLine className="w-10 h-10 text-brand-dark" />
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Coming Soon
                </h2>

                <p className="text-gray-500 max-w-md mb-6">
                    We're working on advanced analytics features to give you deeper insights
                    into your solar energy production patterns, efficiency metrics, and more.
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Expected in next update</span>
                </div>
            </Card>
        </div>
    );
};

export default AnalyticsPage;
