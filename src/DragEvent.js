import Vector from './common/Vector';
import Point from './common/Point';
import radiansToDegrees from './utils/radiansToDegrees';
import ImmutableObject from './ImmutableObject';

const DragEvent = (onMouseDown) => {
  const startedAt = new Point({ x: onMouseDown.x, y: onMouseDown.y }) || null;

  const getDirection = (rotation) => {
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

  const createDragEvent = (mouseEvent) => {
    const endedAt = new Point({ x: mouseEvent.x, y: mouseEvent.y });
    const distance = new Vector(endedAt.subtract(startedAt));
    const rotation = radiansToDegrees(distance.rotation());

    return ImmutableObject({
      magnitude: distance.magnitude(),
      direction: getDirection(rotation),
      startedAt,
      endedAt,
      distance,
      rotation,
    });
  };

  return {
    update: createDragEvent,
    finalize: createDragEvent,
  };
};

export default DragEvent;
