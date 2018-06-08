class Vector {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
  }

  magnitude() {
    return Math.abs(Math.sqrt(this.x * this.x, this.y * this.y));
  }

  rotation() {
    return Math.atan2(this.y, this.x);
  }
}

export default Vector;
