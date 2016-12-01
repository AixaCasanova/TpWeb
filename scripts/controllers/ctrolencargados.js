angular
  .module('app')
  .controller('CtrolEncargados', function($scope,$rootScope, $auth, $state, ServEncargado, $stateParams, i18nService) {
  var datos=$auth.getPayload();

 //-------------------
 
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
 
    $scope.gridOptionsEncargados = {};
    $scope.gridOptionsEncargados.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsEncargados.paginationPageSize = 25;
    $scope.gridOptionsEncargados.columnDefs = columnDefs();
    $scope.gridOptionsEncargados.enableFiltering = true;
    i18nService.setCurrentLang('es');
  


      ServEncargado.TraerEnc().then(function(resp){
       $scope.gridOptionsEncargados.data=resp;
        console.info("desde constroller",resp);
  
     });

        ServEncargado.TraerListaSuc().then(function(resp){

            $scope.Lsucursales=resp;    
      
         });


      //----------------------------

       $scope.usuario={};
      if ($stateParams['parametro'] != null) 
      {
       
          var ObjRecibido=$stateParams['parametro'];
      

            
            $scope.usuario.id_user=ObjRecibido.id_user;
            $scope.usuario.nombre=ObjRecibido.nombre;
            $scope.usuario.apellido=ObjRecibido.apellido;
            $scope.usuario.mail=ObjRecibido.mail;
            $scope.usuario.dir=ObjRecibido.direccion;
            $scope.usuario.tel=ObjRecibido.telefono;
            $scope.usuario.pass=ObjRecibido.password;
            $scope.usuario.estado=ObjRecibido.estado;
            $scope.SucElegida=ObjRecibido.sucursal;
            $scope.TipoElegido=ObjRecibido.tipo;
            $scope.usuario.tipo=$scope.TipoElegido;
           
      }else
      {
       
        $scope.usuario.nombre="Cristina";
        $scope.usuario.apellido="Perez";
        $scope.usuario.mail="Cristina@MAIL.COM";
        $scope.usuario.dir="calle falsa 999";
        $scope.usuario.tel=123456;
        $scope.usuario.pass="123456";
        $scope.usuario.passRep="123456";
        $scope.usuario.estado = "H";
        $scope.usuario.tipo="encargado";
        $scope.SucElegida="NoAplica";
        $scope.usuario.sucursal=$scope.SucElegida;
         
      }
   //------------------------------------
 
          $scope.Volver=function()
            {
              $state.go("encargados");
            }


       $scope.AltaEncargado=function()
      {
        console.info("enc:",$scope.usuario);
          ServEncargado.AltaEncargado(JSON.stringify($scope.usuario)).then(function(resp)
            {
                 if (resp['statusText'] == "Internal Server Error") {
                alert("No se pudo dar de alta, encargado repetido..")
              }
                $state.go("encargados");
            })
           
      }
 
        $scope.ModificarEnc=function()
        {
        
          $scope.usuario.sucursal=$scope.SucElegida;
            ServEncargado.ModifEnc(JSON.stringify($scope.usuario)).then(function(resp)
            {
              console.info("respuesta: ",resp);
              $state.go("encargados");
                
            })
        }

        $scope.ElimEnc=function()
        {
          $scope.usuario.sucursal=$scope.SucElegida;
            ServEncargado.ElimEnc(JSON.stringify($scope.usuario)).then(function(resp)
            {
              console.info("respuesta: ",resp);
              $state.go("encargados");
                
            })
        }

               
       $scope.IrModificarEnc = function(parametro)
      {
        $state.go("ModificarEnc",{parametro:parametro});
      }
      
       $scope.IrEliminarEnc = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("EliminarEnc",{parametro:parametro});
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
          { field: 'estado', name: 'estado', width: 120
          ,enableFiltering: false
        },
          { field: 'sucursal', name: 'sucursal', width: 120
          ,enableFiltering: false
        },
        { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button" class="btn btn-warning" value="Modificar" ng-click="grid.appScope.IrModificarEnc(row.entity)">'},
        { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button" class="btn btn-danger" value="Eliminar" ng-click="grid.appScope.IrEliminarEnc(row.entity)">'},
        


      ];
    };
  });
