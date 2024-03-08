import logo from "../../assets/logo.svg"
import iconMenu from "../../assets/icon-menu.svg"
import iconMenuCLose from "../../assets/icon-menu-close.svg"
import { useContext } from "react"
import { navBarContext } from "../../context"

const NavBar = () => {
    const context = useContext(navBarContext)

    console.log(context.isActive);

    return(
        <nav className="relative p-5">
            <figure className="flex w-full justify-between items-center xl:items-end">
                <img src={logo} alt="" />
                <div className="flex items-center xl:hidden">
                    <button onClick={() => context.activeBurguerMenu(true)} className={`${context.isActive ? "hidden":"block"}`}><img src={iconMenu} alt="" /></button>
                    <button onClick={() => context.closeBurguerMenu(false)} className={`${context.isActive ? "block":"hidden"}`}><img src={iconMenuCLose} alt="" /></button>
                </div>
                    <ul className="hidden xl:flex space-x-4 text-xl font-semibold">
                        <li><a href="" className="hover:text-orange-500">Home</a></li>
                        <li><a href="" className="hover:text-orange-500">New</a></li>
                        <li><a href="" className="hover:text-orange-500">Popular</a></li>
                        <li><a href="" className="hover:text-orange-500">Trending</a></li>
                        <li><a href="" className="hover:text-orange-500">Categories</a></li>
                    </ul>
            </figure>
            <div className={`${context.isActive ? "block":"hidden"} absolute right-0 top-0 h-screen bg-white w-[65%] p-5 z-20`}>
                <figure className="w-full flex justify-end">
                    <button onClick={() => context.closeBurguerMenu(false)}><img src={iconMenuCLose} alt="" /></button>
                </figure>
                <ul className="mt-28 space-y-2 font-semibold text-lg">
                    <li><a href="">Home</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar