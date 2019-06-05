function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
window.onload=function(){
var x=getCookie("video");
var altura=getCookie("altura");
console.log("cookie: ",x);
document.getElementById("frame").setAttribute("src","https://geekzone.pythonanywhere.com/video/"+x);
if(altura!=""){
document.getElementById("frame").setAttribute("height",altura);
}
}