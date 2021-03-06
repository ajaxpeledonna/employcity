const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navigation.style.setProperty("--childenNumber", navigation.children.length);
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});


$(document).ready(function() {
    $('#system').selectmenu();
});

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" );
    
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    button.innerHTML = ('Файл прикреплен');  
});  

function valueInpTypeRange() {
    var rng = document.getElementById('range__inp_type');
    var result = document.getElementById('range__value');
    result.innerHTML = rng.value+' %';
}

var a = document.getElementById('range__inp_type');
valueInpTypeRange();
a.addEventListener('input', valueInpTypeRange);


