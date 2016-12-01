<?php
include_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;

$datosDelModeloPorPost= file_get_contents("PHP://input");
$user=json_decode($datosDelModeloPorPost);


	
	$claveDeEncripcion="estaEsLaClave";
	$token["usuario"]=$user->mail;
	$token["nombre"]=$user->nombre;
	$token["perfil"]=$user->tipo;
	$token["iat"]=time();
	$token["exp"]=time()+999;
	$token["algo"]=$user;
 	$token["id_user"]=$user->id_user;
 	$token["algo2"]="algo2";
 	$token["direccion"]=$user->direccion;


	$jwt = JWT::encode($token, $claveDeEncripcion);
	$array["MitokenGeneradoEnPhp"]=$jwt;

	echo json_encode($array);
 
?>