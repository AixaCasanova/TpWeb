<?php
require_once"accesodatos.php";
class ofertas
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_oferta;
	public $descripcion;
 	public $precio;
 	public $id_local;
  
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function Getid_oferta()
	{
		return $this->id_oferta;
	}
	public function Getdescripcion()
	{
		return $this->descripcion;
	}
	public function Getprecio()
	{
		return $this->precio;
	}
	public function Getid_local()
	{
		return $this->id_local;
	}

	public function Setiid_local($valor)
	{
		$this->id_local = $valor;
	}
	public function Setid_oferta($valor)
	{
		$this->id_oferta = $valor;
	}
	public function Setdescripcion($valor)
	{
		$this->descripcion = $valor;
	}
	public function Setprecio($valor)
	{
		$this->precio = $valor;
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
	public static function TraerUnaoferta($Parametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select o.id_oferta, o.descripcion, o.precio, s.nombre as sucursal from ofertas as o, sucursal as s where o.id_oferta =:id_oferta and s.id_sucursal = o.id_local");
		$consulta->bindValue(':id_oferta', $Parametro, PDO::PARAM_INT);
		$consulta->execute();
		$VotoBuscado= $consulta->fetchObject('ofertas');
		return $VotoBuscado;	
					
	}
	
	public static function TraerTodosLasofertas()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select o.id_oferta, o.descripcion, o.precio, s.nombre as sucursal from ofertas as o, sucursal as s where s.id_sucursal = o.id_local");
		$consulta->execute();			
		$arrVotos= $consulta->fetchAll(PDO::FETCH_CLASS, "ofertas");	
		return $arrVotos;
	}
	
	public static function TraerofertasDeSucursal($param)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select o.id_oferta, o.descripcion, o.precio, s.nombre as sucursal from ofertas as o, sucursal as s where s.id_sucursal = o.id_local and o.id_local=:id_local");
		$consulta->bindValue(':id_local',$param, PDO::PARAM_INT);		
		$consulta->execute();			
		$arrVotos= $consulta->fetchAll(PDO::FETCH_CLASS, "ofertas");	
		return $arrVotos;
	}
	
	public static function Borraroferta($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from ofertas WHERE id_oferta=:id_oferta");	
		$consulta->bindValue(':id_oferta',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	public static function Modificaroferta($ofertas)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update ofertas 
				set
				precio=:precio,	
				descripcion=:descripcion,
				id_local=:id_local
				WHERE id_oferta=:id_oferta");

			$consulta->bindValue(':id_oferta',$ofertas->id_oferta, PDO::PARAM_INT);
			$consulta->bindValue(':precio', $ofertas->precio, PDO::PARAM_STR);
			$consulta->bindValue(':descripcion', $ofertas->descripcion, PDO::PARAM_STR);
			$consulta->bindValue(':id_local', $ofertas->id_local, PDO::PARAM_STR);
			

			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function Insertaroferta($ofertas)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into ofertas (precio,descripcion,id_local)values(:precio,:descripcion,:id_local)");
		$consulta->bindValue(':precio', $ofertas->precio, PDO::PARAM_STR);
		$consulta->bindValue(':descripcion', $ofertas->descripcion, PDO::PARAM_STR);
		$consulta->bindValue(':id_local', $ofertas->id_local, PDO::PARAM_STR);
		
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
				
	}	
//--------------------------------------------------------------------------------//


}
