import React, { useState } from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "./TrialDetailsShema";
import YearlyTrialParticipantsGraph from "./ChartPages/TrialCharts/yearly_trial_participants";
import YearlyProductionCostGraph from "./ChartPages/MarketCharts/yearly_production_cost_usd";
import YearlyFundingGraph from "./ChartPages/MarketCharts/yearly_funding_usd";
import YearlyMarketProjectionGraph from "./ChartPages/MarketCharts/yearly_market_projection_usd";
import YearlyPricePerDose from "./ChartPages/MarketCharts/yearly_price_per_dose_usd";
import ClinicalPhaseTimeline from "./ChartPages/TrialCharts/clinical_phase_timeline";
import YearlyEfficacyTimeline from "./ChartPages/TrialCharts/efficacy_timeline";
import YearlyRDSpending from "./ChartPages/TrialCharts/yearly_rd_spending_usd";
import SideEffectFrequencyGraph from "./ChartPages/TrialCharts/side_effects_frequency";
import YearlyTrialLocationCount from "./ChartPages/TrialCharts/yearly_trial_locations_count";
import TrialExpansionTimeline from "./ChartPages/TrialCharts/trial_expansion_timeline";
import DistributionTimeline from "./ChartPages/MarketCharts/distribution_timeline";
import RegulatoryApprovalsTimeline from "./ChartPages/MarketCharts/regulatory_approvals";
import GraphChangeButton from "./graphChangeButton";

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
  isMarket: boolean;
}

const marketGraphs = [
  { index: 0, value: "Yearly Production Cost" },
  { index: 1, value: "Yearly Funding Graph" },
  { index: 2, value: "Yearly Market Projection" },
  { index: 3, value: "Yearly Price Per Dose" },
  { index: 4, value: "Distribution Timeline" },
  { index: 5, value: "Regulatory Approvals Timeline" },
];

const trialGraphs = [
  { index: 0, value: "Yearly Efficacy Timeline" },
  { index: 1, value: "Clinical Phase Timeline" },
  { index: 2, value: "Yearly Trial Participants" },
  { index: 3, value: "Yearly R&D Spending" },
  { index: 4, value: "Side Effect Frequency" },
  { index: 5, value: "Yearly Trial Location Count" },
  { index: 6, value: "Trial Expansion Timeline" },
];

const GraphArea = ({ data, isMarket }: Props) => {
  const [stateKey, setStateKey] = useState<number>(0);
  if (!data) return null;
  const parsedData = isMarket
    ? (data as MarketDetailsInterface)
    : (data as TrialDetailsInterface);

  return (
    <div className="w-1/2 bg-white rounded-2xl shadow-sm p-7 font-semibold text-xl">
      {isMarket
        ? (() => {
            switch (stateKey) {
              case 0:
                return <YearlyProductionCostGraph data={parsedData} />;
              case 1:
                return <YearlyFundingGraph data={parsedData} />;
              case 2:
                return <YearlyMarketProjectionGraph data={parsedData} />;
              case 3:
                return <YearlyPricePerDose data={parsedData} />;
              case 4:
                return <DistributionTimeline data={parsedData} />;
              case 5:
                return <RegulatoryApprovalsTimeline data={parsedData} />;
              default:
                return null;
            }
          })()
        : (() => {
            switch (stateKey) {
              case 0:
                return <YearlyEfficacyTimeline data={parsedData} />;
              case 1:
                return <ClinicalPhaseTimeline data={parsedData} />;
              case 2:
                return <YearlyTrialParticipantsGraph data={parsedData} />;
              case 3:
                return <YearlyRDSpending data={parsedData} />;
              case 4:
                return <SideEffectFrequencyGraph data={parsedData} />;
              case 5:
                return <YearlyTrialLocationCount data={parsedData} />;
              case 6:
                return <TrialExpansionTimeline data={parsedData} />;
              default:
                return null;
            }
          })()}
      <div className="flex justify-end items-center mt-5 gap-2">
        <span className="text-sm">
          {isMarket ? "Market Graphs:  " : "Trial Graphs:  "}{" "}
        </span>
        <GraphChangeButton
          data={isMarket ? marketGraphs : trialGraphs}
          setValue={setStateKey}
          isMarket={isMarket}
        />
      </div>
    </div>
  );
};

export default GraphArea;
