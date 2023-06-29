export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees:
      {},
    getNumberOfDepartments(departments) {
      return Object.keys(departments).length;
    },
  };
  for (const depts of employeesList) reportObject.allEmployees[depts] = employeesList[depts];
  return reportObject;
}
