/*Conectamos el elemento lista a la variable lista */
const lista = document.getElementById("lista__tareas");

//Llamamos a la funcion para mostrar los datos obtenidos de la api
cargarTareas();

//Funcion que hace la solicitud a la api
async function cargarTareas() {
    try {//Try funciona para encapsular errores y pasarselos a catch
        //Hacemos la peticion a la api
        const respuesta=await fetch("https://jsonplaceholder.typicode.com/todos");
        //Convertimos la respuesta en un formato Json y se lo damos a datos
        const datos=await respuesta.json();

        //Filtramos las tareas completas en un array
        const completadas=datos.filter(tarea => tarea.completed === true);

        //Usamos un foreach para crear elementos li para cada elemento del array y agregarlo a lista
        completadas.forEach(tarea => {
            const li= document.createElement("li");
            li.innerText=`${tarea.title} ✅`;
            lista.appendChild(li);
        });
    } catch (error) { //Cualquier error en la peticion a la api va a arrojar estos mensajes en pantalla y en consola
        console.log("Error al obtener las tareas:",error);
        lista.innerHTML ="<li>Error al cargar las tareas.</li>";
    }
}

