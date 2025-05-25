"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface Props {
  data: { index: number; value: string }[];
  setValue: React.Dispatch<React.SetStateAction<number>>;
  isMarket: boolean;
}

const GraphChangeButton = ({ data, setValue, isMarket }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(data[0].value);

  useEffect(() => {
    if (data.length > 0) {
      setSelectedValue(data[0].value);
      setValue(data[0].index);
    }
  }, [isMarket, data, setValue]);

  const handleChange = (value: string) => {
    const selectedItem = data.find((item) => item.value === value);
    if (selectedItem) {
      setSelectedValue(value);
      setValue(selectedItem.index);
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {selectedValue} <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Graph</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedValue}
            onValueChange={handleChange}
          >
            {data.map((item) => (
              <DropdownMenuRadioItem key={item.index} value={item.value}>
                {item.value}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GraphChangeButton;
