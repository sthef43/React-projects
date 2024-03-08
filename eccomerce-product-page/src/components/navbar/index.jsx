import { useContext } from "react"
import { NavBarContext } from "../context"
import "./style.css"

import iconBurguer from "../../assets/icon-menu.svg"
import logo from "../../assets/logo.svg"
import iconCart from "../../assets/icon-cart.svg"
import avatarImage from "../../assets/image-avatar.png"
import iconClose from "../../assets/icon-close.svg"
import imageProduct1 from "../../assets/image-product-1.jpg"

const NavBar = () =>{
    const context = useContext(NavBarContext)

    const total = context.cantCarrito * 125.00


    //Set amount of cart in 0
    function setCeroCart(){
        context.setViewsProdudcts(false);
        context.setCant(0);
        context.setCantCarrito(0)
    }

    

    return (
        <nav className="navBar">
            <div className="containerIcons">
                <button onClick={() => context.toggleMenuBurguer("open")}><img id="iconBurguer" src={iconBurguer} alt="" /></button>
                <img src={logo} alt="" />
                <ul className="containerLinksNavbar">
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </ul>
            </div>
            <div className="containerIcons">
                <button onClick={() => context.toggleCartShop()}><img src={iconCart} alt="" /></button>
                <button><img id="avatarImage" src={avatarImage} alt="" /></button>
                <p id="cant">{context.cantCarrito}</p>
            </div>
            <section className={`${context.isActive ? "active":""} navBarMenu`}>
                <button onClick={() => context.toggleMenuBurguer("close")}><img src={iconClose} alt="" /></button>
                <div className="containerLinksNavBarMenu">
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </section>
            <section className={`${context.activeCart ? "active":""} containerCartShop`}> 
                <div className="headerCartShop">
                    <p>Cart</p>
                </div>
                <div className="contentCartShop">
                    <div className={`${context.viewProduct ? "active":""} messageIsEmpty`}>
                        <p>The cart is empty</p>
                    </div>
                    <article className={`${context.viewProduct ? "active":""} containerArticleCart`}>
                        <figure className="article">
                            <img src={imageProduct1} alt="" />
                            <div>
                                <p>Fall Limited Edition Sneakers</p>
                                <div className="containerPriceCart">
                                    <p>$125.00</p>
                                    <p>x</p>
                                    <p>{context.cantCarrito}</p>
                                    <p id="priceTotalCart">{"$" + total + ".00"}</p>
                                </div>
                            </div>
                            <button onClick={() => setCeroCart()}><i className="fa-solid fa-trash"></i></button>
                        </figure>
                        <button id="checkOutButton">Check Out</button>
                    </article>
                </div>
            </section>
        </nav>
    )
}

export default NavBar