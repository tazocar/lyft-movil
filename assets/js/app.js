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

$("#phone").keyup(function(){
  var characteres = $("#phone").val();
  if (characteres.length == 10) {
    $("#send-phone").removeClass("disabled");
  } else {
    $("#send-phone").addClass("disabled");
  }
})
$("#send-phone").click(function(){
  //alerta que almacena el numero en local Storage.
  window.localStorage.setItem("randomNumber", Math.round(Math.random()*900)+99);
    alert("Su codigo es LAB-" + window.localStorage.getItem("randomNumber"));
})

$("#input-code").keyup(function(){
  var recode = $("#input-code").val();
  if (recode.length == 3 && recode == window.localStorage.getItem("randomNumber")) {
    $("#valid-code").removeClass("disabled");
  } else {
    $("#valid-code").addClass("disabled");
  }
})

$("#resend").click(function(){
  //alerta que almacena el numero en local Storage.
  window.localStorage.setItem("randomNumber", Math.round(Math.random()*900)+99);
    alert("Su codigo es LAB-" + window.localStorage.getItem("randomNumber"));
})

$("#first_name").keyup(function(){
  var nameInput = $("#first_name").val();
  var lastNameInput = $("#last_name").val();
  var emailInput = $("#email").val();

  if (nameInput.length > 0 && lastNameInput.length > 0 && $("#email").hasClass("valid")) {
    $("#send-sign-in").removeClass("disabled");
  } else {
    $("#send-sign-in").addClass("disabled");
  }
})
$("#last_name").keyup(function(){
  var nameInput = $("#first_name").val();
  var lastNameInput = $("#last_name").val();
  var emailInput = $("#email").val();

  if (nameInput.length > 0 && lastNameInput.length > 0 && $("#email").hasClass("valid")) {
    $("#send-sign-in").removeClass("disabled");
  } else {
    $("#send-sign-in").addClass("disabled");
  }
})
$("#email").keyup(function(){
  var nameInput = $("#first_name").val();
  var lastNameInput = $("#last_name").val();
  var emailInput = $("#email").val();

  if (nameInput.length > 0 && lastNameInput.length > 0 && $("#email").hasClass("valid")) {
    $("#send-sign-in").removeClass("disabled");
  } else {
    $("#send-sign-in").addClass("disabled");
  }
})