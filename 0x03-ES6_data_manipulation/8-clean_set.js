// It accepts two arguments: a set (Set) and a startString (String)
export default function cleanSet(set, startString) {
   if (startString === undefined || startString.length === 0) {
    return '';
  }
  // Use filter and map to process matching set values
  return [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length)) // Extract remaining part
    .join('-');
}
