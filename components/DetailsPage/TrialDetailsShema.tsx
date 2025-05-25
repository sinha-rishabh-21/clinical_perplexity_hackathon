export interface MarketDetailsInterface {
  market_outlook: {
    name: string; // Name of the vaccine (e.g., "mRNA-4157", "BNT162b2")
    summary: string; // Brief summary of the vaccine's market outlook
    developer_organization: string; // e.g., "Moderna"
    primary_country: string; // e.g., "USA"

    // Investment and cost data
    total_estimated_budget_usd: number; // e.g., 850000000
    cumulative_rnd_cost_usd: number; // R&D cost portion
    cumulative_trial_cost_usd: number; // Clinical trials cost
    cumulative_manufacturing_cost_usd: number; // Facility setup, manufacturing
    total_spent_by_year: number[]; // e.g., [5000000, 15000000, ..., 90000000] — 10 years

    // Investors and partners
    lead_investor: string; // e.g., "Flagship Pioneering"
    co_investors: string[]; // e.g., ["Bill & Melinda Gates Foundation", "NIH"]
    government_supporting: string[]; // Governments funding the project
    private_sector_partners: string[]; // e.g., ["Pfizer", "BioNTech"]

    // Funding breakdown
    percent_funded_by_government: number; // e.g., 35
    percent_funded_by_private: number; // e.g., 65
    percent_allocated_to_rnd: number; // e.g., 40
    percent_allocated_to_trials: number; // e.g., 30
    percent_allocated_to_manufacturing: number; // e.g., 20
    percent_allocated_to_marketing: number; // e.g., 10

    // Market and IP outlook
    projected_market_size_usd: number; // e.g., 5000000000
    projected_return_on_investment: number; // e.g., 7.2 (i.e., 7.2x ROI)
    is_patent_filed: boolean;
    patent_number: string; // If filed, e.g., "US9876543B2"
    patent_expiration_year: number; // e.g., 2042

    // Stock-related
    is_public_company: boolean;
    ticker_symbol: string; // e.g., "MRNA"
    market_cap_usd: number; // e.g., 45000000000
    stock_price_usd: number; // e.g., 112.54
  };
  graph_data: {
    // === Market Perspective ===

    // Total funding received from investors, governments, etc. per year
    yearly_funding_usd: {
      year: number;
      amount_usd: number;
    }[];

    // Estimated yearly market value / demand projection
    yearly_market_projection_usd: {
      year: number;
      projected_market_value_usd: number;
    }[];

    // Production cost estimation per year
    yearly_production_cost_usd: {
      year: number;
      cost_usd: number;
    }[];

    // Price per dose trend per year
    yearly_price_per_dose_usd: {
      year: number;
      price_usd: number;
    }[];

    // Distribution countries with start year
    distribution_timeline: {
      country: string;
      distribution_start_year: number;
    }[];

    // Regulatory approvals timeline
    regulatory_approvals: {
      country: string;
      approval_year: number;
    }[];
  };
}

export interface TrialDetailsInterface {
  trial_details: {
    name: string; // Name of the vaccine (e.g., "mRNA-4157", "BNT162b2")
    indication: string; // Disease or condition targeted (e.g., "Melanoma", "COVID-19")
    summary: string; // Brief description (at least 100 words in details) of the vaccine's purpose and mechanism
    developer_organization: string; // Main developer or organization (e.g., "Moderna", "BioNTech")
    platform: string; // Technology used (e.g., "mRNA", "Viral Vector", "Protein Subunit")
    mechanism_of_action: string; // How the vaccine works (e.g., "Triggers immune response by encoding tumor-specific antigens")
    route_of_administration: string; // Method of administration (e.g., "Intramuscular", "Subcutaneous")
    doses_required: number; // Number of doses required (e.g., 2)
    dose_interval_days: number | null; // Days between doses (e.g., 28) or null if not known
    age_minimum: number | null; // Minimum eligible age (e.g., 18) or null if not known
    age_maximum: number | null; // Maximum eligible age (e.g., 65) or null if not applicable
    current_phase: string; //"Preclinical" | "Phase 1" | "Phase 2" | "Phase 3" | "Phase 4"; // Current clinical trial phase
    trial_location_countries: string[]; // List of countries where trials are happening (e.g., ["USA", "Germany"])
    efficacy_percentage: number | null; // Reported efficacy (e.g., 85.6) or null if unknown
    efficacy_note: string; // Notes on efficacy (e.g., "Efficacy measured in a small cohort", or "Not yet published")
    side_effects_observed: string[]; // Side effects seen so far (e.g., ["Fever", "Fatigue", "Injection site pain"])
    storage_temperature: string | null; // Storage condition (e.g., "-20°C", "2-8°C") or null if unknown
    shelf_life_months: number | null; // Shelf life in months (e.g., 6) or null if not known
    partner_organizations: string[]; // Other collaborators (e.g., ["Merck", "NIH"])
    last_updated: string; // Last updated date in ISO format (e.g., "2025-05-24")
    development_status: string; // Choose from this ("Preclinical" | "Clinical - Phase 1" | "Clinical - Phase 2" | "Clinical - Phase 3" | "Approved for Emergency Use" | "Withdrawn" | "Halted";) // Overall development status
  };
  graph_data: {
    // === Research & Trials Perspective ===

    // Clinical phase history
    clinical_phase_timeline: {
      year: number;
      phase: string; // "Preclinical" | "Phase 1" | "Phase 2" | "Phase 3" | "Phase 4";
    }[];

    // R&D spending per year
    yearly_rd_spending_usd: {
      year: number;
      amount_usd: number;
    }[];

    // Number of trial participants per year
    yearly_trial_participants: {
      year: number;
      participants: number;
    }[];

    // Number of trial locations per year
    yearly_trial_locations_count: {
      year: number;
      locations: number;
    }[];

    // Efficacy reported in trials
    efficacy_timeline: {
      year: number;
      efficacy_percentage: number;
    }[];

    // Side effects frequency collected during trials
    side_effects_frequency: {
      side_effect: string;
      frequency_percentage: number; // e.g., 12.5 (% of participants)
    }[];

    // Trial countries timeline
    trial_expansion_timeline: {
      year: number;
      countries: string[]; // List of new countries that started trials in that year
    }[];
  };
}
