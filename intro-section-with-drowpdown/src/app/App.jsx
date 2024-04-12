import { NavBarProvider } from "../context"
import Layout from "../components/layout"
import NavBar from "../components/navbar"

const App = () =>{
    return(
        <NavBarProvider>
            <Layout>
                <NavBar/>
            </Layout>
        </NavBarProvider>
    )
}

export default App