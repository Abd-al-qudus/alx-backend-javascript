// Step 1: Export the insertRow function
export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  // Step 2: Export the deleteRow function
  export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
  }
  
  // Step 3: Export the updateRow function
  export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
    return rowId;
  }
  