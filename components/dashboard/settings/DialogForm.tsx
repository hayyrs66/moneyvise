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

export function DialogDemo({ children }: { children?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button>Open dialog</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark">
        <DialogHeader className="dark">
          <DialogTitle className="text-white">Agregar Categoría</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Nombre
            </Label>
            <Input
              id="name"
              placeholder="Ej. Música"
              className="col-span-3 text-white/80"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="light">
            Añadir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
