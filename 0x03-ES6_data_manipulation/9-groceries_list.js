export default function groceriesList() {
  // that returns a map of groceries with the following items (name, quantity)
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(groceries);
}
