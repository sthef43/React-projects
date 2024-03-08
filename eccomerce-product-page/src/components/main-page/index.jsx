import { useContext } from "react"
import imageProduct1 from "../../assets/image-product-1.jpg"
import imageProduct2 from "../../assets/image-product-2.jpg"
import imageProduct3 from "../../assets/image-product-3.jpg"
import imageProduct4 from "../../assets/image-product-4.jpg"

import imageProduct1Dektop from "../../assets/image-product-1-thumbnail.jpg"
import imageProduct2Dektop from "../../assets/image-product-2-thumbnail.jpg"
import imageProduct3Dektop from "../../assets/image-product-3-thumbnail.jpg"
import imageProduct4Dektop from "../../assets/image-product-4-thumbnail.jpg"

import { NavBarContext } from "../context"

import "./style.css"

const MainPage = () => {
    const context = useContext(NavBarContext)
    let src = imageProduct1

    //Slide image in mode mobile
    function slidearImages(value) {
        if(value === "next"){
            context.setMargin(context.margin -= 375)
            console.log(context.margin);
        } else if(value === "prev") {
            context.setMargin(context.margin += 375)
        }
    }

    //Show image selected
    function viewImages(src) {
        if (context.imageActive == 1){
            src = imageProduct1
        } else if (context.imageActive == 2){
            src = imageProduct2
        }else if (context.imageActive == 3){
            src = imageProduct3
        }else if (context.imageActive == 4){
            src = imageProduct4
        }
        return src
    }

    const estyles = {
        marginLeft: context.margin
    }

    return(
        <section className="containerMainPage">
            <section className="sliderImaegsMobile">
                <figure style={estyles} id="containerSliderImages">
                    <img src={imageProduct1} alt="" />
                    <img src={imageProduct2} alt="" />
                    <img src={imageProduct3} alt="" />
                    <img src={imageProduct4} alt="" />
                </figure>
                <div className="containerArrows">
                    <button disabled={context.margin === 0} onClick={() => slidearImages("prev")}><i className="fa-solid fa-chevron-left"></i></button>
                    <button disabled={context.margin === -1125} onClick={() => slidearImages("next")}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </section>
            <section className="descriptionAndCant">
                <div className="imagesDesktop">
                    <img src={viewImages(src)} alt="" />
                    <div className="containerImagesProducts">
                        <img onClick={() => context.toggleImageActive(1)} className={`${context.imageActive == 1 ? "active":""} imageSlider`} src={imageProduct1Dektop} alt="" />
                        <img onClick={() => context.toggleImageActive(2)} className={`${context.imageActive == 2 ? "active":""} imageSlider`} src={imageProduct2Dektop} alt="" />
                        <img onClick={() => context.toggleImageActive(3)} className={`${context.imageActive == 3 ? "active":""} imageSlider`} src={imageProduct3Dektop} alt="" />
                        <img onClick={() => context.toggleImageActive(4)} className={`${context.imageActive == 4 ? "active":""} imageSlider`} src={imageProduct4Dektop} alt="" />
                    </div>
                </div>
                <div className="containerDescriptionAndCant">
                    <div>
                        <p id="proveedor">SNEAKER COMPANY</p>
                        <p id="titleProduct">Fall Limited Edition Sneakers</p>
                        <p id="productDescription">These low-profile sneakers are your perfect casual wear companion. Featuring a durable ruuber outer sole, they´ll 
                            whitstand everything the weather can offer.
                        </p>
                    </div>
                    <div className="containerPrice">
                        <div className="containerPriceDescont">
                            <p id="priceProductDescont">$125.00</p>
                            <p id="descont">50%</p>
                        </div>
                        <p id="priceProductNormal">$250.00</p>
                    </div>
                    <div className="containerCantAddCartDesktop">
                        <div className="containerAddCant">
                            <button onClick={() => context.increaseCant("reduce")}>-</button>
                            <p id="cantAdd">{context.cant}</p>
                            <button onClick={() => context.increaseCant("increase")}>+</button>
                        </div>
                        <button onClick={() => {context.setCantCarrito(context.cant),context.setViewsProdudcts(true)}} id="addToCartButton"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MainPage