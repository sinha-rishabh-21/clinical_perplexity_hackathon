// Line chart
import { ChartConfig } from "@/components/ui/chart";
import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { LineChartComponent } from "../../Charts/LineChart";

const chartConfig = {
  price_usd: {
    label: "Yearly Price per Dose (USD)",
    color: "#003366",
  },
} as ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const YearlyPricePerDose = ({ data }: Props) => {
  const parsedData = data as MarketDetailsInterface;
  if (!parsedData) return null;
  const yearly_price_per_dose_usd =
    parsedData.graph_data.yearly_price_per_dose_usd;
  return (
    <div>
      <div>
        <LineChartComponent
          title="Yearly Price per Dose"
          description={`${yearly_price_per_dose_usd[0].year} - ${
            yearly_price_per_dose_usd[yearly_price_per_dose_usd.length - 1].year
          }`}
          data={yearly_price_per_dose_usd}
          xKey="year"
          lineKeys={["price_usd"]}
          config={chartConfig}
          trendNote="This graph shows the yearly price per dose in USD."
          footerNote="Data may contain inaccuracies. Double-check critical values."
        />
      </div>
    </div>
  );
};

export default YearlyPricePerDose;
