// Line Chart
import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { LineChartComponent } from "../../Charts/LineChart";
import { ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  projected_market_value_usd: {
    label: "Yearly Market Projection (USD)",
    color: "#003366",
  },
} as ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyMarketProjectionGraph = ({ data }: Props) => {
  const parsedData = data as MarketDetailsInterface;
  if (!parsedData) return null;

  const yearly_market_projection_usd =
    parsedData.graph_data.yearly_market_projection_usd;

  return (
    <div>
      <LineChartComponent
        title="Yearly Market Projection"
        description={`${yearly_market_projection_usd[0].year} - ${
          yearly_market_projection_usd[yearly_market_projection_usd.length - 1]
            .year
        }`}
        data={yearly_market_projection_usd}
        xKey="year"
        lineKeys={["projected_market_value_usd"]}
        config={chartConfig}
        trendNote="This graph shows the yearly market projection in USD."
        footerNote="Data may contain inaccuracies. Double-check critical values."
      />
    </div>
  );
};

export default YearlyMarketProjectionGraph;
