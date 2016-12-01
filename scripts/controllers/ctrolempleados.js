angular
  .module('app')
  .controller('CtrolEmpleados', function($scope,$rootScope, $state, $auth , ServEmpleado, $stateParams, i18nService) {
 
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
 //----------------------

    
    $scope.gridOptionsEmpleados = {};
    $scope.gridOptionsEmpleados.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsEmpleados.paginationPageSize = 25;
    $scope.gridOptionsEmpleados.columnDefs = columnDefs();
    $scope.gridOptionsEmpleados.enableFiltering = true;
    i18nService.setCurrentLang('es');
  

  

      ServEmpleado.TraerEmp().then(function(resp){
       $scope.gridOptionsEmpleados.data=resp;
         
        $scope.listaUser=resp;

     });

      
     ServEmpleado.TraerListaSuc().then(function(resp){
          $scope.SucElegida=resp[0].nombre;
           
            $scope.Lsucursales=resp;    
      
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
            $scope.usuario.sucursal=ObjRecibido.sucursal;
            $scope.SucElegida=ObjRecibido.sucursal;


      }else
      {
   
        $scope.usuario={};
        $scope.usuario.nombre="mariano";
        $scope.usuario.apellido="matinez";
        $scope.usuario.mail="mariano@MAIL.COM";
        $scope.usuario.dir="calle falsa 321";
        $scope.usuario.tel=123456;
        $scope.usuario.pass="123456";
        $scope.usuario.passRep="123456";
        $scope.usuario.estado = "H";
        $scope.usuario.tipo="vendedor";
         
      $scope.usuario.sucursal=$scope.SucElegida;


      }
      
 
      
      $scope.VolverM=function()
            {
              $state.go("inicio");
            }



       $scope.ModificarEmp=function()
      {
         $scope.usuario.sucursal=$scope.SucElegida;
          ServEmpleado.ModifEmp(JSON.stringify($scope.usuario)).then(function(resp)
            {
               
                $state.go("empleados");
                
            })
           
      }
 
      
      $scope.Volver=function()
            {
              $state.go("empleados");
            }



       $scope.AltaEmpleado=function()
      {
 
    
              $scope.usuario.sucursal=$scope.SucElegida;
          ServEmpleado.AltaEmpleado(JSON.stringify($scope.usuario)).then(function(resp)
            {
               if (resp['statusText'] == "Internal Server Error") {
                alert("No se pudo dar de alta, empleado repetido..")
              }
          
                $state.go("empleados");

            })
           
      }

 

        $scope.ElimEmp=function()
        {
          $scope.usuario.quehago="elim";
            ServEmpleado.ElimEmp(JSON.stringify($scope.usuario)).then(function(resp)
            {
              
              $state.go("empleados");
                
            })
        }

               
       $scope.IrModificar = function(parametro)
      {
        $state.go("ModifEmp",{parametro:parametro});
      }
      
       $scope.IrEliminar = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("EliminarEmp",{parametro:parametro});
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
          { field: 'sucursal', name: 'sucursal', width: 120
          ,enableFiltering: false
        },
        { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Modificar" class="btn btn-warning" ng-click="grid.appScope.IrModificar(row.entity)">'},
        { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" class="btn btn-danger" ng-click="grid.appScope.IrEliminar(row.entity)">'},
        


      ];
    };
  });
