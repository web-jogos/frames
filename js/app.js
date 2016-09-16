$(function(){
  NUM_FRAMES = 60;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  bola = new Bola(context, 20, 100, 5, 20, 0);
  animacao = new Animacao(context, [bola], NUM_FRAMES);
  animacao.iniciar();

  $('#btn_parar').click(function(e){
    e.preventDefault();
    animacao.pausar();
  });

  $('#frames_segundo').change(function(e){
    animacao.frames_segundo = parseInt($(this).val());
  });

  $('#velocidade_x').change(function(e){
    bola.velocidade_x = parseInt($(this).val());
  });

  $('#velocidade_y').change(function(e){
    bola.velocidade_y = parseInt($(this).val());
  });

  $('#raio').change(function(e){
    bola.raio = parseInt($(this).val());
  });

  setInterval(function(){
    $('#total_frames').html(animacao.total_frames);
  }, 1000);

  setInterval(function(){
    $('#frames_segundo_text').html(animacao.frames_segundo);
  }, 1000);

});
