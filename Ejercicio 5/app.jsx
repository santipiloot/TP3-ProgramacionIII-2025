function App() {
    //Accedemos a los estados de los elementos que vamos a renderizar
    const [num1, setNum1]=React.useState("");
    const [num2, setNum2]=React.useState("");
    const [op, setOp]=React.useState("suma");
    const [resultado, setResultado]=React.useState(null);

    //Funcion que va a validar si la division es valida (devuelve true o false)
    const validarDivision = () => op === "division" && (parseFloat(num2) === 0);

    //Al enviar el formulario se va a lanzar esta funcion
    const clickSubmit = (e) => {
        e.preventDefault(); //Evita que el formulario recargue la pagina

        //Le pasamos los valores(estado) a n1 y n2
        const n1=parseFloat(num1);
        const n2=parseFloat(num2);

        //Vamos a hacer la operacion que corresponda
        let res=0;
        switch (op) {
            case "suma":
                res=n1+n2;
                break;
            case "resta":
                res=n1-n2;
                break;
            case "multiplicacion":
                res=n1*n2;
                break;
            case "division":
                res=n1/n2;
                break;
            default:
                res="Error";
        }

        //Setiamos el valor(estado) de res a resultado
        setResultado(res);
    };

    return (
        <form className="form__calculadora" onSubmit={clickSubmit}>
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

            <select value={op} onChange={e => setOp(e.target.value)}>
                <option value="suma">Sumar</option>
                <option value="resta">Restar</option>
                <option value="multiplicacion">Multiplicar</option>
                <option value="division">Dividir</option>
            </select>

            {/*Cada vez que se renderiza se valida la division y como retorna true o false lo usamos para activar/desactivar el input submit*/}
            <input type="submit" value="Calcular" disabled={validarDivision()} />

            {/*Vamos a mostrar el resultado si no es null, es decir si cambio su estado por defecto (si se calculo un resultado en algun momento) y la segunda expresion es para que no se muestre un error actual al mismo tiempo que un resultado anterior */}
            {resultado !== null && !validarDivision() && (
                <p className="resultado">Resultado: {resultado.toFixed(2)}</p>
            )}

            {/*Si validar division es true (Invalida) muestra el mensaje de error*/}
            {validarDivision() && (
                <p className="error">No se puede dividir por cero o campo vacio</p>
            )}
        </form>
    );
}