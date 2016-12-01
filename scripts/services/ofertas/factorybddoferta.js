angular
  .module('app')
  .factory('factorybddOferta', function ($http) {  
    var objeto = {};
    objeto.nombre = "Factory de Rutas";

    objeto.Api ="http://tplab42016.hol.es/ws/ofertas";
    objeto.Api2 ="http://tplab42016.hol.es/ws/sucursales";
    objeto.Api3 ="http://tplab42016.hol.es/ws/AltaOfertas";
    objeto.Api4="http://tplab42016.hol.es/ws/ModifOfertas";
    objeto.Api5="http://tplab42016.hol.es/ws/ElimOfertas";
    return objeto;

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

    function TraerTodos(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
          console.info("desde factory bdd",respuesta.data);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

     function AltaO(ofer){
      return $http.post(TraerUrl()).then(
        function (respuesta){
          console.info("desde factory bdd",respuesta.data);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

     function AltaO(ofer){
      return $http.post(TraerUrl()).then(
        function (respuesta){
          
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }
    
    function ModifO(ofer){
      return $http.post(TraerUrl()).then(
        function (respuesta){
          console.info("desde factory bdd",respuesta.data);
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }


  })//Cierra factory
