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
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the form schema using zod
const formSchema = z.object({
  name: z.string().min(1, "Nombre es requerido"),
  amount: z.number().min(1, "Monto es requerido"),
  description: z.string().min(1, "Descripción es requerida"),
  classification: z.string().min(1, "Clasificación es requerida"),
});

type FieldValues = z.infer<typeof formSchema>;

export function DialogOutflow({ children }: { children: ReactNode }) {
  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data); // Handle form data
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark">
        <DialogHeader>
          <DialogTitle className="text-white">Agregar Egreso</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-white">Nombre</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    id="name"
                    placeholder="Ej. Compra Amplificador"
                    className="col-span-3 text-white/80"
                    {...field}
                  />
                )}
              />
              {errors.name && <span className="text-red-500 col-span-4">{errors.name.message?.toString()}</span>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right text-white">Monto</Label>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    id="amount"
                    placeholder="Ej. 1000"
                    className="col-span-3 text-white/80"
                    {...field}
                    type="number"
                  />
                )}
              />
              {errors.amount && <span className="text-red-500 col-span-4">{errors.amount.message?.toString()}</span>}
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="description" className="text-right text-white">Descripción</Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    className="resize-none w-full text-white/80"
                    placeholder="Ej. Compra de Amplificador Marshall en DoMiSol"
                    {...field}
                  />
                )}
              />
              {errors.description && <span className="text-red-500">{errors.description.message?.toString()}</span>}
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="classification" className="text-right text-white">Clasificación</Label>
              <Controller
                name="classification"
                control={control}
                render={({ field }) => (
                  <SelectClasification value={field.value} onChange={field.onChange} />
                )}
              />
              {errors.classification && <span className="text-red-500">{errors.classification.message?.toString()}</span>}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
