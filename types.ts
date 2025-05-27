// messageTypes.ts
export interface Trial {
  name?: string;
  indication?: string;
  platform?: string;
  tags?: string[];
  trial?: TrialDetails;
  science_highlights?: ScienceHighlight[];
  investments?: InvestmentInfo;
  market_outlook?: MarketOutlook;
}

export interface TrialDetails {
  phase?: number;
  status?: string;
  identifier?: string;
  participants_enrolled?: number;
  latest_update?: string;
}

export interface ScienceHighlight {
  date?: string;
  summary?: string;
}

export interface InvestmentInfo {
  lead_sponsor?: string;
  total_money_over_last_10_years_usd?: number[];
}

export interface MarketOutlook {
  estimated_peak_sales_usd?: number;
  expected_launch_year?: number;
}

export type Message =
  | { type: "user"; text: string }
  | { type: "response"; data: Trial[] };
