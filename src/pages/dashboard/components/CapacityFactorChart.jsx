import { Card } from "@/components/ui/card";
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

  if (isLoading) return null;

  if (!data || isError || !Array.isArray(data)) {
    return null;
  }

  const chartData = data.map((item) => ({
    date: format(toDate(item.date), "MMM d"),
    capacityFactor: parseFloat(item.capacityFactor),
  }));

  const chartConfig = {
    capacityFactor: {
      label: "Capacity Factor (%)",
      color: "var(--chart-1)",
    },
  };

  const title = "Daily Capacity Factor";

  return (
    <Card className="rounded-md p-4 flex flex-col h-full">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xl font-medium text-foreground">{title}</h2>
        <div>
          <Select value={selectedRange} onValueChange={handleRangeChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                className="text-foreground"
                placeholder="Select Range"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 Days</SelectItem>
              <SelectItem value="30">30 Days</SelectItem>
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
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickCount={10}
              label={{ value: "%", angle: -90, position: "insideLeft" }}
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
