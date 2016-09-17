/*
 Everaldo Gomes - 15/09/2016 - everaldo.gomes@ifpr.edu.br,
                               everaldo.gomes@gmail.com
http://www.github.com/everaldo

Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
Autor: Éderson Cássio

*/


function Tempo(){
  this.tempo_tick = new Date().getTime();
  this.ultimo_segundo = this.tempo_tick / 1000;
  this.novo_segundo = false;
  this.tick();
};


Tempo.prototype.tick = function(){
  this.tempo_tick = new Date().getTime();
};

Tempo.prototype.ultimo_tick = function(){
  var novo_tempo = new Date().getTime();
  var intervalo = novo_tempo - this.tempo_tick;
  this.novo_segundo = intervalo > 1000;
  return intervalo;
}
