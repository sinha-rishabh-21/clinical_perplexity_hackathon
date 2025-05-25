// bar chart
import React from "react";
import { BarChartComponent } from "../../Charts/BarChart";
import { ChartConfig } from "@/components/ui/chart";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";

const chartConfig = {
  locations: {
    label: "Locations Count: ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyTrialLocationCount = ({ data }: Props) => {
  if (!data) return null;
  const parsedData = data as TrialDetailsInterface;
  const graphData = parsedData.graph_data;
  const yearly_trial_locations_count = graphData.yearly_trial_locations_count;

  return (
    <div>
      <BarChartComponent
        title="Yearly Trial Locations Count"
        description={`From ${yearly_trial_locations_count[0].year} to ${
          yearly_trial_locations_count[yearly_trial_locations_count.length - 1]
            .year
        }`}
        data={yearly_trial_locations_count}
        xKey="year"
        barKeys={["locations"]}
        config={chartConfig}
        trendNote="This graph shows the yearly count of trial locations."
        footerNote="Data may contain inaccuracies. Double-check critical values."
        useDistinctColors={true}
      />
    </div>
  );
};

export default YearlyTrialLocationCount;
