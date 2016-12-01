angular
  .module('app')
  .factory('factorybddSucursales', function ($http) {  
    var objeto = {};
    objeto.nombre = "Factory de Rutas";

    objeto.Api ="http://tplab42016.hol.es/ws/sucursales";
    objeto.Api2 ="http://tplab42016.hol.es/ws/sucursalesUp";
    objeto.Api3 ="http://tplab42016.hol.es/ws/OfertasDeSucursal";
    objeto.Api4 ="http://tplab42016.hol.es/ws/ModifSuc";
    objeto.Api5 ="http://tplab42016.hol.es/ws/ElimSuc";

    return objeto;


    function TraerTodos(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    function InsertarLocal(img){
      return $http.post(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    function ModificarLocal(img){
      return $http.post(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }
    
    function EliminarLocal(img){
      return $http.post(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }    
    function TraerMisOfertas(loc){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

  })//Cierra factory
