export interface TrialDetails {
  name: string;
  indication: string;
  platform: string;

  trial: {
    phase: 1 | 2 | 3 | 4;
    identifier: string;
    status: "Recruiting" | "Active" | "Completed" | "Terminated" | string;
    start_date: string; // ISO 8601 date (YYYY‑MM‑DD)
    primary_completion_date: string; // ISO 8601 date
    locations: string[]; // e.g. country / region codes
    participants_enrolled: number;
    key_endpoints: string[];
    latest_update: string; // ISO 8601 timestamp
  };

  science_highlights: {
    date: string; // ISO 8601 date
    summary: string;
  }[];

  investments: {
    lead_sponsor: string;
    invested_companies: {
      name: string;
      money_invested_usd: number; // raw USD amount
      years_active: number[];
    }[];
    total_money_over_last_10_years_usd: number[]; // index 0 → 2015, etc.
  };

  market_outlook: {
    estimated_peak_sales_usd: number;
    expected_launch_year: number;
    competitive_landscape: string[];
  };

  tags: string[];
  last_synced: string; // ISO 8601 timestamp
}
