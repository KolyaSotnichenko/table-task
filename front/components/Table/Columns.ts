import { BasicData } from "@/share/table.types";
import { ColumnDef } from "@tanstack/react-table";

export const columnDef: ColumnDef<unknown, BasicData>[] = [
  {
    accessorKey: "date",
    header: "Дата отримання",
  },
  {
    accessorKey: "numberOfHdd",
    header: "Номер жорсткого диску",
  },
  {
    header: "Відомості про рух носія",
    columns: [
      {
        accessorKey: "fullNameTransmitted",
        header: "ПІБ та підпис працівника, що передав носій",
      },
      {
        accessorKey: "fullNameReceived",
        header: "ПІБ та підпис працівника, який отримав носій",
      },
    ],
  },
  {
    accessorKey: "numberOfDestroyAct",
    header: "Номер Акту про знищення жорсткого диску",
  },
  {
    accessorKey: "notes",
    header: "Примітки",
  },
];
