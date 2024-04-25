import ClassRoom from './0-classroom';

// Define and export the initializeRooms function
export default function initializeRooms() {
  const classA = new ClassRoom(19);
  const classB = new ClassRoom(20);
  const classC = new ClassRoom(34);
  const newList = [classA, classB, classC];
  return (newList);
}
