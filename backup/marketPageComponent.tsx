import React from "react";
import {
  BarChart2,
  Building2,
  CalendarCheck2,
  CircleDollarSign,
  DollarSign,
  Factory,
  FileBarChart2,
  Globe,
  Landmark,
  LineChart,
  ListChecks,
  LockKeyhole,
  PieChart,
  ShieldCheck,
  Store,
  TestTubeDiagonal,
  TrendingUp,
  Users,
} from "lucide-react";
import { MarketDetailsInterface } from "@/components/DetailsPage/TrialDetailsShema";

const MarketOutlookComponent = ({
  data,
}: {
  data: MarketDetailsInterface | null;
}) => {
  const m = data?.market_outlook;
  const display = (
    val: string | number | undefined | null | string[] | number[]
  ) =>
    val === null || val === undefined
      ? "—"
      : Array.isArray(val)
      ? val.join(", ")
      : val;

  const fields = [
    [
      { icon: <Store />, label: "Vaccine Name", value: display(m?.name) },
      {
        icon: <Building2 />,
        label: "Developer",
        value: display(m?.developer_organization),
      },
    ],
    [
      {
        icon: <Globe />,
        label: "Primary Country",
        value: display(m?.primary_country),
      },
      {
        icon: <CircleDollarSign />,
        label: "Budget (USD)",
        value: `$${display(m?.total_estimated_budget_usd)}`,
      },
    ],
    [
      {
        icon: <FileBarChart2 />,
        label: "R&D Cost",
        value: `$${display(m?.cumulative_rnd_cost_usd)}`,
      },
      {
        icon: <TestTubeDiagonal />,
        label: "Trial Cost",
        value: `$${display(m?.cumulative_trial_cost_usd)}`,
      },
    ],
    [
      {
        icon: <Factory />,
        label: "Manufacturing Cost",
        value: `$${display(m?.cumulative_manufacturing_cost_usd)}`,
      },
      {
        icon: <Users />,
        label: "Lead Investor",
        value: display(m?.lead_investor),
      },
    ],
    [
      {
        icon: <Users />,
        label: "Co-Investors",
        value: display(m?.co_investors),
      },
      {
        icon: <Landmark />,
        label: "Govt. Support",
        value: display(m?.government_supporting),
      },
    ],
    [
      {
        icon: <Users />,
        label: "Private Partners",
        value: display(m?.private_sector_partners),
      },
      {
        icon: <PieChart />,
        label: "% Govt Funding",
        value: `${display(m?.percent_funded_by_government)}%`,
      },
    ],
    [
      {
        icon: <PieChart />,
        label: "% Private Funding",
        value: `${display(m?.percent_funded_by_private)}%`,
      },
      {
        icon: <BarChart2 />,
        label: "% R&D Allocation",
        value: `${display(m?.percent_allocated_to_rnd)}%`,
      },
    ],
    [
      {
        icon: <BarChart2 />,
        label: "% Trial Allocation",
        value: `${display(m?.percent_allocated_to_trials)}%`,
      },
      {
        icon: <BarChart2 />,
        label: "% Manufacturing Allocation",
        value: `${display(m?.percent_allocated_to_manufacturing)}%`,
      },
    ],
    [
      {
        icon: <BarChart2 />,
        label: "% Marketing Allocation",
        value: `${display(m?.percent_allocated_to_marketing)}%`,
      },
      {
        icon: <LineChart />,
        label: "Projected Market (USD)",
        value: `$${display(m?.projected_market_size_usd)}`,
      },
    ],
    [
      {
        icon: <TrendingUp />,
        label: "ROI",
        value: `${display(m?.projected_return_on_investment)}x`,
      },
      {
        icon: <LockKeyhole />,
        label: "Patent Filed",
        value: display(m?.is_patent_filed ? "Yes" : "No"),
      },
    ],
    [
      {
        icon: <ShieldCheck />,
        label: "Patent Number",
        value: display(m?.patent_number),
      },
      {
        icon: <CalendarCheck2 />,
        label: "Patent Expiry",
        value: display(m?.patent_expiration_year),
      },
    ],
    [
      {
        icon: <Store />,
        label: "Public Company",
        value: display(m?.is_public_company ? "Yes" : "No"),
      },
      {
        icon: <ListChecks />,
        label: "Ticker",
        value: display(m?.ticker_symbol),
      },
    ],
    [
      {
        icon: <DollarSign />,
        label: "Market Cap (USD)",
        value: `$${display(m?.market_cap_usd)}`,
      },
      {
        icon: <DollarSign />,
        label: "Stock Price (USD)",
        value: `$${display(m?.stock_price_usd)}`,
      },
    ],
  ];

  return (
    <div>
      <div className="flex  mb-10 mx-20 gap-6">
        <div className="w-1/2 bg-white rounded-2xl shadow-sm p-7 h-[400px] font-semibold text-xl">
          Graph and summary Area
        </div>
        <div className="w-1/2 p-7 outline-2 rounded-2xl">
          <div className="font-bold text-xl font-manrope mb-3">Summary</div>
          <p className="text-gray-700 font-inter">{m?.summary}</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-7 mx-20">
        <div className="font-bold font-manrope text-center shadow-2xs mb-2 text-xl">
          Market Outlook
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

export default MarketOutlookComponent;
