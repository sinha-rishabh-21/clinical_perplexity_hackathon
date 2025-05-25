"use client";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import {
  TrialDetailsInterface,
  MarketDetailsInterface,
} from "@/components/DetailsPage/TrialDetailsShema";
import { trialDetailsDummy, marketOutlookDummy } from "./dummyData";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CenterDetailsComponent from "@/components/DetailsPage/mainComponent";
import GraphArea from "@/components/DetailsPage/graphArea";
import SummaryArea from "@/components/DetailsPage/summaryArea";

// const DetailsPage = (prompt: string) => {
const DetailsPage = () => {
  /*
  const [trialData, setTrialData] = useState<TrialDetailsInterface | null>(null);
  const [marketData, setMarketData] = useState<MarketDetailsInterface | null>(null);
*/
  const [isMarket, setIsMarket] = useState<boolean>(false);

  // Dummy data for testing
  const trialData: TrialDetailsInterface = trialDetailsDummy;
  const marketData: MarketDetailsInterface = marketOutlookDummy;

  //const prompt = "Generate details for cancer phase-3 vaccine trial"; // Dummy prompt
  /*
  // fix the backend
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
    <div className="min-h-screen bg-zinc-200 font-inter p-10 pt-36">
      <div className="flex mb-10 mx-20 gap-6">
        <GraphArea
          data={isMarket ? marketData : trialData}
          isMarket={isMarket}
        />
        <div className="flex flex-col w-1/2 justify-end gap-6">
          {/* Tab */}
          <div className="flex items-center justify-center">
            <Tabs defaultValue="vaccine" className="">
              <TabsList>
                <TabsTrigger
                  className="cursor-pointer font-manrope font-bold"
                  value="vaccine"
                  onClick={() => setIsMarket(false)}
                >
                  Vaccine Details
                </TabsTrigger>
                <TabsTrigger
                  className="cursor-pointer font-manrope font-bold"
                  value="market"
                  onClick={() => setIsMarket(true)}
                >
                  Market Outlook
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {/* Summary Area */}
          <SummaryArea
            data={isMarket ? marketData : trialData}
            isMarket={isMarket}
          />
        </div>
      </div>
      {isMarket ? (
        <CenterDetailsComponent data={marketData} isMarket={isMarket} />
      ) : (
        <CenterDetailsComponent data={trialData} isMarket={isMarket} />
      )}
    </div>
  );
};

export default DetailsPage;
