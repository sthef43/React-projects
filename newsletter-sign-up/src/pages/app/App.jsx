import Form from "../../components/form"
import { FormEmailProvider } from "../../context"
import MessageSucces from "../../components/message-succes"

const App = () => {
    return(
        <main className="h-screen w-screen bg-blue-950">
            <section className="flex items-center justify-center max-w-[375px] m-auto h-100% xl:h-screen xl:max-w-[1280px]">
            <FormEmailProvider>
                <Form/>
                <MessageSucces/>
            </FormEmailProvider>
        </section>
        </main>
    )
}

export default App