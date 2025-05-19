"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrialDetails } from "@/components/trialsDetailsInterface";
// const prompt = "Generate details for cancer stage-3";

const DetailsPage = (prompt: string) => {
  const [data, setData] = useState<TrialDetails | null>(null);

  prompt = "Generate details for cancer stage-3";

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
  return <div>{data?.name}</div>;
};

export default DetailsPage;
