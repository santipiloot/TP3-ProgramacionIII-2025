const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calcularBtn = document.getElementById("calcular");
const resultadoP = document.getElementById("resultado");
const opSelec = document.getElementById("op");

function validarDivision () { 
    const num2=parseFloat(num2Input.value); 
    if (opSelec.value === "dividir" && num2 === 0){ 
        calcularBtn.disabled = true;
        resultadoP.innerText = "No se puede dividir por cero.";
    } else { 
        calcularBtn.disabled = false;
        resultadoP.innerText = '';
    }
}
opSelec.addEventListener("change",validarDivision);
num2Input.addEventListener("input",validarDivision);

calcularBtn.addEventListener("click", () => {
    const num1=parseFloat(num1Input.value);
    const num2=parseFloat(num2Input.value);
    let resultado=0;

    switch (opSelec.value) {
        case "sumar":
            resultado = num1+num2;
            break;
        case "restar":
            resultado = num1-num2;
            break;
        case "multiplicar":
            resultado = num1*num2;
            break;
        case "dividir": 
            resultado = num1/num2;
            break;
        default:
            resultado = "Operacion invalida";
    }

    resultadoP.innerText = `Resultado: ${resultado.toFixed(2)}`;
});