
import "./CreateAccount.css"

import Header from "./Header"
import Form from "./Form"

export const baseURL = "https://future-bank-api.onrender.com"

const CreateAccount = () => {

    return(
        <>
            <Header/>
            <Form typeOfInput={"create"}/>
        </>
    )
}
export default CreateAccount