import Vector from './common/Vector';
import Point from './common/Point';
import radiansToDegrees from './utils/radiansToDegrees';
import ImmutableObject from './ImmutableObject';

const DragEvent = options => {
  const { mouseEvent, id } = options;
  const startedAt = new Point({ x: mouseEvent.x, y: mouseEvent.y }) || null;
  const createdAt = Date.now();

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

  const createDragEvent = event => {
    const endedAt = new Point({ x: event.x, y: event.y });
    const distance = new Vector(endedAt.subtract(startedAt));
    const rotation = radiansToDegrees(distance.rotation());
    const magnitude = distance.magnitude();
    const direction = magnitude > 0 ? getDirection(rotation) : 'undecided';
    const duration = Date.now() - createdAt;

    return ImmutableObject({
      magnitude,
      direction,
      duration,
      createdAt,
      startedAt,
      endedAt,
      distance,
      rotation,
      id,
    });
  };

  return {
    update: createDragEvent,
    finalize: createDragEvent,
    id,
  };
};

export default DragEvent;
