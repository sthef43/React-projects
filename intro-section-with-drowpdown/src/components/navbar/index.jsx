import logo from "../../assets/logo.svg"
import menuLogo from "../../assets/icon-menu.svg"
import closeLogo from "../../assets/icon-close-menu.svg"
import iconDrop from "../../assets/icon-arrow-down.svg"

import listIcon from "../../assets/icon-todo.svg"
import calendarIcon from "../../assets/icon-calendar.svg"
import remindersIcon from "../../assets/icon-reminders.svg"
import planningIcon from "../../assets/icon-planning.svg"
import { useContext, useState } from "react"

import { navBarContext } from "../../context"


const NavBar = () => {
    const context = useContext(navBarContext)

    const [dropwdownFeatures, setDropdownFeatures] = useState(false)
    const [dropwdownCompany, setDropdownCompany] = useState(false)

    function setDropdownFunc(value) {
        if (value == "company") {
            setDropdownCompany(!dropwdownCompany)
        } else if (value == "features"){
            setDropdownFeatures(!dropwdownFeatures)
        }
    }

    return (
        <main>
            <nav className="flex items-start p-3 w-full justify-between">
                <img src={logo} alt="" />
                <button onClick={() => context.activeBurguerMenu()}><img src={menuLogo} alt="" /></button>
            </nav>
            <nav className={`${context.isActive ? "block":"hidden"} bg-white h-screen w-1/2 absolute top-0 right-0 p-3 text-gray-600`}>
                <div className="w-full flex justify-end">
                    <button onClick={() => context.closeMenuBruguer()}><img src={closeLogo} alt="" /></button>
                </div>
                <div onClick={() => setDropdownFunc("features")}>
                    <div className="flex items-baseline space-x-1 cursor-pointer">
                        <p>Features</p>
                        <img className={`${dropwdownFeatures ? "rotate-180":"rotate-0"} transition-all duration-300`} src={iconDrop} alt="" />
                    </div>
                    <div className={`${dropwdownFeatures ? "block":"hidden"} ml-6 mt-3 space-y-2`}>
                        <div className="flex items-center space-x-2">
                            <img src={listIcon} alt="" />
                            <p>Todo List</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img src={calendarIcon} alt="" />
                            <p>Calendar</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img src={remindersIcon} alt="" />
                            <p>Reminders</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img src={planningIcon} alt="" />
                            <p>Planning</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => setDropdownFunc("company")} className="mt-2">
                    <div className="flex items-baseline space-x-1 cursor-pointer">
                        <p>Company</p>
                        <img className={`${dropwdownCompany ? "rotate-180":"rotate-0"} transition-all duration-300`} src={iconDrop} alt="" />
                    </div>
                    <div className={`${dropwdownCompany ? "flex":"hidden"} flex-col ml-6 mt-3 space-y-2`}>
                        <a href="">History</a>
                        <a href="">Our Team</a>
                        <a href="">Blog</a>
                    </div>
                </div>
                <div className="my-2 flex flex-col space-y-1">
                    <a href="">Careers</a>
                    <a href="">About</a>
                </div>
                <div className="flex flex-col space-y-2">
                    <button>Login</button>
                    <button className=" border-[1.5px] border-gray-500 rounded-full h-10">Register</button>
                </div>
            </nav>
        </main>
    )
}

export default NavBar