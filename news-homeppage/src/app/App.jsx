import { NavBarProvider } from "../context"
import NavBar from "../components/navBar"
import MainPage from "../components/Main-page"
import Layout from "../components/layout"

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