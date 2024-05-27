"use client";

import { LineChart } from "@tremor/react";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

const chartdata = [
  {
    date: "Jan 22",
    Ingresos: 2890,
    Gastos: 2338,
  },
  {
    date: "Feb 22",
    Ingresos: 2756,
    Gastos: 2103,
  },
  {
    date: "Mar 22",
    Ingresos: 3322,
    Gastos: 2194,
  },
  {
    date: "Apr 22",
    Ingresos: 3470,
    Gastos: 2108,
  },
  {
    date: "May 22",
    Ingresos: 3475,
    Gastos: 1812,
  },
  {
    date: "Jun 22",
    Ingresos: 3129,
    Gastos: 1726,
  },
  {
    date: "Jul 22",
    Ingresos: 3490,
    Gastos: 1982,
  },
  {
    date: "Aug 22",
    Ingresos: 2903,
    Gastos: 2012,
  },
  {
    date: "Sep 22",
    Ingresos: 2643,
    Gastos: 2342,
  },
  {
    date: "Oct 22",
    Ingresos: 2837,
    Gastos: 2473,
  },
  {
    date: "Nov 22",
    Ingresos: 2954,
    Gastos: 3848,
  },
  {
    date: "Dec 22",
    Ingresos: 3239,
    Gastos: 3736,
  },
];

const valueFormatter = function (number: number) {
  return "Q " + new Intl.NumberFormat("us").format(number).toString();
};

function Reportes() {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <div className="flex items-center justify-between">
        <Popover>
          <PopoverTrigger asChild className="dark">
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] dark justify-start text-muted-foreground text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 dark">
            <Calendar
              mode="single"
              className="dark"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button>
          <span>Export Data</span>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* Grid container 1 */}
        <div className="flex flex-col border border-white/10 rounded-lg p-5 mt-3">
          <div className=" flex flex-col">
            <h4 className="text-green-300 flex gap-2 items-center font-semibold text-lg tracking-tight">
              Flujo de Efectivo
            </h4>
            {/* Grid */}
            <p className="text-white/50 tracking-tight font-normal text-lg">
              Diferencia entre Ingresos y Gastos.{" "}
            </p>
          </div>
          <LineChart
            className="mt-4 h-72"
            data={chartdata}
            index="date"
            yAxisWidth={65}
            categories={["Ingresos", "Gastos"]}
            colors={["green-300", "red"]}
            valueFormatter={valueFormatter}
          />
        </div>
        {/* Grid container 2 */}
        <div className="flex flex-col border border-white/10 rounded-lg p-5 mt-3">
          <div className=" flex flex-col">
            <h4 className="text-cyan-300 flex gap-2 items-center font-semibold text-lg tracking-tight">
              Flujo de Presupuesto
            </h4>
            {/* Grid */}
            <p className="text-white/50 tracking-tight font-normal text-lg">
              Control de Presupuesto.{" "}
            </p>
          </div>
          <LineChart
            className="mt-4 h-72"
            data={chartdata}
            index="date"
            yAxisWidth={65}
            categories={["Ingresos", "Gastos"]}
            colors={["cyan-300", "red"]}
            valueFormatter={valueFormatter}
          />
        </div>
      </div>
    </>
  );
}

export default Reportes;
