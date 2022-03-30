$(document).ready(function()
{
 document.getElementById("botonBuscar").addEventListener("click",cargarResultados);

});

 function cargarResultados(){
   var xhttp = new XMLHttpRequest();
   var comboboxTipo = document.getElementById("comboboxTipo");
   var tipo = comboboxTipo.options[comboboxTipo.selectedIndex].text;
   var comboboxPrecio = document.getElementById("comboboxPrecio");
   var precio = comboboxPrecio.options[comboboxPrecio.selectedIndex].text;
   /*Se borra el contenido anterior*/
   var sections = document.querySelectorAll("article > section");
   var article = document.querySelector("article");
   console.log(sections);
   for(var i=0;i<sections.length;i++){
     article.removeChild(sections[i]);
   }
   xhttp.onreadystatechange = function(){
     if(this.readyState==4 && this.status==200){
       var xmlDoc=this.responseXML;
       var x = xmlDoc.getElementsByTagName("alojamiento");
       for(var i=0; i < x.length; i++){

         var auxtipo=x[i].getElementsByTagName("tipo");
         tipoAloj=auxtipo[0].textContent;
         var auxprecio=x[i].getElementsByTagName("precio");
         precioAloj=auxprecio[0].textContent;
         if (tipoAloj != tipo && tipo){

         }else if(precioAloj!=precio && precio){

         }else{

           var auxNombre=x[i].getElementsByTagName("nombre");[0].textContent;
           var nombre=auxNombre[0].textContent;
           var auxDescripcion=x[i].getElementsByTagName("descripcion");[0].textContent;
           var descripcion=auxDescripcion[0].textContent;
           var auxImagen=x[i].getElementsByTagName("imagen");[0].textContent;
           var imagen=auxImagen[0].textContent;
           var auxEstrellas=x[i].getElementsByTagName("estrellas");[0].textContent;
           var estrellas=auxEstrellas[0].textContent;
           var txt=`<div class="texto">
             <p><b>`+nombre+`</b></p>
             <p class="descripcion">`+descripcion+`</p>
           </div>
           <figure><img src="../imagenes/queHacer/alojamiento/`+imagen+`" width=100% height=90> </figure>

           <div class="valoracion" id="valoracionGeneral">
             <button>
               <i class="fas fa-star"></i>
             </button>
             <button>
               <i class="fas fa-star"></i>
             </button>
             <button>
               <i class="fas fa-star"></i>
             </button>
             <button>
               <i class="fas fa-star"></i>
             </button>
             <button>
               <i class="fas fa-star"></i>
             </button>
           </div>
           <div class="valoracion" id="valoracionUsuario">
             <button id="1">
               <i class="fas fa-star"></i>
             </button>
             <button id="2">
               <i class="fas fa-star"></i>
             </button>
             <button id="3">
               <i class="fas fa-star"></i>
             </button>
             <button id="4">
               <i class="fas fa-star"></i>
             </button>
             <button id="5">
               <i class="fas fa-star"></i>
             </button>
           </div>
           <button id="botonValorar" disabled>VALORAR
           </button>`
           var s=document.createElement("section");
           s.innerHTML=txt;
           document.querySelector("article").appendChild(s);
           rellenarEstrellas(estrellas);

         }


       }

       activarMouseEnter();
       activarMouseOut();
       activarMouseClick();
       activarBotonValorar()
     }
   };
   xhttp.open("GET","../datosServidor/alojamiento.xml",true);
   xhttp.send();
 }

 function rellenarEstrellas(num){
   var valoraciones=document.querySelectorAll("#valoracionGeneral");
   var estrellas=valoraciones[valoraciones.length-1].querySelectorAll("button");
   for(var i=0;i<num;i++){
     $(estrellas[i]).css("color","yellow");
   }
 }

 function activarMouseEnter(){
   $("#valoracionUsuario > button").mouseenter(function(){
      let num=$(this).attr("id");
      let padre=$(this).parent()[0];
      let estrellas=padre.children;
      for(let i=0;i<num;i++){
        estrellas[i].style.color="yellow";
      }
      activarMouseOut();
      $(this).parent().parent().find("#botonValorar").attr('disabled',true);
    });
 }
 function activarMouseOut(){
   $("#valoracionUsuario > button").mouseout(function(){
     $(this).parent().children().css("color","white");
   });
 }
 function activarMouseClick(){
   $("#valoracionUsuario > button").click(function(){
      $(this).parent().children().off('mouseout');
      $(this).parent().parent().find("#botonValorar").attr('disabled',false);
    });
 }
 function activarBotonValorar(){
   $("#botonValorar").click(function(){
     console.log($(this).parent().find("#valoracionUsuario"));
     $(this).parent().find("#valoracionUsuario").children().css("color","white");
     activarMouseOut();
     $(this).attr('disabled',true);
     confirm("Valoración enviada con éxito");
     console.log($(this));
   });
 }
