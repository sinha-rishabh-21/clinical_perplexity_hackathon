"use client";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

type GenericData = Record<string, string | number>;

type LineChartProps = {
  title: string;
  description?: string;
  data: GenericData[];
  xKey: keyof GenericData;
  lineKeys: (keyof GenericData)[];
  config: ChartConfig;
  footerNote?: string;
  trendNote?: string;
};

export function LineChartComponent({
  title,
  description,
  data,
  xKey,
  lineKeys,
  config,
  footerNote,
  trendNote,
}: LineChartProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[250px] w-full">
        <ChartContainer config={config} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 50, left: 50, right: 50 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={xKey as string}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  typeof value === "string" ? String(value) : value
                }
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              {lineKeys.map((key) => (
                <Line
                  key={key as string}
                  dataKey={key as string}
                  type="natural"
                  stroke={`var(--color-${key as string})`}
                  strokeWidth={2}
                  dot={{ fill: `var(--color-${key as string})` }}
                  activeDot={{ r: 6 }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
              ))}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      {(footerNote || trendNote) && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {trendNote && (
            <div className="flex gap-2 font-medium leading-none">
              {trendNote}
            </div>
          )}
          {footerNote && (
            <div className="leading-none text-muted-foreground">
              {footerNote}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
