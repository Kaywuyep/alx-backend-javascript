// A weak map of endpoints and the number of calls made.
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Initialize endpointCall to 0 if not found in the WeakMap
  let endpointCall = weakMap.get(endpoint) || 0;
  endpointCall += 1; // Increment the number of calls
  weakMap.set(endpoint, endpointCall); // Update the number of calls in the WeakMap

  if (endpointCall >= 5) { // Check if the number of calls is greater than or equal to 5
    throw new Error('Endpoint load is high');
  }
}
