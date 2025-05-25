export const trialDetailsDummy = {
  trial_details: {
    name: "mRNA-4157/V940",
    indication: "Melanoma",
    summary:
      "The mRNA-4157/V940 cancer vaccine, developed collaboratively by Moderna and Merck, has undergone an intensive clinical development process beginning with preclinical studies in 2016. Early trials focused on safety and immune response, progressing from Phase 1 through Phase 3 between 2017 and 2021. Phase 3 trials involved over 2,400 participants across 45 locations globally. Efficacy results improved significantly, from 56.4% in 2021 to 78.2% in 2023. Common side effects observed include fatigue, injection site pain, and mild fever. The trial footprint expanded from the U.S. and Canada to Europe, Japan, Brazil, and India, reflecting a broadening scope and international interest in this personalized cancer immunotherapy.",
    developer_organization: "Moderna & Merck",
    platform: "mRNA",
    mechanism_of_action:
      "Encodes tumor-specific neoantigens to stimulate an immune response against cancer cells.",
    route_of_administration: "Intramuscular",
    doses_required: 2,
    dose_interval_days: 21,
    age_minimum: 18,
    age_maximum: null,
    current_phase: "Phase 3",
    trial_location_countries: [
      "United States",
      "Australia",
      "France",
      "Germany",
      "Belgium",
    ],
    efficacy_percentage: null,
    efficacy_note:
      "Preliminary data shows reduced recurrence when combined with Keytruda, but Phase 3 results are pending.",
    side_effects_observed: [
      "Fatigue",
      "Injection site pain",
      "Chills",
      "Fever",
    ],
    storage_temperature: "2-8°C",
    shelf_life_months: null,
    partner_organizations: ["Merck & Co.", "Moderna Inc."],
    last_updated: "2025-05-20",
    development_status: "Clinical - Phase 3",
  },

  graph_data: {
    // === Research & Trials Perspective ===
    clinical_phase_timeline: [
      { year: 2016, phase: "Preclinical" },
      { year: 2017, phase: "Phase 1" },
      { year: 2019, phase: "Phase 2" },
      { year: 2021, phase: "Phase 3" },
      { year: 2024, phase: "Phase 4" },
    ],
    yearly_rd_spending_usd: [
      { year: 2015, amount_usd: 5000000 },
      { year: 2016, amount_usd: 10000000 },
      { year: 2017, amount_usd: 15000000 },
      { year: 2018, amount_usd: 18000000 },
      { year: 2019, amount_usd: 22000000 },
      { year: 2020, amount_usd: 30000000 },
      { year: 2021, amount_usd: 40000000 },
      { year: 2022, amount_usd: 45000000 },
      { year: 2023, amount_usd: 48000000 },
      { year: 2024, amount_usd: 50000000 },
    ],
    yearly_trial_participants: [
      { year: 2017, participants: 80 },
      { year: 2019, participants: 300 },
      { year: 2021, participants: 1500 },
      { year: 2023, participants: 2400 },
    ],
    yearly_trial_locations_count: [
      { year: 2017, locations: 3 },
      { year: 2019, locations: 10 },
      { year: 2021, locations: 25 },
      { year: 2023, locations: 45 },
    ],
    efficacy_timeline: [
      { year: 2021, efficacy_percentage: 56.4 },
      { year: 2023, efficacy_percentage: 78.2 },
    ],
    side_effects_frequency: [
      { side_effect: "Fatigue", frequency_percentage: 28.4 },
      { side_effect: "Injection Site Pain", frequency_percentage: 41.6 },
      { side_effect: "Nausea", frequency_percentage: 15.0 },
      { side_effect: "Mild Fever", frequency_percentage: 10.2 },
    ],
    trial_expansion_timeline: [
      { year: 2019, countries: ["USA", "Canada"] },
      { year: 2021, countries: ["Germany", "UK"] },
      { year: 2023, countries: ["Japan", "Brazil", "India"] },
    ],
  },
};

