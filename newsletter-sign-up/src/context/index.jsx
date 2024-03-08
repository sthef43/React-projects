import { useState, createContext } from "react";

export const FormEmailContext = createContext()

// eslint-disable-next-line react/prop-types
export const FormEmailProvider = ({children}) => {
    const [boolean, setBoolean] = useState(false)

    return(

        <FormEmailContext.Provider value={{
            boolean,
            setBoolean,

        }}>
            {children}
        </FormEmailContext.Provider>
    )
}