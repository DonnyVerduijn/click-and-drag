import Vector from './common/Vector';
import Point from './common/Point';
import radiansToDegrees from './utils/radiansToDegrees';
import ImmutableObject from './utils/ImmutableObject';

class MouseEventMock {}
const MouseEvent = window ? window.MouseEvent : MouseEventMock;

class DragEvent {}

const DragEventFactory = () => {
  let startedAt = null;
  let isEventPending = false;
  let createdAt = null;

  const getDirection = rotation => {
    let direction = 'undecided';
    if (rotation > -135 && rotation < -45) {
      direction = 'top';
    } else if (rotation < 45 && rotation > -45) {
      direction = 'right';
    } else if (rotation > 45 && rotation < 135) {
      direction = 'bottom';
    } else if (rotation > 135 || rotation < -135) {
      direction = 'left';
    }
    return direction;
  };

  const dragEvent = (parameters = {}) => {
    const endedAt = parameters.endedAt ? parameters.endedAt : startedAt;
    const distance = new Vector(endedAt.subtract(startedAt));
    const rotation = radiansToDegrees(distance.rotation());
    const magnitude = distance.magnitude();
    const direction = magnitude > 0 ? getDirection(rotation) : 'undecided';
    const duration = Date.now() - createdAt;

    const result = ImmutableObject({
      magnitude,
      direction,
      duration,
      createdAt,
      startedAt,
      endedAt,
      distance,
      rotation,
    });
    result.prototype = DragEvent.prototype;
    result.constructor = DragEvent;
    return result;
  };

  const create = (mouseEvent = new MouseEvent('mousedown')) => {
    isEventPending = true;
    createdAt = Date.now();
    startedAt = new Point({ x: mouseEvent.x, y: mouseEvent.y });
    return dragEvent();
  };

  const update = (mouseEvent = new MouseEvent('mousemove')) => {
    const endedAt = new Point({ x: mouseEvent.x, y: mouseEvent.y });
    return dragEvent({ endedAt });
  };

  const finalize = (mouseEvent = new MouseEvent('mouseup')) => {
    isEventPending = false;
    const endedAt = new Point({ x: mouseEvent.x, y: mouseEvent.y });
    return dragEvent({ endedAt });
  };

  return {
    create,
    update,
    finalize,
    isEventPending: () => isEventPending,
  };
};

export default DragEventFactory;
