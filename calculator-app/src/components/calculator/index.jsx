import { useContext } from "react"
import { CalculatorAppContext } from "../../context"
import "./style.css"

const Calculator = () =>{
    const context = useContext(CalculatorAppContext)

    

    const convetidor = () =>{
        const nuevoStr = context.primeraTanda.slice(0,-1)
        context.setPrimeraTanda(nuevoStr)
    }
    const convertido2 = () => {
        const nuevoStr2 = context.segundaTanda.slice(0, -1)
        context.setSegundaTanda(nuevoStr2)
    }

    function calcularResultado(valor){
        if (valor == "+") {
            context.setSuma(true)
            context.setActiveTandas(true)
        } else if (valor == "-") {
            context.setResta(true)
            context.setActiveTandas(true)
        } else if (valor == "x") {
            context.setMultiplicacion(true)
            context.setActiveTandas(true)
        } else if (valor == "/") {
            context.setDivision(true)
            context.setActiveTandas(true)
        }
    }

    function reset() {
        context.setActiveTandas(false)
        context.setPrimeraTanda("")
        context.setSegundaTanda("")
        context.setMostrarResultado(false)
    }

    function mostrarResultado(valor){
        if (valor == "=" && context.suma){
            context.setResultado(Number(context.primeraTanda) + Number(context.segundaTanda))
            context.setMostrarResultado(true)
        } else if (valor == "=" && context.resta) {
            context.setResultado(Number(context.primeraTanda) - Number(context.segundaTanda))
            context.setMostrarResultado(true)
        } else if (valor == "=" && context.multiplicacion) {
            context.setResultado(Number(context.primeraTanda) * Number(context.segundaTanda))
            context.setMostrarResultado(true)
        } else if (valor == "=" && context.division) {
            context.setResultado(Number(context.primeraTanda) / Number(context.segundaTanda))
            context.setMostrarResultado(true)
        } else if (valor == "="){
            context.setMostrarResultado(true)
        }
    }

    console.log(context.segundaTanda);
    console.log(context.primeraTanda);
    console.log(context.resultado);


    return(
        <>
            <section className={`${context.activeTandas ? "active":""} containerCalculator`}>
                <div className="containerInputNumbers">
                    <p>{context.primeraTanda}</p>
                </div>
                <div className="gridNumbers">
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "7")}>7</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "8")}>8</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "9")}>9</button>
                    <button id="deletebutton" onClick={() => convetidor()}>DEl</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "4")}>4</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "5")}>5</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "6")}>6</button>
                    <button onClick={() => calcularResultado("+")}>+</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "1")}>1</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "2")}>2</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "3")}>3</button>
                    <button onClick={() => calcularResultado("-")}>-</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + ".")}>.</button>
                    <button onClick={() => context.setPrimeraTanda(context.primeraTanda + "0")}>0</button>
                    <button onClick={() => calcularResultado("/")}>/</button>
                    <button onClick={() => calcularResultado("x")}>X</button>
                    <button onClick={() => reset()} id="resetButton">RESET</button>
                    <button id="equalButton">=</button>
                </div>
            </section>
            <section className={`${context.activeTandas ? "active":""} containerCalculator2`}>
                <div className={`${context.mostrarResultado ? "active":""} containerInputNumbers`}>
                    <p>{context.segundaTanda}</p>
                </div>
                <div className={`${context.mostrarResultado ? "active":""} containerInputNumbersResultado`}>
                    <p>{context.resultado}</p>
                </div>
                <div className="gridNumbers">
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "7")}>7</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "8")}>8</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "9")}>9</button>
                    <button id="deletebutton" onClick={() => convertido2()}>DEl</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "4")}>4</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "5")}>5</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "6")}>6</button>
                    <button>+</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "1")}>1</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "2")}>2</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "3")}>3</button>
                    <button>-</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + ".")}>.</button>
                    <button onClick={() => context.setSegundaTanda(context.segundaTanda + "0")}>0</button>
                    <button>/</button>
                    <button>X</button>
                    <button onClick={() => reset()} id="resetButton">RESET</button>
                    <button onClick={() => mostrarResultado("=")} id="equalButton">=</button>
                </div>
            </section>
        </>
    )
}

export default Calculator