// It accepts two arguments: a set (Set) and a startString (String)
export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  // Use filter and map to process matching set values
  return [...set]
    .filter((value) => (value !== undefined ? value.startsWith(startString) : ''))
    // Extract remaining part
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''))
    .join('-');
}
