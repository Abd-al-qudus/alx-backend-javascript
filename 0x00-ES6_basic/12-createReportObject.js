export default function createReportObject (employeesList) {
  const reportObject = {
    'allEmployees': 
      {}, 
    getNumberOfDepartments(departments){
      return Object.keys(departments).length;
    }
  };
  for (let depts in employeesList)
    reportObject['allEmployees'][depts] = employeesList[depts];
  return reportObject;
}