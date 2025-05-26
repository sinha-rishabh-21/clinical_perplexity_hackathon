"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
  LabelProps,
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
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type GenericData = Record<string, string | number>;

type BarChartProps = {
  title: string;
  description?: string;
  data: GenericData[];
  xKey: keyof GenericData;
  barKeys: (keyof GenericData)[];
  config: ChartConfig;
  footerNote?: string;
  trendNote?: string;
  useDistinctColors?: boolean;
};

const distinctColors = [
  "#3498db", // blue
  "#e74c3c", // red
  "#f1c40f", // yellow
  "#2ecc71", // green
  "#9b59b6", // purple
  "#e67e22", // orange
  "#00b894", // teal
  "#fd79a8", // pink
  "#e17055", // coral
  "#0984e3", // light blue
];

const CustomLabel = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  value,
}: LabelProps) => {
  const numericX = Number(x);
  const numericY = Number(y);
  const numericWidth = Number(width);
  const numericHeight = Number(height);

  const lineHeight = 14;
  const text = String(value);
  const words = text.length > 15 ? text.match(/.{1,15}/g) || [] : [text];
  const totalHeight = words.length * lineHeight;

  return (
    <text
      x={numericX + numericWidth + 5}
      y={numericY + numericHeight / 2 - totalHeight / 2 + lineHeight / 2}
      fill="#000"
      textAnchor="start"
      dominantBaseline="middle"
    >
      {words.map((line, i) => (
        <tspan
          x={numericX + numericWidth + 5}
          dy={i === 0 ? 0 : lineHeight}
          key={i}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
};

export function TimelineChartComponent({
  title,
  description,
  data,
  xKey,
  barKeys,
  config,
  footerNote,
  trendNote,
  useDistinctColors = false,
}: BarChartProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[250px] w-full">
        <ChartContainer config={config} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 0, right: 200, bottom: 0, left: 0 }}
            >
              <CartesianGrid horizontal={false} />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tickMargin={0}
              />
              <YAxis
                type="category"
                dataKey={xKey as string}
                tickLine={false}
                axisLine={false}
                tickMargin={0}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {barKeys.length === 2 && useDistinctColors && (
                <Bar
                  dataKey={barKeys[0] as string}
                  radius={[0, 8, 8, 0]}
                  name={String(barKeys[0])}
                  fillOpacity={1}
                >
                  <LabelList
                    dataKey={barKeys[1] as string}
                    content={<CustomLabel />}
                  />
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={distinctColors[index % distinctColors.length]}
                    />
                  ))}
                </Bar>
              )}
            </BarChart>
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
