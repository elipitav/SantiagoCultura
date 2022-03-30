document.getElementById("Buscar").addEventListener('click', cargaTexto);
document.getElementById("comboBoxMes").addEventListener('change', cargarDias);

      function cargarDias(){
        var comboBoxMes = document.getElementById("comboBoxMes");
        var comboBoxDia = document.getElementById("comboBoxDia");
        var mes = comboBoxMes.options[comboBoxMes.selectedIndex].text;
        var html = '';
        if(mes == 'Enero' || mes == 'Marzo' || mes == 'Mayo' || mes == 'Julio' || mes == 'Agosto' || mes == 'Octubre' || mes == 'Diciembre'){
          html=`<option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>`;
        }
        else if(mes == 'Febrero'){
          html=`<option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>`;
        }
        else{
          html=`<option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>`;
        }
        comboBoxDia.innerHTML=html;
      }

      function cargaTexto(){
        fetch('../datosServidor/agendaCultur.json').then(ajaxOK);
      }

      function ajaxOK(response){
        response.json().then(muestraTexto);
      }

      function muestraTexto(jsonObj){
        var nombreSeleccionado = document.getElementById("Nombre").value;
        var comboBoxDia = document.getElementById("comboBoxDia");
        var comboBoxMes = document.getElementById("comboBoxMes");
        var comboBoxCategorias = document.getElementById("comboBoxCategorias");
        var mesSeleccionado = comboBoxMes.options[comboBoxMes.selectedIndex].value;
        var tipoSeleccionado = comboBoxCategorias.options[comboBoxCategorias.selectedIndex].value;
        let html=''
        for(x in jsonObj.Registros){
          var flag=true;
          var nombre = jsonObj.Registros[x].Nombre.valueOf();
          var tipo = jsonObj.Registros[x].Tipo.valueOf();
          var dia = jsonObj.Registros[x].Dia.valueOf();
          var mes = jsonObj.Registros[x].Mes.valueOf();
          var anho = jsonObj.Registros[x].Anho.valueOf();
          var lugar = jsonObj.Registros[x].Lugar.valueOf();
          var descripcion = jsonObj.Registros[x].Descripcion.valueOf();
          var enlace = jsonObj.Registros[x].Enlace.valueOf();
          console.log("Nombre seleccionado: ", nombreSeleccionado);
          console.log("Nombre: ", nombre);
          console.log("Tipo seleccionado: ", tipoSeleccionado);
          console.log("Tipo: ", tipo);
          console.log("Mes seleccionado: ", mesSeleccionado);
          console.log("Mes: ", mes);
          if(!nombre.includes(nombreSeleccionado)) {
            flag=false;
          }
          else if(tipo != tipoSeleccionado && tipoSeleccionado){
            flag=false;
          }
          else if(mesSeleccionado){
            var diaSeleccionado = comboBoxDia.options[comboBoxDia.selectedIndex].value;
            console.log("Dia seleccionado: ", diaSeleccionado);
            console.log("Dia: ", dia);
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
                      <li> Fecha: ` + dia + ` de ` + mes + ` del ` + anho + `</li>
                      <li> Lugar:` + lugar + `</li>
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
