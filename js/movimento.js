/* Everaldo Gomes - 17/09/2016 - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com
  http://www.github.com/everaldo
  http://www.github.com/web-jogos

  Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
  Autor: Éderson Cássio

  Baseado no Jogo Space Invaders desenvolvido por
  Max Wihlborg

  https://github.com/web-jogos/youtube-tutorials/blob/master/
  space-invaders/js/helpers.js

  Baseado no Tutorial sobre Aceleração:

  http://www.html5canvastutorials.com/advanced/html5-canvas-quadratic-motion-animation/


*/

function Movimento(posicao, velocidade, velocidade_max){
  this.posicao = posicao;
  this.velocidade = velocidade;
  this.velocidade_max = velocidade_max;
}

Movimento.prototype.LIMIAR = 0.15;
Movimento.prototype.ACELERACAO_INICIAL = 0.16;


Movimento.prototype.inverterVelocidade = function(){
  this.velocidade = - this.velocidade;
}

Movimento.prototype.colisaoInferior = function(fronteira){
  if(this.posicao <= fronteira){
    this.posicao = fronteira;
    this.inverterVelocidade();
  }
}

Movimento.prototype.colisaoSuperior = function(fronteira){
  if(this.posicao >= fronteira){
    this.posicao = fronteira;
    this.inverterVelocidade();
  }
}


Movimento.prototype.acelerar = function(sentido, tempo){
  var incremento = this._incrementoAceleracao(tempo);
  this.velocidade += sentido * incremento;
  this._ajustar_velocidade_maxima();
  this._ajustar_velocidade_minima();
}

Movimento.prototype._incrementoAceleracao = function(tempo){
  var incremento = Math.abs(this.velocidade * tempo + 1/2 * (tempo * tempo));
  if(Math.abs(this.velocidade) < this.LIMIAR)
    incremento = this.ACELERACAO_INICIAL;
  return incremento;
}


Movimento.prototype._ajustar_velocidade_maxima = function(){
  if(Math.abs(this.velocidade) > this.velocidade_max){
    sinal = this.velocidade > 0 ? 1 : -1;
    this.velocidade = sinal * this.velocidade_max;
  }
}

Movimento.prototype._ajustar_velocidade_minima = function(){
  if(Math.abs(this.velocidade) - this.LIMIAR < 0.0001){
    this.velocidade = 0;
  }
}

Movimento.prototype.atualizarPosicao = function(){
  this.posicao += this.velocidade;
}
