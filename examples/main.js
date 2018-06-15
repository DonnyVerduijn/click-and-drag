import draggable from './../src/index';
import './main.css';

window.onload = () => {
  const element = document.createElement('div');
  element.id = 'App';
  document.body.appendChild(element);

  draggable({
    element,
    onDragStarted: event => {
      console.log(event);
    },
    onDragChanged: event => {
      console.log(event); //eslint-disable-line
    },
    onDragEnded: event => {
      console.log(event); //eslint-disable-line
    },
  });
};
