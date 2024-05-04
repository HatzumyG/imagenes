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
                        <p>Edad: ${registro.edad}</p>
                        <p>Email: ${registro.email}</p>
                        <button onclick="editarRegistro(${registro.id})">Editar</button>
                        <button onclick="eliminarRegistro(${registro.id})">Eliminar</button>
                    `;
                    registros.appendChild(div);
                });
            });
    }

    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const email = document.getElementById("email").value;
        fetch("agregar_registro.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, edad, email })
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
