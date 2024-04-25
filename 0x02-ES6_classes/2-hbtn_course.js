export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.legth = length;
    this.students = students;
  }

  // get course name
  get name() {
    return this._name;
  }

  // set course name that must be a string
  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name must be a string');
    this._name = val;
  }

  // get course length
  get length() {
    return this._length;
  }

  // set course duration (length)
  set length(val) {
    if (!Number.isInteger(val)) throw new TypeError('length must be a number');
    this._length = val;
  }

  // get students name
  get students() {
    return this._students;
  }

  // set students as an array
  set students(val) {
    if (!Array.isArray(val)) throw new TypeError('students type must be an Array');
    this._students = val;
  }
}
