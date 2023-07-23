// Step 1: Import the RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface";

// Step 2: Declare the type declarations for the CRUD functions
declare module "crud" {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
