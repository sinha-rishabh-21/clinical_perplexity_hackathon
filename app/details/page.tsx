"use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { TrialDetails } from "@/components/trialsDetailsInterface";
import { dummyData } from "./dummyData";
import { BarChartComponent } from "@/components/DetailsPage/BarChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

// const DetailsPage = (prompt: string) => {
const DetailsPage = () => {
  //const [data, setData] = useState<TrialDetails | null>(null);
  const data: TrialDetails = dummyData;

  //const prompt = "Generate details for cancer phase-3 vaccine trial"; // Dummy prompt
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "/api/getData",
          {
            prompt: prompt,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = JSON.parse(response.data.text);
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [prompt]);
*/
  return (
    <div className="py-32 px-20">
      <h1 className="text-5xl mb-2 p-10 font-bold">{data?.name}</h1>
      <div className="flex gap-12">
        <div className="w-1/2">
          <BarChartComponent chartData={chartData} />
        </div>
        <div className="flex flex-col gap-2 w-1/2 ">
          <div /*className="flex-grow"*/>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.science_highlights[0].summary}</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Major Investments</CardTitle>
              </CardHeader>
              <CardContent>
                {data.investments.invested_companies.map((company) => (
                  <div key={company.name} className="flex flex-col gap-2">
                    <p>{company.name}</p>
                    <p>{company.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Add more components to display other details */}
    </div>
  );
};

export default DetailsPage;
