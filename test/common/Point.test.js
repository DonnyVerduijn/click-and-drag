import { expect } from 'chai';
import Point from './../../src/common/Point';

describe('Point', () => {
  const x = 1;
  const y = 2;
  const point = new Point({ x, y });
  const defaultValue = 0;
  const pointWithDefaults = new Point();

  it('should use 0 for x and y properties as default', () => {
    expect(pointWithDefaults.x).to.equal(defaultValue);
    expect(pointWithDefaults.y).to.equal(defaultValue);
  });

  it('should set the x and y properties on instantiation', () => {
    expect(point.x).to.equal(x);
    expect(point.y).to.equal(y);
  });

  it('should return a new Vector by point substraction', () => {
    const substractedPoint = point.subtract(point);
    expect(substractedPoint.x).to.equal(0);
    expect(substractedPoint.y).to.equal(0);
  });
});
