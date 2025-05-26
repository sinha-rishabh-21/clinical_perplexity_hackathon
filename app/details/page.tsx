"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TrialDetailsInterface,
  MarketDetailsInterface,
} from "@/components/DetailsPage/TrialDetailsShema";
//import { trialDetailsDummy, marketOutlookDummy } from "./dummyData";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CenterDetailsComponent from "@/components/DetailsPage/mainComponent";
import GraphArea from "@/components/DetailsPage/graphArea";
import SummaryArea from "@/components/DetailsPage/summaryArea";
import LoaderComponent from "@/components/loaderComponent";

const fetchData = async ({
  prompt,
  endpoint,
}: {
  prompt: string;
  endpoint: string;
}) => {
  try {
    const response = await axios.post(
      `/api${endpoint}`,
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
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const DetailsPage = ({ prompt }: { prompt: string }) => {
  //const DetailsPage = () => {
  const [trialData, setTrialData] = useState<TrialDetailsInterface | null>(
    null
  );
  const [marketData, setMarketData] = useState<MarketDetailsInterface | null>(
    null
  );
  const [isMarket, setIsMarket] = useState<boolean>(false);

  if (!prompt) prompt = "mRNA-4517/V940";
  useEffect(() => {
    fetchData({ prompt: prompt, endpoint: "/getTrialData" }).then((data) => {
      setTrialData(data);
    });

    fetchData({ prompt: prompt, endpoint: "/getMarketData" }).then((data) => {
      setMarketData(data);
    });
  }, [prompt]);

  return (
    <div className="min-h-screen bg-zinc-200 font-inter p-10 pt-36">
      {trialData === null || marketData === null ? (
        <LoaderComponent />
      ) : (
        <>
          <div className="flex mb-10 mx-20 gap-6">
            <GraphArea
              data={isMarket ? marketData : trialData}
              isMarket={isMarket}
            />
            <div className="flex flex-col w-1/2 justify-end gap-6">
              {/* Tab */}
              <div className="flex flex-col items-end gap-3">
                <span className="text-6xl font-bold font-manrope">
                  {trialData.trial_details.name}
                </span>
                <div>
                  <Tabs defaultValue="vaccine">
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
              </div>
              {/* Summary Area */}
              <SummaryArea
                data={isMarket ? marketData : trialData}
                isMarket={isMarket}
              />
            </div>
          </div>
          <CenterDetailsComponent
            data={isMarket ? marketData : trialData}
            isMarket={isMarket}
          />
        </>
      )}
    </div>
  );
};

export default DetailsPage;
