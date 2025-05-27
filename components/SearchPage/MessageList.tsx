import { Message } from "@/types";
import ResultCard2 from "./ResultCard2";

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="space-y-4 py-4">
      {messages.map((msg, idx) => {
        if (msg.type === "user") {
          return (
            <div
              key={idx}
              className="bg-blue-600 text-white px-4 py-3 rounded-xl shadow-sm max-w-[70%] ml-auto"
            >
              {msg.text}
            </div>
          );
        } else if (msg.type === "response") {
          return (
            <div key={idx} className="space-y-6">
              {Array.isArray(msg.data) ? (
                msg.data.map((trial, tidx) =>
                  trial?.trial?.identifier ? (
                    <ResultCard2 key={tidx} data={trial} />
                  ) : (
                    <ResultCard2 key={tidx} data={trial} />
                  )
                )
              ) : (
                <div className="text-sm text-red-600">
                  ⚠️ msg.data is not an array!
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default MessageList;
