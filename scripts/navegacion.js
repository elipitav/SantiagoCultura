/*0: ordenador/tableta, 1:movil*/
var ventanaAnterior=0;

$(document).ready(function()
{
  var i=0;

  cargarMenu();

  $(window).on('resize',function(){

    cargarMenu();

  });

  $("#botonHamburguesa").on('click', function(){

    if(i%2==0){
      $(".menuPrincipal").css({
        'display': 'flex',
        'flex-direction': 'column'
      });
      i++;
    }else{
      $(".menuPrincipal").css({
        'display': 'none'
      });
      i++;
    }

  });

});

function cargarMenu(){

  var tamVentana=$(window).width();
  if(tamVentana>=767 && ventanaAnterior==1){

    i=0;
    $(".menuPrincipal").css({
      'grid-column': '3/11',
      'list-style': 'none',
      'display': 'grid',
      'grid-template-columns': '1fr 1fr 1fr 1fr'

    });

    $(".menuPrincipal > li").off('click');

    $(".menuPrincipal > li").hover(function(){
      $(this).children().children().css({
        'display':'block'
      });
      //$(".submenuPrincipal").show();
    }, function(){
      var txt=$(this).children().text();
       $(this).children().children().css({
         'display':'none'
       });
    }
  );

    ventanaAnterior=0;

  }else if((tamVentana<767) && (ventanaAnterior==0)){
    $(".submenuPrincipal > li").hide();
    $(".menuPrincipal > li").off('mouseenter mouseleave');

    $(".menuPrincipal").css({
      'display': 'none'
    });

    $(".menuPrincipal > li").on('click',function(){
      var subMenu=$(this).children().children();
      subMenu.toggle();
      $(this).siblings().find("ul > li").hide();

    });
  ventanaAnterior=1;

}

}
