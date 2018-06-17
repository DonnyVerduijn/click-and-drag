import { expect } from 'chai';
import DragEventFactory from './../src/DragEventFactory';

describe('DragEventFactory', () => {
  it('should create a DragEvent instance', () => {
    const dragEventFactory = DragEventFactory();
    const mouseDownEvent = new MouseEvent('mousedown', {
      clientX: 100,
      clientY: 100,
    });
    const dragEvent = dragEventFactory.create(mouseDownEvent);
    expect(dragEvent.constructor.name).to.equal('DragEvent');
  });

  it('should return a DragEvent instance when the create, update or finalize method is called', () => {
    const dragEventFactory = DragEventFactory();
    const mouseDownEvent = new MouseEvent('mousedown');
    const mouseMoveEvent = new MouseEvent('mousemove');
    const mouseUpEvent = new MouseEvent('mouseup');

    const dragEventOnCreate = dragEventFactory.create(mouseDownEvent);
    const dragEventOnUpdate = dragEventFactory.update(mouseMoveEvent);
    const dragEventOnFinalize = dragEventFactory.finalize(mouseUpEvent);

    expect(dragEventOnCreate.constructor.name).to.equal('DragEvent');
    expect(dragEventOnUpdate.constructor.name).to.equal('DragEvent');
    expect(dragEventOnFinalize.constructor.name).to.equal('DragEvent');
  });

  it('should return false if no event is pending', () => {
    const dragEventFactory = DragEventFactory();
    expect(dragEventFactory.isEventPending()).to.equal(false);
  });

  it('should return true if an event is pending', () => {
    const dragEventFactory = DragEventFactory();
    dragEventFactory.create();
    expect(dragEventFactory.isEventPending()).to.equal(true);
  });
});
