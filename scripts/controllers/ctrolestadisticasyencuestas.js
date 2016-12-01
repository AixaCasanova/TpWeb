    angular
      .module('app')
      .controller('CtrolEstadisticas', function($scope,ServPedido,$auth,$rootScope) {
     //-------------------
var datos=$auth.getPayload();
     
          if ($auth.isAuthenticated()) 
          {    
              var datos=$auth.getPayload();
              $scope.ver=true;
              $rootScope.usuarioAver="Bienvenido "+ datos['nombre'];  
               $rootScope.SeVe=true;
              $rootScope.userAVer="Bienvenido "+ datos['nombre'];

              if (datos['perfil'] == "administrador") 
              {
                  console.info("datos.perfil: ",datos['perfil'])
                  $rootScope.esEnc=true;
                  $rootScope.esAdmin=true;
                  $rootScope.esVend=true;
              }else if (datos['perfil'] == "comprador") 
              {
                  $rootScope.esAdmin=false;
                  $rootScope.esVend=false;
                  $rootScope.esEnc=false;
              }else if (datos['perfil'] == "encargado") 
              {
                  $rootScope.esAdmin=false;
                  $rootScope.esVend=true;
                  $rootScope.esEnc=true;
              }else if (datos['perfil'] == "vendedor")
              {
                  $rootScope.esAdmin=false;         
                  $rootScope.esVend=true;
                  $rootScope.esEnc=false;       
              }else
              {
                $scope.ver=false;
                console.info("llega al ctrol gral?3")
                console.info("notoken",$auth.getPayload());
                $rootScope.SeVe=false;
                $rootScope.usuarioAver="";
              }
          }else{
           $scope.ver=false; 
            console.info("notoken",$auth.getPayload());
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
      }


     //---------------------


      $scope.gridOptionsE1 = {};
      $scope.gridOptionsE1.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsE1.paginationPageSize = 25;
      $scope.gridOptionsE1.columnDefs=CDcantPedPorSucursal();
     
       $scope.gridOptionsE2 = {};
      $scope.gridOptionsE2.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsE2.paginationPageSize = 25;
      $scope.gridOptionsE2.columnDefs=CDcantPedPorSucursalYEmp();

        $scope.gridOptionsE3 = {};
      $scope.gridOptionsE3.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsE3.paginationPageSize = 25;
      $scope.gridOptionsE3.columnDefs=CDcantPedPorSucursal();


      $scope.gridOptionsE4 = {};
      $scope.gridOptionsE4.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsE4.paginationPageSize = 25;
      $scope.gridOptionsE4.columnDefs=CDcantPedPorSucursal();

        $scope.gridOptionsE5 = {};
      $scope.gridOptionsE5.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsE5.paginationPageSize = 25;
      $scope.gridOptionsE5.columnDefs=CDcantPedPorSucursal();

        $scope.gridOptionsE6 = {};
      $scope.gridOptionsE6.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsE6.paginationPageSize = 25;
      $scope.gridOptionsE6.columnDefs=CDcantPedPorSucursal();

        $scope.gridOptionsE7 = {};
      $scope.gridOptionsE7.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsE7.paginationPageSize = 25;
      $scope.gridOptionsE7.columnDefs=CDcantPedPorSucursal();




     	

     
    $scope.ver1=false;
    $scope.ver2=false;
    $scope.ver3=false;
    $scope.ver4=false;
    $scope.ver5=false;
    $scope.ver6=false;
    $scope.ver7=false;
     


    $scope.verE1= function()
    {
    	$scope.ver1=true;
    	$scope.ver2=false;
    	$scope.ver3=false;
    	$scope.ver4=false;
    	$scope.ver5=false;
    	$scope.ver6=false;
    	$scope.ver7=false;

     
     	 ServPedido.Estadisticas("1").then(function(resp)
        {
            console.info(resp);
         	$scope.gridOptionsE1.data=resp
    	}); 
    }
    $scope.verE2= function()
    {
    	$scope.ver1=false;
    	$scope.ver2=true;
    	$scope.ver3=false;
    	$scope.ver4=false;
    	$scope.ver5=false;
    	$scope.ver6=false;
    	$scope.ver7=false;
     

    	ServPedido.Estadisticas("2").then(function(resp)
        {
            console.info(resp);
         	$scope.gridOptionsE2.data=resp
    	}); 
    }
    $scope.verE3= function()
    {
    	$scope.ver1=false;
    	$scope.ver2=false;
    	$scope.ver3=true;
    	$scope.ver4=false;
    	$scope.ver5=false;
    	$scope.ver6=false;
    	$scope.ver7=false;
    }
    $scope.verE4= function()
    {
    	$scope.ver1=false;
    	$scope.ver2=false;
    	$scope.ver3=false;
    	$scope.ver4=true;
    	$scope.ver5=false;
    	$scope.ver6=false;
    	$scope.ver7=false;
    }
    $scope.verE5= function()
    {
    	$scope.ver1=false;
    	$scope.ver2=false;
    	$scope.ver3=false;
    	$scope.ver4=false;
    	$scope.ver5=true;
    	$scope.ver6=false;
    	$scope.ver7=false;
    }
    $scope.verE6= function()
    {
    	$scope.ver1=false;
    	$scope.ver2=false;
    	$scope.ver3=false;
    	$scope.ver4=false;
    	$scope.ver5=false;
    	$scope.ver6=true;
    	$scope.ver7=false;
    }
    $scope.verE7= function()
    {
    	$scope.ver1=false;
    	$scope.ver2=false;
    	$scope.ver3=false;
    	$scope.ver4=false;
    	$scope.ver5=false;
    	$scope.ver6=false;
    	$scope.ver7=true;
    }


     function CDcantPedPorSucursal () {
          return [
             { field: 'sucursal', name: 'sucursal', width: 120
              ,enableFiltering: false
            },
             { field: 'cantidad', name: 'cantidad', width: 120
              ,enableFiltering: false
            }          

          ];
        };
     function CDcantPedPorSucursalYEmp () {
          return [
             { field: 'sucursal', name: 'sucursal', width: 120
              ,enableFiltering: false
            },
             { field: 'cantidad', name: 'cantidad', width: 120
              ,enableFiltering: false
            },
             { field: 'empleado', name: 'empleado', width: 120
              ,enableFiltering: false
            }         

          ];
        };

    })


    .controller('CtrolEncuesta', function($scope,ServPedido,$state,$auth,$rootScope) {
     
     //-------------------
  
  var datos=$auth.getPayload();
          if ($auth.isAuthenticated()) 
          {    
              var datos=$auth.getPayload();
              $scope.ver=true;
              $rootScope.usuarioAver="Bienvenido "+ datos['nombre'];  
               $rootScope.SeVe=true;
              $rootScope.userAVer="Bienvenido "+ datos['nombre'];

              if (datos['perfil'] == "administrador") 
              {
                  console.info("datos.perfil: ",datos['perfil'])
                  $rootScope.esEnc=true;
                  $rootScope.esAdmin=true;
                  $rootScope.esVend=true;
              }else if (datos['perfil'] == "comprador") 
              {
                  $rootScope.esAdmin=false;
                  $rootScope.esVend=false;
                  $rootScope.esEnc=false;
              }else if (datos['perfil'] == "encargado") 
              {
                  $rootScope.esAdmin=false;
                  $rootScope.esVend=true;
                  $rootScope.esEnc=true;
              }else if (datos['perfil'] == "vendedor")
              {
                  $rootScope.esAdmin=false;         
                  $rootScope.esVend=true;
                  $rootScope.esEnc=false;       
              }else
              {
                $scope.ver=false;
                console.info("llega al ctrol gral?3")
                console.info("notoken",$auth.getPayload());
                $rootScope.SeVe=false;
                $rootScope.usuarioAver="";
              }
          }else{
           $scope.ver=false; 
            console.info("notoken",$auth.getPayload());
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
      }


     //---------------------

    	 $scope.descripcionClaraNew="Si";
    	 $scope.problemasPRealizarPNew="Si";
    	 $scope.PregAdquirioOld="Si";
     	$scope.tiempoEntregaOld="Bueno";
    	 $scope.calidadProductoOld="Bueno";
    	 $scope.calidadAtencionOld="Bueno";
    	 $scope.ComoLlego="TV";


     $scope.guardarEncuesta=function()
     {
     	$scope.encuesta={};
    	$scope.encuesta.descripcionClaraNew=$scope.descripcionClaraNew;
    	$scope.encuesta.problemasPRealizarPNew=$scope.problemasPRealizarPNew;
    	$scope.encuesta.PregAdquirioOld=$scope.PregAdquirioOld;
    	$scope.encuesta.tiempoEntregaOld=$scope.tiempoEntregaOld;
    	$scope.encuesta.calidadProductoOld=$scope.calidadProductoOld;
    	$scope.encuesta.calidadAtencionOld=$scope.calidadAtencionOld;
    	$scope.encuesta.ComoLlego=$scope.ComoLlego;

    	
    	console.info($scope.encuesta);
    	ServPedido.GuardarEncuesta(JSON.stringify($scope.encuesta)).then(function(resp)
        {
            console.info(resp);
         	$state.go("MisPedidos");
    	}); 
     }
     });

