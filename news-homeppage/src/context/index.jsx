import { useState } from "react";
import { createContext } from "react";

export const navBarContext = createContext()

// eslint-disable-next-line react/prop-types
export const NavBarProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    const activeBurguerMenu = () => {
        setIsActive(true)
        document.body.style.overflow = "hidden"
    }
    const closeBurguerMenu = () => {
        setIsActive(false)
        document.body.style.overflow = "auto"
    }


    return(
        <navBarContext.Provider value={{
            isActive,
            activeBurguerMenu,
            closeBurguerMenu,
        }}>
            {children}
        </navBarContext.Provider>
    )
}