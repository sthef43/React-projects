import { createContext, useState } from "react";

export const CalculatorAppContext = createContext()

// eslint-disable-next-line react/prop-types
export const CalculatorAppProvider = ({children}) => {

    const [activeTandas, setActiveTandas] = useState(false)
    const [primeraTanda, setPrimeraTanda] = useState("")
    const [segundaTanda, setSegundaTanda] = useState("")
    const [suma, setSuma] = useState(false)
    const [resta, setResta] = useState(false)
    const [multiplicacion, setMultiplicacion] = useState(false)
    const [division, setDivision] = useState(false)
    const [mostrarResultado, setMostrarResultado] = useState(false)
    const [resultado, setResultado] = useState(Number(primeraTanda) + Number(segundaTanda))


    return(
        <CalculatorAppContext.Provider value={{
            primeraTanda,
            setPrimeraTanda,
            segundaTanda,
            setSegundaTanda,
            activeTandas,
            setActiveTandas,
            resultado,
            setResultado,
            suma,
            setSuma,
            resta,
            multiplicacion,
            division,
            setDivision,
            setMultiplicacion,
            setResta,
            mostrarResultado,
            setMostrarResultado
        }}>

            {children}
        </CalculatorAppContext.Provider>
    )
}