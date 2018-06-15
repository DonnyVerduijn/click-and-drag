import draggable from './../src/index';
import './main.css';

window.onload = () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.id = 'App';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  let isDragging = false;
  let dragEvent = null;

  draggable({
    element: canvas,
    onDragStarted: event => {
      isDragging = true;
      dragEvent = event;
      console.log('onDragStarted', event); //eslint-disable-line
    },
    onDragChanged: event => {
      dragEvent = event;
      console.log('onDragChanged', event); //eslint-disable-line
    },
    onDragEnded: event => {
      isDragging = false;
      dragEvent = event;
      console.log('onDragEnded', event); //eslint-disable-line
    },
  });

  const drawLine = (beginX, beginY, endX, endY) => {
    context.beginPath();
    context.moveTo(beginX, beginY);
    context.lineTo(endX, endY);
    context.stroke();
  };

  const update = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (isDragging) {
      drawLine(
        dragEvent.startedAt.x,
        dragEvent.startedAt.y,
        dragEvent.endedAt.x,
        dragEvent.endedAt.y,
      );
    }
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};
