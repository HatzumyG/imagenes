<?php

$servername = "localhost";
$username = "root"; 
$password = "micuentamysql"; 
$database = "imagenes"; 

$conexion = new mysqli($servername, $username, $password, $database);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$conexion->set_charset("utf8");
?>
