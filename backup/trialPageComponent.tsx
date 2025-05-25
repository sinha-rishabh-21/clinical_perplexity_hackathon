import React from "react";
import {
  ALargeSmall,
  LayoutPanelTop,
  Disc,
  IdCard,
  TestTubeDiagonal,
  ChartColumnIncreasing,
  Syringe,
  Thermometer,
  AlarmClock,
  AlignLeft,
  BookMarked,
  Globe,
  ListChecks,
  HeartPulse,
  Landmark,
  FileClock,
} from "lucide-react";
import { TrialDetailsInterface } from "../components/DetailsPage/TrialDetailsShema";

const TrialDetailsComponent = ({
  data,
}: {
  data: TrialDetailsInterface | null;
}) => {
  const t = data?.trial_details;
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

  return (
    <div>
      <div className="flex  mb-10 mx-20 gap-6">
        <div className="w-1/2 bg-white rounded-2xl shadow-sm p-7 h-[400px] font-semibold text-xl">
          Graph and summary Area
        </div>
        <div className="w-1/2 p-7 outline-2 rounded-2xl">
          <div className="font-bold font-manrope text-xl mb-3">Summary</div>
          <p className="text-gray-700">{t?.summary}</p>
        </div>
      </div>
      <div className=" bg-white rounded-2xl shadow-sm p-7 mx-20">
        <div className="font-bold font-manrope text-center shadow-2xs mb-2 text-xl">
          Trial Details
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
                  <div className="">
                    {field.value instanceof Date
                      ? field.value.toLocaleString()
                      : String(field.value)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrialDetailsComponent;
