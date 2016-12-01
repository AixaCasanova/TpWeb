angular
  .module('app')
  .factory('ServEncargado', function (ServEncargadoBase) {
   
    var objeto = {};
    objeto.nombre = "Factory con servicio de Banderas";
    objeto.TraerEnc = TraerEnc;
    objeto.ModifEnc = ModifEnc;
    objeto.ElimEnc = ElimEnc;
    objeto.AltaEncargado = AltaEncargado;
    objeto.TraerListaSuc=TraerListaSuc;
    return objeto;

 
    function TraerEnc(){
       return ServEncargadoBase.TraerEnc();

    };

    function ModifEnc(Encargado){

     return ServEncargadoBase.ModifEnc(Encargado);

    };

     function TraerListaSuc(){
       return ServEncargadoBase.TraerListaSuc();

    };


    
    function ElimEnc(Encargado){

     return ServEncargadoBase.ElimEnc(Encargado);

    };

    function AltaEncargado(enc)
    {

      return ServEncargadoBase.AltaEncargado(enc);
    };


  })//Cierra factory
