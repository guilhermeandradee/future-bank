import React from "react";

import Header from "./Header";
import Form from "./Form";

const TransferAmount = () => {
    return(
        <>
            <Header/>
            <Form typeOfInput={"transfer"} />
        </>
    )
}
export default TransferAmount