
import "./CreateAccount.css"

import Header from "./Header"
import Form from "./Form"
import { useEffect } from "react"

import { AuthProvider } from "../services/AuthContext"

// export const baseURL = "https://future-bank-api.onrender.com"
export const baseURL = "http://localhost:8080"

const CreateAccount = () => {

    return(
        <>
            <Header/>
            <AuthProvider>
                <Form typeOfInput={"create"}/>
            </AuthProvider>
            
        </>
    )
}
export default CreateAccount