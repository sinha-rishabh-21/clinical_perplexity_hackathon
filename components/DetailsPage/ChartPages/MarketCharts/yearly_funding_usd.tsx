import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { LineChartComponent } from "../../Charts/LineChart";
import { ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  amount_usd: {
    label: "Yearly Funding (USD)",
    color: "#003366",
  },
} as ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyFundingGraph = ({ data }: Props) => {
  const parsedData = data as MarketDetailsInterface;
  if (!parsedData) return null;

  const yearly_production_cost_usd = parsedData.graph_data.yearly_funding_usd;

  return (
    <div>
      <LineChartComponent
        title="Yearly Funding"
        description={`${yearly_production_cost_usd[0].year} - ${
          yearly_production_cost_usd[yearly_production_cost_usd.length - 1].year
        }`}
        data={yearly_production_cost_usd}
        xKey="year"
        lineKeys={["amount_usd"]}
        config={chartConfig}
        trendNote="This graph shows the yearly funding in USD for the market outlook."
        footerNote="Data may contain inaccuracies. Double-check critical values."
      />
    </div>
  );
};

export default YearlyFundingGraph;
