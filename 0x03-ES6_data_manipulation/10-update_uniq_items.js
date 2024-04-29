// returns an updated map for all items with initial quantity at 1
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((element, key) => {
    if (element === 1) {
      map.set(key, 100);
    }
  });
}
