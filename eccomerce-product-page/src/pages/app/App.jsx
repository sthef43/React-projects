import { NavBarProvider } from "../../components/context"
import Layout from "../layout"
import NavBar from "../../components/navbar"
import MainPage from "../../components/main-page"

const App = () => {
    return(
        <NavBarProvider>
            <Layout>
                <NavBar/>
                <MainPage/>
            </Layout>
        </NavBarProvider>
    )
}

export default App