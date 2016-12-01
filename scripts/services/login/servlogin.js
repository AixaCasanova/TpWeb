angular
  .module('app')
  .factory('Servlogin', function (ServloginBase) {
   
    var objeto = {};
    objeto.nombre = "Servlogin";
    objeto.TraerUnLogin = TraerUnLogin;
    objeto.TraerTodos=TraerTodos;
    objeto.GuardarLogin=GuardarLogin;
    return objeto;

 
    function TraerUnLogin(pers)
    {
       
      return ServloginBase.TraerUnLogin(pers);
    };

        function TraerTodos(){
     
     return ServloginBase.TraerTodos();

    };

     function GuardarLogin(pers)
    {
       
      return ServloginBase.GuardarLogin(pers);
    };


  })//Cierra factory
