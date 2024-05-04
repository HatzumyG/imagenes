<?php
include "conexion.php"; 

$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$url = $_POST['url'];


$sql = "INSERT INTO registros (nombre, descripcion, url) VALUES ('$nombre', '$descripcion', '$url')";
if ($conexion->query($sql) === TRUE) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}

$conexion->close(); 
?>
