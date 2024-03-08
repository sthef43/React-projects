import { createContext, useState } from "react";

export const NavBarContext = createContext()

// eslint-disable-next-line react/prop-types
export const NavBarProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)
    const [activeCart, setActiveCart] = useState(false)
    const [cant, setCant] = useState(0)
    const [cantCarrito, setCantCarrito] = useState(0)
    const [margin, setMargin] = useState(0)
    const [viewProduct, setViewsProdudcts] = useState(false)
    const [imageActive, setImageActive] = useState(1)

    //Active burguer menu
    function toggleMenuBurguer(value) {
        console.log(value);
        if (value === "open") {
            setIsActive(true)
        } else if(value === "close"){
            setIsActive(false)
        }
    }

    //Active image selected
    function toggleImageActive(value) {
        if (value === 1 || value === 2 || value === 3 || value === 4) {
            setImageActive(value)
            console.log(value);
        }
    }

    //Open cart shop
    function toggleCartShop() {
        setActiveCart(!activeCart)
    }

    //Increase amount of product
    function increaseCant (value) {
        if (value === "increase") {setCant(cant + 1)}
        else if (value === "reduce") {setCant(cant - 1)}
    }

    return(
        <NavBarContext.Provider value={{
            isActive,
            setIsActive,
            toggleMenuBurguer,
            toggleCartShop,
            increaseCant,
            activeCart,
            cant,
            margin,
            imageActive,
            setActiveCart,
            setCant,
            setMargin,
            setImageActive,
            cantCarrito,
            setCantCarrito,
            viewProduct,
            setViewsProdudcts,
            toggleImageActive,

        }}>
            {children}
        </NavBarContext.Provider>
    )
}