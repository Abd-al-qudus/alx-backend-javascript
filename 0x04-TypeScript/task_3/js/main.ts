// Step 1: Create a triple slash directive to include dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Step 2: Import the RowID and RowElement types from interface.ts
import { RowID, RowElement } from "./interface";

// Step 3: Import the CRUD functions from crud.js as CRUD
import * as CRUD from "./crud";

// Step 4: Create an object called row with the type RowElement and set the fields
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Step 5: Create a const variable named newRowID with the type RowID and assign the value of the insertRow command
const newRowID: RowID = CRUD.insertRow(row);

// Step 6: Create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Step 7: Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
