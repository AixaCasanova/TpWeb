angular
  .module('app')
  .service('ServOfertaBase', function ($http,factorybddOferta) {
 
 
    var url = factorybddOferta.Api;
    var urlS = factorybddOferta.Api2;
    var urlA = factorybddOferta.Api3;
    var urlM= factorybddOferta.Api4;
    var urlE= factorybddOferta.Api5;

    console.info(url);
    //Esta funcion es privada


   function TraerUrl(parametro,accion){
 
      if (!parametro)
      {
         
    
        return url;
      }
      else{
 
         if (accion=="Modif")
         {
         
        
           return urlM + "/" + parametro;
      
         }else if (accion=="suc") {
 
          return urlS;
        }
         else if (accion=="elim") {
              return urlE + "/" + parametro;
         }else if (accion=="alta") {
             
              return urlA + "/" + parametro;
         }
         else{
            return url + "/" + parametro;;
          }
      }

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


  this.AltaO =function(ofer)
        {
           qhago="alta";
          return $http.post(TraerUrl(ofer,qhago)).then(
          function (respuesta){
   
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
        }

        
      this.ElimO =function(ofer)
        {
           qhago="elim";
          return $http.post(TraerUrl(ofer,qhago)).then(
          function (respuesta){
   
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
        }

    this.ModifO =function(ofer)
        {
           qhago="Modif";
          return $http.post(TraerUrl(ofer,qhago)).then(
          function (respuesta){
   
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
        }

    this.TraerTodos=function(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
         
          return respuesta.data;
          
        },
        function (error){
          return error;
        }
        );
    }


  })//Cierra Servicio
