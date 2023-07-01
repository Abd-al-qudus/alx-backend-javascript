export default class HolbertonCourse {
  /**
     * Holberton school class implemented with setters and getters
     * for each attribute
     * @param {name} name
     * @param {length} length
     * @param {students} students
     */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter and setter
  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm === 'string') this._name = nm;
    else throw new TypeError('Name must be a string');
  }

  // length getter and setter
  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val === 'number') this.length = val;
    else throw new TypeError('Length must be a number');
  }

  // student getter and setter
  get students() {
    return this._students;
  }

  set students(stdArray) {
    if (stdArray instanceof Array && stdArray.every((std) => typeof std === 'string')) {
      this.students = stdArray;
    } else throw new TypeError('Students must be an array of strings');
  }
}
