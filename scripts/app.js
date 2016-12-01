angular.module('app', [
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit',
    'ngMap',
    'satellizer',
    'angularFileUpload'
    ]
    )
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {

    $authProvider.loginUrl = "http://tplab42016.hol.es/jwt/php/auth.php";
    $authProvider.tokenName = "MitokenGeneradoEnPhp";
    $authProvider.tokenPrefix = "Aplicacion";
    $authProvider.authHeader="data";

    $urlRouterProvider.otherwise('Principal');
    $stateProvider
    .state('inicio', {
      url: '/inicio',
      templateUrl: 'index.html'
    })
    .state('usuarios', {
      url: '/usuarios',
      templateUrl: 'views/usuarios/usuarios.html',
      controller:'CtrolUsuario'
    })
    .state('productos', {
      url: '/productos',
      templateUrl: 'views/productos/productos.html',
      controller:'CtrolProductos'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'CtrolLogin'
    })
     .state('empleados', {
      url: '/empleados',
      templateUrl: 'views/empleado/empleados.html',
      controller:'CtrolEmpleados',
      params:{'parametro':'parametro'} 
    })
    .state('clientes', {
      url: '/clientes',
      templateUrl: 'views/clientes/clientes.html',
      controller:'CtrolClientes'
    })
    .state('AltaCliente', {
      url: '/AltaCliente',
      templateUrl: 'views/clientes/altaclientes.html',
      controller:'CtrolClientes'
    })
    .state('ModifCli', {
      url: '/ModifCli',
      templateUrl: 'views/clientes/modifclientes.html',
      controller:'CtrolClientes',
      params:{'parametro':'parametro'} 
    })
    .state('EliminarCli', {
      url: '/EliminarCli',
      templateUrl: 'views/clientes/eliminarclientes.html',
      controller:'CtrolClientes',
      params:{'parametro':'parametro'} 
    })
    .state('AltaEmpleado', {
      url: '/AltaEmpleado',
      templateUrl: 'views/empleado/altaempleado.html',
      controller:'CtrolEmpleados' 
    })
      .state('ModifEmp', {
      url: '/ModifEmp',
      templateUrl: 'views/empleado/modifemp.html',
      controller:'CtrolEmpleados',
      params:{'parametro':'parametro'} 
    })
    .state('EliminarEmp', {
      url: '/EliminarEmp',
      templateUrl: 'views/empleado/eliminaremp.html',
      controller:'CtrolEmpleados',
      params:{'parametro':'parametro'} 
    })   
     .state('AltaProd', {
      url: '/AltaProd',
      templateUrl: 'views/productos/altaprod.html',
      controller:'CtrolProductos'
    })   
      .state('ModifP', {
      url: '/ModifP',
      templateUrl: 'views/productos/modifp.html',
      controller:'CtrolProductos',
      params:{'parametro':'parametro'} 
    })
      .state('EliminarP', {
      url: '/EliminarP',
      templateUrl: 'views/productos/eliminarp.html',
      controller:'CtrolProductos',
      params:{'parametro':'parametro'} 
    })
      .state('ModifUs', {
      url: '/ModifUs',
      templateUrl: 'views/usuarios/modifus.html',
      controller:'CtrolUsuario',
      params:{'parametro':'parametro'} 
    })
     .state('EliminarUs', {
      url: '/EliminarUs',
      templateUrl: 'views/usuarios/eliminarus.html',
      controller:'CtrolUsuario',
      params:{'parametro':'parametro'} 
    })
    .state('AltaUs', {
      url: '/AltaUs',
      templateUrl: 'views/usuarios/altaus.html',
      controller:'CtrolUsuario'
    })   
    .state('encargados', {
      url: '/encargados',
      templateUrl: 'views/encargados/encargados.html',
      controller:'CtrolEncargados',
      params:{'parametro':'parametro'} 
    })
     .state('AltaEncargado', {
      url: '/AltaEncargado',
      templateUrl: 'views/encargados/altaencargado.html',
      controller:'CtrolEncargados' 
    })
      .state('EliminarEnc', {
      url: '/EliminarEnc',
      templateUrl: 'views/encargados/eliminarenc.html',
      controller:'CtrolEncargados',
      params:{'parametro':'parametro'} 
    })
      .state('ModificarEnc', {
      url: '/ModificarEnc',
      templateUrl: 'views/encargados/modificarenc.html',
      controller:'CtrolEncargados',
      params:{'parametro':'parametro'} 
    })
     .state('ofertas', {
      url: '/ofertas',
      templateUrl: 'views/ofertas/ofertas.html',
      controller:'CtrolOfertas'
    })  
     .state('Registrarse', {
      url: '/Registrarse',
      templateUrl: 'views/clientes/registrarse.html',
      controller:'CtrolClientes'
    })
    .state('pedidos', {
      url: '/pedidos',
      templateUrl: 'views/pedidos/pedidos.html',
      controller:'CtrolPedidos'
    })
    .state('MisPedidos', {
      url: '/MisPedidos',
      templateUrl: 'views/pedidos/mispedidos.html',
      controller:'CtrolPedidos'
    })
    .state('Principal', {
      url: '/Principal',
      templateUrl: 'views/principal.html',
      controller:'CtrolSucursales'
    })
     .state('AltaOferta', {
      url: '/AltaOferta',
      templateUrl: 'views/ofertas/altaoferta.html',
      controller:'CtrolOfertas'
    })
    .state('ModifOf', {
      url: '/ModifOf',
      templateUrl: 'views/ofertas/modifoferta.html',
      controller:'CtrolOfertas',
       params:{'parametro':'parametro'} 
    })
        .state('EliminarOf', {
      url: '/EliminarOf',
      templateUrl: 'views/ofertas/eliminaroferta.html',
      controller:'CtrolOfertas',
       params:{'parametro':'parametro'} 
    })
    .state('sucursales', {
      url: '/sucursales',
      templateUrl: 'views/sucursales/sucursales.html',
      controller:'CtrolSucursales'
    })
    .state('ModifSuc', {
      url: '/ModifSuc',
      templateUrl: 'views/sucursales/modifsuc.html',
      controller:'CtrolSucursales',
       params:{'parametro':'parametro'} 
    })      
    .state('AltaSuc', {
      url: '/AltaSuc',
      templateUrl: 'views/sucursales/altasuc.html',
      controller:'CtrolSucursales' 
    })   
    .state('estadisticas', {
      url: '/estadisticas',
      templateUrl: 'views/estadisticas.html',
      controller:'CtrolEstadisticas' 
    }) 
    .state('encuesta', {
      url: '/encuesta',
      templateUrl: 'views/encuesta.html',
      controller:'CtrolEncuesta' 
    }) 
    .state('EliminarSuc', {
      url: '/EliminarSuc',
      templateUrl: 'views/sucursales/elimsuc.html',
      controller:'CtrolSucursales',
       params:{'parametro':'parametro'} 
    })  
    .state('modifPedido', {
      url: '/modifPedido',
      templateUrl: 'views/pedidos/modifPedido.html',
      controller:'CtrolPedidos',
       params:{'parametro':'parametro'} 
    })  

  });



