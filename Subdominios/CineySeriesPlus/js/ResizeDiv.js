$(document).ready(function($){
    var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
      document.getElementById("Info").setAttribute("height",ventana_alto+30);
    if(ventana_ancho<=600){
      document.getElementById("Info").setAttribute("height",ventana_alto+200);
      }
    if(ventana_ancho<=500){
      document.getElementById("Info").setAttribute("height",ventana_alto+300);
      }
if(ventana_ancho<=448){
      document.getElementById("Info").setAttribute("height",ventana_alto+400);
      }
if(ventana_ancho<=358){
      document.getElementById("Info").setAttribute("height",ventana_alto+500);
      }
if(ventana_ancho<=250){
      document.getElementById("Info").setAttribute("height",ventana_alto+600);
      }
  });