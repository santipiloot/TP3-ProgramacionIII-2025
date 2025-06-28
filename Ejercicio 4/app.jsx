function App() {
    //Usamos state para acceder a los estados del boton izquierdo y poder desactivarlo/activarlo
    const [BotonIzquierdo, setBotonIzquierdo]=React.useState(true); 

    //Funcion que se va a lanzar al apretar el boton izquierdo 
    const BtnIzquierdo = () => {
        setBotonIzquierdo(false);
    };

    //Funcion que se va a lanzar al apretar el boton derecho
    const BtnDerecho = () => {
        setBotonIzquierdo(true);
    };
    return ( //HTML que se va a renderizar 
        <div className="botones"> 
            <button onClick={BtnIzquierdo} disabled={!BotonIzquierdo}>
                Izquierdo
            </button>
            <button onClick={BtnDerecho} disabled={BotonIzquierdo}>
                Derecho
            </button>
        </div>
    );
}
