function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}
Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};
function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};
class ProgramWindow {
  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();
  _adjustDimension(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  resize(newSize) {
    const maxW = this.screenSize.width - this.position.x;
    const maxH = this.screenSize.height - this.position.y;
    const { width: newW, height: newH } = newSize;
    this.size.width = this._adjustDimension(newW, 1, maxW);
    this.size.height = this._adjustDimension(newH, 1, maxH);
  }
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    const { x: newX, y: newY } = newPosition;
    this.position.x = this._adjustDimension(newX, 0, maxX);
    this.position.y = this._adjustDimension(newY, 0, maxY);
  }
}
