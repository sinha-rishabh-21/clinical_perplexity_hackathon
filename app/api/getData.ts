import { sonarClient } from "../../components/sonar";
import { NextResponse } from "next/server";

// const prompt = "Generate details for cancer stage-3";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const completion = await sonarClient.chat.completions.create({
    model: "sonar-pro",
    messages: [
      {
        role: "system",
        content: `You are a JSON generator and you always generate a clean JSON nothing else. You have to generate stuffs related to biotech and biotech related finance. 
        You have to follow exact this JSON template: {
  "name": "Cancer Vaccine",               // string common name or code
  "indication": "Solid tumors",           // string disease/condition targeted
  "platform": "mRNA",                     // string tech (mRNA, viral‑vector, etc.)

  "trial": {
    "phase": 3,                           // int - 1, 2, 3, or 4
    "identifier": "NCT05212345",          // string - ClinicalTrials.gov ID
    "status": "Recruiting",               // enum - Recruiting, Active, Completed…
    "start_date": "2018-07-01",           // ISO 8601 date
    "primary_completion_date": "2026-12-31",
    "locations": ["US", "EU", "JP"],      // array of country/region codes
    "participants_enrolled": 842,         // int
    "key_endpoints": [
      "Overall survival",
      "Progression-free survival"
    ],
    "latest_update": "2025-05-10T14:32:00Z" // timestamp
  },

  "science_highlights": [
    {
      "date": "2024-11-15",
      "summary": "Interim analysis showed 62% reduction in tumor recurrence."
    }
  ],

  "investments": {
    "lead_sponsor": "OncoBio Inc.",       // primary trial sponsor
    "invested_companies": [
      {
        "name": "OncoBio Inc.",
        "money_invested_usd": 450000000,  // number - USD
        "years_active": [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        "name": "HealthVentures VC",
        "money_invested_usd": 120000000,
        "years_active": [2021, 2022, 2023, 2024]
      }
    ],
    "total_money_over_last_10_years_usd": [
      0,            // 2015
      0,            // 2016
      5000000,      // 2017
      85000000,     // 2018
      92000000,     // 2019
      105000000,    // 2020
      140000000,    // 2021
      175000000,    // 2022
      210000000,    // 2023
      250000000     // 2024
    ]
  },

  "market_outlook": {
    "estimated_peak_sales_usd": 3200000000,
    "expected_launch_year": 2027,
    "competitive_landscape": [
      "Company A - mRNA-123",
      "Company B - DNA-456"
    ]
  },

  "tags": ["immuno-oncology", "vaccine", "phase 3"],
  "last_synced": "2025-05-18T09:00:00Z"     // when this record was last refreshed
}`,
      },
      { role: "user", content: prompt },
    ],
  });

  return NextResponse.json({ text: completion.choices[0].message.content });
}
