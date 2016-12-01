angular
  .module('app')
  .factory('factorybddCliente', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddCliente";
 
    objeto.Api ="http://tplab42016.hol.es/ws/clientes";
    objeto.Api2="http://tplab42016.hol.es/ws/ModifUs";
    objeto.Api3 ="http://tplab42016.hol.es/ws/ElimUs";
    objeto.Api4 ="http://tplab42016.hol.es/ws/AltaUs";
    return objeto;


    function TraerCliente(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

      function AltaCliente(cliente){
      return $http.post(TraerUrl(cliente)).then(
        function (respuesta){
 
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }


      function ModiCliente(empleado){
     
      return $http.post(TraerUrl(empleado)).then(
        function (respuesta){
      
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }


    function ElimCliente(cliente){
      return $http.post(TraerUrl(cliente)).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }


  })//Cierra factory
