export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // get size of holberton class
  get size() {
    return this._size;
  }

  // set size value
  set size(value) {
    this._size = value;
  }

  // get location
  get location() {
    return this._location;
  }

  // set location value
  set location(value) {
    this._location = value;
  }

  // class is cast into a Number, it should return the size
  // class is cast into a String, it should return the location
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
