import imgMobile1 from "../../assets/mobile-image-hero-1.jpg"
import imgMobile2 from "../../assets/mobile-image-hero-2.jpg"
import imgMobile3 from "../../assets/mobile-image-hero-3.jpg"

import imgDesktop1 from "../../assets/desktop-image-hero-1.jpg"
import imgDesktop2 from "../../assets/desktop-image-hero-2.jpg"
import imgDesktop3 from "../../assets/desktop-image-hero-3.jpg"

import imageAboutDark from "../../assets/image-about-dark.jpg"
import imageAboutLight from "../../assets/image-about-light.jpg"
import arrowLeft from "../../assets/icon-angle-left.svg"
import arrowRight from "../../assets/icon-angle-right.svg"

import "./style.css"
import { useState } from "react"

const Hompage = () => {
    const [firsSlide, setFirstSlide] = useState(0)

    let classNameSlider = ""

    if (firsSlide == 0) {
        classNameSlider = "containerSlider"
    } else if (firsSlide == 1) {
        classNameSlider = "firstSlider"
    } else if (firsSlide == 2) {
        classNameSlider = "secondSlider"
    }


    return (
        <section className="containerHomepage">
            <div className="containerButtons">
                <button disabled={firsSlide === 0} onClick={() => setFirstSlide(firsSlide - 1)}><img src={arrowLeft} alt="" /></button>
                <button disabled={firsSlide === 2} onClick={() => setFirstSlide(firsSlide + 1)}><img src={arrowRight} alt="" /></button>
            </div>
            <ul className={classNameSlider}>
                <div className="sliderContent">
                    <figure className="containerImages">
                        <img id="imgMobile" src={imgMobile1} alt="" />
                        <img id="imgDesktop" src={imgDesktop1}></img>
                    </figure>
                    <article className="containerHeader">
                        <h2>Discover innovative ways to decorate</h2>
                        <p>We provide unmatched quality, comfort, and style for property owners across the country.
                            Our experts combine form and function in your own style with our collection and make your
                            property a reflection of you and what you love
                        </p>
                        <a id="arrowShop" href="">SHOP NOW <i className="fa-solid fa-arrow-right"></i></a>
                    </article>
                </div>
                <div className="sliderContent">
                    <figure className="containerImages">
                        <img id="imgMobile" src={imgMobile2} alt="" />
                        <img id="imgDesktop" src={imgDesktop2}></img>
                    </figure>
                    <article className="containerHeader">
                        <h2>We are available all across the globe</h2>
                        <p>With stores all over the world, is´s easy for you to find furniture for your home or place
                            of bussiness. Locally, we`re in most major cities throughout the country. Find the branch
                            nearest you using our store locator. Any question? Dont´t hesitate to contact us today.
                        </p>
                        <a id="arrowShop" href="">SHOP NOW <i className="fa-solid fa-arrow-right"></i></a>
                    </article>
                </div>
                <div className="sliderContent">
                    <figure className="containerImages">
                        <img id="imgMobile" src={imgMobile3} alt="" />
                        <img id="imgDesktop" src={imgDesktop3}></img>
                    </figure>
                    <article className="containerHeader">
                        <h2>Manufactured with the best materials</h2>
                        <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced
                            technology to ensure that every product is made as perfect and as consistent as possible. With
                            three decades of experiences in this industry, we understand what customers wnat fot their home
                            and office.
                        </p>
                        <a id="arrowShop" href="">SHOP NOW <i className="fa-solid fa-arrow-right"></i></a>
                    </article>
                </div>
            </ul>
            <article className="darkAndLightAbout">
                <img src={imageAboutDark} alt="" />
                <div className="aboutText">
                    <p id="titleAbout">ABOUT OUR FURNITURE</p>
                    <p>Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interest and what
                        inspieres you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialist are available to help you create your dream space.
                    </p>
                </div>
                <img src={imageAboutLight} alt="" />
            </article>
        </section>
    )
}

export default Hompage