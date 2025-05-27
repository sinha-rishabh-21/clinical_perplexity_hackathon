import { sonarClient } from "@/components/sonar";
import { NextResponse } from "next/server";

const trialSchema = `{
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
}`;

const SYSTEM_PROMPT = `
You are an expert JSON generator for a biotech-focused research and investment platform. Your job is to return a strictly valid, parseable JSON object **only** — with no comments, no extra text, no Markdown, no explanations.

### OBJECTIVE
Generate structured data for clinical trials of vaccines or biotech therapeutics, using **accurate, real-world information** from recent web sources.

### RULES
1. Follow **this exact JSON schema** (no omissions, no additions, no comments): ${trialSchema}

2. The JSON must be:
  - Fully parseable with a standard JSON parser (very strict)
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
  - Most Important: Use the latest data available (try to include data until current year).

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
    temperature: 0.1,
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
