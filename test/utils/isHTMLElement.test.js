import { expect } from 'chai';
import isHTMLElement from './../../src/utils/isHTMLElement';

describe('isHTMLElement', () => {
  it('should return true if the first argument is a HTMLElement instance', () => {
    const element = document.createElement('div');
    expect(isHTMLElement(element)).to.equal(true);
  });
});
