const fs = require('fs');
/**
 * read file synchronously
 * @param {String} path
 */

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const sortedStudentsObject = {};
  const studentList = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  studentList.shift();
  studentList.forEach((student) => {
    const separatedStudents = student.split(',');
    const field = separatedStudents[separatedStudents.length - 1];
    if (!sortedStudentsObject[field]) {
      sortedStudentsObject[field] = [];
    }
    sortedStudentsObject[field].push(separatedStudents[0]);
  });
  console.log(`Number of students: ${studentList.length}`);
  Object.keys(sortedStudentsObject).forEach((field) => {
    console.log(`Number of students in ${field}: ${sortedStudentsObject[field].length}. List: ${sortedStudentsObject[field].join(', ')}`);
  });
}

module.exports = countStudents;
