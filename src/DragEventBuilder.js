import Point from "./common/Point";
import DragEvent from "./DragEvent";
import isElement from "./utils/isElement";

const DragEventBuilder = ({ element, onDragEnded, onDragChanged }) => {
  var pendingEvent = null;

  const attachHandlers = () => {
    element.onmousedown = mouseEvent => {
      pendingEvent = DragEvent(mouseEvent);
    };

    element.onmouseup = mouseEvent => {
      onDragEnded(pendingEvent.finalize(mouseEvent));
      pendingEvent = null;
    };

    element.onmousemove = mouseEvent => {
      if (pendingEvent) {
        onDragChanged(pendingEvent.update(mouseEvent));
      }
    };
  };

  if (isElement) {
    attachHandlers();
  } else {
    const errorMessage = `no DOM element provided to element property. 
    ${element.constructor.name} provided instead.`;
    throw Error(errorMessage);
  }
};

export default DragEventBuilder;