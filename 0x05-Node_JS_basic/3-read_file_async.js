const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const studentsObject = {};
        const studentList = data
          .toString('utf-8')
          .trim()
          .split('\n');
        studentList.shift();
        studentList.forEach((student) => {
          const separatedStudents = student.split(',');
          const field = separatedStudents[separatedStudents.length - 1];
          if (!studentsObject[field]) {
            studentsObject[field] = [];
          }
          studentsObject[field].push(separatedStudents[0]);
        });
        const output = [`Number of students: ${studentList.length}`];
        Object.keys(studentsObject).forEach((field) => {
          output.push(`Number of students in ${field}: ${studentsObject[field].length}. List: ${studentsObject[field].join(', ')}`);
        });
        console.log(output.join('\n'));
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
