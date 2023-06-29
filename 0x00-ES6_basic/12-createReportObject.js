export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees:
      {},
    getNumberOfDepartments(departments) {
      return Object.keys(departments).length;
    },
  };
  for (const depts in employeesList) {
    if (Object.prototype.hasOwnProperty.call(employeesList, depts)) {
      reportObject.allEmployees[depts] = employeesList[depts];
    }
  }
  return reportObject;
}
