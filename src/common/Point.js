class Point {
  constructor(options = {}) {
    this.x = options.x || 0;
    this.y = options.y || 0;
  }

  subtract(point) {
    return new Point({
      x: this.x - point.x,
      y: this.y - point.y,
    });
  }
}

export default Point;
