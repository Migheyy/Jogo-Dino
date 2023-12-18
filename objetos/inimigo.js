class Cacto{
    constructor(){
        this.r=80;
        this.y=height-this.r;
        this.x=width;
    }

    mover(){
        this.x-=16;
    }

    mostrar(){
        if(contagemC == 1){
            image(imagemcacto1, this.x, this.y, this.r, this.r);
        }
        else if(contagemC == 2){
            image(imagemcacto2, this.x, this.y, this.r, this.r);
        }
        else if(contagemC == 3){
            image(imagemcacto3, this.x, this.y, this.r, this.r);
        }
    }

    inicial(){
        this.x = width+500;
    }
}