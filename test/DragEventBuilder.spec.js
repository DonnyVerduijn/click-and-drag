import { expect } from 'chai';
import DragEventBuilder from './../src/DragEventBuilder';

describe('DragEventBuilder', () => {
  it('should return the element provided in the configuration object', () => {
    const element = document.createElement('div');
    expect(DragEventBuilder({ element })).to.equal(element);
  });

  it('should throw an error if no HTMLElement instance is passed as property in configuration object', () => {
    let throwsError = true;
    try {
      DragEventBuilder({ element: null });
    } catch (error) {
      throwsError = true;
    }
    expect(throwsError).to.equal(true);
  });

  it('should attach event listeners to the element its mousedown, mousemove and mouseup events', () => {
    const element = document.createElement('div');
    let hasCalledOnDragStarted = false;
    let hasCalledOnDragChanged = false;
    let hasCalledOnDragEnded = false;

    DragEventBuilder({
      element,
      onDragStarted: () => {
        hasCalledOnDragStarted = true;
      },
      onDragChanged: () => {
        hasCalledOnDragChanged = true;
      },
      onDragEnded: () => {
        hasCalledOnDragEnded = true;
      },
    });

    element.dispatchEvent(new MouseEvent('mousedown'));
    element.dispatchEvent(new MouseEvent('mousemove'));
    element.dispatchEvent(new MouseEvent('mouseup'));

    expect(hasCalledOnDragStarted).to.equal(true);
    expect(hasCalledOnDragChanged).to.equal(true);
    expect(hasCalledOnDragEnded).to.equal(true);
  });
});
