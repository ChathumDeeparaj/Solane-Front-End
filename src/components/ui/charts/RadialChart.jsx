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
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={config}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart
                        data={data}
                        startAngle={-90}
                        endAngle={380}
                        innerRadius={30}
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
                                className="fill-black capitalize mix-blend-luminosity"
                                fontSize={11}
                            />
                        </RadialBar>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            {(footerText || footerSubText) && (
                <CardFooter className="flex-col gap-2 text-sm">
                    {footerText && (
                        <div className="flex items-center gap-2 leading-none font-medium">
                            {footerText} <TrendingUp className="h-4 w-4" />
                        </div>
                    )}
                    {footerSubText && (
                        <div className="text-muted-foreground leading-none">
                            {footerSubText}
                        </div>
                    )}
                </CardFooter>
            )}
        </Card>
    )
}
