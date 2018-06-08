# click-and-drag

This library provides a very simple API to use drag events on specific DOM elements

## installation

```bash
npm install click-and-drag
```

## usage

```javascript
import draggable from 'click-and-drag'
const element = draggable({
    element: document.getElementById('app'),
    onDragChanged: (event) => console.log(event),
    onDragEnded: (event) => console.log(event)
})
```