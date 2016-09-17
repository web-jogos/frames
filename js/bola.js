/*
 Everaldo Gomes - 15/09/2016 - everaldo.gomes@ifpr.edu.br,
                               everaldo.gomes@gmail.com
http://www.github.com/everaldo

Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
Autor: Éderson Cássio


Colisão com o Canvas baseado no CodePen.io Armazenado em:

https://codepen.io/evegomes/pen/LRkZPp

Aceleração:

http://www.html5canvastutorials.com/advanced/html5-canvas-quadratic-motion-animation/


*/


function Bola(context, teclado, x, y, raio,
   velocidade_x, velocidade_y, velocidade_max_x,
    velocidade_max_y){
  this.context = context;
  this.teclado = teclado;
  this.raio = raio;
  this.x = new Movimento(x, velocidade_x, velocidade_max_x);
  this.y = new Movimento(y, velocidade_y, velocidade_max_y);
  this.largura_canvas = this.context.canvas.width;
  this.altura_canvas = this.context.canvas.height;
};

Bola.prototype.atualizarVelocidades = function(){
  var teclado = this.teclado;
  var decorrido = this.animacao.decorrido() / 1000;
  DIREITA = 1;
  ESQUERDA = -1;
  CIMA = -1;
  BAIXO = 1;

  if(teclado.estaApertada(SETA_ESQUERDA) ||
  teclado.estaPressionada(SETA_ESQUERDA)){
      this.x.acelerar(ESQUERDA, decorrido);
  }
  if(teclado.estaApertada(SETA_DIREITA) ||
  teclado.estaPressionada(SETA_DIREITA)){
      this.x.acelerar(DIREITA, decorrido);
  }
  if(teclado.estaApertada(SETA_ACIMA) ||
  teclado.estaPressionada(SETA_ACIMA)){
      this.y.acelerar(CIMA, decorrido);
  }
  if(teclado.estaApertada(SETA_ABAIXO) ||
  teclado.estaPressionada(SETA_ABAIXO)){
      this.y.acelerar(BAIXO, decorrido);
  }

};



Bola.prototype.atualizar = function(){
  this.atualizarVelocidades();
  var raio = this.raio;
  var vertical_direita = this.largura_canvas - raio;
  var horizontal_inferior = this.altura_canvas - raio;
  var horizontal_superior = 0 + raio;
  var vertical_esquerda = 0 + raio;

  this.x.atualizarPosicao();
  this.y.atualizarPosicao();
  this.x.colisaoSuperior(vertical_direita);
  this.x.colisaoInferior(vertical_esquerda);
  this.y.colisaoSuperior(horizontal_inferior);
  this.y.colisaoInferior(horizontal_superior);
};

Bola.prototype.desenhar = function(){
  var ctx = this.context;
  var x = this.x.posicao;
  var y = this.y.posicao;
  ctx.beginPath();
  ctx.arc(x, y, this.raio, 0, Math.PI * 2);
  ctx.fill();
};
