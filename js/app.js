$(function(){
  NUM_FRAMES = 60;
  RAIO = 5;
  VELOCIDADE_X = 20;
  VELOCIDADE_Y = 0;
  VELOCIDADE_MAX_X = 20;
  VELOCIDADE_MAX_Y = 20;
  x_inicial = 20;
  y_inicial = 100;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var teclado = new Teclado(document);
  bola = new Bola(context, teclado, x_inicial, y_inicial,
    RAIO, VELOCIDADE_X, VELOCIDADE_Y,
    VELOCIDADE_MAX_X, VELOCIDADE_MAX_Y);
  animacao = new Animacao(context, [bola], NUM_FRAMES);
  animacao.iniciar();

  $('#velocidade_max_x').val(VELOCIDADE_MAX_X);
  $('#velocidade_max_y').val(VELOCIDADE_MAX_Y);
  $('#raio').val(RAIO);
  $('#frames_segundo').val(NUM_FRAMES);

  $('#btn_parar').click(function(e){
    e.preventDefault();
    animacao.pausar();
  });

  $('#frames_segundo').change(function(e){
    animacao.frames_segundo = parseInt($(this).val());
  });

  $('#velocidade_max_x').change(function(e){
    bola.velocidade_max_x = parseInt($(this).val());
  });

  $('#velocidade_max_y').change(function(e){
    bola.velocidade_max_y = parseInt($(this).val());
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

  setInterval(function(){
    $('#velocidade_x').html(bola.velocidade_x);
  }, 300);

  setInterval(function(){
    $('#velocidade_y').html(bola.velocidade_y);
  }, 300);
});
