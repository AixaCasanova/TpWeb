angular
  .module('app')
  .factory('factorybddEncargado', function ($http) {  
    var objeto = {};

  console.info("el obj:",objeto);
   objeto.Api ="http://tplab42016.hol.es/ws/encargado";
   objeto.Api2 ="http://tplab42016.hol.es/ws/ModifUs";
   objeto.Api3 ="http://tplab42016.hol.es/ws/ElimUs";
   objeto.Api4 ="http://tplab42016.hol.es/ws/AltaUs";
   objeto.Api5 ="http://tplab42016.hol.es/ws/sucursales";
    return objeto;


    function TraerEnc(){
        return $http.get(TraerUrl()).then(
        function (respuesta){
 
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

     function TraerListaSuc(){
        return $http.get(TraerUrl()).then(
        function (respuesta){
        console.info("resp factory suc:",respuesta);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

      function ModifEnc(Encargado){
     
      return $http.post(TraerUrl(Encargado)).then(
        function (respuesta){
      
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    

      function ElimEnc(Encargado){
     
      return $http.post(TraerUrl(Encargado)).then(
        function (respuesta){
      
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

      function AltaEncargado(encargado){
      return $http.post(TraerUrl(encargado)).then(
        function (respuesta){
          console.info("desde factory bdd",respuesta);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }


    
  })//Cierra factory
