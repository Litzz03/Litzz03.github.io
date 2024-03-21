import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BitCoinTracker from "./pages/BitCoinTracker";
import CurrencyConverter from "./pages/CurrencyConverter";
import PageBase from "./pages/PageBase"
import Page404 from "./pages/Page404";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageBase /> }>
                    <Route index element={ <Home />}></Route>
                    <Route path="/BitCoinTracker" element={ <BitCoinTracker />}></Route>
                    <Route path="/CurrencyConverter" element={ <CurrencyConverter />}></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes