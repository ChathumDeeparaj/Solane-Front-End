import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList } from "recharts";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCapacityFactorQuery } from "@/lib/redux/query";
import { format, toDate } from "date-fns";

const CapacityFactorChart = ({ solarUnitId }) => {
  const [selectedRange, setSelectedRange] = useState("7");

  const { data, isLoading, isError, error } = useGetCapacityFactorQuery({
    id: solarUnitId,
    days: parseInt(selectedRange),
  });

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  if (isLoading) {
    return (
      <Card className="rounded-xl p-4 flex flex-col h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/20">
        <div className="flex justify-between items-center gap-2 mb-4">
          <Skeleton className="h-6 w-48 bg-slate-700" />
          <Skeleton className="h-9 w-[180px] bg-slate-700" />
        </div>
        <Skeleton className="h-[250px] w-full bg-slate-700" />
      </Card>
    );
  }

  if (!data || isError || !Array.isArray(data)) {
    return (
      <Card className="rounded-xl p-4 flex flex-col h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/20">
        <div className="text-center text-gray-400 py-8">
          Unable to load capacity factor data
        </div>
      </Card>
    );
  }

  const chartData = data.map((item) => ({
    date: format(toDate(item.date), "MMM d"),
    capacityFactor: parseFloat(item.capacityFactor),
  }));

  const chartConfig = {
    capacityFactor: {
      label: "Capacity Factor (%)",
      color: "oklch(0.75 0.15 200)",
    },
  };

  const title = "Daily Capacity Factor";

  return (
    <Card className="rounded-xl p-4 flex flex-col h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/20">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xl font-medium text-white">{title}</h2>
        <div>
          <Select value={selectedRange} onValueChange={handleRangeChange}>
            <SelectTrigger className="w-[180px] bg-slate-700/50 border-slate-600 text-white">
              <SelectValue
                className="text-white"
                placeholder="Select Range"
              />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600">
              <SelectItem value="7" className="text-white focus:bg-slate-700 focus:text-white">7 Days</SelectItem>
              <SelectItem value="30" className="text-white focus:bg-slate-700 focus:text-white">30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="w-full h-[250px]"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="rgba(148, 163, 184, 0.1)" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: '#94a3b8' }}
            />
            <YAxis
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickCount={10}
              tick={{ fill: '#94a3b8' }}
              label={{ value: "%", angle: -90, position: "insideLeft", fill: '#94a3b8' }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="capacityFactor"
              type="natural"
              stroke="var(--color-capacityFactor)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default CapacityFactorChart;
