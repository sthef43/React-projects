import { useContext } from "react"
import iconList from "../../assets/icon-list.svg"
import { FormEmailContext } from "../../context"

const MessageSucces = () => {
    const context = useContext(FormEmailContext)

    return(
        <section className={`${context.boolean ? "flex":"hidden"} p-5 h-screen flex-col justify-center bg-white xl:w-1/3 xl:rounded-lg xl:h-1/2`}>
            <img className="w-20" src={iconList} alt="" />
            <p className="text-4xl font-bold my-5">Thanks for Subscribing!</p>
            <p>A confirmation email has been sent to <strong>Ash@lorecompany.com.</strong> Please open it and click the button inside to confirm your subscription</p>
            <button className="button-style mt-20">Dismiss message</button>
        </section>
    )
}

export default MessageSucces