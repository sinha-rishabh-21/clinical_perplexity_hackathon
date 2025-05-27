import { NextResponse } from "next/server";
import { sonarClient } from "@/components/sonar";

const searchResultsSchema = `{
  name: string;
  indication: string;
  platform: string;
  tags: string[];
  trial: {
    phase: number;
    status: string;
    identifier: string;
    participants_enrolled: number;
    latest_update: string;
  };
  science_highlights: {
    date: string;
    summary: string;
  }[];
  investments: {
    lead_sponsor: string;
    total_money_over_last_10_years_usd: number[];
  };
  market_outlook: {
    estimated_peak_sales_usd: number;
    expected_launch_year: number;
  };
}`;

const SYSTEM_PROMPT = `
You are an expert JSON generator for a biotech-focused research and investment platform. Your job is to return a strictly valid, parseable **JSON array** of objects — with no comments, no extra text, no Markdown, and no explanations.

### OBJECTIVE
Generate structured data for clinical trials of vaccines or biotech therapeutics, using **accurate, real-world information** from recent web sources.

### INPUT TYPES
1. **If the user prompt provides a disease or condition name** (e.g., "RSV", "cervical cancer", "COVID-19"):
   - Generate a list of **all** known, ongoing, or completed biotech products or vaccines targeting it.
   - The ongoing trials should be prioritized, but include all relevant products.
   - **Cap the list at a maximum of 6 entries.** Stop generating once 6 results are complete. Always return the list decreasing in order of sales and relevance(more famous and widely common first).
   - **Return an empty list** if no such disease or relevant products are found in trusted sources.

2. **If the user prompt provides the actual name of a vaccine or biotech product** (e.g., "Comirnaty", "mRNA-1273", "Gardasil"):
   - Generate a **singleton list** (an array with exactly one item) with that product’s trial and market data.
   - **Return an empty list** if the product name is not known or found in any trusted sources.

### RULES
1. Return an array of objects that match this exact schema (no omissions, no additions, no comments):
${searchResultsSchema}

2. The JSON array must be:
  - Fully parseable with a standard JSON parser
  - Free of comments, trailing commas, extra keys, or unescaped characters

3. Each field must be:
  - Filled with accurate and specific real-world data (do not invent values)
  - Use **null** if the information is not yet known or available from any trusted source

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
  - Output **only** the JSON array
  - Never include explanations, headings, or formatting
  - Never use markdown like \`\`\`json

Your role is to produce high-quality, verifiable biotech JSON data that can power real-world dashboards and financial analyses.
`;

export async function POST(req: Request) {
  const { prompt } = await req.json();
  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json(
      { error: "Invalid or missing prompt" },
      { status: 400 }
    );
  }
  try {
    const response = await sonarClient.chat.completions.create({
      model: "sonar-pro",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const responseData = response.choices[0]?.message.content ?? "[]";
    return NextResponse.json(
      { text: JSON.parse(responseData) },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching search results:", error);
    return NextResponse.json(
      { error: "Failed to fetch search results" },
      { status: 500 }
    );
  }
}
