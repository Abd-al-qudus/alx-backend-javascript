// Step 1: Define the RowID type
type RowID = number;

// Step 2: Define the RowElement interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export { RowID, RowElement };
