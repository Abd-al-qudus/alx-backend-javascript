export default function iterateThroughObject(reportWitIterator) {
  let employeeString = '';
  for (const employee of reportWitIterator) {
    employeeString += `${employee} | `;
  }

  employeeString = employeeString.slice(0, -3);
  return employeeString;
}
