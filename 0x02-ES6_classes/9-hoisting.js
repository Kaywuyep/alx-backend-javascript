// Define the HolbertonClass class before its usage

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

// Define the StudentHolberton class before its usage
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) { // Fixed: Added holbertonClass parameter
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass; // Fixed: Used the provided holbertonClass parameter
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass; // Fixed: Return the _holbertonClass property
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`; // Fixed: Used 'this' instead of 'self'
  }
}

// Define HolbertonClass instances
const class2019 = new HolbertonClass(2019, 'San Francisco'); // Moved above its usage
const class2020 = new HolbertonClass(2020, 'San Francisco'); // Moved above its usage

// Define StudentHolberton instances
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export the list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
