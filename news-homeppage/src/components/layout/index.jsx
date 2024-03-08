import { useContext } from "react"
import { navBarContext } from "../../context"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    const context = useContext(navBarContext)

    return(
        <section className="max-w-[375px] xl:max-w-[1440px] m-auto bg-yellow-100 relative">
            <section className={`${context.isActive ? "block":"hidden"} fondoOscuro`}></section>
            {children}
        </section>
    )
}

export default Layout