import { useState,createContext } from "react";

export const navBarContext = createContext()

// eslint-disable-next-line react/prop-types
export const NavBarProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    const activeBurguerMenu = () => {
        setIsActive(true)
    }
    const closeMenuBruguer = () => {
        setIsActive(false)
    }

    return (
        <navBarContext.Provider value={{
            isActive,
            activeBurguerMenu,
            closeMenuBruguer
        }}>
            {children}
        </navBarContext.Provider>
    )
}
