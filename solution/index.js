module.exports = class {
  /**
   * The `MySet` constructor lets you create MySet objects that store unique values of any type, whether primitive values or object references.
   * @param {Iterable} iterable If an iterable object is passed, all of its elements will be added to the new `MySet`
   * @returns A new `MySet` object
   */
  constructor(iterable) {
    this._list = [];

    if (iterable && Array.isArray(iterable) && iterable.length !== 0) {
      for (const item of iterable) {
        this.add(item);
      }
    }

    return this;
  }

  /**
   * The `add()` method appends a new element with a specified value to the end of a `MySet` object.
   * @param {*} value - The value of the element to add to the `MySet` object
   * @returns The `MySet` object with added value
   */
  add(value) {
    let notIncluded = true;

    for (const item of this._list) {
      if (Object.is(item, value)) {
        notIncluded = false;
      }
    }

    if (notIncluded) {
      this._list.push(value);
    }

    return this;
  }

  /**
   * The `clear()` method removes all elements from a `MySet` object.
   */
  clear() {
    this._list = [];
  }

  /**
   * The `delete()` method removes a specified value from a `MySet` object, if it presented.
   * @param {*} value The value to remove from `MySet` object
   * @returns {boolean} Returns `true` if value was already in `MySet` object; otherwise `false`
   */
  delete(value) {
    let isDeleted = false;

    this._list = this._list.filter(item => {
      const condition = item !== value;
      if (!condition) {
        isDeleted = true;
      }
      return condition;
    });
    
    return isDeleted;
  }

  /**
   * The `entries()` method returns a new Iterator object that contains an array of `[value, value]` for each element in the `MySet` object.
   * @returns {Iterator} Iterator object
   */
  *entries() {
    for (const item of this._list) {
      yield [item, item];
    }
  }

  /**
   * Function to execute on each element:
   * @callback forEachCallback
   * @param {*} item The current element being processed in the array
   */
  /**
   * The forEach() method executes a provided function once for each array element.
   * @param {forEachCallback} callbackFn 
   * @param {object} thisArg Value to use as `this` when executing `callbackFn`
   */
  forEach(callbackFn, thisArg) {
    for (const item of this._list) {
      callbackFn.bind(thisArg)(item);
    }
  }

  /**
   * The `has()` method returns a boolean indicating whether an element with the specified value exists in a `MySet` object or not.
   * @param {*} value The value to test for presence in the `MySet` object
   * @returns Returns `true` if an element with the specified value exists in the `MySet` object; otherwise `false`
   */
  has(value) {
    return this._list.includes(value);
  }

  /**
   * The `keys()` method returns a new Iterator object that contains the keys for each element in the `MySet` object.
   * @returns {Iterator} A new iterator object containing the keys for each element in the given `MySet`
   */
  keys() {
    return this[Symbol.iterator]();
  }

  /**
   * The size accessor property returns the number of (unique) elements in a `MySet` object.
   * @returns {number} The value of size is an integer representing how many entries the `MySet` object has
   */
  get size() {
    return this._list.length;
  }

  /**
   * The `values()` method returns a new Iterator object that contains the values for each element in the `MySet` object.
   * @returns {Iterator} A new iterator object containing the values for each element in the given `MySet`
   */
  values() {
    return this[Symbol.iterator]();
  }

  /**
   * @returns {Iterator}
   */
  valueOf() {
    return this;
  }

  *[Symbol.iterator]() {
    for (const item of this._list) {
      yield item;
    }
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }
}
