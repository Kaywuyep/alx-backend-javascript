export default function createInt8TypedArray(length, position, value) {
  // Validate position within array bounds
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new Int8Array of specified length
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer, 0, length);

  // Set the value at the specified position
  int8View.set([value], position);

  return new DataView(buffer);
}
