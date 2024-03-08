import imageWeb3Mobile from "../../assets/image-web-3-mobile.jpg"
import imageWeb3Desktop from "../../assets/image-web-3-desktop.jpg"
import retroPC from "../../assets/image-retro-pcs.jpg"
import imgLaptop from "../../assets/image-top-laptops.jpg"
import imgGaming from "../../assets/image-gaming-growth.jpg"

const MainPage = () =>{
    return(
        <section className="p-5">
            <img className="xl:hidden" src={imageWeb3Mobile} alt="" />
            <section className="xl:flex xl:space-x-8">
                <div>
                <img className="hidden xl:block" src={imageWeb3Desktop} alt="" />
                    <div className="xl:flex xl:items-center xl:mt-5">
                        <h2 className="text-4xl font-bold pr-16 my-4 xl:text-6xl xl:my-0">The Bright Future of Web 3.0?</h2>
                        <div className="xl:pl-20">
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really
                                fulfilling its promise?
                            </p>
                            <button className="readMoreButton xl:mt-8">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-950 mt-10 p-4 xl:mt-0">
                    <p className="text-3xl font-bold text-yellow-600">New</p>
                    <div className="text-white space-y-3 border-b-2 border-white pb-6 mt-5">
                        <a href="" className="text-xl font-bold hover:text-orange-500">Hydrogen VS Electirc cars</a>
                        <p>Will hydrogen-fueld cars ever ever catch up to EVs?</p>
                    </div>
                    <div className="text-white space-y-3 border-b-2 border-white pb-6 mt-5">
                        <a href="" className="text-xl font-bold hover:text-orange-500">The Downsides of AI Artistry</a>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className="text-white space-y-3 border-b-2 border-white pb-6 mt-5">
                        <a href="" className="text-xl font-bold hover:text-orange-500">Is VC Funding Drying Up?</a>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                    </div>
                </div>
            </section>
            <div className="my-16 space-y-12 xl:flex xl:items-start xl:space-y-0 xl:w-full xl:justify-between">
                <article className="flex space-x-3 h-[120px] xl:h-[167px] xl:space-x-0">
                    <figure>
                        <img className="w-full xl:w-[90%]" src={retroPC} alt="" />
                    </figure>
                    <div className="flex flex-col justify-around space-y-3">
                        <p className="text-3xl font-bold text-gray-400">01</p>
                        <a href="" className="text-lg font-bold hover:text-orange-500">Reviving Retro PCs</a>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>
                <article className="flex space-x-3 h-[120px] xl:h-[167px] xl:space-x-0">
                    <figure>
                        <img className="w-[88%] xl:w-[90%]" src={imgLaptop} alt="" />
                    </figure>
                    <div className="flex flex-col justify-around space-y-3">
                        <p className="text-3xl font-bold text-gray-400">02</p>
                        <a href="" className="text-lg font-bold hover:text-orange-500">Top 10 Laptops of 2020</a>
                        <p>Our best picks for various needs and budgets</p>
                    </div>
                </article>
                <article className="flex space-x-3 h-[120px] xl:h-[167px] xl:space-x-0">
                    <figure>
                        <img className="w-[95%] xl:w-[90%]" src={imgGaming} alt="" />
                    </figure>
                    <div className="flex flex-col justify-around space-y-3">
                        <p className="text-3xl font-bold text-gray-400">03</p>
                        <a href="" className="text-lg font-bold hover:text-orange-500">The Growth of Gaming</a>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default MainPage