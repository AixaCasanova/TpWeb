<?php
require_once"accesodatos.php";
class pedidos
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_pedidos;
 
 	public $total_pedido;

 	public $id_user;

 	public $fecha;
 
 	public $sucursal;

 	public $persona; 

 	public $FechaEntrega;
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function Getid_pedidos()
	{
		return $this->id_pedidos;
	}
 
	public function Gettotal_pedido()
	{
		return $this->total_pedido;
	}

	public function Getid_user()
	{
		return $this->id_user;
	}

public function Getid_fecha()
	{
		return $this->fecha;
	}

	public function Setid_fecha($valor)
	{
		$this->fecha = $valor;
	}

	public function Setid_user($valor)
	{
		$this->id_user = $valor;
	}
 

	public function Setid_pedidos($valor)
	{
		$this->id_pedidos = $valor;
	}
 
	public function Settotal_pedido($valor)
	{
		$this->total_pedido = $valor;
	}

	public function Getid_sucursal()
	{
		return $this->sucursal;
	}

	public function Setid_sucursal($valor)
	{
		$this->sucursal = $valor;
	}
		public function Getid_persona()
	{
		return $this->persona;
	}

	public function Setid_persona($valor)
	{
		$this->persona = $valor;
	}
	
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct()
	{
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnPedidos($Parametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from pedidos where id_pedidos =:id_pedidos");
		$consulta->bindValue(':id_pedidos', $Parametro, PDO::PARAM_INT);
		$consulta->execute();
		$VotoBuscado= $consulta->fetchObject('pedidos');
		return $VotoBuscado;	
					
	}


public static function cantPedPorSucursal()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT count(id_pedidos) as cantidad, sucursal FROM pedidos GROUP BY sucursal");
		$consulta->execute();			
		$arrVotos= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrVotos;
	}
	public static function cantPedPorSucursalYemp()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select count(p.id_pedidos) as cantidad, p.sucursal, u.nombre as empleado from pedidos p, usuario u where p.id_user=u.id_user and u.tipo='vendedor' GROUP by p.sucursal, u.nombre");
		$consulta->execute();			
		$arrVotos= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrVotos;
	}
	

	public static function TraerMisPedidos($id) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	
		$consulta =$objetoAccesoDato->RetornarConsulta("select p.id_pedidos,p.total_pedido, p.id_user, p.fecha,p.FechaEntrega ,p.sucursal, u.nombre as nombre from pedidos p, usuario as u where p.id_user=:id_usuario and p.id_user=u.id_user");
		$consulta->bindValue(':id_usuario', $id, PDO::PARAM_INT);
		$consulta->execute();			
		$arrp= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrp;
					
	}
	public static function TraerProdDeMisPedidos($id_p) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select p.descripcion ,p.precio, p.id_producto , dp.cant from det_ped as dp, productos as p where id_pedidos =:id_p and dp.id_producto = p.id_producto");
		$consulta->bindValue(':id_p', $id_p, PDO::PARAM_INT);
		$consulta->execute();			
		$arrp= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrp;
					
	}
	
	public static function TraerUltimoId() 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select id_pedidos FROM pedidos ORDER by id_pedidos DESC LIMIT 1");
		$consulta->execute();
		$VotoBuscado= $consulta->fetchObject('pedidos');
		return $VotoBuscado;	
		
					
	}
	public static function TraerTodosLosPedidos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select p.id_pedidos,p.total_pedido, p.id_user, p.fecha, p.sucursal,p.FechaEntrega, u.nombre as nombre, u.tipo from pedidos p, usuario as u where p.id_user=u.id_user");
		$consulta->execute();			
		$arrVotos= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrVotos;
	}
	
	public static function BorrarPedidos($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from pedidos WHERE id_pedidos=:id_pedidos");	
		$consulta->bindValue(':id_pedidos',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	public static function ModificarPedidos($pedidos)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update pedidos 
				total_pedido=:total_pedido,
				id_user=:id_user	
				WHERE id_pedidos=:id_pedidos");

			$consulta->bindValue(':id_pedidos',$pedidos->id_pedidos, PDO::PARAM_INT);
			$consulta->bindValue(':total_pedido', $pedidos->total_pedido, PDO::PARAM_STR);
			$consulta->bindValue(':lista_productos', $pedidos->lista_productos, PDO::PARAM_STR);
			$consulta->bindValue(':id_user', $pedidos->id_user, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

public static function InsertarDetPed($id_pr, $id_ped,$cantidad)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into det_ped (id_pedidos,id_producto,cant)values(:id_pedidos,:id_producto,:cantidad)");
		$consulta->bindValue(':id_producto', $id_pr, PDO::PARAM_STR);
		$consulta->bindValue(':id_pedidos', $id_ped, PDO::PARAM_STR);
		$consulta->bindValue(':cantidad', $cantidad, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
				
	}	

	public static function TraerDetPed($id_p)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from det_ped dp, productos p where 
		p.id_producto=dp.id_producto and dp.id_pedidos=:id_pedidos");
 
		$consulta->bindValue(':id_pedidos', $id_p, PDO::PARAM_STR);
		
		$consulta->execute();			
		$arrPed= $consulta->fetchAll(PDO::FETCH_CLASS, "pedidos");	
		return $arrPed;
				
	}	



public static function InsertarEcuesta($descripcionClaraNew, $problemasPRealizarPNew, $PregAdquirioOld, $tiempoEntregaOld, $calidadProductoOld, $calidadAtencionOld, $ComoLlego)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into encuestas (descripcionClaraNew, problemasPRealizarPNew, PregAdquirioOld, tiempoEntregaOld, calidadProductoOld, calidadAtencionOld, ComoLlego) values(:descripcionClaraNew, :problemasPRealizarPNew, :PregAdquirioOld, :tiempoEntregaOld, :calidadProductoOld, :calidadAtencionOld, :ComoLlego)");
		$consulta->bindValue(':descripcionClaraNew', $descripcionClaraNew, PDO::PARAM_STR);
		$consulta->bindValue(':problemasPRealizarPNew', $problemasPRealizarPNew, PDO::PARAM_STR);
		$consulta->bindValue(':PregAdquirioOld', $PregAdquirioOld, PDO::PARAM_STR);
		$consulta->bindValue(':tiempoEntregaOld', $tiempoEntregaOld, PDO::PARAM_STR);
		$consulta->bindValue(':calidadProductoOld', $calidadProductoOld, PDO::PARAM_STR);
		$consulta->bindValue(':calidadAtencionOld', $calidadAtencionOld, PDO::PARAM_STR);
		$consulta->bindValue(':ComoLlego', $ComoLlego, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
				
	}

	public static function InsertarPedidos($pedidos)
	{
	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into pedidos (id_pedidos,total_pedido,id_user,fecha,sucursal,FechaEntrega)values(:id_pedidos,:total_pedido,:id_user,:fecha,:sucursal,:FechaEntrega)");
		$consulta->bindValue(':total_pedido', $pedidos->total_pedido, PDO::PARAM_STR);
		$consulta->bindValue(':id_pedidos', $pedidos->id_pedidos, PDO::PARAM_STR);
		$consulta->bindValue(':id_user', $pedidos->id_user, PDO::PARAM_STR);
		$consulta->bindValue(':fecha', $pedidos->fecha, PDO::PARAM_STR);
		$consulta->bindValue(':sucursal', $pedidos->sucursal, PDO::PARAM_STR);
		$consulta->bindValue(':FechaEntrega', $pedidos->FechaEntrega, PDO::PARAM_STR);
		
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
				
	}	
//--------------------------------------------------------------------------------//


}
