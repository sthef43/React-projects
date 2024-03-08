import { useContext } from "react"
import { NavBarContext } from "../../components/context"
import "./style.css"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) =>{
    const context = useContext(NavBarContext)
    return(
        <section className="layoutContainer">
            <section className={`${context.isActive ? "active":""} fondoOscuro`}></section>
            {children}
        </section>
    )
}

export default Layout