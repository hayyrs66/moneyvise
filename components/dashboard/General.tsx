import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";

const General = () => {
  return (
    <>
      {/* dashboard content */}
      <div className="w-full h-full px-10">
        {/* Presupuesto asignado*/}

        <div className="flex gap-5">
          {/* caja 1 */}
          <div
            className="w-fit min-w-60 mt-10 border border-white/15 rounded-md
            p-5"
          >
            <div className="flex w-full justify-between gap-5">
              <h3 className="text-white/50 text-sm tracking-tight font-medium">
                Presupuesto Asignado
              </h3>
              <FaMoneyBill1Wave
                className="text-white/50"
                width={5}
                height={5}
              />
            </div>
            <h4 className="text-white text-2xl tracking-tight font-bold">
              Q1200
            </h4>
          </div>
          {/* caja 2 */}
          <div
            className="w-fit min-w-60 mt-10 border border-white/15 rounded-md
            p-5"
          >
            <div className="flex w-full justify-between gap-5">
              <h3 className="text-white/50 text-sm tracking-tight font-medium">
                Saldo Total
              </h3>
              <MdAccountBalance
                className="text-white/50"
                width={5}
                height={5}
              />
            </div>
            <h4 className="text-white text-2xl tracking-tight font-bold">
              Q1200
            </h4>
          </div>
        </div>
      </div>
      {/*  Recent activity */}
      <div className="flex gap-5">
        {/* recent incomes */}
        <div className="border border-white/15 p-5 w-fit min-w-[500px] mt-10 rounded-lg">
          <div className="p-2 rounded-lg">
            <h3 className="text-white tracking-tighter font-bold">
              Ingresos Recientes
            </h3>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Tuviste 3 ingresos recientemente.
            </p>
          </div>
          {/* income 1 */}
          <div className="mt-5 bg-white/5 p-5 rounded-lg">
            <div className="flex justify-between">
              <h4 className="text-white tracking-tighter font-medium text-normal">
                Marketplace
              </h4>
              <span className="text-green-400 tracking-tighter font-medium text-normal">
                Q800
              </span>
            </div>
            {/*  Etiqueta*/}
            <div className="flex bg-yellow-400/10 w-fit px-2 rounded-lg justify-center items-center gap-2 mt-2">
              <div className="w-[4px] h-[4px] rounded full bg-yellow-300" />
              <span className="text-yellow-300 mt-1 text-xs tracking-tight font-medium">
                Venta
              </span>
            </div>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Venta de teclado.
            </p>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              15/05/2024 | 19:24 horas
            </p>
          </div>
          {/* income 2 */}
          <div className="mt-5 bg-white/5 p-5 rounded-lg">
            <div className="flex justify-between">
              <h4 className="text-white tracking-tighter font-medium text-normal">
                Fiverr
              </h4>
              <span className="text-green-400 tracking-tighter font-medium text-normal">
                Q4900
              </span>
            </div>
            {/*  Etiqueta*/}
            <div className="flex bg-green-400/10 w-fit px-2 rounded-lg justify-center items-center gap-2 mt-2">
              <div className="w-[4px] h-[4px] rounded full bg-green-300" />
              <span className="text-green-300 mt-1 text-xs tracking-tight font-medium">
                Salario
              </span>
            </div>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Proyecto vendido en Fiverr.
            </p>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              15/05/2024 | 19:24 horas
            </p>
          </div>
          {/* income 3 */}
          <div className="mt-5 bg-white/5 p-5 rounded-lg">
            <div className="flex justify-between">
              <h4 className="text-white tracking-tighter font-medium text-normal">
                Banco Industrial
              </h4>
              <span className="text-green-400 tracking-tighter font-medium text-normal">
                Q120
              </span>
            </div>
            {/*  Etiqueta*/}
            <div className="flex bg-blue-400/10 w-fit px-2 rounded-lg justify-center items-center gap-2 mt-2">
              <div className="w-[4px] h-[4px] rounded full bg-blue-300" />
              <span className="text-blue-300 mt-1 text-xs tracking-tight font-medium">
                Movimiento Bancario
              </span>
            </div>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Transacción.
            </p>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              15/05/2024 | 19:24 horas
            </p>
          </div>
        </div>

        {/* recent outcomes */}
        <div className="border border-white/15 p-5 w-fit min-w-[500px] mt-10 rounded-lg">
          <div className="p-2 rounded-lg">
            <h3 className="text-white tracking-tighter font-bold">
              Gastos Recientes
            </h3>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Tuviste 3 gastos recientemente.
            </p>
          </div>
          {/* outcome 1 */}
          <div className="mt-5 bg-white/5 p-5 rounded-lg">
            <div className="flex justify-between">
              <h4 className="text-white tracking-tighter font-medium text-normal">
                Music Pro
              </h4>
              <span className="text-red-400 tracking-tighter font-medium text-normal">
                Q652
              </span>
            </div>
            {/*  Etiqueta*/}
            <div className="flex bg-purple-400/10 w-fit px-2 rounded-lg justify-center items-center gap-2 mt-2">
              <div className="w-[4px] h-[4px] rounded full bg-purple-300" />
              <span className="text-purple-300 mt-1 text-xs tracking-tight font-medium">
                Ocio
              </span>
            </div>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Cable para Guitarra.
            </p>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              15/05/2024 | 19:24 horas
            </p>
          </div>
          {/* outcome 2 */}
          <div className="mt-5 bg-white/5 p-5 rounded-lg">
            <div className="flex justify-between">
              <h4 className="text-white tracking-tighter font-medium text-normal">
                Gitane
              </h4>
              <span className="text-red-400 tracking-tighter font-medium text-normal">
                Q35
              </span>
            </div>
            {/*  Etiqueta*/}
            <div className="flex bg-pink-400/10 w-fit px-2 rounded-lg justify-center items-center gap-2 mt-2">
              <div className="w-[4px] h-[4px] rounded full bg-pink-300" />
              <span className="text-pink-300 mt-1 text-xs tracking-tight font-medium">
                Comida y Bebida
              </span>
            </div>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Mocca Dream 30z.
            </p>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              15/05/2024 | 19:24 horas
            </p>
          </div>
          {/* outcome 3 */}
          <div className="mt-5 bg-white/5 p-5 rounded-lg">
            <div className="flex justify-between">
              <h4 className="text-white tracking-tighter font-medium text-normal">
                Banco Industrial
              </h4>
              <span className="text-red-400 tracking-tighter font-medium text-normal">
                Q200
              </span>
            </div>
            {/*  Etiqueta*/}
            <div className="flex bg-blue-400/10 w-fit px-2 rounded-lg justify-center items-center gap-2 mt-2">
              <div className="w-[4px] h-[4px] rounded full bg-blue-300" />
              <span className="text-blue-300 mt-1 text-xs tracking-tight font-medium">
                Movimiento Bancario
              </span>
            </div>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              Transacción.
            </p>
            <p className="text-white/50 mt-1 text-sm tracking-tight font-medium">
              15/05/2024 | 19:24 horas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
