angular
  .module('app')
  .directive("dirclientes",function(){

  	return {
  		replace:true,
  		restrict:"MEAC",	
  		templateUrl:"templates/tablaclientes.html"
  		}

  })
   .directive("dirempleados",function(){

    return {
      replace:true,
      restrict:"MEAC",  
      templateUrl:"templates/tablaempleados.html"
      }

  })
     .directive("dirusuarios",function(){

    return {
      replace:true,
      restrict:"MEAC",  
      templateUrl:"templates/tablausuarios.html"
      }

  })
    .directive("direncargados",function(){

    return {
      replace:true,
      restrict:"MEAC",  
      templateUrl:"templates/tablaencargados.html"
      }

  })
   