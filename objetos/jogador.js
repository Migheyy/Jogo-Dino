class objetoJogador {
  constructor() {
    this.r = 120;
    this.x = 150;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2.5;
    this.ar = this.r*0.5;
  }

  show() {
    if (imagemdino == "imagemdinopulando") {
      image(imagemdinopulando, this.x, this.y, 1.5*this.r, 1.6*this.r);
    } else if (imagemdino == "imagemdinoagachado") {
      image(imagemdinoagachado, this.x, this.y+this.ar, this.r, this.ar);
    } else {
      image(imagemdinocorrendo, this.x, this.y, this.r, this.r);
    }

  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }


  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r)

  }
  hits(cacto){
  let x1 = this.x;
  let y1 = this.y;
  let x2 = cacto.x;
  let y2 = cacto.y;

  return collideCircleCircle(x1, y1, this.r, x2, y2, cacto.r)
  }

  bater(pterossauro){
  if(imagemdino == "imagemdinoagachado"){
    let x1 = this.x;
    let y1 = this.y + this.r;
    let x2 = pterossauro.x;
    let y2 = pterossauro.y;

    return collideRectRect(x1, y1, this.r, this.r, x2, y2, pterossauro.r, pterossauro.r)
  }
  else{
    let x1 = this.x;
    let y1 = this.y - this.r;
    let x2 = pterossauro.x;
    let y2 = pterossauro.y;

    return collideRectRect(x1, y1, this.r, this.r, x2, y2, pterossauro.r, pterossauro.r)
  }
  }
}
