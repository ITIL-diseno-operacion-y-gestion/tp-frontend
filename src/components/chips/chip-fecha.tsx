import { formatDate } from "@/lib/utils";

import { CalendarIcon } from "lucide-react";

export const ChipFecha = ({ fecha }: { fecha: Date | string }) => {
  return (
    <div className="flex items-center">
      <CalendarIcon className="mr-2 h-4 w-4" />
      {formatDate(fecha)}
    </div>
  );
};
