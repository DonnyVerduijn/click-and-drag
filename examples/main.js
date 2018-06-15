import draggable from './../src/index';

draggable({
  element: document.getElementById('App'),
  onDragChanged: event => {
    console.log(event); //eslint-disable-line
  },
  onDragEnded: event => {
    console.log(event); //eslint-disable-line
  },
});
