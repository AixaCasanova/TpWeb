angular
  .module('app')
  .factory('ServSucursales', function (ServSucursalesBase) {
   
    var objeto = {};
    objeto.nombre = "";
    objeto.TraerTodos = TraerTodos;
    objeto.InsertarLocal=InsertarLocal;
    objeto.TraerMisOfertas=TraerMisOfertas;
    objeto.ModificarLocal=ModificarLocal;
    objeto.EliminarLocal=EliminarLocal;
    /*objeto.ModifP=ModifP;
    objeto.AltaP = AltaP;
    objeto.EliminarP=EliminarP;*/
    
   
    return objeto;

    
    

    function TraerTodos(){
   
      return ServSucursalesBase.TraerTodos();
 
    };

   function InsertarLocal(loc){
   
    console.info(loc);
      return ServSucursalesBase.InsertarLocal(loc);
 
    };
    
     function ModificarLocal(loc){
   
 
      return ServSucursalesBase.ModificarLocal(loc);
 
    };

     function EliminarLocal(loc){
   
 
      return ServSucursalesBase.EliminarLocal(loc);
 
    };

   function TraerMisOfertas(parametro){
   
     console.info(parametro);
      return ServSucursalesBase.TraerMisOfertas(parametro);
 
    };

  })//Cierra factory
