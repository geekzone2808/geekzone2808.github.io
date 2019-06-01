var click=0;
var altura;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function change(){
  var acc = document.getElementById("arrow");

  if(click==0){
    acc.setAttribute("class","fas fa-chevron-up");
	document.getElementById("acordion").setAttribute("style","background-color:goldenrod;");
    click=1;
  }else{
    acc.setAttribute("class","fas fa-chevron-down");
	document.getElementById("acordion").setAttribute("style","background-color:brown;")
    click=0;
  }
  
}
