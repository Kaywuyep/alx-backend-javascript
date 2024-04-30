// Define the interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two instances of Student
const studentA: Student = {
    firstName: 'Kate',
    lastName: 'Wuyep',
    age: 28,
    location: 'Nigeria'
};

const studentB: Student = {
    firstName: 'Martin',
    lastName: 'Peter',
    age: 29,
    location: 'Kenya'
};

// Create an array containing the two students
const studentsList: Student[] = [studentA, studentB];

// Render table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");

    studentsList.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
});
