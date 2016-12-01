angular
  .module('app')
  .service('ServloginBase', function ($http,factorybddLogin) {
 
 
    var url = factorybddLogin.Api;
    var url2 = factorybddLogin.Api2;
    var urlDL= factorybddLogin.Api3;
     
    //Esta funcion es privada
    function TraerUrl(parametro,qhago){
      if (!parametro)
        return url;
      else
        if (parametro!="todos") 
        {
          if (qhago=="dl") 
          {
            return urlDL + "/" + parametro;
          }else
          {
            return url + "/" + parametro;
          }
        }else
        {
          return url2;
        }
    }

    this.TraerUnLogin=function(pers){
      
      return $http.post(TraerUrl(pers)).then(
        function (respuesta){
                  return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }
    


    this.GuardarLogin=function(pers){
      qhago="dl";
      return $http.post(TraerUrl(pers,qhago)).then(
        function (respuesta){
                  return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }

    this.TraerTodos =function(){
      var paramTodos="todos";
      return $http.get(TraerUrl(paramTodos)).then(
        function (respuesta){
           
          return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }



  })//Cierra Servicio
