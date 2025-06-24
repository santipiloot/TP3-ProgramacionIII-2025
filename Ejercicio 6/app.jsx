function App() {
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [imc, setImc] = React.useState(null);

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);


        const imcCalculado = pesoNum / (alturaNum ** 2);
        setImc(imcCalculado);
    };

    const interpretarIMC = () => {
        if (imc < 18.5) {
            return { texto: "Nivel bajo", clase: "amarillo" };
        } else if (imc <= 24.9) {
            return { texto: "Nivel normal", clase: "verde" };
        } else if (imc <= 29.9) {
            return { texto: "Nivel de sobrepeso", clase: "naranja" };
        } else {
            return { texto: "Nivel de obesidad", clase: "rojo" };
        }
    };

    const resultado = imc !== null ? interpretarIMC() : null;

    return (
        <div className="imc-formulario">
            <input
                type="number"
                placeholder="Peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <input
                type="number"
                placeholder="Altura (m)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <button onClick={calcularIMC}>Calcular IMC</button>

            {resultado && (
                <p className={`mensaje ${resultado.clase}`}>
                    IMC: {imc.toFixed(2)} — {resultado.texto}
                </p>
            )}
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
