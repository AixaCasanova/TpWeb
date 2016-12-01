angular
  .module('app')
  .factory('factorybddLogin', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddLogin";

    objeto.Api ="http://tplab42016.hol.es/ws/login";
    objeto.Api2 ="http://tplab42016.hol.es/ws/usuarios";
    objeto.Api3 ="http://tplab42016.hol.es/ws/GuardarLogin";
    return objeto;


    function TraerUnLogin(pers){
      console.info("desdefacttory:",pers);
      return $http.post(TraerUrl(pers)).then(
        function (respuesta){
          console.info("desde factorybddLogin",respuesta);
          console.info(respuesta.data);
          return respuesta.data;
        },
        function (error){
          console.info("errordefactory:",error);
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
    
  })//Cierra factory
