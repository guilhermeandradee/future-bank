import Form from "./Form"
import Header from "./Header"

import { AuthProvider } from "../services/AuthContext"

const Deposit = () => {
    return(
        <>
            <Header/>
            <AuthProvider>
                <Form typeOfInput={"deposit"} />
            </AuthProvider>
        </>
    )
}
export default Deposit