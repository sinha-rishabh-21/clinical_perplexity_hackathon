import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

const loadingMessages = [
  "Initializing request...",
  "Connecting to the server...",
  "Fetching the latest data...",
  "Parsing response...",
  "Analyzing content...",
  "Summarizing key points...",
  "Almost there...",
  "Finalizing...",
];

export default function LoaderComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 10000;
    const intervalTime = totalDuration / loadingMessages.length;

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < loadingMessages.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 min-h-[400px]">
      <LoaderCircle className="animate-spin" />
      <span>{loadingMessages[index]}</span>
    </div>
  );
}
