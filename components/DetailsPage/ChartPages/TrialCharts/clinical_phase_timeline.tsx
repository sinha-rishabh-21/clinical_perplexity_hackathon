//Line chart
// Line chart
import { ChartConfig } from "@/components/ui/chart";
import React from "react";
import {
  MarketDetailsInterface,
  TrialDetailsInterface,
} from "../../TrialDetailsShema";
import { LineChartComponent } from "../../Charts/LineChart";

const chartConfig = {
  phase: {
    label: "Clinical Phase",
    color: "#003366",
  },
} as ChartConfig;

interface Props {
  data: MarketDetailsInterface | TrialDetailsInterface | null;
}

const phaseMap: Record<string, number> = {
  Preclinical: 0,
  "Phase 1": 1,
  "Phase 2": 2,
  "Phase 3": 3,
};

const ClinicalPhaseTimeline = ({ data }: Props) => {
  const parsedData = data as TrialDetailsInterface;
  if (!parsedData) return null;
  const clinical_phase_timeline = parsedData.graph_data.clinical_phase_timeline;
  const updatedTimeline = clinical_phase_timeline.map((item) => ({
    ...item,
    phase: phaseMap[item.phase] ?? 4, // default to 4 if not found
  }));
  return (
    <div>
      <div>
        <LineChartComponent
          title="Clinical Phase Timeline"
          description={`${clinical_phase_timeline[0].year} - ${
            clinical_phase_timeline[clinical_phase_timeline.length - 1].year
          }`}
          data={updatedTimeline}
          xKey="year"
          lineKeys={["phase"]}
          config={chartConfig}
          trendNote="0 -> Preclinical | 1 -> Phase 1 | 2 -> Phase 2 | 3 -> Phase 3 | 4 -> Marketed"
          footerNote="Data may contain inaccuracies. Double-check critical values."
        />
      </div>
    </div>
  );
};

export default ClinicalPhaseTimeline;
