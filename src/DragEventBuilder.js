import DragEvent from './DragEvent';
import isHTMLElement from './utils/isHTMLElement';

const DragEventBuilder = ({ element, onDragEnded, onDragChanged }) => {
  let pendingEvent = null;
  const DOMElement = element;

  const attachHandlers = () => {
    DOMElement.addEventListener('mousedown', mouseEvent => {
      pendingEvent = DragEvent(mouseEvent);
    });

    DOMElement.addEventListener('mouseup', mouseEvent => {
      onDragEnded(pendingEvent.finalize(mouseEvent));
      pendingEvent = null;
    });

    DOMElement.addEventListener('mousemove', mouseEvent => {
      if (pendingEvent) {
        onDragChanged(pendingEvent.update(mouseEvent));
      }
    });
  };

  if (isHTMLElement(DOMElement)) {
    attachHandlers();
  } else {
    const errorMessage = `no HTMLElement provided to element property. 
    ${element.constructor.name} provided instead.`;
    throw Error(errorMessage);
  }

  return DOMElement;
};

export default DragEventBuilder;
