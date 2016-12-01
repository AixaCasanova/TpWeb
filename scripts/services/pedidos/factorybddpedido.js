angular
  .module('app')
  .factory('factorybddPedido', function ($http) {  
    var objeto = {};
    objeto.nombre = "factorybddPedido";

    objeto.Api ="http://tplab42016.hol.es/ws/pedidos";
    objeto.Api2 ="http://tplab42016.hol.es/ws/ModifPed";
    objeto.Api3 ="http://tplab42016.hol.es/ws/ElimPed";
    objeto.Api4 ="http://tplab42016.hol.es/ws/AltaPed";
    objeto.Api5 ="http://tplab42016.hol.es/ws/productos";
    objeto.Api6 ="http://tplab42016.hol.es/ws/pedidosDT";
    objeto.Api7 ="http://tplab42016.hol.es/ws/sucursales";
    objeto.Api8 ="http://tplab42016.hol.es/ws/Estadisticas";
    objeto.Api9 ="http://tplab42016.hol.es/ws/Encuesta";
    objeto.Api10 ="http://tplab42016.hol.es/ws/TraerUnPedido";
    return objeto;


    function TraerTodosD(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
           
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
           
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    function GuardarEncuesta(e)
        {
          return $http.post(TraerUrl(e)).then(
            function (respuesta)
            {
             
              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }



    function TraerUnPedido(e)
        {
          return $http.post(TraerUrl(e)).then(
            function (respuesta)
            {
             
              return respuesta.data;
            },
            function (error){
              return error;
            }
          );
        }


            function Estadisticas(){
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

      function TraerP(){
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
