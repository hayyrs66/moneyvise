import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Nombre es requerido"),
  amount: z.number(),
  description: z.string().min(1, "Nombre es requerido"),
  date: z.date(),
});

type FormData = z.infer<typeof formSchema>;

export function DialogPayment({ children }: { children: ReactNode }) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
      description: "",
      date: new Date(),
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Handle form data
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark">
        <DialogHeader>
          <DialogTitle className="text-white">Agregar Pago</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Nombre
            </Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  id="name"
                  placeholder="Ej. Depósito"
                  className="col-span-3 text-white/80"
                  {...field}
                />
              )}
            />
            {errors.name && <span className="text-red-500 col-span-4">{errors.name.message}</span>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right text-white">
              Monto
            </Label>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <Input
                  id="amount"
                  placeholder="Ej. 5000"
                  className="col-span-3 text-white/80"
                  type="number"
                  {...field}
                />
              )}
            />
            {errors.amount && <span className="text-red-500 col-span-4">{errors.amount.message}</span>}
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="description" className="text-right text-white">
              Descripción
            </Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  className="resize-none w-full text-white/80"
                  placeholder="Ej. Depósito a razón de deuda pendiente."
                  {...field}
                />
              )}
            />
            {errors.description && <span className="text-red-500">{errors.description.message}</span>}
          </div>
          <div className="flex w-full items-center gap-4">
            <Label htmlFor="date" className="text-right text-white">
              Fecha Pago
            </Label>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePickerForm value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.date && <span className="text-red-500">{errors.date.message}</span>}
          </div>
          <DialogFooter>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
