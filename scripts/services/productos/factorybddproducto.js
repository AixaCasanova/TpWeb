angular
  .module('app')
  .factory('factorybddProducto', function ($http) {  
    var objeto = {};
    objeto.nombre = "Factory de Rutas";

    objeto.Api ="http://tplab42016.hol.es/ws/productos";
    objeto.Api2 ="http://tplab42016.hol.es/ws/ModifP";
    objeto.Api3 ="http://tplab42016.hol.es/ws/ElimP";
    objeto.Api4 ="http://tplab42016.hol.es/ws/AltaP";
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


  

        function AltaP(p)
        {
          return $http.post(TraerUrl(p)).then(
            function (respuesta)
            {
             
              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }

        //------------

         

        function EliminarP(p)
        {
          return $http.post(TraerUrl(p)).then(
            function (respuesta)
            {

              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }
    
        
        function ModifP(p)
        {
          return $http.post(TraerUrl(p)).then(
            function (respuesta)
            {
              
              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }
    

  })//Cierra factory
