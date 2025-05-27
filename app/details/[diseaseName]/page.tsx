"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TrialDetailsInterface,
  MarketDetailsInterface,
} from "@/components/DetailsPage/TrialDetailsShema";
// import { trialDetailsDummy, marketOutlookDummy } from "./dummyData";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CenterDetailsComponent from "@/components/DetailsPage/mainComponent";
import GraphArea from "@/components/DetailsPage/graphArea";
import SummaryArea from "@/components/DetailsPage/summaryArea";
import LoaderComponent from "@/components/loaderComponent";
import { redirect, useParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";

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

const DetailsPage = () => {
  const prompt = useParams().diseaseName as string | undefined;
  const [trialData, setTrialData] = useState<TrialDetailsInterface | null>(
    null
  );
  const [marketData, setMarketData] = useState<MarketDetailsInterface | null>(
    null
  );
  const [isMarket, setIsMarket] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  if (prompt === undefined) {
    redirect("/search");
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        const trial = await fetchData({
          prompt: prompt!,
          endpoint: "/getTrialData",
        });
        const market = await fetchData({
          prompt: prompt!,
          endpoint: "/getMarketData",
        });

        if (!trial || !market) {
          throw new Error("Failed to load data");
        }

        setTrialData(trial);
        setMarketData(market);
      } catch (error) {
        console.error("Unexpected error:", error);
        setHasError(true);
      }
    };

    loadData();
  }, [prompt]);

  try {
    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-200 font-inter text-red-600 text-xl">
          Technical error occurred. Please reload the page.
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-zinc-200 font-inter p-10 pt-36 ">
        {trialData === null ? (
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
                        {marketData === null ? (
                          <TabsTrigger className="" value="market" disabled>
                            <LoaderCircle className="animate-spin" />
                          </TabsTrigger>
                        ) : (
                          <TabsTrigger
                            className="cursor-pointer font-manrope font-bold"
                            value="market"
                            onClick={() => setIsMarket(true)}
                          >
                            Market Outlook
                          </TabsTrigger>
                        )}
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
  } catch (e) {
    console.error("Render error:", e);
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-200 font-inter text-red-600 text-xl">
        Technical error occurred. Please reload the page.
      </div>
    );
  }
};

export default DetailsPage;
