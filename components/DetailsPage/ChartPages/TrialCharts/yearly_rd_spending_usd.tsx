// Line chart
// Line chart
import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { LineChartComponent } from "../../Charts/LineChart";
import { ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  amount_usd: {
    label: "Yearly R&D Spending (USD): ",
    color: "#003366",
  },
} as ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyRDSpending = ({ data }: Props) => {
  const parsedData = data as TrialDetailsInterface;
  if (!parsedData) return null;

  const yearly_rd_spending_usd = parsedData.graph_data.yearly_rd_spending_usd;

  return (
    <div>
      <LineChartComponent
        title="Yearly R&D Spending"
        description={`${yearly_rd_spending_usd[0].year} - ${
          yearly_rd_spending_usd[yearly_rd_spending_usd.length - 1].year
        }`}
        data={yearly_rd_spending_usd}
        xKey="year"
        lineKeys={["amount_usd"]}
        config={chartConfig}
        trendNote="The Graph shows the yearly R&D spending in USD for the trial."
        footerNote="Data may contain inaccuracies. Double-check critical values."
      />
    </div>
  );
};

export default YearlyRDSpending;
