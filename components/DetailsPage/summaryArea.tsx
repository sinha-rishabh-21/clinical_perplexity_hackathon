import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "./TrialDetailsShema";

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
  isMarket: boolean;
}

const SummaryArea = ({ data, isMarket }: Props) => {
  const summary = isMarket
    ? (data as MarketDetailsInterface).market_outlook.summary
    : (data as TrialDetailsInterface).trial_details.summary;
  return (
    <div className="p-7 outline-2 rounded-2xl h-[450px]">
      <div className="font-bold text-xl font-manrope mb-3">Summary</div>
      <p className="text-gray-700 font-inter">{summary}</p>
    </div>
  );
};

export default SummaryArea;
