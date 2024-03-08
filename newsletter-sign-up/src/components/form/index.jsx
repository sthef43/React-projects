import illustrationSignUp from "../../assets/illustration-sign-up-mobile.svg"
import illustrationSignUpDesktop from "../../assets/illustration-sign-up-desktop.svg"
import iconList from "../../assets/icon-list.svg"
import "../../index.css"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { FormEmailContext } from "../../context"

const Form = () =>{
    const context = useContext(FormEmailContext)


    
    const { register, formState: {errors}, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        context.setBoolean(true)
    }

    return(
        <section className={`${context.boolean ? "hidden":"flex"} flex-col bg-white rounded-lg p-5 xl:flex-row-reverse xl:h-[52rem] xl:w-full xl:justify-between`}>
            <img className="w-full xl:hidden" src={illustrationSignUp} alt="" />
            <img className="hidden xl:block" src={illustrationSignUpDesktop} alt="" />
            <div className="p-5 xl:h-full">
                <p className="text-4xl font-bold my-5 xl:text-7xl">Stay updated!!</p>
                <p className="xl:text-3xl xl:mt-10 xl:mb-14 xl:font-semibold">Join 60,000+ product managers receiving monthly updates on:</p>
                <figure className="flex items-start space-x-4 my-5 xl:my-10">
                    <img src={iconList} alt="" />
                    <p className="xl:text-xl">Product discovery and building what matters</p>
                </figure>
                <figure className="flex items-start space-x-4 my-5 xl:my-10">
                    <img src={iconList} alt="" />
                    <p className="xl:text-xl">Measuring to ensure updates are a success</p>
                </figure>
                <figure className="flex items-start space-x-4 my-5 xl:my-10">
                    <img src={iconList} alt="" />
                    <p className="xl:text-xl">And much more!</p>
                </figure>
                <form className="mt-0 xl:mt-[9.5rem]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full justify-between items-center">
                        <p className="font-bold text-sm mt-8">Email address</p>
                        <p className="font-bold text-sm mt-8 text-red-500">{errors.email?.message}</p>
                    </div>
                    <input
                    className={errors.email ? "input-style-error":"input-style"}
                    type="text" 
                    placeholder="email@company.com"
                    {...register('email',{
                        required: {
                            value: true,
                            message: "Is necessary a email"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Insert a valid email"
                        }
                    })}/>
                    <button
                    className="button-style" 
                    type="submit">Subscribe to monthly newsletter</button>
                </form>
            </div>
        </section>
    )
}

export default Form