export const marketOutlookDummy = {
  market_outlook: {
    name: "mRNA-4157/V940",
    summary:
      "From a market standpoint, the vaccine has seen a steadily increasing financial investment over a decade, with over $800 million in cumulative funding from sources such as Merck, NIH, BARDA, and private equity. Yearly production costs and price-per-dose estimates have risen, with 2025 projections at $140 million and $160 respectively. Regulatory approval in the U.S. is expected in 2024, followed by Europe in 2025. Market projections estimate revenues surpassing $750 million by 2025, signaling strong commercial potential. Distribution will start in the U.S. and Germany in 2024 and expand globally. This reflects growing market confidence in mRNA-based oncology therapeutics.",
    developer_organization: "Moderna",
    primary_country: "USA",

    total_estimated_budget_usd: 920000000,
    cumulative_rnd_cost_usd: 380000000,
    cumulative_trial_cost_usd: 290000000,
    cumulative_manufacturing_cost_usd: 150000000,
    total_spent_by_year: [
      10000000, // Year 1
      18000000, // Year 2
      25000000, // Year 3
      32000000, // Year 4
      46000000, // Year 5
      72000000, // Year 6
      91000000, // Year 7
      110000000, // Year 8
      135000000, // Year 9
      180000000, // Year 10
    ],

    lead_investor: "Flagship Pioneering",
    co_investors: [
      "Merck & Co.",
      "Bill & Melinda Gates Foundation",
      "National Cancer Institute",
    ],
    government_supporting: [
      "United States Department of Health and Human Services",
      "European Commission",
    ],
    private_sector_partners: ["Merck & Co.", "Thermo Fisher Scientific"],

    percent_funded_by_government: 30,
    percent_funded_by_private: 70,
    percent_allocated_to_rnd: 42,
    percent_allocated_to_trials: 32,
    percent_allocated_to_manufacturing: 20,
    percent_allocated_to_marketing: 6,

    projected_market_size_usd: 6800000000,
    projected_return_on_investment: 7.4,
    is_patent_filed: true,
    patent_number: "US11347629B2",
    patent_expiration_year: 2042,

    is_public_company: true,
    ticker_symbol: "MRNA",
    market_cap_usd: 47500000000,
    stock_price_usd: 114.85,

    last_updated: "2025-05-20",
  },

  graph_data: {
    // === Market Perspective ===
    yearly_funding_usd: [
      { year: 2015, amount_usd: 15000000 },
      { year: 2016, amount_usd: 22000000 },
      { year: 2017, amount_usd: 35000000 },
      { year: 2018, amount_usd: 47000000 },
      { year: 2019, amount_usd: 60000000 },
      { year: 2020, amount_usd: 85000000 },
      { year: 2021, amount_usd: 120000000 },
      { year: 2022, amount_usd: 100000000 },
      { year: 2023, amount_usd: 130000000 },
      { year: 2024, amount_usd: 110000000 },
      { year: 2025, amount_usd: 95000000 },
    ],
    yearly_market_projection_usd: [
      { year: 2023, projected_market_value_usd: 250000000 },
      { year: 2024, projected_market_value_usd: 500000000 },
      { year: 2025, projected_market_value_usd: 750000000 },
    ],
    yearly_production_cost_usd: [
      { year: 2023, cost_usd: 100000000 },
      { year: 2024, cost_usd: 120000000 },
      { year: 2025, cost_usd: 140000000 },
    ],
    yearly_price_per_dose_usd: [
      { year: 2023, price_usd: 130 },
      { year: 2024, price_usd: 145 },
      { year: 2025, price_usd: 160 },
    ],

    distribution_timeline: [
      { country: "USA", distribution_start_year: 2024 },
      { country: "Germany", distribution_start_year: 2024 },
      { country: "UK", distribution_start_year: 2025 },
    ],
    regulatory_approvals: [
      { country: "USA", approval_year: 2024 },
      { country: "EU", approval_year: 2025 },
    ],
  },
};
