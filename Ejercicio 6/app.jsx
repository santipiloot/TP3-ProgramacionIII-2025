function App() {
    //Accdemos a los estados de los elementos a renderizar 
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [imc, setImc] = React.useState(null);

    //Funcion que va a calcular el imc y lo setea a la variable imc
    const calcularIMC = (e) => {
        e.preventDefault();
        const pesoNum=parseFloat(peso);
        const alturaNum=parseFloat(altura);

        const imcCalculado = pesoNum / (alturaNum**2);
        setImc(imcCalculado);
    };

    //Funcion que va a interpretar el resultado del imc y va decidir el nivel que le corresponde, retorna un objeto con un texto con el nivel y la clase que va a llevar (para decidir el color del nivel)
    const interpretarIMC = () => {
        if(imc<18.5) {
            return {texto:"Estas en un nivel bajo",clase:"amarillo"};
        }else if (imc<=24.9) {
            return {texto:"Estas en un nivel normal",clase:"verde"};
        }else if (imc<=29.9) {
            return {texto:"Estas en un nivel de sobrepeso",clase:"naranja"};
        }else {
            return {texto:"Estas en un nivel de obesidad",clase:"rojo"};
        }
    };

    //Con un if verificamos si imc cambio de null (se le dio un valor), si ya se hizo el calculo se llama a la funcion para interpretarlo y darle el objeto a resultado, si no queda en null como ya estaba 
    const resultado= imc!==null ? interpretarIMC() : null;

    return (
        <form className="imc__formulario" onSubmit={calcularIMC}>
            {/*onChange es para ejecutar cierta accion al detectar un cambio en este caso en el input*/}
            <input
                type="number"
                placeholder="Peso (kg)"
                onChange={(e) => setPeso(e.target.value)}
                value={peso}
            />
            <input
                type="number"
                placeholder="Altura (metros)"
                onChange={(e) => setAltura(e.target.value)}
                value={altura}
            />

            <input type="submit" value="Calcular IMC" />

            {/*Expresion de renderizado condicional que va a verificar si resultado ya no es null (por eso antes usabamos el if)*/}
            {resultado && (
                <p className={`mensaje ${resultado.clase}`}>
                    {/*Vamos a mostrar el resultado dandole dos clases que va incluir la clase mensaje y el color que le corresponda, aca abajo mostramos el calculo del imc mas el texto del nivel que le corresponde*/}
                    IMC: {imc.toFixed(2)}: {resultado.texto}
                </p>
            )}
        </form>
    );
}
