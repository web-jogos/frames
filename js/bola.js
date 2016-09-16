/*
 Everaldo Gomes - 15/09/2016 - everaldo.gomes@ifpr.edu.br,
                               everaldo.gomes@gmail.com
http://www.github.com/everaldo

Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
Autor: Éderson Cássio


Colisão com o Canvas baseado no CodePen.io Armazenado em:

https://codepen.io/evegomes/pen/LRkZPp


*/


function Bola(context, x, y, raio, velocidade_x, velocidade_y){
  this.context = context;
  this.x = x;
  this.y = y;
  this.raio = raio;
  this.velocidade_x = velocidade_x;
  this.velocidade_y = velocidade_y;
  this.largura_canvas = this.context.canvas.width;
  this.altura_canvas = this.context.canvas.height;
};

Bola.prototype.atualizar = function(){
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
