import { Button } from "../ui/button";
import { DialogDemo } from "./settings/DialogForm";
import { DialogIncome } from "./settings/DialogIncome";
import { DialogOutflow } from "./settings/DialogOutflow";
import { DialogPayment } from "./settings/DialogPayment";
import { InputForm } from "./settings/InputForm";

const Pagos = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <div className="w-full border-white/10 border p-4 rounded-lg">
          <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
            Presupuesto
          </h4>
          <h3 className="text-white/50 text-lg tracking-tight mb-2 font-medium">
            Añade o modifica tu presupuesto mensual
          </h3>
          <InputForm />
        </div>
        <div className="flex w-full gap-5 mt-10">
          <div className="w-full border-white/10 border p-4 rounded-lg">
            <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
              Ingresos
            </h4>
            <h3 className="text-white/50 text-lg tracking-tight mb-2 font-medium">
              Añade un ingreso.
            </h3>
            <DialogIncome>
              <Button>Añadir</Button>
            </DialogIncome>
          </div>
          {/* Gastos */}
          <div className="w-full border-white/10 border p-4 rounded-lg">
            <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
              Gastos
            </h4>
            <h3 className="text-white/50 text-lg tracking-tight mb-2 font-medium">
              Añade un gasto.
            </h3>
            <DialogOutflow>
              <Button>Añadir</Button>
            </DialogOutflow>
          </div>
        </div>
      </div>
      {/* Grid 2 */}
      <div>
        <div className="w-full border-white/10 border p-4 rounded-lg">
          <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
            Categorías
          </h4>
          <h3 className="text-white/50 text-lg tracking-tight mb-2 font-medium">
            Añade una categoría pesonalizada.
          </h3>
          <DialogDemo>
            <Button className="light">Añadir</Button>
          </DialogDemo>
        </div>
        {/* pagos programados */}

        <div className="w-full border-white/10 border p-4 rounded-lg mt-10">
        <h4 className="text-white flex gap-2 items-center font-medium text-lg tracking-tight">
            Programar pagos.
          </h4>
          <h3 className="text-white/50 text-lg tracking-tight mb-2 font-medium">
            Programa tus pagos mensuales.
          </h3>
          <DialogPayment>
            <Button className="light">Añadir</Button>
          </DialogPayment>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
