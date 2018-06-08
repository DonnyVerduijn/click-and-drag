import Vector from "./common/Vector";
import Point from "./common/Point";
import radiansToDegrees from "./utils/radiansToDegrees";
import ImmutableObject from "./ImmutableObject";

const DragEvent = mouseEvent => {
  var startedAt = new Point({ x: mouseEvent.x, y: mouseEvent.y }) || null;

  const getDirection = (rotation) => {
    if(rotation > -135 && rotation < -45) {
      return 'top';
    } else if(rotation < 45 && rotation > -45) {
      return 'right';
    } else if(rotation > 45 && rotation < 135 ) {
      return 'bottom';
    } else if(rotation > 135 || rotation < -135) {
      return 'left';
    }
  }

  const createDragEvent = (mouseEvent) => {
    const endedAt = new Point({ x: mouseEvent.x, y: mouseEvent.y });
    const distance = new Vector(endedAt.subtract(startedAt));
    const rotation = radiansToDegrees(distance.rotation());

    return ImmutableObject({
      startedAt,
      endedAt,
      distance,
      magnitude: distance.magnitude(),
      rotation,
      direction: getDirection(rotation)
    });
  }

  return {
    update: createDragEvent,
    finalize: createDragEvent
  };
};

export default DragEvent;
