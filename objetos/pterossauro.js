class Pterossauro{
    constructor(){
        this.r=80;
        this.h=60;
        this.y=3*this.r;
        this.x=width;
    }

    mover(){
        this.x-=16;
    }

    mostrar(){
        image(imagempterossauro, this.x, this.y, this.r, this.h);
    }

    inicial(){
        this.x = width+1000;
    }
}