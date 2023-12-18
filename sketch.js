let jogador;
let fundo;
let contagemI, contagemN, contagemP;
let nuvem = [];
let pterossauro = [];
let cacto = [];
let imagemdino;
let gamestatus = 0;

function preload() {
  imagemdinoagachado = loadImage("imagens/dinoagachado.gif");
  imagemdinopulando = loadImage("imagens/pulo.png");
  imagemdinocorrendo = loadImage("imagens/dinocorrendo.gif");
  imagemcacto1 = loadImage("imagens/cacto1.png");
  imagemcacto2 = loadImage("imagens/cacto2.png");
  imagemcacto3 = loadImage("imagens/cacto3.png");
  imagemnuvem1 = loadImage("imagens/nuvem1.png");
  imagemnuvem2 = loadImage("imagens/nuvem2.png");
  imagemnuvem3 = loadImage("imagens/nuvem3.png");
  imagempterossauro = loadImage("imagens/pterossauro.gif");
  imageminicio = loadImage("imagens/iniciar.gif");
  imagemrestart = loadImage("imagens/restart.gif");
  imagemgameover = loadImage("imagens/gameOver.gif");
  imagemgameoverdino = loadImage("imagens/morte2.png");
}

function setup() {
  canvas = createCanvas(800, 450);
  canvas.center();
  jogador = new objetoJogador();
  inicio = new Inicio();
  gameover = new Restart();
}

function draw() {
  background("black");

  if (gamestatus == 0) {
    inicio.mostrar();
  } else if (gamestatus == 1) {
    jogador.show();
    jogador.move();
    nascerPterossauro();
    nascerCactos();
    jogabilidade();

    for (let c of cacto) {
      c.mostrar();
      c.mover();
      if (jogador.hits(c)) {
        gamestatus = -1;
        console.log("Fim de Jogo");
        c.inicial();
      }

      for (let p of pterossauro) {
        p.mostrar();
        p.mover();
        if (jogador.bater(p)) {
          gamestatus = -1;
          console.log("Fim de Jogo");
          p.inicial();
        }
      }
    }
  }else if (gamestatus == -1){
    gameover.mostrar();
  }
}

function jogabilidade() {
  if (keyIsDown(32) || keyIsDown(UP_ARROW)) {
    jogador.jump();
    imagemdino = "imagemdinopulando";
  } else if (keyIsDown(DOWN_ARROW)) {
    imagemdino = "imagemdinoagachado";
  } else {
    imagemdino = "imagemdinocorrendo";
  }
}

function nascerCactos() {
  if (frameCount % 130 == 0) {
    cacto.push(new Cacto());
    let sorteio = Math.round(random(1, 3));
    switch (sorteio) {
      case 1:
        contagemC = 1;
        break;

      case 2:
        contagemC = 2;
        break;

      case 3:
        contagemC = 3;
        break;
    }
  }
}

function nascerPterossauro() {
  if (frameCount % 130 == 0) {
    pterossauro.push(new Pterossauro());
  }
}

function mousePressed() {
  gamestatus = 1;
}
