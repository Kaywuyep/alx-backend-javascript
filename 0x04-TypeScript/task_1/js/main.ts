interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
// task2 interface named directors that extends Teachers
interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log(teacher3)
console.log(director1)


function printTeacher(firstName: string, lastName:string) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        throw new TypeError('arguments must be string')
    }
    return `${firstName.charAt(0)}. ${lastName}`    
}
// interface describing print teacher function
interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}
const printTeacherFunction: printTeacherFunction = printTeacher;

console.log(printTeacherFunction("John", "Doe"));

interface IStudent {
    firstName: string;
    lastName: string;
}
interface StudentClassInterface {
    new (firstName: string, lastName: string): IStudent
}
//define the student class
class StudentClass implements IStudent {
    constructor(public firstName: string, public lastName: string) {}
    
        
    workOnHomework() {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
    
}

const student: IStudent = new StudentClass("John", "Doe");

console.log(student.workOnHomework());
console.log(student.displayName()); 