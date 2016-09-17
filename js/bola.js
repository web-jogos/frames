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
  this.x = x;
  this.y = y;
  this.raio = raio;
  this.velocidade_x = velocidade_x;
  this.velocidade_y = velocidade_y;
  this.velocidade_max_x = velocidade_max_x;
  this.velocidade_max_y = velocidade_max_y;
  this.largura_canvas = this.context.canvas.width;
  this.altura_canvas = this.context.canvas.height;
};

Bola.prototype.atualizarVelocidades = function(){
  var teclado = this.teclado;
  var decorrido = this.animacao.decorrido() / 1000;

  var incremento_x = Math.abs(this.velocidade_x * decorrido + 1/2 * (decorrido * decorrido));
  var incremento_y = Math.abs(this.velocidade_y * decorrido + 1/2 * (decorrido * decorrido));

  if(Math.abs(this.velocidade_x) < decorrido)
    incremento_x = decorrido;
  if(Math.abs(this.velocidade_y) < decorrido)
    incremento_y = decorrido;


  if(teclado.estaApertada(SETA_ESQUERDA) ||
  teclado.estaPressionada(SETA_ESQUERDA)){
      this.velocidade_x -= incremento_x;
  }
  if(teclado.estaApertada(SETA_DIREITA) ||
  teclado.estaPressionada(SETA_DIREITA)){
      this.velocidade_x += incremento_x;
  }
  if(teclado.estaApertada(SETA_ACIMA) ||
  teclado.estaPressionada(SETA_ACIMA)){
      this.velocidade_y -= incremento_y;
  }
  if(teclado.estaApertada(SETA_ABAIXO) ||
  teclado.estaPressionada(SETA_ABAIXO)){
      this.velocidade_y += incremento_y;
  }

  if(Math.abs(this.velocidade_x) > this.velocidade_max_x){
    if(this.velocidade_x > 0){
      sinal = 1;
    }
    else{
      sinal = -1;
    }
    this.velocidade_x = sinal * this.velocidade_max_x;
  }

  if(Math.abs(this.velocidade_y) > this.velocidade_max_y){
    if(this.velocidade_y > 0){
      sinal = 1;
    }
    else{
      sinal = -1;
    }
    this.velocidade_y = sinal * this.velocidade_max_y;
  }


  if(Math.abs(this.velocidade_x) < decorrido){
    this.velocidade_x = 0;
  }

  if(Math.abs(this.velocidade_y) < decorrido){
    this.velocidade_y = 0;
  }
};



Bola.prototype.atualizar = function(){
  this.atualizarVelocidades();
  var raio = this.raio;
  var vertical_direita = this.largura_canvas - raio;
  var horizontal_inferior = this.altura_canvas - raio;
  var horizontal_superior = 0 + raio;
  var vertical_esquerda = 0 + raio;

  this.x += this.velocidade_x;
  this.y += this.velocidade_y;

  if(this.x >= vertical_direita){
    this.x = vertical_direita;
    this.velocidade_x = - this.velocidade_x;
  }
  else if(this.x <= vertical_esquerda){
    this.x = vertical_esquerda;
    this.velocidade_x = - this.velocidade_x;
  }

  if(this.y >= horizontal_inferior){
    this.y = horizontal_inferior;
    this.velocidade_y = - this.velocidade_y;
  }
  else if(this.y <= vertical_esquerda){
    this.y = vertical_esquerda;
    this.velocidade_y = - this.velocidade_y;
  }
};

Bola.prototype.desenhar = function(){
  var ctx = this.context;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
  ctx.fill();
};
