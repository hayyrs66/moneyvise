"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

// Define the Zod schema
const formSchema = z.object({
  financial_tips: z.boolean().default(false),
});

const SwitchForm = () => {
  // Use useForm hook with zodResolver for validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      financial_tips: false,
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
  };

  return (
    <div className="w-full border-white/10 bg-indigo-300 border p-4 rounded-lg mt-10">
      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="financial_tips"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Consejos Financieros</FormLabel>
                  <FormDescription>
                    Activa o desactiva los consejos financieros para recibir notificaciones.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Guardar</Button>
        </form>
      </Form>
      {/* ---- Form */}
    </div>
  );
};

export default SwitchForm;
