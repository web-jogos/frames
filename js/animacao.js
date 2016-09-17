/*
 Everaldo Gomes - 15/09/2016 - everaldo.gomes@ifpr.edu.br,
                               everaldo.gomes@gmail.com
http://www.github.com/everaldo

Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
Autor: Éderson Cássio

*/

function Animacao(context, elementos, frames_segundo){
  this.context = context;
  this.elementos = elementos;
  this.total_frames = 0;
  this.frames_segundo = frames_segundo;
  this.tempo = new Tempo();
  for(var i in this.elementos){
    this.elementos[i].animacao = this;
  }
};

Animacao.prototype.ligar = function(){
  this.ligado = true;
  this.proximoFrame();
};

Animacao.prototype.iniciar = function(){
  this.ligar();
}

Animacao.prototype.desligar = function(){
  this.ligado = false;
};

Animacao.prototype.pausar = function(){
  if(this.ligado){
    this.desligar();
  }
  else{
    this.ligar();
  }
};

Animacao.prototype.decorrido = function(){
  return this.tempo.ultimo_tick();
}

Animacao.prototype.limparTela = function(){
  this.context.clearRect(0, 0, this.context.canvas.width,
     this.context.canvas.height);
};

Animacao.prototype.atualizar = function(){
  for(var i in this.elementos){
    this.elementos[i].atualizar();
  }
};

Animacao.prototype.desenhar = function(){
  for(var i in this.elementos){
    this.elementos[i].desenhar();
  }
};

Animacao.prototype.tempoFrame = function(){
  var intervalo_frames = (1 / this.frames_segundo) * 1000;
  var tempo = this.tempo.ultimo_tick() >= intervalo_frames;
  if(tempo){
    return true;
  }
  return false;
};

Animacao.prototype.media_frames = function(){
  if(this.tempo.novo_segundo){

  }
}


Animacao.prototype.proximoFrame = function(){
  if(! this.ligado) return;
  if(this.tempoFrame()){
    this.total_frames += 1;
    this.limparTela();
    this.atualizar();
    this.desenhar();
    this.tempo.tick();
  }
  var animacao = this;
  requestAnimationFrame(function(){
    animacao.proximoFrame();
  });
};
