export default function createIteratorObject(report) {
  const iterator = (function* _() {
    for (const depts of Object.values(report.allEmployees)) {
      for (const employee of depts) {
        yield employee;
      }
    }
  })();
  return iterator;
}
