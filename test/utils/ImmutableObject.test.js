import { expect } from 'chai';
import ImmutableObject from './../../src/utils/ImmutableObject';

describe('ImmutableObject', () => {
  it('should convert all properties to immutable properties', () => {
    const object = { a: 'foo', b: 'bar' };
    const immutableObject = ImmutableObject(object);

    const isEqualAndImmutable = Object.keys(object).every(key => {
      const descriptor = Object.getOwnPropertyDescriptor(immutableObject, key);
      return (
        immutableObject[key] === object[key] &&
        descriptor.writable === false &&
        descriptor.configurable === false
      );
    });

    expect(isEqualAndImmutable).to.equal(true);
  });
});
