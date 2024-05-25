import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode } from "react";
import { SelectClasification } from "./Clasifications";
import { DatePickerForm } from "./DatePickerForm";

export function DialogPayment({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark">
        <DialogHeader>
          <DialogTitle className="text-white">Agregar Pago</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Nombre
            </Label>
            <Input
              id="name"
              placeholder="Ej. Depósito"
              className="col-span-3 text-white/80"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Monto
            </Label>
            <Input
              id="name"
              placeholder="Ej. 5000"
              className="col-span-3 text-white/80"
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="username" className="text-right text-white">
              Descripción
            </Label>
            <Textarea
              className="resize-none w-full text-white/80"
              placeholder="Ej. Depósito a razón de deuda pendiente."
            />
          </div>
          <div className="flex w-full items-center gap-4">
            <Label htmlFor="username" className="text-right text-white">
              Fecha Pago
            </Label>
            <DatePickerForm />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
