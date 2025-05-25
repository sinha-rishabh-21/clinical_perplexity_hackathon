import React from "react";
import { ChartConfig } from "@/components/ui/chart";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { HorizontalBarChartComponent } from "../../Charts/horizontalBarChart";

const chartConfig = {
  frequency_percentage: {
    label: "Frequency Percentage: ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const SideEffectFrequencyGraph = ({ data }: Props) => {
  if (!data) return null;
  const parsedData = data as TrialDetailsInterface;
  const graphData = parsedData.graph_data;
  const side_effects_frequency = graphData.side_effects_frequency;

  return (
    <div>
      <HorizontalBarChartComponent
        title="Side Effects Frequency"
        description=""
        data={side_effects_frequency}
        xKey="side_effect"
        barKeys={["frequency_percentage"]}
        config={chartConfig}
        trendNote="Considering major side effects and their frequency"
        footerNote="Data may contain inaccuracies. Double-check critical values."
        useDistinctColors={true}
      />
    </div>
  );
};

export default SideEffectFrequencyGraph;
