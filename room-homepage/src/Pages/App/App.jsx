import Layout from "../../components/Layout"
import NavBar from "../../components/NavBar"
import Hompage from "../../components/homepage"
import { NavBarProvider } from "../../context"

const App = () => {
    return(
        <NavBarProvider>
            <Layout>
                <NavBar/>
                <Hompage/>
            </Layout>
        </NavBarProvider>
    )
}

export default App