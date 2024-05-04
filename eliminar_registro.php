<?php
include "conexion.php"; 


$id = $_POST['id'];


$sql = "DELETE FROM registros WHERE id=$id";
if ($conexion->query($sql) === TRUE) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}

$conexion->close();
?>
