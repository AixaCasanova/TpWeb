angular
  .module('app')
  .controller('CtrolUsuario', function($scope, $rootScope,$stateParams,$auth,$state, ServUsuario, i18nService, uiGridConstants) {
 
  var datos=$auth.getPayload();
  //-------------------
 
 
       if ($auth.isAuthenticated()) {
       
        var datos=$auth.getPayload();
        $scope.ver=true;
        $rootScope.usuarioAver="Bienvenido "+ datos['nombre'];  
         $rootScope.SeVe=true;
        $rootScope.userAVer="Bienvenido "+ datos['nombre'];

        if (datos['perfil'] == "administrador") {
        
        console.info("datos.perfil: ",datos['perfil'])

          $rootScope.esAdmin=true;
          $rootScope.esVend=true;
        }else if (datos['perfil'] == "comprador") {
          $rootScope.esAdmin=false;
          $rootScope.esVend=false;
        }else if (datos['perfil'] == "vendedor") {
          $rootScope.esAdmin=false;         
          $rootScope.esVend=true;
        } 
        else if (datos['perfil'] == "encargado") {
          $rootScope.esAdmin=false;         
          $rootScope.esVend=true;
          //modificarr!!!!
        } 
       
      }else{
        console.info("llega al ctrol gral?3")
        console.info("notoken",$auth.getPayload());
          $rootScope.SeVe=false;
          $rootScope.usuarioAver="";
           $scope.ver=false;
      }

 //----------------------
 
    
    $scope.gridOptionsUsuarios = {};
    $scope.gridOptionsUsuarios.paginationPageSizes = [25, 50, 75];
 
    $scope.gridOptionsUsuarios.paginationPageSize = 25;
    $scope.gridOptionsUsuarios.columnDefs = columnDefs();
    $scope.gridOptionsUsuarios.enableFiltering = true;
    i18nService.setCurrentLang('es');
    
      ServUsuario.TraerTodos().then(function(resp){
       $scope.gridOptionsUsuarios.data=resp;
       $scope.listaUser=resp;
  
     });

     
      //------------------------------


       ServUsuario.TraerListaSuc().then(function(resp){

            $scope.Lsucursales=resp;    
      
         });

     $scope.usuario={};
    //------------------------------------
    
      if ($stateParams['parametro'] != null) 
      {
       
          var ObjRecibido=$stateParams['parametro'];
      

            
            $scope.usuario.id_user=ObjRecibido.id_user;
            $scope.usuario.nombre=ObjRecibido.nombre;
            $scope.usuario.apellido=ObjRecibido.apellido;
            $scope.usuario.mail=ObjRecibido.mail;
            $scope.usuario.dir=ObjRecibido.direccion;
            $scope.usuario.tel=Number(ObjRecibido.telefono);
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
        $scope.usuario.tipo="administrador";
        $scope.SucElegida="NoAplica";
        $scope.usuario.sucursal=$scope.SucElegida;
         
      }
   //------------------------------------


      $scope.IrModificar = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("ModifUs",{parametro:parametro});
      }
      
      $scope.IrEliminar = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("EliminarUs",{parametro:parametro});
      }

      $scope.Volver = function(parametro)
      {
        //console.info(parametro['nombre']);
        
        $state.go("usuarios");
      }


       $scope.Modif=function()
      {
      
        $scope.usuario.sucursal=$scope.SucElegida;
          ServUsuario.Modif(JSON.stringify($scope.usuario)).then(function(resp)
            {

                $state.go("usuarios");
                
            })
           
      }

       $scope.Elim=function()
      {
          ServUsuario.Elim(JSON.stringify($scope.usuario)).then(function(resp)
            {
    
                $state.go("usuarios");
                
            })
           
      }

      $scope.AltaUs=function()
      {

        $scope.usuario.sucursal=$scope.SucElegida;
        ServUsuario.Alta(JSON.stringify($scope.usuario)).then(function(resp)
            {
                 
                 if (resp['statusText'] == "Internal Server Error") {
                alert("No se pudo dar de alta, usuario repetido..")
              }
                $state.go("usuarios");
            })
           
      }
 
  //----------------------------------------
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
         { field: 'tipo', name: 'tipo', width: 120,
          filter: {
              type: uiGridConstants.filter.SELECT,
              selectOptions: [
                {value: 'administrador', label: 'administrador'},
                {value: 'vendedor', label: 'vendedor'},
                {value: 'comprador', label: 'comprador'},
                {value: 'encargado', label: 'encargado'}
              ],
            }
        ,cellFilter: 'tipou'    

        },
          { field: 'estado', name: 'estado', width: 120
          ,enableFiltering: false
        },
          { field: 'sucursal', name: 'sucursal', width: 120
          ,enableFiltering: false
        },
        { field: 'Modificar', name: 'Modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button" class="btn btn-warning" value="Modificar" ng-click="grid.appScope.IrModificar(row.entity)">'},
        { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button" class="btn btn-danger" value="Eliminar" ng-click="grid.appScope.IrEliminar(row.entity)">'},
        

        //---------------
      ];
    };
  });
