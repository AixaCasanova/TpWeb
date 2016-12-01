angular
  .module('app')
  .controller('CtrolPedidos', function($scope,$rootScope,NgMap,$auth,$state, ServPedido, i18nService, $stateParams)
   {
 var datos=$auth.getPayload();
 //-------------------------------------------------

     $scope.gridOptionsMisProdSel = {};
     $scope.gridOptionsMisProdSel.paginationPageSizes = [25, 50, 75];
     $scope.gridOptionsMisProdSel.paginationPageSize = 25;
     $scope.gridOptionsMisProdSel.columnDefs=columnDefsPsel();



//-------------------------





         ServPedido.TraerListaSuc().then(function(resp){
          var lstS=[];
          resp.forEach(function(r){
                if(r.nombre!="NoAplica"){
                  lstS.push(r);
                }
              })
            $scope.Lsucursales=lstS;  
           
      
         });

    var index = -1;
     var ListPr = [];
     var ListDetalle = [];
     var total=0;
     $scope.veoGrilla=false;
 

 
     $scope.fechaActual = new Date();

    $scope.fechaActualF = formatDate($scope.fechaActual);
  
//-------------------------------------------



 if ($stateParams['parametro'] != null || $stateParams['parametro'] != undefined) 
      {

        var queviene =$stateParams['parametro'];
        console.info(queviene['parametro1']);
         console.info(queviene['parametro2']);
          $scope.gridOptionsMisProdSel.data=queviene['parametro2'];
          var queviene2 = queviene.parametro1;
          var lasucursal=queviene2.sucursal;
          $scope.SucEleg=lasucursal;
          console.info($scope.SucEleg);
          console.info(lasucursal);
          var fecha = queviene2.FechaEntrega 
          $scope.fechasEntrega=new Date(fecha);
          ListPr=queviene['parametro2']
      }else{
        $scope.SucEleg= "SucA";
      }


//-----------------


 

    if ($auth.isAuthenticated()) 
    {
       
          var datos=$auth.getPayload();
          $scope.ver=true;
          $rootScope.usuarioAver="Bienvenido "+ datos['nombre'];  
           $rootScope.SeVe=true;
          $rootScope.userAVer="Bienvenido "+ datos['nombre'];

           if (datos['perfil'] == "administrador") 
          {
              
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
            
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
          }

 
          var ObjeJson={};
           var iduser= datos['id_user'];
          
           var Info1={};
           var Info2={};
            


            ServPedido.TraerTodos(iduser).then(function(resp)
            {

               
              $scope.gridOptionsMisPedidos.data=resp;
              

             });

              if (datos['perfil'] != "comprador") {
                ServPedido.TraerTodos().then(function(resp)
                {
                  
                  $scope.gridOptionsTodosPedidos.data=resp;
                }); 
              }
               
    }else{
           $scope.ver=false; 
            console.info("notoken",$auth.getPayload());
            $rootScope.SeVe=false;
            $rootScope.usuarioAver="";
      }

        


function addDays(days)
{
    var dat=new Date();
    dat.setDate(dat.getDate() + days);
    return formatDate(dat);
}

$scope.fechamas2d=addDays(2);
$scope.fechamas5d=addDays(6);

 
   $scope.Formatear=function(parametro)
   {
      $scope.fechasEntregaF = formatDate(parametro);     
   }
 
     $scope.gridOptionsPedidos = {};
      $scope.gridOptionsPedidos.width=10;
     $scope.gridOptionsPedidos.columnDefs = columnDefsCom();
    
      $scope.gridOptionsMisPedidos = {};
      $scope.gridOptionsMisPedidos.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsMisPedidos.paginationPageSize = 25;
      $scope.gridOptionsMisPedidos.columnDefs=columnDefs();

 

      
     $scope.gridOptionsMisProdPedidos = {};
     $scope.gridOptionsMisProdPedidos.paginationPageSizes = [25, 50, 75];
     $scope.gridOptionsMisProdPedidos.paginationPageSize = 25;

//--------------------------------------


 $scope.gridOptionsMisProdPedidos2 = {
 exporterCsvFilename: 'misdatos.csv',
      exporterCsvColumnSeparator: ';',
      exporterPdfDefaultStyle: {fontSize: 9},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "Pizerias argenta - Pedidos", style: 'headerStyle' },
      exporterPdfFooter: function ( currentPage, pageCount ) {
        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
      },
      exporterPdfCustomFormatter: function ( docDefinition ) {
        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
        return docDefinition;
      },
      exporterPdfOrientation: 'portrait',
      exporterPdfPageSize: 'LETTER',
      exporterPdfMaxGridWidth: 500,
      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
      }
    };

      $scope.gridOptionsMisProdPedidos2.paginationPageSizes = [25, 50, 75];
      $scope.gridOptionsMisProdPedidos2.columnDefs=columnDefsTodos();
      $scope.gridOptionsMisProdPedidos2.enableGridMenu = true;
     // $scope.gridOptions.selectAll = true;
      $scope.gridOptionsMisProdPedidos2.paginationPageSize = 25;
      $scope.gridOptionsMisProdPedidos2.enableFiltering = true;
      i18nService.setCurrentLang('es');



 $scope.gridOptionsTodosPedidos = {
 exporterCsvFilename: 'misdatos.csv',
      exporterCsvColumnSeparator: ';',
      exporterPdfDefaultStyle: {fontSize: 9},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "Pizerias argenta - Pedidos", style: 'headerStyle' },
      exporterPdfFooter: function ( currentPage, pageCount ) {
        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
      },
      exporterPdfCustomFormatter: function ( docDefinition ) {
        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
        return docDefinition;
      },
      exporterPdfOrientation: 'portrait',
      exporterPdfPageSize: 'LETTER',
      exporterPdfMaxGridWidth: 500,
      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
      }
    };

      $scope.gridOptionsTodosPedidos.paginationPageSizes = [25, 50, 75];

 var perf=$auth.getPayload();
 
