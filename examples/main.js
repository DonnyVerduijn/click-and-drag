import draggable from './../src/index';
import './main.css';

window.onload = () => {
  const element = document.createElement('div');
  element.id = 'App';
  document.body.appendChild(element);

  draggable({
    element,
    onDragStarted: event => {
      console.log('onDragStarted', event); //eslint-disable-line
    },
    onDragChanged: event => {
      console.log('onDragChanged', event); //eslint-disable-line
    },
    onDragEnded: event => {
      console.log('onDragEnded', event); //eslint-disable-line
    },
  });
};
