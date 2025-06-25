//Creamos el array con las frutas del ejemplo
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
//Conectamos los elementos de la Dom a las variables
const Input = document.getElementById("Input");
const Btnfiltrar = document.getElementById("Btnfiltrar");
const Divresultado = document.getElementById("resultado");

//Al apretar el boton filtrar se ejecuta esta funcion
Btnfiltrar.addEventListener("click", () => {
    //Agarramos el texto ingresado, borramos espacios iniciales, finales, entre palabras y convertimos todo en minuscula
    const texto = Input.value.trim().toLowerCase().replaceAll(" ","");

    //Verificamos que el texto no este vacio y lo agregamos con una clase error para que salga de color rojo 
    if (texto === "") {
        Divresultado.innerHTML = "<p class='error'>Por favor, ingresá un texto para filtrar.</p>";
        return;
    }

    //Guardamos en un array todas las palabras que coincidan total o parcialmente al texto ingresado 
    const filtradas = palabras.filter(palabra => palabra.toLowerCase().includes(texto));

    //Verificamos que haya almenos una palabra que coincida
    if (filtradas.length === 0) {
        Divresultado.innerHTML = "<p>No se encontraron coincidencias.</p>";
    } else { //Si hay alguna coincidencia mostramos cuales
        //Usamos un map para hacer un nuevo array de las palabras filtradas pero con la etiqueta <li> y el join para convertirlo en una cadena y que se muestren como items en la lista y no como array 
        Divresultado.innerHTML = `
    <ul>
    ${filtradas.map(p => `<li>${p}</li>`).join('')} 
    </ul>
    `;
    }
});