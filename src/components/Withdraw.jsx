import Form from "./Form"
import Header from "./Header"

import { AuthProvider } from "../services/AuthContext"

const WithDraw = () => {
    return(
        <>
            <Header/>
            <AuthProvider>
                <Form typeOfInput={"withdraw"} />
            </AuthProvider>
        </>
    )
}

export default WithDraw