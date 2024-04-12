import "./style.css"

import burguerNav from "../../assets/icon-hamburger.svg"
import iconClose from "../../assets/icon-close.svg"
import logo from "../../assets/logo.svg"
import { useContext } from "react"
import { NavBarContext } from "../../context"

const NavBar = () => {
    const context = useContext(NavBarContext)

    return(
        <section className="containerNavBar">
            <nav className="NavBar">
                <button onClick={() => context.setActive(true)}><img src={burguerNav} alt="" /></button>
                <div className="headerTitle">
                    <p>room</p>
                </div>
            </nav>
            <nav className={`${context.active ? "active":""} burguerNav`}>
                <button onClick={() => context.setActive(false)}><img src={iconClose} alt="" /></button>
                <div className="linksBurguerNav">
                    <a href="">home</a>
                    <a href="">shop</a>
                    <a href="">about</a>
                    <a href="">contact</a>
                </div>
            </nav>
            <nav className="navbarDesktop">
                <img src={logo} alt="" />
                <ul className="containerLinksNavbar">
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </ul>
            </nav>
        </section>
    )
}

export default NavBar