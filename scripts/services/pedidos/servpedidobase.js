angular
  .module('app')
  .service('ServPedidoBase', function ($http,factorybddPedido) {
 
 
     var qhago =""; 
    var urlM = factorybddPedido.Api2;
    var urlE = factorybddPedido.Api3;
    var urlA = factorybddPedido.Api4;
    var urlProd=factorybddPedido.Api5;
    var url = factorybddPedido.Api;
    var urlTD = factorybddPedido.Api6;
    var urlS = factorybddPedido.Api7;
    var urlestad1=factorybddPedido.Api8;
    var urlGuardE=factorybddPedido.Api9;
    var urlUno=factorybddPedido.Api10;

    //Esta funcion es privada
   
   // console.info(TraerUrl(parametro,qhago));

      function TraerUrl(parametro,qhago)
      {
 
        if (!parametro)
        {
           
        
          return url;
        }
        else{
   
           if (qhago=="modif")
           {
 
             return urlM + "/" + parametro;
        
           } 
           else if (qhago=="todos") {
                 return url + "/" + parametro;
            }
            else if (qhago=="GuardE") {
              console.info(urlGuardE + "/" + parametro);
                 return urlGuardE + "/" + parametro;
            }
            else if (qhago=="todosD") {
                 return urlTD + "/" + parametro;
            }
             else if (qhago=="TraerUno") {
                 return urlUno + "/" + parametro;
            }
            else if (qhago=="elim") {
                 return urlE + "/" + parametro;
            }
           else if (qhago=="alta") {
                return urlA + "/" + parametro;
           }
           else if (qhago=="prod") {
                return urlProd;
           }
            else if (qhago=="suc") {
                return urlS;
           }
           else if (qhago=="estad1") {
            
                return urlestad1+ "/" + parametro;
           }
           else{
              return url + "/" + parametro;;
            }
        }

      } 


this.Estadisticas =function(num)
        {
           qhago="estad1";
          return $http.get(TraerUrl(num,qhago)).then(
          function (respuesta){
   
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
        }


        
        this.GuardarEncuesta =function(enc)
        {
           qhago="GuardE";
          return $http.post(TraerUrl(enc,qhago)).then(
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

         this.AltaP =function(p){
            
            qhago="alta";
          return $http.post(TraerUrl(p,qhago)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }

      

         this.ModifP =function(p){
            
            qhago="modif";
          return $http.post(TraerUrl(p,qhago)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }


  
           this.EliminarP =function(p){
            
            qhago="elim";
          return $http.post(TraerUrl(p,qhago)).then(
            function (respuesta){
            
              return respuesta.data;
              
            },
            function (error){
              return error;
            }
            );
        }
     
       this.TraerTodos =function(id){
        qhago="todos";
      
        return $http.get(TraerUrl(id,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }
      

      this.TraerUnPedido =function(id){
        qhago="TraerUno";
        
        console.info(TraerUrl(id,qhago));
        
        return $http.get(TraerUrl(id,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }
      


       this.TraerTodosD =function(id){
        qhago="todosD";
        return $http.get(TraerUrl(id,qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }

        this.TraerP =function(){
          qhago="prod";
        return $http.get(TraerUrl("na",qhago)).then(
          function (respuesta){
    
            return respuesta.data;
            
          },
          function (error){
            return error;
          }
          );
      }
      



  })//Cierra Servicio
