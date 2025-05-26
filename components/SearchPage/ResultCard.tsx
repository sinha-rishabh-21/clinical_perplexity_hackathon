// components/SearchPage/TrialCard.tsx

import Link from "next/link";

interface TrialData {
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
}

const ResultCard = ({ data }: { data: TrialData }) => {
  const latestHighlight = data.science_highlights[0];

  return (
    <div className="rounded-2xl border shadow-sm p-6 space-y-3 bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <span className="text-sm text-gray-500">#{data.trial.identifier}</span>
      </div>

      <p className="text-gray-700 font-medium">{data.indication}</p>
      <p className="text-sm text-blue-600">{data.platform}</p>

      <div className="text-sm text-gray-500">
        <p>
          🧪 Phase {data.trial.phase} • {data.trial.status} •{" "}
          {data.trial.participants_enrolled} participants
        </p>
        <p>🏢 Lead Sponsor: {data.investments.lead_sponsor}</p>
      </div>

      {latestHighlight && (
        <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 pr-2 py-2 rounded">
          <p className="text-sm text-gray-800 italic">
            “{latestHighlight.summary}”
          </p>
          <p className="text-xs text-gray-400 mt-1">
            🧬 Highlight:{" "}
            {new Date(latestHighlight.date).toISOString().slice(0, 10)}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-3">
        <div>
          <p className="font-semibold">📈 Peak Sales</p>
          <p>
            ${(data.market_outlook.estimated_peak_sales_usd / 1e9).toFixed(1)}B
          </p>
        </div>
        <div>
          <p className="font-semibold">🚀 Expected Launch</p>
          <p>{data.market_outlook.expected_launch_year}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <Link
          href={`/details/${encodeURIComponent(data.name)}`}
          className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ResultCard;
