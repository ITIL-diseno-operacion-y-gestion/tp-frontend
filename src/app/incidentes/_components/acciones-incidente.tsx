import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CustomCellRendererProps } from "ag-grid-react";
import { Edit, Eye } from "lucide-react";

export function AccionesIncidente(params: CustomCellRendererProps) {
  const id = params.value;
  return (
    <div className="flex items-end gap-2 mt-0.5">
      <Link href={`/incidentes/${id}`}>
        <Button size="icon" variant="outline" className="size-8">
          <Eye className="size-4" />
        </Button>
      </Link>
      <Link href={`/incidentes/${id}/edit`}>
        <Button size="icon" variant="outline" className="size-8">
          <Edit className="size-4" />
        </Button>
      </Link>
    </div>
  );
}
