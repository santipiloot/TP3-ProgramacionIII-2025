function App() {
    const [BotonIzquierdo, setBotonIzquierdo] = React.useState(true);

    const BtnIzquierdo = () => {
        setBotonIzquierdo(false);
    };

    const BtnDerecho = () => {
        setBotonIzquierdo(true);
    };
    return (
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

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
