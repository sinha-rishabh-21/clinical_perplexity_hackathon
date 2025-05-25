import React from "react";
import { BarChartComponent } from "../../Charts/BarChart";
import { ChartConfig } from "@/components/ui/chart";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";

const chartConfig = {
  efficacy_percentage: {
    label: "Efficacy Percentage: ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyEfficacyTimeline = ({ data }: Props) => {
  if (!data) return null;
  const parsedData = data as TrialDetailsInterface;
  const graphData = parsedData.graph_data;
  const efficacyTimeline = graphData.efficacy_timeline;

  return (
    <div>
      <BarChartComponent
        title="Yearly Efficacy Timeline"
        description={`From ${efficacyTimeline[0].year} to ${
          efficacyTimeline[efficacyTimeline.length - 1].year
        }`}
        data={efficacyTimeline}
        xKey="year"
        barKeys={["efficacy_percentage"]}
        config={chartConfig}
        trendNote="Clinical Trial Efficacy Over Time"
        footerNote="Data may contain inaccuracies. Double-check critical values."
        useDistinctColors={true}
      />
    </div>
  );
};

export default YearlyEfficacyTimeline;
