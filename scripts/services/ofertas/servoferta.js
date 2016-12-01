angular
  .module('app')
  .factory('ServOferta', function (ServOfertaBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerTodos = TraerTodos;
    objeto.TraerListaSuc=TraerListaSuc;
    objeto.AltaO=AltaO;
    objeto.ModifO=ModifO;
    objeto.ElimO=ElimO;
    return objeto;

 
    function TraerTodos(){
     
     return ServOfertaBase.TraerTodos();

    };


    function TraerListaSuc(){
       return ServOfertaBase.TraerListaSuc();

    };

    function AltaO(ofer){
      console.info(ofer);
       return ServOfertaBase.AltaO(ofer);

    };

    function ModifO(ofer){
      console.info(ofer);
       return ServOfertaBase.ModifO(ofer);

    };

    function ElimO(ofer){
      console.info(ofer);
       return ServOfertaBase.ElimO(ofer);

    };

  })//Cierra factory
