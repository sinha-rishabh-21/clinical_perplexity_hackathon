import {
  ALargeSmall,
  AlarmClock,
  AlignLeft,
  BarChart2,
  BookMarked,
  Building2,
  CalendarCheck2,
  ChartColumnIncreasing,
  CircleDollarSign,
  Disc,
  DollarSign,
  Factory,
  FileBarChart2,
  FileClock,
  Globe,
  HeartPulse,
  IdCard,
  Landmark,
  LayoutPanelTop,
  LineChart,
  ListChecks,
  LockKeyhole,
  PieChart,
  ShieldCheck,
  Store,
  Syringe,
  TestTubeDiagonal,
  Thermometer,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "./TrialDetailsShema";

const display = (
  val:
    | string
    | number
    | undefined
    | null
    | string[]
    | number[]
    | boolean
    | Date
    | undefined
) =>
  val === null || val === undefined
    ? "—"
    : Array.isArray(val)
    ? val.join(", ")
    : val;

export const marketOutlookFields = (data: MarketDetailsInterface | null) => {
  const m = data?.market_outlook;

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
  return fields;
};

export const trialDetailsFields = (data: TrialDetailsInterface | null) => {
  const t = data?.trial_details;
  const fields = [
    [
      { icon: <ALargeSmall />, label: "Name", value: display(t?.name) },
      {
        icon: <LayoutPanelTop />,
        label: "Platform",
        value: display(t?.platform),
      },
    ],
    [
      {
        icon: <Disc />,
        label: "Indication",
        value: display(t?.indication),
      },
      { icon: <IdCard />, label: "Identifier", value: display(t?.name) }, // No identifier field
    ],
    [
      {
        icon: <TestTubeDiagonal />,
        label: "Current Phase",
        value: display(t?.current_phase),
      },
      {
        icon: <ChartColumnIncreasing />,
        label: "Development Status",
        value: display(t?.development_status),
      },
    ],
    [
      {
        icon: <BookMarked />,
        label: "Developer Organization",
        value: display(t?.developer_organization),
      },
      {
        icon: <AlignLeft />,
        label: "Mechanism of Action",
        value: display(t?.mechanism_of_action),
      },
    ],
    [
      {
        icon: <Syringe />,
        label: "Route of Administration",
        value: display(t?.route_of_administration),
      },
      {
        icon: <ListChecks />,
        label: "Doses Required",
        value: display(t?.doses_required),
      },
    ],
    [
      {
        icon: <AlarmClock />,
        label: "Dose Interval (Days)",
        value: display(t?.dose_interval_days),
      },
      {
        icon: <HeartPulse />,
        label: "Age Minimum",
        value: display(t?.age_minimum),
      },
    ],
    [
      {
        icon: <HeartPulse />,
        label: "Age Maximum",
        value: display(t?.age_maximum),
      },
      {
        icon: <Globe />,
        label: "Trial Locations",
        value: display(t?.trial_location_countries),
      },
    ],
    [
      {
        icon: <ChartColumnIncreasing />,
        label: "Efficacy %",
        value: display(t?.efficacy_percentage),
      },
      {
        icon: <FileClock />,
        label: "Efficacy Note",
        value: display(t?.efficacy_note),
      },
    ],
    [
      {
        icon: <Disc />,
        label: "Side Effects",
        value: display(t?.side_effects_observed),
      },
      {
        icon: <Thermometer />,
        label: "Storage Temp",
        value: display(t?.storage_temperature),
      },
    ],
    [
      {
        icon: <AlarmClock />,
        label: "Shelf Life (Months)",
        value: display(t?.shelf_life_months),
      },
      {
        icon: <Landmark />,
        label: "Partner Organizations",
        value: display(t?.partner_organizations),
      },
    ],
  ];

  return fields;
};
