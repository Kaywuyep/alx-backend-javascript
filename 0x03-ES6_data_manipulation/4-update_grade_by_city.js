export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    // Filter students for the specified city efficiently
    .filter((studentobj) => studentobj.location === city)
    // Update grades for matching students using map
    .map((student) => {
      // Find the matching grade for the student
      const matchingGrade = newGrade.find((grade) => grade.studentId === student.id);

      // If a matching grade is found, update the student's grade
      if (matchingGrade) {
        return {
          ...student, // Spread the existing student object
          grade: matchingGrade.grade, // Update the grade
        };
      }
      // If no matching grade is found, return the student object with 'N/A' grade
      return {
        ...student, // Spread the existing student object
        grade: 'N/A', // Set grade to 'N/A'
      };
    });
}
