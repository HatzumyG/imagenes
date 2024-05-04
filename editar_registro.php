<?php
include "conexion.php"; 

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$url = $_POST['url'];

$sql = "UPDATE registros SET nombre='$nombre', descripcion='$descripcion', url='$url' WHERE id=$id";
if ($conexion->query($sql) === TRUE) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}

$conexion->close(); 
?>
