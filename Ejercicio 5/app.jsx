function App() {
    const [num1, setNum1]= React.useState("");
    const [num2, setNum2]= React.useState("");
    const [operacion, setOperacion]= React.useState("sumar");
    const [resultado, setResultado]= React.useState(null);

    const validarDivision =
        operacion === "dividir" && (parseFloat(num2) === 0);

    const btnCalcular = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        let res;
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
        setResultado(res);
    };

    return (
        <div className="calculadora">
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

            <button onClick={btnCalcular} disabled={validarDivision}>
                Calcular
            </button>

            {resultado !== null && !validarDivision &&(
                <p className="resultado">Resultado: {resultado.toFixed(2)}</p>
            )}

            {validarDivision && (
                <p className="error">No se puede dividir por cero o campo vacío</p>
            )}
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
