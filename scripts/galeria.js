var botonesMas=document.querySelectorAll(".mas");

botonesMas.forEach(boton => {
  boton.addEventListener("click", () => {

    boton.style.display="none";
    var seccion=boton.parentNode;
    var botonMenos=seccion.querySelector(".menos").style.display="block";
    var imagenes=seccion.querySelectorAll(".imagenSecundaria");
    imagenes.forEach(img => {
        /*img.style.display="block";*/
        img.show();
    });

  }
  );
});

var botonesMenos=document.querySelectorAll(".menos");

botonesMenos.forEach(boton => {
  boton.addEventListener("click", () => {
    boton.style.display="none";
    var seccion=boton.parentNode;
    var botonMas=seccion.querySelector(".mas").style.display="block";
    var imagenes=seccion.querySelectorAll(".imagenSecundaria");
    imagenes.forEach(img => {
        img.style.display="none";
    });

  }
  );
});
