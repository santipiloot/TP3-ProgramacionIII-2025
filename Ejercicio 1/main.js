/*Conectamos los elementos del DOM*/
const num1Input=document.getElementById("num1");
const num2Input=document.getElementById("num2");
const calcularBtn=document.getElementById("calcular");
const resultadoP=document.getElementById("resultado");
const opSelec=document.getElementById("op");
const formulario=document.getElementById("form");

/*Esta funcion se dispara cada vez que se cambia el input2 o el select para verificar si la division es valida */
function validarDivision() {
    const num2 = parseFloat(num2Input.value);
    if (opSelec.value === "division" && num2 === 0) {
        calcularBtn.disabled = true;
        resultadoP.innerText = "No se puede dividir por cero.";
    } else {
        calcularBtn.disabled = false;
        resultadoP.innerText = '';
    }
}

/*Llamamos a la funcion cada vez que hay un cambio en cualquiera de estos dos elementos*/
opSelec.addEventListener("change",validarDivision);
num2Input.addEventListener("input",validarDivision);

/*Atendemos el evento submit del form con esta funcion que calcula la operacion elegida y muestra el resultado*/
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita que el formulario recargue la pagina

    //Le pasamos los valores de los input a estas variables
    const num1 = parseFloat(num1Input.value); 
    const num2 = parseFloat(num2Input.value);
    let res=0;

    //Hacemos la operacion elegida
    switch (opSelec.value) {
        case "suma":
            res=num1+num2;
            break;
        case "resta":
            res=num1-num2;
            break;
        case "multiplicacion":
            res=num1*num2;
            break;
        case "division":
            res=num1/num2;
            break;
        default:
            res="Error";
    }

    //Mostramos el resultado
    resultadoP.innerText = `Resultado: ${res.toFixed(2)}`;
});