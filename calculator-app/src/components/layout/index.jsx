import "./style.css"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) =>{
    return(
        <section className="containerLayout">
            {children}
        </section>
    )
}

export default Layout