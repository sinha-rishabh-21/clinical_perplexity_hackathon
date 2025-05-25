import React from "react";
import { ChartConfig } from "@/components/ui/chart";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { TimelineChartComponent } from "../../Charts/timelineChart";

const chartConfig = {
  itemList: {
    label: "Countries Joined",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const TrialExpansionTimeline = ({ data }: Props) => {
  if (!data) return null;
  const parsedData = data as TrialDetailsInterface;
  const graphData = parsedData.graph_data;
  const side_effects_frequency = graphData.trial_expansion_timeline;

  const transformedData = side_effects_frequency.map((entry) => ({
    year: entry.year,
    itemCount: entry.countries.length,
    itemList: entry.countries.join(", "),
  }));

  return (
    <div>
      <TimelineChartComponent
        title="Trial Expansion Timeline"
        description=""
        data={transformedData}
        xKey="year"
        barKeys={["itemCount", "itemList"]}
        config={chartConfig}
        trendNote="This chart shows the number of countries that joined the trial each year."
        footerNote="Data may contain inaccuracies. Double-check critical values."
        useDistinctColors={true}
      />
    </div>
  );
};

export default TrialExpansionTimeline;
