$(document).ready(function(){

  $('select').material_select();
  $('.modal').modal();

});
// //splash de 2 segundos
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(1000);
   }, 2000);
});