if (perf['perfil'] == "encargado") {
      $scope.gridOptionsTodosPedidos.columnDefs=columnDefsTodos2();
      }else{
      $scope.gridOptionsTodosPedidos.columnDefs=columnDefsTodos();
      }

      $scope.gridOptionsTodosPedidos.enableGridMenu = true;
     // $scope.gridOptions.selectAll = true;
      $scope.gridOptionsTodosPedidos.paginationPageSize = 25;
      $scope.gridOptionsTodosPedidos.enableFiltering = true;
      i18nService.setCurrentLang('es');

  
//-------------------------

          ServPedido.TraerP().then(function(resp)
          {          


           
           $scope.gridOptionsPedidos.data=resp;    

          }) 
  

 //-------------------MAPAS

  var vm = this;
            NgMap.getMap().then(function(map)
            {
              vm.showCustomMarker= function(evt) 
              {
                map.customMarkers.foo.setVisible(true);
                map.customMarkers.foo.setPosition(this.getPosition());
                map.customMarkers.usa.setVisible(false);
                map.customMarkers.can.setVisible(false);
                map.customMarkers[el.className].setContent(el.innerHTML);
                map.customMarkers[el.className].setVisible(true);
                map.customMarkers[el.className].draw();
                
              };
              vm.closeCustomMarker= function(evt)
              {
                this.style.display = 'none';
              };
            
            });

$scope.ModificarPedido=function(suc,fEntrega)
{
 
 
 console.info(suc);
          var vend="";
          var Ids=[];
          var detp=[];
          var suma=0;
          var time = Date.now();
        
        
            per=datos["id_user"];
      
           ListPr.forEach(function(p)
           {
            
             total=p['cant']*p['precio'];
            
             suma=suma+total;        
            
          
            detp = {"total":total,"cant":p['cant'],"idp":p['id_producto']}


            
             Ids.push(detp);
             detp =[];
             
       
             })

           $scope.datos=$auth.getPayload();

           ListDetalle = Ids;
  
           $scope.pedido={};
           $scope.pedido.total_pedido=suma;
           $scope.pedido.lista_productos=ListDetalle;
           $scope.pedido.id_user=$scope.datos.id_user;
           $scope.pedido.FechaEntrega=fEntrega;
          console.info(fEntrega);
           $scope.pedido.sucursal=suc;
        
         
            console.info("p a enviar",$scope.pedido);
         /*   ServPedido.AltaP(JSON.stringify($scope.pedido)).then(function(resp)
                  {          
                    console.info("q s envio:",resp);
                     
                  }) 
             total=0;
              ListPr="";
              ListPr = [];
              Ids="";
              Ids=[];
              detp=[];
             suma=0; 
             if (perf['perfil']=="comprador") {
             alert("Sera redireccionado a una encuesta de satisfaccion");
             $state.go("encuesta"); 
           }else{
            $state.go("MisPedidos"); 
           }
               */

}


  $scope.VerRecorrido=function(parametro)
  {
       console.info(parametro);

      $scope.lat1="-34.744706";
      $scope.long1="-58.390605";

      $scope.lat2="-34.740006";
      $scope.long2="-58.300605";
        
      $scope.travelMode="DRIVING";

       var MiUsuario=$auth.getPayload();

       $scope.Midireccion=MiUsuario['direccion'];
      $scope.DirSucursal="";
             //console.info($scope.Lsucursales);

             $scope.Lsucursales.forEach(function(s){
               
              $scope.sDeLista=s['nombre'];
              if ($scope.sDeLista==parametro) {
                
                $scope.DirSucursal=s['direccion'];
              }
             })

      console.info($scope.DirSucursal);
  }

 //-----------------------
