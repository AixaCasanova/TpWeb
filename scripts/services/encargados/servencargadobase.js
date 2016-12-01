angular
  .module('app')
  .service('ServEncargadoBase', function ($http,factorybddEncargado) {
    this.Nombre = "ServEncargadoBase";
    var qhago ="";
    var url = factorybddEncargado.Api;
    var urlM = factorybddEncargado.Api2;
    var urlE = factorybddEncargado.Api3;
    var urlA = factorybddEncargado.Api4;
    var urlS = factorybddEncargado.Api5;
      //Esta funcion es privada
    function TraerUrl(parametro,accion){
 
      if (!parametro)
      {
        return url;
      }
      else{
       
         if (accion=="modif")
         {
         
           return urlM + "/" + parametro;
      
         }else if (accion=="elim") {
              return urlE + "/" + parametro;
         }else if (accion=="alta") {
              return urlA + "/" + parametro;
         }else if (accion=="suc") {
 
          return urlS;
        }
         else{
            return url + "/" + parametro;;
          }
      }

    }
  
    this.TraerEnc =function(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
  
          return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }

     this.AltaEncargado =function(enc){
            
            qhago="alta";
          return $http.post(TraerUrl(enc,qhago)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }


    this.ModifEnc =function(encargado)
    {
          qhago="modif";
    
      return $http.post(TraerUrl(encargado,qhago)).then(
        function (respuesta){
       
          return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }

      this.TraerListaSuc =function()
        {
           qhago="suc";
          return $http.get(TraerUrl("NA",qhago)).then(
          function (respuesta){
   
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
        }

    this.ElimEnc =function(encargado)
    {
        qhago="elim";
    
      return $http.post(TraerUrl(encargado,qhago)).then(
        function (respuesta){
       
          return respuesta.data;
          
        },
        function (error){
          return error;
        }
      );
    }

    




  })//Cierra Servicio
