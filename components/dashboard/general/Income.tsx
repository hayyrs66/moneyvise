
const Income = () => {
  return (
    <div className="border border-green-300/30 p-5 w-fit min-w-[500px] rounded-lg">
          <div className=" rounded-lg">
            <h3 className="text-white tracking-tighter font-bold">
              Ingresos
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
  )
}

export default Income