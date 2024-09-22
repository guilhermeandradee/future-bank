
import Header from "./Header"
import Form from "./Form"

import { AuthProvider } from "../services/AuthContext"

const Login = () => {
    return(
        <>
            <Header/>
            <AuthProvider>
                <Form typeOfInput={"login"} />
            </AuthProvider>
        </>
    )
}
export default Login