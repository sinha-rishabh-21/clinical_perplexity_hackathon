import React from "react";

import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "./TrialDetailsShema";
import { marketOutlookFields, trialDetailsFields } from "./fields";

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
  isMarket: boolean;
}
const CenterDetailsComponent = ({ data, isMarket }: Props) => {
  const fields = isMarket
    ? marketOutlookFields(data as MarketDetailsInterface)
    : trialDetailsFields(data as TrialDetailsInterface);

  const title = isMarket ? "Market Outlook" : "Trial Details";
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm p-7 mx-20 pb-10">
        <div className="font-bold font-manrope text-center shadow-2xs mb-2 text-xl">
          {title}
        </div>
        <div className="flex flex-col gap-5 mt-6">
          {fields.map((row, i) => (
            <div key={i} className="flex gap-16 justify-around font-manrope">
              {row.map((field, j) => (
                <div
                  key={j}
                  className="flex gap-2 w-1/2 justify-between items-start"
                >
                  {/* <div className="mt-0.5">{field.icon}</div> */}
                  <div className="font-medium">{field.label}:</div>
                  <div>{String(field.value)}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterDetailsComponent;
