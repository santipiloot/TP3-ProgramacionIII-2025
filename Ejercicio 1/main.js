/*Conectamos los elementos del DOM*/
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calcularBtn = document.getElementById("calcular");
const resultadoP = document.getElementById("resultado");
const opSelec = document.getElementById("op");

/*Esta funcion se dispara cada vez que se cambia el input2 o el select para verificar si la division es valida */
function validarDivision() {
    const num2 = parseFloat(num2Input.value);
    if (opSelec.value === "dividir" && num2 === 0) {
        calcularBtn.disabled = true;
        resultadoP.innerText = "No se puede dividir por cero.";
    } else {
        calcularBtn.disabled = false;
        resultadoP.innerText = '';
    }
}

/*Llamas a la funcion cada vez que hay un cambio en cualquiera de estos dos elementos */
opSelec.addEventListener("change", validarDivision);
num2Input.addEventListener("input", validarDivision);

/*Atendemos el evento click del boton con esta funcion flecha que calcula la operacion elegida y muestra el resultado*/
calcularBtn.addEventListener("click", () => {
    //Le pasamos los valores de los input a estas variables
    const num1 = parseFloat(num1Input.value); 
    const num2 = parseFloat(num2Input.value);
    let resultado = 0;

    //Hacemos la operacion elegida
    switch (opSelec.value) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Error";
    }

    //Mostramos el resultado
    resultadoP.innerText = `Resultado: ${resultado.toFixed(2)}`;
});