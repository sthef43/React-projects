import Layout from "../../components/layout"
import Calculator from "../../components/calculator"

import { CalculatorAppProvider } from "../../context"

const App = () => {
    return(
        <CalculatorAppProvider>
            <Layout>
                <Calculator/>
            </Layout>
        </CalculatorAppProvider>
    )
}

export default App