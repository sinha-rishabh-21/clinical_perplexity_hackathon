import OpenAI from "openai";

export const sonarClient = new OpenAI({
  apiKey: process.env.SONAR_API_KEY,
  baseURL: "https://api.perplexity.ai",
});
