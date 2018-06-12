import DragEvent from './DragEvent';
import isHTMLElement from './utils/isElement';

const DragEventBuilder = ({ element, onDragEnded, onDragChanged }) => {
  let pendingEvent = null;
  const DOMElement = element;

  const attachHandlers = () => {
    DOMElement.addEventListener('onmousedown', (mouseEvent) => {
      pendingEvent = DragEvent(mouseEvent);
    });

    DOMElement.addEventListener('onmouseup', (mouseEvent) => {
      onDragEnded(pendingEvent.finalize(mouseEvent));
      pendingEvent = null;
    });

    DOMElement.addEventListener('onmousemove', (mouseEvent) => {
      if (pendingEvent) {
        onDragChanged(pendingEvent.update(mouseEvent));
      }
    });
  };

  if (isHTMLElement) {
    attachHandlers();
  } else {
    const errorMessage = `no HTMLElement provided to element property. 
    ${element.constructor.name} provided instead.`;
    throw Error(errorMessage);
  }
};

export default DragEventBuilder;
