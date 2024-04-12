import { useState } from "react";
import { createContext } from "react";

export const NavBarContext = createContext()

// eslint-disable-next-line react/prop-types
export const NavBarProvider = ({children}) => {

    const [active, setActive] = useState(false)

    return(
        <NavBarContext.Provider value={{
            active,
            setActive
        }}>
            {children}
        </NavBarContext.Provider>
    )
}