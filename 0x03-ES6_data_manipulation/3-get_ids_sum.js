export default function getStudentIdsSum(students) {
  // Use the reduce function to iterate through the student list and sum their IDs
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
