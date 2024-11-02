"use client";

import { Incidente } from "@/models/incidentes";

import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";

export function TablaIncidentes({
  rowData,
  colDefs,
}: {
  rowData: Incidente[];
  colDefs: ColDef<Incidente>[];
}) {
  return (
    <div className="ag-theme-quartz mx-auto h-[calc(49px+42px*10+1.5px)]">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 30, 50]}
      />
    </div>
  );
}
