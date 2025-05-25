// Time line chart
import React from "react";
import { ChartConfig } from "@/components/ui/chart";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { TimelineChartComponent } from "../../Charts/timelineChart";

const chartConfig = {
  itemList: {
    label: "Countries Starting Distribution",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const DistributionTimeline = ({ data }: Props) => {
  if (!data) return null;
  const parsedData = data as MarketDetailsInterface;
  const graphData = parsedData.graph_data;
  const distribution_timeline = graphData.distribution_timeline;

  const groupedByYear = distribution_timeline.reduce((acc, entry) => {
    const year = entry.distribution_start_year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(entry.country);
    return acc;
  }, {} as Record<number, string[]>);

  const transformedData = Object.entries(groupedByYear).map(
    ([year, countries]) => ({
      year: Number(year),
      itemCount: countries.length,
      itemList: countries.join(", "),
    })
  );

  return (
    <div>
      <TimelineChartComponent
        title="Distribution Timeline"
        description=""
        data={transformedData}
        xKey="year"
        barKeys={["itemCount", "itemList"]}
        config={chartConfig}
        trendNote="This chart shows the number of countries that started distribution or will start distribution (Projected)."
        footerNote="Data may contain inaccuracies. Double-check critical values."
        useDistinctColors={true}
      />
    </div>
  );
};

export default DistributionTimeline;
