const express = require('express');
const fs = require('fs');

const pathToFile = process.argv[2];
const port = 1245;
const app = express();

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const sortedStudentsObject = {};
        const studentList = data
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
        const output = [`Number of students: ${studentList.length}`];
        Object.keys(sortedStudentsObject).forEach((field) => {
          output.push(`Number of students in ${field}: ${sortedStudentsObject[field].length}. List: ${sortedStudentsObject[field].join(', ')}`);
        });
        console.log(output.join('\n'));
        resolve(output.join('\n'));
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(pathToFile).then((data) => {
    response.setHeader('Content-Type', 'test/plain');
    response.statusCode = 200;
    const output = ['This is the list of our students', data];
    response.send(output.join('\n'));
  }).catch((error) => {
    response.setHeader('Content-Type', 'test/plain');
    response.statusCode = error.statusCode;
    response.send(error.data);
  });
});

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
