$(document).ready(function() {
  var sobre = $('#sobre');
  var btn_abrir = $("#abrir");
  var btn_reset = $("#reset");

  sobre.click(function() {
    abrir();
  });
  btn_abrir.click(function() {
    abrir();
  });
  btn_reset.click(function() {
    cerrar();
  });

  function abrir() {
    sobre.addClass("abrir").removeClass("cerrar");
    $('.texto-san-valentin').show(); // Muestra el texto al abrir la carta
  }

  function cerrar() {
    sobre.addClass("cerrar").removeClass("abrir");
    $('.texto-san-valentin').hide(); // Oculta el texto al cerrar la carta
  }
});
