import React from "react";

import Header from "./Header";
import Form from "./Form";

import { AuthProvider } from "../services/AuthContext";

const TransferAmount = () => {
    return(
        <>
            <Header/>
            <AuthProvider>
                <Form typeOfInput={"transfer"} />
            </AuthProvider>
        </>
    )
}
export default TransferAmount