const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(dataPath, 'utf-8');
  const fileLines = fileContent.trim().split('\n');

  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1].trim();

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    const studentEntry = {};
    studentPropNames.forEach((propName, idx) => {
      studentEntry[propName.trim()] = studentPropValues[idx].trim();
    });

    studentGroups[field].push(studentEntry);
  }

  let totalStudents = 0;
  for (const group of Object.values(studentGroups)) {
    totalStudents += group.length;
  }

  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map(student => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
