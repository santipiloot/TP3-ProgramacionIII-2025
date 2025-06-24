const lista = document.getElementById("lista__tareas");

cargarTareas();

async function cargarTareas() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
        const datos = await respuesta.json();

        const completadas = datos.filter(tarea => tarea.completed === true);

        completadas.forEach(tarea => {
            const li = document.createElement("li");
            li.innerText = `${tarea.title} ✅`;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
        lista.innerHTML = "<li>Error al cargar las tareas.</li>";
    }
}