function formatDate(date) 
{
  // console.info(date.getDate());
  //   return Date(date.getFullYear()+ "-" + (date.getMonth()+1) + "-" + date.getDate());
    return date.toISOString().slice(0, 10);
  }


 


        
      

$scope.longListaP=0;

       
  $scope.agregar=function(parametro)
  {
          console.info(ListPr);
          if(contains(ListPr,parametro)){
            console.info(parametro);
            ListPr[index].cant= ListPr[index].cant+1;
             
          }
          else{
            parametro.cant=1;
            ListPr.push(parametro); 
            $scope.longListaP=$scope.longListaP +1;
          }
                   
          $scope.gridOptionsMisProdSel.data=ListPr;
          
          index =-1;
  }

        var index;

        function contains(a, obj)
        {
          for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
              index = i;
              return true;
            }
          }
          return false;
        }

      function contains2(a, obj)
      {
          for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
              index = i;
              return true;
            }
          }
          return false;
      }
       
       $scope.EliminarPsel=function(param)
        {
          if(contains(ListPr,param)){
          
            if(ListPr[index].cant > 1){
                ListPr[index].cant= ListPr[index].cant-1;
             }  
             else if(ListPr[index].cant == 1){
                var indexAux = ListPr.indexOf(param);
            
                if (indexAux > -1) {
                    ListPr.splice(indexAux, 1);
                     $scope.longListaP=$scope.longListaP -1;
                }
             }
          }
          $scope.gridOptionsMisProdSel.data=ListPr;
          index =-1;
          
        }
      

        $scope.pedir=function(suc,fEntrega)
        {

          console.info(suc);
          var vend="";
          var Ids=[];
          var detp=[];
          var suma=0;
          var time = Date.now();
        
        
            per=datos["id_user"];
      
           ListPr.forEach(function(p)
           {
            
             total=p['cant']*p['precio'];
            
             suma=suma+total;        
            
          
            detp = {"total":total,"cant":p['cant'],"idp":p['id_producto']}


            
             Ids.push(detp);
             detp =[];
             
       
             })

           $scope.datos=$auth.getPayload();

           ListDetalle = Ids;
  
           $scope.pedido={};
           $scope.pedido.total_pedido=suma;
           $scope.pedido.lista_productos=ListDetalle;
           $scope.pedido.id_user=$scope.datos.id_user;
           $scope.pedido.FechaEntrega=fEntrega;
          console.info(fEntrega);
           $scope.pedido.sucursal=suc;
        
         
            console.info("p a enviar",$scope.pedido);
            ServPedido.AltaP(JSON.stringify($scope.pedido)).then(function(resp)
                  {          
                    console.info("q s envio:",resp);
                     
                  }) 
             total=0;
              ListPr="";
              ListPr = [];
              Ids="";
              Ids=[];
              detp=[];
             suma=0; 
             if (perf['perfil']=="comprador") {
             alert("Sera redireccionado a una encuesta de satisfaccion");
             $state.go("encuesta"); 
           }else{
            $state.go("MisPedidos"); 
           }
        }

        
 $scope.Irmodificarpedido=function(param)
  {
  
          console.info(param);
            ServPedido.TraerUnPedido(param['id_pedidos']).then(function(resp2)
            {
              console.info("resp a ver!:",resp2);

              $state.go("modifPedido",{parametro:{parametro1:param,parametro2:resp2}});
              console.info({parametro:{parametro1:param,parametro2:resp2}});


            });  
  }


  $scope.verpp=function(param, param2)
  {
          if (param2==1) {
           console.info("param",param);
          
           $scope.gridOptionsProd={};
           $scope.veoGrilla=true;
           $scope.gridOptionsMisProdPedidos.paginationPageSizes = [25, 50, 75];
           $scope.gridOptionsMisProdPedidos.paginationPageSize = 25;
           $scope.gridOptionsMisProdPedidos.columnDefs = columnDefsCom2();
        
            ServPedido.TraerTodosD(param['id_pedidos']).then(function(resp2)
            {
              console.info("resp2:",resp2);
              $scope.gridOptionsMisProdPedidos.data=resp2;

            });
          }else{
                console.info("param",param);
          
           $scope.gridOptionsProd={};
           $scope.veoGrilla2=true;
           $scope.gridOptionsMisProdPedidos2.paginationPageSizes = [25, 50, 75];
           $scope.gridOptionsMisProdPedidos2.paginationPageSize = 25;
           $scope.gridOptionsMisProdPedidos2.columnDefs = columnDefsCom2();
        
            ServPedido.TraerTodosD(param['id_pedidos']).then(function(resp2)
            {
              console.info("resp2:",resp2);
              $scope.gridOptionsMisProdPedidos2.data=resp2;

            });
          }
  }

        $scope.Volver=function()
        {
            total=0;
              ListPr="";
              ListPr = [];
              Ids="";
              Ids=[];
              console.info("LISTA VACIA:",ListPr);
           $state.go("MisPedidos"); 
        }

     function columnDefs () {
      return [
          { field: 'id_pedidos', name: 'id_pedidos', width: 120
          ,enableFiltering: false
          },
          { field: 'productos', name: 'productos', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="productos pedidos" class="btn btn-default" ng-click="grid.appScope.verpp(row.entity,1)">'}
          ,{ field: 'fecha', name: 'fecha', width: 120 ,enableFiltering: false
          }
          ,{ field: 'sucursal', name: 'sucursal', width: 120 ,enableFiltering: false
          }
          ,{ field: 'nombre', name: 'nombre', width: 120 ,enableFiltering: false
          } 
          ,{ field: 'total_pedido', name: 'total_pedido', width: 120
          ,enableFiltering: false
          }
           ,{ field: 'FechaEntrega', name: 'FechaEntrega', width: 120
          ,enableFiltering: false
          }
          ]
        };

        function columnDefsTodos () {
      return [
          { field: 'id_pedidos', name: 'id_pedidos', width: 120
          ,enableFiltering: false
          },
          { field: 'productos', name: 'productos', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="productos pedidos" class="btn btn-default" ng-click="grid.appScope.verpp(row.entity,2)">'}
          ,{ field: 'fecha', name: 'fecha', width: 120 ,enableFiltering: false
          }
          ,{ field: 'sucursal', name: 'sucursal', width: 120 ,enableFiltering: false
          }
          ,{ field: 'nombre', name: 'nombre', width: 120 ,enableFiltering: false
          } 
          ,{ field: 'tipo', name: 'tipo', width: 120 ,enableFiltering: false
          }
          ,{ field: 'total_pedido', name: 'total_pedido', width: 120
          ,enableFiltering: false
          }
           ,{ field: 'FechaEntrega', name: 'FechaEntrega', width: 120
          ,enableFiltering: false
          }
          ]
        };
      function columnDefsTodos2 () {
      return [
          { field: 'id_pedidos', name: 'id_pedidos', width: 120
          ,enableFiltering: false
          },
          { field: 'productos', name: 'productos', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="productos pedidos" class="btn btn-default" ng-click="grid.appScope.verpp(row.entity,2)">'}
          ,{ field: 'fecha', name: 'fecha', width: 120 ,enableFiltering: false
          }
          ,{ field: 'sucursal', name: 'sucursal', width: 120 ,enableFiltering: false
          }
          ,{ field: 'nombre', name: 'nombre', width: 120 ,enableFiltering: false
          } 
          ,{ field: 'tipo', name: 'tipo', width: 120 ,enableFiltering: false
          }
          ,{ field: 'total_pedido', name: 'total_pedido', width: 120
          ,enableFiltering: false
          }
           ,{ field: 'FechaEntrega', name: 'FechaEntrega', width: 120
          ,enableFiltering: false
          },
           { field: 'modificar', name: 'modificar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="modificar" class="btn btn-default" ng-click="grid.appScope.Irmodificarpedido(row.entity)">'},

          ]
        };

      function columnDefsCom2 () {
      return [
          { field: 'id_producto', name: 'id_producto', width: 120
          ,enableFiltering: false
          },
           { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
          },
          { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
          },
          { field: 'cant', name: 'cant', width: 120
          ,enableFiltering: false
          }
           ]
        };


    function columnDefsCom () {
      return [
         { field: 'id_producto', name: 'id_producto', width: 120
          ,enableFiltering: false
         },
         { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
         },
         { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
         }, 
         { field: 'agregar', name: 'agregar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="agregar" class="btn btn-default" ng-click="grid.appScope.agregar(row.entity)">'},

      ];
    }



    function columnDefsPsel () {
      return [
         { field: 'id_producto', name: 'id_producto', width: 120
          ,enableFiltering: false
         },
         { field: 'descripcion', name: 'descripcion', width: 120
          ,enableFiltering: false
         },
         { field: 'precio', name: 'precio', width: 120
          ,enableFiltering: false
         }, 
         { field: 'cant', name: 'cant', width: 120
          ,enableFiltering: false
         },
         { field: 'Eliminar', name: 'Eliminar', enableFiltering: false , width: 120, cellTemplate:'<input type="button"  value="Eliminar" class="btn btn-danger" ng-click="grid.appScope.EliminarPsel(row.entity)">'},

      ];
    }




});