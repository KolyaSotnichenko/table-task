"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTableData } from "@/hooks/useTableData";
import { DialogClose } from "../ui/dialog";

const formSchema = z.object({
  date: z.string(),
  numberOfHdd: z.string().min(6, {
    message: "Номер жорсткого диску має бути що найменше 6 символів",
  }),
  fullNameTransmitted: z.string().min(6, {
    message:
      "ПІБ працівника, що передав носій, має бути що найменше 6 символів",
  }),
  fullNameReceived: z.string().min(6, {
    message:
      "ПІБ працівника, який отримав носій, має бути що найменше 6 символів",
  }),

  numberOfDestroyAct: z.string().min(6, {
    message:
      "Номер акту про знищення жорсткого диску,має бути що найменше 6 символів",
  }),
  notes: z.string().max(25, {
    message: "Примітка не має перевищувати 25 символів",
  }),
});

export const CreateReportForm = () => {
  const { createReportAsync } = useTableData();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      numberOfHdd: "",
      fullNameTransmitted: "",
      fullNameReceived: "",
      numberOfDestroyAct: "",
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createReportAsync(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата отримання</FormLabel>
              <FormControl>
                <Input placeholder="01.01.2023" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfHdd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер жорсткого диску</FormLabel>
              <FormControl>
                <Input placeholder="hdd12345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullNameTransmitted"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ПІБ працівника, що передав носій</FormLabel>
              <FormControl>
                <Input placeholder="Іванов Іван Іванович" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullNameReceived"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ПІБ працівника, який отримав носій</FormLabel>
              <FormControl>
                <Input placeholder="Петров Петро Петрович" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfDestroyAct"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер акту про знищення жорсткого диску</FormLabel>
              <FormControl>
                <Input placeholder="12345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Примітки</FormLabel>
              <FormControl>
                <Input placeholder="Не обов`язково" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Створити</Button>
      </form>
    </Form>
  );
};
