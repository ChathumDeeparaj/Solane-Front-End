"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, RadialBar, RadialBarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with a label"

export function ChartRadialLabel({
    data,
    config,
    title = "Anomaly Severity",
    description = "Current System Status",
    footerText,
    footerSubText
}) {
    // Calculate total from data
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <Card className="flex flex-col h-full bg-slate-800/60 backdrop-blur-sm border-slate-700">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-white">{title}</CardTitle>
                <CardDescription className="text-gray-400">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <div className="relative mx-auto aspect-square max-h-[250px]">
                    <ChartContainer
                        config={config}
                        className="w-full h-full"
                    >
                        <RadialBarChart
                            data={data}
                            startAngle={-90}
                            endAngle={380}
                            innerRadius={60}
                            outerRadius={110}
                        >
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel nameKey="label" />}
                            />
                            <RadialBar dataKey="value" background>
                                <LabelList
                                    position="insideStart"
                                    dataKey="label"
                                    className="fill-white capitalize"
                                    fontSize={11}
                                />
                            </RadialBar>
                        </RadialBarChart>
                    </ChartContainer>
                    {/* Center Total Label - positioned in middle of chart */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="text-center bg-slate-900/90 rounded-full w-28 h-28 flex flex-col items-center justify-center border border-slate-700">
                            <span className="text-3xl font-bold text-white">{total}</span>
                            <span className="text-xs text-gray-400">Anomalies</span>
                            <div className="flex flex-col text-[10px] leading-tight mt-1">
                                {data.map((item, index) => (
                                    <span key={index} style={{ color: item.fill }}>
                                        {item.label}: {item.value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            {(footerText || footerSubText) && (
                <CardFooter className="flex-col gap-2 text-sm">
                    {footerText && (
                        <div className="flex items-center gap-2 leading-none font-medium text-white">
                            {footerText} <TrendingUp className="h-4 w-4 text-cyan-400" />
                        </div>
                    )}
                    {footerSubText && (
                        <div className="text-gray-400 leading-none">
                            {footerSubText}
                        </div>
                    )}
                </CardFooter>
            )}
        </Card>
    )
}
