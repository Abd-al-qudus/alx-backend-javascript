export default function createEmployeesObject(departmentName, employees) {
  const employeeDict = {
    [departmentName]: employees,
  };
  return employeeDict;
}
