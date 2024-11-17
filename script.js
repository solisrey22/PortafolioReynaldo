let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const cargar = document.querySelector(".cargar");
window.onload = function(){
  setTimeout(function(){
    cargar.style.opacity = "0";
    setTimeout(function(){
      cargar.style.display = "none";
    }, 500);
  },1500);
}

