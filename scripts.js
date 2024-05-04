document.addEventListener("DOMContentLoaded", function() {

    function cargarRegistros() {
        fetch("obtener_registros.php")
            .then(response => response.json())
            .then(data => {
                const registros = document.getElementById("registros");
                registros.innerHTML = "";
                data.forEach(registro => {
                    const div = document.createElement("div");
                    div.innerHTML = `
                        <p>ID: ${registro.id}</p>
                        <p>Nombre: ${registro.nombre}</p>
                        <p>Descripción: ${registro.descripcion}</p>
                        <p>URL: ${registro.url}</p>
                    `;
                    registros.appendChild(div);
                });
            });
    }


    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const url = document.getElementById("url").value;
        fetch("agregar_registro.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, descripcion, url })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                cargarRegistros();
                document.getElementById("formulario").reset();
            } else {
                alert("Error al agregar el registro");
            }
        });
    });

   
    cargarRegistros();
});
