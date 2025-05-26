import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "./TrialDetailsShema";
import { FileText } from "lucide-react";

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
  isMarket: boolean;
}

const SummaryArea = ({ data, isMarket }: Props) => {
  const summary = isMarket
    ? (data as MarketDetailsInterface).market_outlook.summary
    : (data as TrialDetailsInterface).trial_details.summary;
  return (
    <div className="relative p-7 outline-2 outline-gray-600 rounded-2xl h-[400px]">
      <div className="font-bold text-xl font-manrope mb-3">Summary</div>
      <p className="text-gray-700 font-inter">{summary}</p>
      <FileText size={40} opacity={0.6} className="absolute right-5 bottom-5" />
    </div>
  );
};

export default SummaryArea;
