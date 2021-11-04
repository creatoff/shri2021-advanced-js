const MySet = require('./solution');

describe('MySet class', function () {

  it('Contains only unique values', () => {

    const set = new MySet([4, 8, 15, 15, 16, 23, 42]);
    expect([...set]).toEqual([4, 8, 15, 16, 23, 42]);

  });

  it('Supports for-of loops', () => {

    const set = new MySet([1, 2, 3]),
      acc = [];

    for (const item of set) {
      acc.push(item);
    }

    expect(acc).toEqual([1, 2, 3]);

  });

  it('Has add() method', () => {

    const set = new MySet();

    set.add(42);

    expect([...set]).toEqual([42]);

  });

  it('add() method is chainable', () => {

    const set = new MySet();

    set.add(1).add(2);

    expect([...set]).toEqual([1, 2]);

  });

  it('Has clear() method', () => {

    const set = new MySet([1, 2, 3]);

    set.clear();

    expect([...set]).toEqual([]);

  });

  it('Has delete() method', () => {

    const set = new MySet([1, 2, 3]),

      wasInSet = set.delete(2),
      WasNotInSet = set.delete(4);

    expect([...set]).toEqual([1, 3]);

    expect(wasInSet).toEqual(true);
    expect(WasNotInSet).toEqual(false);

  });

  it('Has entries() method', () => {

    const set = new MySet([1, 2, 3]),
      acc = [];

    for (const item of set.entries()) {
      acc.push(item);
    }

    expect(acc).toEqual([[1, 1], [2, 2], [3, 3]]);

  });

  it('Has forEach() method', () => {

    const set = new MySet([
      {
        getValue() {
          return this.value;
        }
      }
    ]);

    data = {
      value: 42
    };

    let result;

    set.forEach(function (item) {
      result = item.getValue.call(this);
    }, data)

    expect(result).toEqual(42);

  });

  it('Has has() method', () => {

    const set = new MySet([42]);

    expect(set.has(42)).toEqual(true);
    expect(set.has(38)).toEqual(false);

  });

  it('Has keys() method', () => {

    const set = new MySet([1, 2, 3]),
      acc = [];

    for (const item of set.keys()) {
      acc.push(item);
    }

    expect(acc).toEqual([1, 2, 3]);

  });

  it('Has attribute size', () => {

    const set = new MySet([1, 2, 3]);
    expect(set.size).toEqual(3);

  });

  it('Has values() method', () => {

    const set = new MySet([1, 2, 3]),
      acc = [];

    for (const item of set.values()) {
      acc.push(item);
    }

    expect(acc).toEqual([1, 2, 3]);

  });

  it('Has valueOf() method', () => {

    const set = new MySet();

    expect(set.valueOf()).toEqual(set);

  });

  it('Supports class detection', () => {

    const set = new MySet();

    expect(String(set)).toEqual('[object ^_^]');
    expect(Object.prototype.toString.call(set)).toEqual('[object ^_^]');

  });

  it('Proper iterator.next() [Maxim test]', () => {

    const set = new MySet([42, "fourty two"]);

    const iterator = set.values();

    expect(iterator.next().value).toEqual(42);
    expect(iterator.next().value).toEqual("fourty two");

  });

});
