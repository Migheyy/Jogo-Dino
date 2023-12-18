class Restart{
    constructor() {
      this.w = 0.15 * width;
      this.h = 0.3 * height;
      this.x = width / 2.40;
      this.y = height / 3;
    }
  
    mostrar(){
      image(imagemrestart, this.x, this.y+50, this.w, this.h);
      image(imagemgameover, this.x-50, this.y-120, this.w*1.9, this.h*1.5);
      image(imagemgameoverdino, this.x-225, this.y+155, this.w*1.55, this.h*1.25);
    }
  }
  