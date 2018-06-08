import DragEvent from './DragEvent';
import isElement from './utils/isElement';

const DragEventBuilder = ({ element, onDragEnded, onDragChanged }) => {
  let pendingEvent = null;
  const DOMElement = element;

  const attachHandlers = () => {
    DOMElement.onmousedown = (mouseEvent) => {
      pendingEvent = DragEvent(mouseEvent);
    };

    DOMElement.onmouseup = (mouseEvent) => {
      onDragEnded(pendingEvent.finalize(mouseEvent));
      pendingEvent = null;
    };

    DOMElement.onmousemove = (mouseEvent) => {
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
