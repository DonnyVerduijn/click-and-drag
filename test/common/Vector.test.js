import { expect } from 'chai';
import Vector from './../../src/common/Vector';

describe('Vector', () => {
  const x = 3;
  const y = 4;
  const magnitude = 5;
  const rotation = Math.atan2(y, x);
  const vector = new Vector({ x, y });
  const defaultValue = 0;
  const vectorWithDefaults = new Vector();

  it('should use 0 for x and y properties as default', () => {
    expect(vectorWithDefaults.x).to.equal(defaultValue);
    expect(vectorWithDefaults.y).to.equal(defaultValue);
  });

  it('should set the x and y property on intantiation', () => {
    expect(vector.x).to.equal(x);
    expect(vector.y).to.equal(y);
  });

  it('should calculate the magnitude', () => {
    expect(vector.magnitude()).to.equal(magnitude);
  });

  it('should calculate the rotation', () => {
    expect(vector.rotation()).to.equal(rotation);
  });
});
