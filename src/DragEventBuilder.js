import DragEventFactory from './DragEventFactory';
import isHTMLElement from './utils/isHTMLElement';

const DragEventBuilder = ({
  element,
  onDragStarted,
  onDragChanged,
  onDragEnded,
}) => {
  const DOMElement = element;
  const dragEventFactory = DragEventFactory();

  const attachHandlers = () => {
    DOMElement.addEventListener('mousedown', mouseEvent => {
      onDragStarted(dragEventFactory.create(mouseEvent));
    });

    DOMElement.addEventListener('mousemove', mouseEvent => {
      if (dragEventFactory.isEventPending()) {
        onDragChanged(dragEventFactory.update(mouseEvent));
      }
    });

    DOMElement.addEventListener('mouseup', mouseEvent => {
      onDragEnded(dragEventFactory.finalize(mouseEvent));
    });
  };

  if (isHTMLElement(DOMElement)) {
    attachHandlers();
  } else {
    const errorMessage = `no HTMLElement provided to element property. 
    ${element} provided instead.`;
    throw new Error(errorMessage);
  }

  return DOMElement;
};

export default DragEventBuilder;
