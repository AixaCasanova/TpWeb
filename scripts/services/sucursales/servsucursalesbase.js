angular
  .module('app')
  .service('ServSucursalesBase', function ($http,factorybddSucursales) {
 
 
/*     var qhago =""; 
    var urlM = factorybddSucursales.Api2;
    var urlE = factorybddSucursales.Api3;
    var urlA = factorybddSucursales.Api4;*/
    
    var url = factorybddSucursales.Api;
    var urlloc = factorybddSucursales.Api2;
    var urlofr  = factorybddSucursales.Api3;
    var urlInsloc  = factorybddSucursales.Api4;
    var UrlBorrloc=  factorybddSucursales.Api5;
    //Esta funcion es privada
   

      function TraerUrl(parametro,accion)//,accion
      {
 
        if (!parametro)
        {
           
      
          return url;
        }
        else{
     
           if (accion=="loc")
           {
            

             return urlloc + "/" + parametro;
        
           }
            else if (accion=="Insloc")
           {
            

             return urlInsloc + "/" + parametro;
        
           }
                else if (accion=="Borrloc")
           {
            

             return UrlBorrloc + "/" + parametro;
        
           }
            else if (accion=="ofr") {
              console.info( urlofr + "/" + parametro);
                 return urlofr + "/" + parametro;
            }
             /*  else if (accion=="elim") {
                 return urlE + "/" + parametro;
            }
           else if (accion=="alta") {
                return urlA + "/" + parametro;
           }
           else{
              return url + "/" + parametro;
            }
        }
            */
              return url + "/" + parametro;//condicional
      } 
    }

     this.TraerTodos =function(){
        return $http.get(TraerUrl()).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

      
       this.InsertarLocal =function(loc){
 
         qhago="loc";
        return $http.post(TraerUrl(loc,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

      this.ModificarLocal =function(loc){
 
         qhago="Insloc";
        return $http.post(TraerUrl(loc,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

            this.EliminarLocal =function(loc){
 
         qhago="Borrloc";
        return $http.post(TraerUrl(loc,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

       this.TraerMisOfertas =function(parametro){
 
         qhago="ofr";
        return $http.get(TraerUrl(parametro,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }


  })//Cierra Servicio
