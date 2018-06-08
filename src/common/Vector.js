class Vector {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
  }

  magnitude() {
    return Math.abs(Math.sqrt(Math.pow(this.x, 2), Math.pow(this.y, 2)));
  }

  rotation() {
    return Math.atan2(this.y, this.x);
  }
}

export default Vector;