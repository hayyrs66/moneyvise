"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  notificationDays: z.string().nonempty("Please select a notification day."),
})

export function NotificationsSelector() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full h-full">
        <FormField
          control={form.control}
          name="notificationDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notificaciones</FormLabel>
              <FormDescription>
                Configura la antelación de tus notificaciones antes del pago estipulado.
              </FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[180px] dark text-white/80">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="dark">
                  <SelectGroup>
                    <SelectLabel>Días</SelectLabel>
                    <SelectItem value="1">1 Día</SelectItem>
                    <SelectItem value="3">3 Días</SelectItem>
                    <SelectItem value="5">5 Días</SelectItem>
                    <SelectItem value="7">7 Días</SelectItem>
                    <SelectItem value="9">9 Días</SelectItem>
                    <SelectItem value="11">11 Días</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  )
}

export default NotificationsSelector;
