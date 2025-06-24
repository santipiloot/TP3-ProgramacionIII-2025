const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const Input = document.getElementById("Input");
const Btnfiltrar = document.getElementById("Btnfiltrar");
const Divresultado = document.getElementById("resultado");

Btnfiltrar.addEventListener("click", () => {
    const texto = Input.value.trim().toLowerCase().replaceAll(" ","");

    if (texto === "") {
        Divresultado.innerHTML = "<p class='error'>Por favor, ingresá un texto para filtrar.</p>";
        return;
    }

    const filtradas = palabras.filter(palabra => palabra.toLowerCase().includes(texto));

    if (filtradas.length === 0) {
        Divresultado.innerHTML = "<p>No se encontraron coincidencias.</p>";
    } else {
        Divresultado.innerHTML = `
    <ul>
    ${filtradas.map(p => `<li>${p}</li>`).join('')}
    </ul>
    `;
    }
});