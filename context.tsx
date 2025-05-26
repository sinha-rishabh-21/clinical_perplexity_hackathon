"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Message } from "@/types";

interface MessagesContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  clearMessages: () => void;
}

const MessagesContext = createContext<MessagesContextType | undefined>(
  undefined
);

export const MessagesProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // Load messages from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("messages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem("messages"); //wipe from storage
  };

  return (
    <MessagesContext.Provider value={{ messages, setMessages, clearMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = (): MessagesContextType => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }
  return context;
};
