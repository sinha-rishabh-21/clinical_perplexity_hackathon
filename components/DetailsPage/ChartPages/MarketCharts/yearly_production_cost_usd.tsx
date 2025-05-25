// Line chart
import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { LineChartComponent } from "../../Charts/LineChart";
import { ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  cost_usd: {
    label: "Yearly Production Cost (USD)",
    color: "#003366",
  },
} as ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyProductionCostGraph = ({ data }: Props) => {
  const parsedData = data as MarketDetailsInterface;
  if (!parsedData) return null;

  const yearly_production_cost_usd =
    parsedData.graph_data.yearly_production_cost_usd;

  return (
    <div>
      <LineChartComponent
        title="Yearly Production Cost"
        description={`${yearly_production_cost_usd[0].year} - ${
          yearly_production_cost_usd[yearly_production_cost_usd.length - 1].year
        }`}
        data={yearly_production_cost_usd}
        xKey="year"
        lineKeys={["cost_usd"]}
        config={chartConfig}
        trendNote="The trend shows a steady increase in production costs"
        footerNote="Data may contain inaccuracies. Double-check critical values."
      />
    </div>
  );
};

export default YearlyProductionCostGraph;
