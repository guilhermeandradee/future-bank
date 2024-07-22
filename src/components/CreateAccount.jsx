
import "./CreateAccount.css"

import Header from "./Header"
import Form from "./Form"

export const baseURL = "http://localhost:8080"

const CreateAccount = () => {

    return(
        <>
            <Header/>
            <Form typeOfInput={"create"}/>
        </>
    )
}
export default CreateAccount