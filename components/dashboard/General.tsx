import { FaMoneyBill1Wave } from "react-icons/fa6";
import Box from "./general/Box";
import { MdAccountBalance } from "react-icons/md";
import Income from "./general/Income";
import Outflow from "./general/Outflow";

const General = () => {
  return (
    <>
      {/* dashboard content */}
      <div className="w-full h-full flex gap-5">
        {/* Presupuesto asignado*/}
        <Box
          title="Presupuesto"
          amount={1280}
          icon={
            <FaMoneyBill1Wave className="text-white/50" width={5} height={5} />
          }
        />
        <Box
          title="Saldo Total"
          amount={425}
          icon={
            <MdAccountBalance className="text-white/50" width={5} height={5} />
          }
        />
      </div>
      {/*  Recent activity */}
      <div className="flex gap-5">
        {/* recent incomes */}
        <Income />
        {/* recent outcomes */}
        <Outflow />
      </div>
    </>
  );
};

export default General;
