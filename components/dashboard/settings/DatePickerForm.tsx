"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerFormProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

export function DatePickerForm({ value, onChange }: DatePickerFormProps) {
  const [date, setDate] = React.useState<Date | null>(value);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    const newDate = selectedDate ?? null;
    setDate(newDate);
    onChange(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal text-white/80",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Seleccionar Fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 dark">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={handleDateSelect}
          initialFocus
          className="dark"
        />
      </PopoverContent>
    </Popover>
  );
}
