import { expect } from 'chai';
import radiansToDegrees from './../../src/utils/radiansToDegrees';

describe('radiansToDegrees', () => {
  it('should convert radians to degrees', () => {
    expect(radiansToDegrees(Math.PI)).to.equal(180);
  });
});
