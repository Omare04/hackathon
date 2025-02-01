// Add this line at the top of the file to mark it as a Client Component
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CloudCog } from "lucide-react";

interface CardWithFormProps {
  ticker: string;
  bullbearScore: number;
  name: string;
}

export function CardWithForm({
  ticker,
  bullbearScore,
  name,
}: CardWithFormProps) {
  const scoreColor = bullbearScore > 0 ? "text-green-500" : "text-red-500";

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          {name} ({ticker})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Bullish/Bearish Score</h3>
          <p className={`text-xl ${scoreColor}`}>
            {bullbearScore > 0 ? "Bullish" : "Bearish"}: {bullbearScore}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            console.log("hello");
          }}
        >
          Generate Report
        </Button>
      </CardFooter>
    </Card>
  );
}
