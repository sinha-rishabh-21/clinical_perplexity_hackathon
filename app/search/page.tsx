"use client";
import React, { useState } from "react";
import MessageList from "@/components/SearchPage/MessageList";
import InputBox from "@/components/SearchPage/InputBox";
import axios from "axios";
//import { Message } from "@/types";
import { useMessages } from "@/context";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { messages, setMessages, clearMessages } = useMessages();
  const [loading, setLoading] = useState<boolean>(false); // ⬅️ loading flag

  const sendMessage = async () => {
    if (!searchTerm.trim() || loading) return;

    setLoading(true);
    setMessages((prev) => [...prev, { type: "user", text: searchTerm.trim() }]);
    setSearchTerm("");

    try {
      const response = await axios.post("/api/getSearchResults", {
        prompt: searchTerm.trim(),
      });
      //console.log("Response from API:", response.data);

      // 💡 Wrap response in an array if it's not already
      const parsed =
        typeof response.data.text === "string"
          ? JSON.parse(response.data.text)
          : response.data;
      //console.log("Parsed response:", parsed);
      // console.log(
      //   Array.isArray(parsed.text)
      //     ? "Response is an array"
      //     : "Response is not an array"
      // );
      //const trials = Array.isArray(parsed) ? parsed : [parsed];
      const trials = parsed.text; // Use .text if available, otherwise use parsed directly
      console.log("Trials:", trials);
      setMessages((prev) => [...prev, { type: "response", data: trials }]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "response",
          data: [
            {
              name: "Error",
              indication: "Could not fetch results",
              platform: "",
              tags: [],
              trial: {
                phase: 0,
                status: "failed",
                identifier: "N/A",
                participants_enrolled: 0,
                latest_update: "",
              },
              science_highlights: [
                {
                  date: "2025-05-23T00:00:00.000Z", //new Date().toISOString(),
                  summary: "Something went wrong while fetching trial data.",
                },
              ],
              investments: {
                lead_sponsor: "N/A",
                total_money_over_last_10_years_usd: [],
              },
              market_outlook: {
                estimated_peak_sales_usd: 0,
                expected_launch_year: 0,
              },
            },
          ],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/hero_bg_blurred.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Input Box with Glassmorphism */}
      <div className="absolute top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4">
          <InputBox
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSend={sendMessage}
            loading={loading}
            clearMessages={clearMessages} // ⬅️ pass clearMessages function
          />
        </div>
      </div>
      {/* ⬇️ Results below search box */}
      <div className="pt-[30vh] pb-16 px-6 md:px-12">
        <MessageList
          messages={messages.filter((msg) => msg.type === "response")} // ❌ no user messages
        />
      </div>
    </div>
  );
};

export default SearchPage;

// this is the search page workflow
// User types query
//       ↓
// User presses Enter or clicks Send
//       ↓
// sendMessage function
//   ↳ add user message to state
//   ↳ clear input box
//   ↳ loading = true
//   ↳ call API with user prompt
//       ↓
// API responds with trial data array
//       ↓
// sendMessage adds response data to messages state
//       ↓
// loading = false
//       ↓
// React re-renders SearchPage with updated messages
//       ↓
// MessageList renders:
//   - user messages (bubbles)
//   - response messages (ResultCard for each trial)
