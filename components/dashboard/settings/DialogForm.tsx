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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormData = z.infer<typeof formSchema>;
// Definir el esquema del formulario usando zod
const formSchema = z.object({
  name: z.string().nonempty("El nombre es requerido"),
});

export function DialogDemo({ children }: { children?: React.ReactNode }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Manejar los datos del formulario
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button>Open dialog</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark">
        <DialogHeader className="dark">
          <DialogTitle className="text-white">Agregar Categoría</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
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
                  placeholder="Ej. Música"
                  className="col-span-3 text-white/80"
                  {...field}
                />
              )}
            />
            {errors.name && <span className="text-red-500 col-span-4">{errors.name.message}</span>}
          </div>
          <DialogFooter>
            <Button type="submit" className="light">
              Añadir
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
