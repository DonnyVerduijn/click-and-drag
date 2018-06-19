import { expect } from 'chai';
import DragEventBuilder from './../src/DragEventBuilder';

describe('DragEventBuilder', () => {
  it('should return an object based on the point substration between onmousedown and onmousedown/up coords', () => {
    const element = document.createElement('div');
    let onDragStartedEvent = {};
    let onDragChangedEvent = {};
    let onDragEndedEvent = {};

    DragEventBuilder({
      element,
      onDragStarted: event => {
        onDragStartedEvent = event;
      },
      onDragChanged: event => {
        onDragChangedEvent = event;
      },
      onDragEnded: event => {
        onDragEndedEvent = event;
      },
    });

    element.dispatchEvent(
      new MouseEvent('mousedown', { clientX: 100, clientY: 100 }),
    );
    element.dispatchEvent(
      new MouseEvent('mousemove', { clientX: 110, clientY: 100 }),
    );
    element.dispatchEvent(
      new MouseEvent('mouseup', { clientX: 90, clientY: 100 }),
    );

    expect(onDragStartedEvent.direction).to.equal('undecided');
    expect(onDragChangedEvent.direction).to.equal('right');
    expect(onDragEndedEvent.direction).to.equal('left');
  });
});
