class Inicio {
  constructor() {
    this.w = 0.15 * width;
    this.h = 0.3 * height;
    this.x = width / 2.40;
    this.y = height / 3;
  }

  mostrar(){
    image(imageminicio, this.x, this.y, this.w, this.h);
  }
}
