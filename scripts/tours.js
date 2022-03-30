document.getElementById("Buscar").addEventListener('click', cargaTexto);

      function cargaTexto(){
        fetch('../datosServidor/tours.json').then(ajaxOK);
      }

      function ajaxOK(response){
        response.json().then(muestraTexto);
      }

      function muestraTexto(jsonObj){
        let comboBoxDia = document.getElementById("comboBoxDia");
        let comboBoxMes = document.getElementById("comboBoxMes");
        let comboIdiomas = document.getElementById("comboBoxCategorias");
        let mesSeleccionado = comboBoxMes.options[comboBoxMes.selectedIndex].value;
        let idiomaSeleccionado = comboBoxIdiomas.options[comboBoxIdiomas.selectedIndex].value;
        let html='<p class="Titulo"> <b> Tours ';
        if(idiomaSeleccionado){
          html = html + 'en ' + idiomaSeleccionado + ' ';
        }
        if(mesSeleccionado){
          var diaSeleccionado = comboBoxDia.options[comboBoxDia.selectedIndex].value;
          if(diaSeleccionado){
            html = html + 'el ' + diaSeleccionado + ' de ' + mesSeleccionado;
          }
          else{
            html = html + 'para el mes de ' + mesSeleccionado;
          }
        }
        html = html + '</b></p>';
        for(x in jsonObj.Registros){
          let flag=true;
          let imagen = jsonObj.Registros[x].Imagen.valueOf();
          let horario = jsonObj.Registros[x].Horario.valueOf();
          let dia = jsonObj.Registros[x].Dia.valueOf();
          let mes = jsonObj.Registros[x].Mes.valueOf();
          let anho = jsonObj.Registros[x].Anho.valueOf();
          let idiomas = jsonObj.Registros[x].Idiomas.valueOf();
          let descripcion = jsonObj.Registros[x].Descripcion.valueOf();
          let enlace = jsonObj.Registros[x].Enlace.valueOf();
          if(!idiomas.includes(idiomaSeleccionado)) {
            flag=false;
          }
          else if(mesSeleccionado){
            var diaSeleccionado = comboBoxDia.options[comboBoxDia.selectedIndex].value;
            if(mesSeleccionado!=mes){
              flag=false;
            }
            else if(diaSeleccionado!=dia && diaSeleccionado){
              flag=false;
            }
          }
          if(flag){
            html = html +
            `<section class="secciones">
                  <figure class="seccionIzquierda">
                    <img src="`+imagen+`" width="150px" height="100%">
                  </figure>
                  <div class="seccionDerecha">
                    <p> <b> Descripción: </b>`+descripcion+`</p>
                    <p> <b> Horario: </b>`+horario+`</b>
                    <p> <b> Idiomas: </b>`+idiomas+`</p>
                    <p> <b> Fecha: </b>`+dia+` de `+mes+ ` del `+anho+`</p>
                    <a href="`+enlace+`"> <button> Reservar </button> </a>
                  </div>
            </section>`
          }
        }
        document.getElementById("Mostrar").innerHTML=html;
      }
