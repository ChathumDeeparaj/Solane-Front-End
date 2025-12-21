
import { useGetSolarStatsQuery } from "@/lib/redux/query";
import { Zap, TrendingUp, BarChart2, BatteryCharging } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export default function RealTimePowerCard({ solarUnitId }) {
  const { data: stats, isLoading } = useGetSolarStatsQuery(solarUnitId, {
    pollingInterval: 30000, // Poll every 30 seconds for specific real-time feel
  });

  if (isLoading || !stats) {
    return (
      <Card className="flex flex-col h-full items-center justify-center p-6 bg-blue-500 text-white border-none shadow-lg">
        <p className="animate-pulse">
          Loading Power Data...
        </p>
      </Card>
    );
  }

  // Calculate percentage of max capacity (assuming 400kWh max for scale visualization)
  const maxCapacity = 400; // Arbitrary visualization max
  const percentage = Math.min((stats.currentPower / maxCapacity) * 100, 100);

  const chartData = [
    { name: "power", value: stats.currentPower, fill: "var(--color-power)" },
  ];

  const chartConfig = {
    power: {
      label: "Power",
      color: "#ffffff", // White track for blue background
    },
  };

  return (
    <Card className="flex flex-col h-full bg-blue-500 text-white border-none shadow-lg">
      <CardHeader className="items-start pb-0">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
          <Zap className="h-6 w-6 fill-white text-white" /> Real-Time Power
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex flex-col items-center justify-center relative">
        <div className="relative z-10">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] w-full min-w-[200px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={450} // Full circle
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="value" background={{ fill: 'rgba(255,255,255,0.2)' }} cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-white text-4xl font-bold"
                          >
                            {stats.currentPower}kW
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-blue-100 text-sm font-medium"
                          >
                            {percentage.toFixed(1)}% Capacity
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4 text-sm pt-4 bg-blue-600/50 backdrop-blur-sm mt-auto rounded-b-xl">
        <div className="flex w-full items-center justify-between border-b border-blue-400/30 pb-2">
          <span className="text-blue-100 flex items-center gap-2">
            <BarChart2 className="h-4 w-4" /> Avg Power (All time)
          </span>
          <span className="font-bold text-lg">{stats.avgPower} kW</span>
        </div>
        <div className="flex w-full items-center justify-between border-b border-blue-400/30 pb-2">
          <span className="text-blue-100 flex items-center gap-2 text-wrap">
            <TrendingUp className="h-4 w-4" /> Peak Power
          </span>
          <span className="font-bold text-lg">{stats.peakPower} kW</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-blue-100 flex items-center gap-2">
            <BatteryCharging className="h-4 w-4" /> Total Energy
          </span>
          <span className="font-bold text-lg">{(stats.totalEnergy / 1000).toFixed(1)} MWh</span>
        </div>
      </CardFooter>
    </Card>
  );
}