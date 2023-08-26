const fs = require('fs');
const http = require('http');

const hostName = '127.0.0.1';
const port = '1245';
const path = process.argv[2];
/**
 * read file async
 * @param {String} path
 * @returns
 */
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
        // console.log(output);
        resolve(output.join('\n'));
      }
    });
  });
}

const app = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!\n');
  } else if (request.url === '/students') {
    countStudents(path)
      .then((data) => {
        response.statusCode = 200;
        response.write('This is the list of our students\n');
        response.write(Buffer.from(data));
        response.end();
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error.message);
      });
  } else {
    response.statusCode = 404;
    response.end('Not Found\n');
  }
});

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});

module.exports = app;
