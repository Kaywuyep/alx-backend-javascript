export default function appendToEachArrayValue(array, appendString) {
  const MyArray = [];
  for (const item of array) {
    MyArray.push(appendString + item);
  }

  return MyArray;
}
