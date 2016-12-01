angular
  .module('app')
  .controller('CtrolClientes', function($scope,$rootScope, $auth ,ServCliente,$stateParams, $state, i18nService) {
 
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


 //----------------------

  
    $scope.gridOptionsClientes = {};
    $scope.gridOptionsClientes.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsClientes.paginationPageSize = 25;
    $scope.gridOptionsClientes.columnDefs = columnDefs();
    $scope.gridOptionsClientes.enableFiltering = true;
    i18nService.setCurrentLang('es');
  


      ServCliente.TraerCliente().then(function(resp){
       $scope.gridOptionsClientes.data=resp;
        
        $scope.listaUser=resp;
        });
 


      if ($stateParams['parametro'] != null) 
      {

          var ObjRecibido=$stateParams['parametro'];
      

            $scope.usuario={};
            $scope.usuario.id_user=ObjRecibido.id_user;
            $scope.usuario.nombre=ObjRecibido.nombre;
            $scope.usuario.apellido=ObjRecibido.apellido;
            $scope.usuario.mail=ObjRecibido.mail;
            $scope.usuario.dir=ObjRecibido.direccion;
            $scope.usuario.tel=Number(ObjRecibido.telefono);
            $scope.usuario.pass=ObjRecibido.password;
            $scope.usuario.estado = ObjRecibido.estado;
            $scope.usuario.tipo=ObjRecibido.tipo;
      }else
      {
 
        $scope.usuario={};
        $scope.usuario.nombre="Octavio";
        $scope.usuario.apellido="Villegas";
        $scope.usuario.mail="Octavio@MAIL.COM";
        $scope.usuario.dir="calle falsa 888";
        $scope.usuario.tel=123456;
        $scope.usuario.pass="123ABC";
        $scope.usuario.passRep="123ABC";
        $scope.usuario.estado = "H";
        $scope.usuario.tipo="comprador";
        $scope.usuario.sucursal="NoAplica";
      }
      
      //----------------------------------

      $scope.Volver=function()
            {
              $state.go("clientes");
            }

 

      $scope.IrModificarCli = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("ModifCli",{parametro:parametro});
      }
      
      $scope.IrEliminarCli = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("EliminarCli",{parametro:parametro});
      }

       $scope.ModifC=function()
      {
          ServCliente.ModiCliente(JSON.stringify($scope.usuario)).then(function(resp)
            {
                 
                $state.go("clientes");
                
            })
           
      }

       $scope.ElimC=function()
      {
          ServCliente.ElimCliente(JSON.stringify($scope.usuario)).then(function(resp)
            {
                
                $state.go("clientes");
                
            })
           ,function errorCallback(response) {        
           //aca se ejecuta cuando hay errores
            console.log(response);           
          }
      }

      $scope.AltaC=function()
      {
          ServCliente.AltaCliente(JSON.stringify($scope.usuario)).then(function(resp)
            {
              console.info(resp['statusText']);
              if (resp['statusText'] == "Internal Server Error") {
                alert("No se pudo dar de alta, cliente repetido..")
              }
                $state.go("clientes");
            })
           
      }

      $scope.Registrarse=function()
      {
          ServCliente.AltaCliente(JSON.stringify($scope.usuario)).then(function(resp)
            {
                 
                $state.go("login");
            })
           
      }

      

    function columnDefs () {
      return [
         { field: 'nombre', name: 'nombre', width: 120
          ,enableFiltering: false
        },
         { field: 'apellido', name: 'apellido', width: 120
          ,enableFiltering: false
        },
         { field: 'direccion', name: 'direccion', width: 120
          ,enableFiltering: false
        },
         { field: 'mail', name: 'mail', width: 120
          ,enableFiltering: false
        },
         { field: 'telefono', name: 'telefono', width: 120
          ,enableFiltering: false
        },
         { field: 'tipo', name: 'tipo', width: 120
          ,enableFiltering: false
        },
          { field: 'estado', name: 'estado', width: 120
          ,enableFiltering: false
        },
        { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Modificar" class="btn btn-warning" ng-click="grid.appScope.IrModificarCli(row.entity)">'},
        { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" class="btn btn-danger" ng-click="grid.appScope.IrEliminarCli(row.entity)">'},
        


      ];
    };
  });
