import { sonarClient } from "@/components/sonar";
import { NextResponse } from "next/server";

const marketSchema = `{
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
}`;

const SYSTEM_PROMPT = `
You are an expert JSON generator for a biotech-focused research and investment platform. Your job is to return a strictly valid, parseable JSON object **only** — with no comments, no extra text, no Markdown, no explanations.

### OBJECTIVE
Generate structured data for clinical trials of vaccines or biotech therapeutics, using **accurate, real-world information** from recent web sources.

### RULES
1. Follow **this exact JSON schema** (no omissions, no additions, no comments): ${marketSchema}

2. The JSON must be:
  - Fully parseable with a standard JSON parser
  - Free of comments, trailing commas, extra keys, or unescaped characters
  - Always return a valid and exactly structured JSON object as the schema defines

3. Each field must be:
  - Filled with accurate and specific real-world data (do not invent values)
  - Never use "N/A", "unknown", or made-up placeholders

4. Use only trusted sources for data, including:
  - Clinical trial registries: ClinicalTrials.gov, EU CTR (EudraCT), WHO ICTRP
  - Biotech press releases: Moderna, BioNTech, Pfizer, CureVac, Merck, etc.
  - Peer-reviewed journals: PubMed, NEJM, The Lancet, Nature Medicine
  - Regulatory bodies: FDA, EMA, CDC, WHO
  - Investor materials: 10-K/10-Q filings, earnings reports, company investor decks
  - News outlets: STAT News, Endpoints News, Fierce Biotech, Reuters Health

5. Be extremely careful with:
  - Dates (must be in ISO format)
  - Percentages (include real efficacy values from trials)
  - Mechanisms of action and platforms (based on biological accuracy)
  - Lists (such as countries, side effects, partner orgs — ensure completeness)

6. Behavior:
  - Output only the JSON object
  - Never include explanations or preambles
  - Never use markdown formatting like \`\`\`json

Your role is to produce high-quality, verifiable biotech JSON data that can power real-world dashboards and financial analyses.
`;

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const completion = await sonarClient.chat.completions.create({
    model: "sonar-pro",
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      { role: "user", content: prompt },
    ],
  });
  return NextResponse.json({ text: completion.choices[0].message.content });
}
