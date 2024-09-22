import { Routes, Route } from "react-router-dom"
import CreateAccount from "./components/CreateAccount"
import Login from "./components/Login"
import Home from "./components/Home"
import AccountAction from "./components/AccountAction"
import Deposit from "./components/Deposit"
import WithDraw from "./components/Withdraw"
import TransferAmount from "./components/TransferAmount"

import { AuthProvider } from "./services/AuthContext"


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<CreateAccount/>} /> 
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/account/:cpf" element={
                <AuthProvider>
                    <AccountAction />
                </AuthProvider>
                } />
            <Route path="/deposit/:cpf" element={<Deposit />} />
            <Route path="/withdraw/:cpf" element={<WithDraw />} />
            <Route path="/transfer/:cpf" element={<TransferAmount/>} />
        </Routes>
    )
}
export default MainRoutes