/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com
  http://www.github.com/everaldo
  http://www.github.com/web-jogos

  Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
  Autor: Éderson Cássio

  Baseado no Jogo Space Invaders desenvolvido por
  Max Wihlborg

  https://github.com/web-jogos/youtube-tutorials/blob/master/
  space-invaders/js/helpers.js

*/

var SETA_ESQUERDA = 37;
var SETA_ACIMA = 38;
var SETA_DIREITA = 39;
var SETA_ABAIXO = 40;

function Teclado(elemento){
  this.elemento = elemento;
  this.down = {};
  this.pressionadas = {};
  var that = this;
  $(this.elemento).keydown(function(e){
    that.down[e.keyCode] = true;
  });

  $(this.elemento).keyup(function(e){
    delete that.down[e.keyCode];
    delete that.pressionadas[e.keyCode];
  });
};

Teclado.prototype.estaApertada = function(codigo_tecla){
  return this.down[codigo_tecla];
};

Teclado.prototype.estaPressionada = function(codigo_tecla){
  if (this.pressionadas[codigo_tecla]) {
		return false;
	} else if (this.down[codigo_tecla]) {
		return this.pressionadas[codigo_tecla] = true;
	}
	return false;
};
