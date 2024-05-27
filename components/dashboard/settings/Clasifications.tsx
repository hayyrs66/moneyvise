import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectClasification({ value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] dark text-white/80">
        <SelectValue placeholder="Seleccionar" />
      </SelectTrigger>
      <SelectContent className="dark">
        <SelectGroup>
          <SelectLabel>Categorías</SelectLabel>
          <SelectItem value="venta">Venta</SelectItem>
          <SelectItem value="salario">Salario</SelectItem>
          <SelectItem value="movimiento_bancario">Banco</SelectItem>
          <SelectItem value="ocio">Ocio</SelectItem>
          <SelectItem value="comida_y_bebida">Comida y Bebida</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
