export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    // Filter students for the specified city efficiently
    .filter((studentobj) => studentobj.location === city)
    // Update grades for matching students using map
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

	// // Assign new grade or 'N/A' 
        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
