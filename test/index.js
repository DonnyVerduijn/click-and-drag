import { expect } from 'chai';
import DragEventBuilder from './../src/DragEventBuilder';

describe('DragEventBuilder', () => {
  it('should return an object based on the point substration between onmousedown and onmousedown/up coords', () => {
    const element = document.createElement('div');

    DragEventBuilder({
      element,
      onDragChanged: (event) => {
        expect(event.direction).to.equal('right');
      },
      onDragEnded: (event) => {
        expect(event.direction).to.equal('left');
      },
    });

    element.dispatchEvent(new MouseEvent('onmousedown', { clientX: 100, clientY: 100 }));
    element.dispatchEvent(new MouseEvent('onmousemove', { clientX: 110, clientY: 100 }));
    element.dispatchEvent(new MouseEvent('onmouseup', { clientX: 90, clientY: 100 }));
  });
});
