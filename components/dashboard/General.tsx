import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaMoneyBills,
} from "react-icons/fa6";
import Box from "./general/Box";
import { MdAccountBalance } from "react-icons/md";
import Income from "./general/Income";
import Outflow from "./general/Outflow";
import { TbMoneybag } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BarChart } from "@tremor/react";
import { chartdata } from "@/app/constants";

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

const General = () => {
  return (
    <>
      {/*  General resume */}
      <div className="w-full h-full flex flex-col">
        <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
          Resumen Financiero General
        </h4>
        <div className="flex gap-5 mt-3">
          <Box
            title="Saldo Total"
            amount={425}
            icon={
              <MdAccountBalance
                className="text-blue-300"
                width={10}
                height={10}
              />
            }
          />
          <Box
            title="Ingresos Totales"
            amount={1280}
            icon={
              <FaArrowTrendUp
                className="text-green-300"
                width={10}
                height={10}
              />
            }
          />
          <Box
            title="Gastos Totales"
            amount={1280}
            icon={
              <FaArrowTrendDown
                className="text-red-300"
                width={10}
                height={10}
              />
            }
          />
          <Box
            title="Balance"
            amount={1280}
            icon={
              <FaMoneyBills
                className="text-yellow-300"
                width={10}
                height={10}
              />
            }
          />
        </div>
      </div>

      {/* Budget */}

      <div className="flex flex-col mt-10">
        <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
          Seguimiento de Presupuesto
        </h4>
        <div className="flex gap-5 mt-3">
          <Box
            title="Presupuesto Mensual"
            amount={1280}
            icon={
              <TbMoneybag className="text-green-300" width={10} height={10} />
            }
          />
          <Box
            title="Gastos Actual vs Presupuesto"
            amount={1280}
            icon={
              <GiReceiveMoney className="text-red-300" width={10} height={10} />
            }
          />
        </div>
      </div>

      {/* outflow category chart*/}

      <div className=" flex flex-col mt-10">
        <h4 className="text-green-300 bg-green-300/10 w-fit px-2 py-1 rounded-lg flex gap-2 items-center font-medium text-lg tracking-tight">
          Gastos Por Categoría
        </h4>
        <div className="flex gap-5 border border-white/10 rounded-lg p-2 mt-3">
          <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Gastos por Categoría"]}
            colors={["green-300"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </div>
      </div>

      {/*  Recent activity */}
      <div className="flex flex-col mt-10">
        <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
          Ingresos y Gastos Recientes
        </h4>
        <div className="flex gap-5 mt-3">
          <Income />
          <Outflow />
        </div>
      </div>
    </>
  );
};

export default General;
