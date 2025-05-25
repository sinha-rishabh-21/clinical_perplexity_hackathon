import React from "react";
import { BarChartComponent } from "../../Charts/BarChart";
import { ChartConfig } from "@/components/ui/chart";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";

const chartConfig = {
  participants: {
    label: "Participants",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyTrialParticipantsGraph = ({ data }: Props) => {
  if (!data) return null;
  const parsedData = data as TrialDetailsInterface;
  const graphData = parsedData.graph_data;

  return (
    <div>
      <BarChartComponent
        title="Yearly Trial Participants"
        description="Clinical Trial Participation Over Time"
        data={graphData.yearly_trial_participants}
        xKey="year"
        barKeys={["participants"]}
        config={chartConfig}
        trendNote="This graph shows the number of participants in clinical trials each year."
        footerNote="Data may contain inaccuracies. Double-check critical values."
        useDistinctColors={true}
      />
    </div>
  );
};

export default YearlyTrialParticipantsGraph;
