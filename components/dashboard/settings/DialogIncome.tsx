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
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectClasification } from "./Clasifications";

type FormData = z.infer<typeof formSchema>;

// Define the Zod schema
const formSchema = z.object({
  name: z.string().min(1, "Nombre es requerido"),
  amount: z.string().min(1, "Monto es requerido"),
  description: z.string().min(1, "Descripción es requerida"),
  classification: z.string().min(1, "Clasificación es requerida"),
});

export function DialogIncome({ children }: { children: ReactNode }) {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(formSchema),
  });


  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark">
        <DialogHeader>
          <DialogTitle className="text-white">Agregar Ingreso</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
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
                    placeholder="Ej. Pago de nómina"
                    className="col-span-3 text-white/80"
                    {...field}
                  />
                )}
              />
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
                    placeholder="Ej. 1000"
                    className="col-span-3 text-white/80"
                    {...field}
                  />
                )}
              />
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
                    id="description"
                    className="resize-none w-full text-white/80"
                    placeholder="Ej. Pago de nómina Eleks"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="classification" className="text-right text-white">
                Clasificación
              </Label>
              <Controller
                name="classification"
                control={control}
                render={({ field }) => (
                  <SelectClasification {...field} />
                )}
              />
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
