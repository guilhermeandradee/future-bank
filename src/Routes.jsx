import { Routes, Route } from "react-router-dom"
import CreateAccount from "./components/CreateAccount"
import Login from "./components/Login"
import Home from "./components/Home"
import AccountAction from "./components/AccountAction"
import Deposit from "./components/Deposit"


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<CreateAccount/>} /> 
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/account/:cpf" element={<AccountAction />} />
            <Route path="/deposit" element={<Deposit />} />
        </Routes>
    )
}
export default MainRoutes