document.getElementById("Buscar").addEventListener('click', cargaTexto);

      function cargaTexto(){
        fetch('../datosServidor/agendaCultural.json').then(ajaxOK);
      }

      function ajaxOK(response){
        response.json().then(muestraTexto);
      }

      function muestraTexto(jsonObj){
        let nombreSeleccionado = document.getElementById("Nombre").value;
        let comboBoxDia = document.getElementById("comboBoxDia");
        let comboBoxMes = document.getElementById("comboBoxMes");
        let comboBoxCategorias = document.getElementById("comboBoxCategorias");
        let mesSeleccionado = comboBoxMes.options[comboBoxMes.selectedIndex].value;
        let tipoSeleccionado = comboBoxCategorias.options[comboBoxCategorias.selectedIndex].value;
        let html=''
        for(x in jsonObj.Registros){
          let flag=true;
          let nombre = jsonObj.Registros[x].Nombre.valueOf();
          let tipo = jsonObj.Registros[x].Tipo.valueOf();
          let dia = jsonObj.Registros[x].Dia.valueOf();
          let mes = jsonObj.Registros[x].Mes.valueOf();
          let anho = jsonObj.Registros[x].Anho.valueOf();
          let lugar = jsonObj.Registros[x].Lugar.valueOf();
          let descripcion = jsonObj.Registros[x].Descripcion.valueOf();
          let enlace = jsonObj.Registros[x].Enlace.valueOf();
          if(!nombre.includes(nombreSeleccionado)) {
            flag=false;
          }
          else if(tipo != tipoSeleccionado && tipoSeleccionado){
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
            `<section>
              <h2>` + nombre + `</h2>
                <div class="secciones">
                  <div class="seccionIzquierda">
                    <ul>
                      <li> <b> Fecha </b>: ` + dia + ` de ` + mes + ` del ` + anho + `</li>
                      <li> <b> Lugar </b>: ` + lugar + `</li>
                    </ul>
                  </div>
                  <div class="seccionDerecha">
                    <p>` + descripcion + `</p>
                    <a href="` + enlace +`"> <button> Más información </button> </a>
                  </div>
                </div>
            </section>`
          }
        }
        document.getElementById("Mostrar").innerHTML=html;
      }
