<?php
include "conexion.php"; 


$sql = "SELECT * FROM registros";
$resultado = $conexion->query($sql);


if ($resultado->num_rows > 0) {

    $registros = $resultado->fetch_all(MYSQLI_ASSOC);
    echo json_encode($registros);
} else {
    echo "No se encontraron registros";
}

$conexion->close(); 
?>
