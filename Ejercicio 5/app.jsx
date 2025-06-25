function App() {
    //Accedemos a los estados de los elementos que vamos a renderizar
    const [num1, setNum1]= React.useState("");
    const [num2, setNum2]= React.useState("");
    const [operacion, setOperacion]= React.useState("sumar");
    const [resultado, setResultado]= React.useState(null);

    //Funcion que va a validar si la division es valida (devuelve true o false)
    const validarDivision =
        operacion === "dividir" && (parseFloat(num2) === 0);

    //Al apretar el boton calcular se va a lanzar esta funcion
    const btnCalcular = () => {
        //Le pasamos los valores(estado) a n1 y n2
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        //Vamos a hacer la operacion que corresponda
        let res=0;
        switch (operacion) {
            case "sumar":
                res = n1+n2;
                break;
            case "restar":
                res = n1-n2;
                break;
            case "multiplicar":
                res = n1*n2;
                break;
            case "dividir":
                res = n1/n2;
                break;
            default:
                res = "Operación invalida";
        }
        //Setiamos el valor(estado) de res a resultado
        setResultado(res);
    };

    return (
        <div className="calculadora">
            {/*onChange es para ejecutar cierta accion al detectar un cambio en este caso en el input*/}
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(e.target.value)}
                placeholder="Numero 1"
            />

            <input
                type="number"
                value={num2}
                onChange={e => setNum2(e.target.value)}
                placeholder="Numero 2"
            />

            <select value={operacion} onChange={e => setOperacion(e.target.value)}>
                <option value="sumar">Sumar</option>
                <option value="restar">Restar</option>
                <option value="multiplicar">Multiplicar</option>
                <option value="dividir">Dividir</option>
            </select>

            {/*Cada vez que se renderiza se valida la division y como retorna true o false lo usamos para activar/desactivar el boton calcular*/}
            <button onClick={btnCalcular} disabled={validarDivision}>
                Calcular
            </button>

            {/*Vamos a mostrar el resultado si no es null, es decir si cambio su estado por defecto (si se calculo un resultado en algun momento) y la segunda expresion es para que no se muestre un error actual al mismo tiempo que un resultado anterior */}
            {resultado !== null && !validarDivision &&(
                <p className="resultado">Resultado: {resultado.toFixed(2)}</p>
            )}

            {/*Si validar division es true (Invalida) muestra el mensaje de error*/}
            {validarDivision && (
                <p className="error">No se puede dividir por cero o campo vacío</p>
            )}
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
