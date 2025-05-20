"use client";
import React from "react";
import Fuse from "fuse.js";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { diseasesList } from "@/components/diseaseList";

const options = {
  includeScore: true,
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    const fuse = new Fuse(diseasesList, options);
    const results = fuse.search(searchTerm);
    setSearchResults(results.slice(0, 7).map((result) => result.item));
    console.log(results);
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 h-screen">
      <div className="fixed top-10 w-full max-w-2xl px-4">
        <Input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mt-32 w-full max-w-2xl px-4">
        {searchResults.length == 0 ? (
          <div className="bg-white p-4 m-2 rounded shadow">
            <p>
              Continue typing if its not in the suggestions but you know its a
              disease :)
            </p>
          </div>
        ) : (
          searchResults.map((item, index) => (
            <div key={index} className="bg-white p-4 m-2 rounded shadow">
              <p>{item}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
