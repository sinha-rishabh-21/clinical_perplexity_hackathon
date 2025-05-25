"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
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

// Default color palette
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

export function BarChartComponent({
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
  const paddedData = [...data];
  const emptyItem: GenericData = { [xKey]: "—" };
  barKeys.forEach((key) => {
    emptyItem[key] = 0;
  });

  while (paddedData.length < 10) {
    paddedData.unshift({ ...emptyItem });
  }
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[280px] w-full">
        <ChartContainer config={config} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={paddedData} margin={{ top: 10 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={xKey as string}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  typeof value === "string" ? String(value) : value
                }
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {barKeys.length === 1 && useDistinctColors ? (
                <Bar
                  dataKey={barKeys[0] as string}
                  radius={8}
                  name={String(barKeys[0])}
                  fillOpacity={1}
                >
                  <LabelList
                    dataKey={barKeys[0] as string}
                    position="top"
                    fill="#000"
                  />
                  {paddedData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={distinctColors[index % distinctColors.length]}
                    />
                  ))}
                </Bar>
              ) : (
                barKeys.map((key, index) => {
                  const defaultColor =
                    distinctColors[index % distinctColors.length];
                  const fillColor = useDistinctColors
                    ? defaultColor
                    : `var(--color-${key as string})`;

                  return (
                    <Bar
                      key={key as string}
                      dataKey={key as string}
                      fill={fillColor}
                      radius={8}
                      name={String(key)}
                    />
                  );
                })
              )}
              {/* <Legend /> */}
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
