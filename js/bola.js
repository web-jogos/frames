/*
 Everaldo Gomes - 15/09/2016 - everaldo.gomes@ifpr.edu.br,
                               everaldo.gomes@gmail.com
http://www.github.com/everaldo

Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
Autor: Éderson Cássio

*/


function Bola(context, x, y, raio, velocidade_x, velocidade_y){
  this.context = context;
  this.x = x;
  this.y = y;
  this.raio = raio;
  this.velocidade_x = velocidade_x;
  this.velocidade_y = velocidade_y;
};

Bola.prototype.atualizar = function(){
  this.x += this.velocidade_x;
  if(this.x > this.context.canvas.width){
    this.x = 0;
  }
  if(this.x < 0){
    this.x = this.context.canvas.width;
  }
  this.y += this.velocidade_y;
  if(this.y > this.context.canvas.height){
    this.y = 0;
  }
  if(this.y < 0){
    this.y = this.context.canvas.height;
  }
};

Bola.prototype.desenhar = function(){
  var ctx = this.context;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
  ctx.fill();
};
