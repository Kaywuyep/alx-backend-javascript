export default function createIteratorObject(report) {
  const newarray = [];
  for (const item of Object.values(report.allEmployees)) {
    newarray.push(...item);
  }

  return newarray;
}
