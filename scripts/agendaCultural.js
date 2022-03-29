document.getElementById("Buscar").addEventListener('click', cargaTexto);

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
        fetch('datos.json').then(ajaxOK);
      }

      function ajaxOK(response){
        response.json().then(muestraTexto);
      }

      function muestraTexto(jsonObj){
        var Nombre = document.getElementById('Nombre').value;
        let txt='<ul>'
        for(x in jsonObj.Registros){
          // console.log(jsonObj.Registros[x].Nombre.valueOf());
          if(jsonObj.Registros[x].Nombre.valueOf() == Nombre.valueOf()) {
            txt = txt + "<li>" + jsonObj.Registros[x].Nombre + "->"
            + jsonObj.Registros[x].Apellido + "</li>";
          }
        }
        txt = txt + "</ul>";
        document.getElementById("Mostrar").innerHTML=txt;
      }
