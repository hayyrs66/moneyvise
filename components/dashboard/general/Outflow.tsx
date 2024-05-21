const Outflow = () => {
  return (
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
  );
};

export default Outflow;
