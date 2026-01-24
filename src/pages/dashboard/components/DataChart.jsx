import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { format, toDate } from "date-fns";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";

const DataChart = ({ solarUnitId }) => {
  const [selectedRange, setSelectedRange] = useState("7");

  const { data, isLoading, isError, error } =
    useGetEnergyGenerationRecordsBySolarUnitQuery({
      id: solarUnitId,
      groupBy: "date",
      limit: parseInt(selectedRange),
    });

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  if (isLoading) {
    return (
      <Card className="rounded-xl p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/20">
        <div className="flex justify-between items-center gap-2 mb-4">
          <Skeleton className="h-6 w-48 bg-slate-700" />
          <Skeleton className="h-9 w-[180px] bg-slate-700" />
        </div>
        <Skeleton className="h-[300px] w-full bg-slate-700" />
      </Card>
    );
  }

  if (!data || isError) {
    return (
      <Card className="rounded-xl p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/20">
        <div className="text-center text-gray-400 py-8">
          Unable to load chart data
        </div>
      </Card>
    );
  }

  const lastSelectedRangeDaysEnergyProduction = data
    .slice(0, parseInt(selectedRange))
    .map((el) => {
      return {
        date: format(toDate(el._id.date), "MMM d"),
        energy: el.totalEnergy / 500,
      };
    });

  const chartConfig = {
    energy: {
      label: "Energy (kWh)",
      color: "oklch(0.75 0.15 200)",
    },
  };

  const title = "Energy Production Chart";

  return (
    <Card className="rounded-xl p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/20">
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
      <div>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={lastSelectedRangeDaysEnergyProduction}
            margin={{
              left: 40,
              right: 20,
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} stroke="rgba(148, 163, 184, 0.1)" />
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tick={{ fill: '#94a3b8' }}
              label={{ value: "Date", position: "insideBottom", offset: -5, fill: '#94a3b8' }}
            />
            <YAxis
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickCount={5}
              tick={{ fill: '#94a3b8' }}
              label={{ value: "kWh", angle: -90, position: "insideLeft", fill: '#94a3b8' }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="energy"
              type="natural"
              fill="var(--color-energy)"
              fillOpacity={0.4}
              stroke="var(--color-energy)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default DataChart;