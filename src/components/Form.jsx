import axios from "axios"
import "./Form.css"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { baseURL } from "./CreateAccount"

const Form = ({ typeOfInput }) => {

    const navigate = useNavigate()
    const [errorExists, setErrorExists] = useState(null)


    const [formData, setFormData] = useState({
        "cpf": '',
        "password": '',
        "adress": '',
        "value": '',
        "cpfToReceive": ''
    });
    const [dataMessage, setDataMessage] = useState('')

    console.log(formData)

    const returnElementByInputType = (inputType, toBeReturned) => {
        return typeOfInput === inputType && toBeReturned
    }

    const goHome = () => {
        setTimeout(() => {
            setErrorExists(null)
            navigate('/home')
        }, 3000);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const showError = (e) => {
        if(dataMessage){
            return (
                <div className='alert alert-danger text-center mb-5 w-50 '>{dataMessage}</div>
            ) 
        }

        setTimeout(() => {
            setDataMessage(null)
        }, 3000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        typeOfInput === "create" && createAccount();
        typeOfInput === "deposit" && depositAmount();
        typeOfInput === "withdraw" && withdrawAmount();
        typeOfInput === "transfer" && transferAmount();
    }

    console.log(dataMessage)
    
    const createAccount = async () => {
            try {
                const response = await axios.post(baseURL + "/account/save", formData)

                setErrorExists(false)

                goHome()
            } catch (error) {
                console.log(error.response);

                setErrorExists(true)
                setDataMessage(error.response.data.message)
            }

            

    }

    const depositAmount = async () => {
        try {
            const response = await axios.put(baseURL + "/account/make-deposit", formData)
            console.log(response.data)

            setErrorExists(false)

            goHome()
        } catch (error) {
            console.log(error);

            setErrorExists(true)

            setDataMessage(error.response.data.message)
        }
    }

    const withdrawAmount = async () => {
        try {
            const response = await axios.put(baseURL + "/account/withdraw-value", formData)
            console.log(response.data)

            setErrorExists(false)

            goHome()
        } catch (error) {
            console.log(error);

            setErrorExists(true)

            setDataMessage(error.response.data.message)
        }
    }

    const transferAmount = async () => {
        try {
            const response = await axios.put(baseURL + "/account/transfer-value", formData)
            console.log(response.data)

            setErrorExists(false)

            goHome()
        } catch (error) {
            console.log(error);

            setErrorExists(true)

            setDataMessage(error.response.data.message)
        }
    }

    return(
        <main className="row m-0 d-flex flex-column align-items-center">
            <div>

                <h1 className="text-center fw-normal mt-2">
                    {returnElementByInputType("create", "Create account")}
                    {returnElementByInputType("login", "Login")}
                    {returnElementByInputType("deposit", "Deposit")}
                    {returnElementByInputType("withdraw", "Withdraw")}
                    {returnElementByInputType("transfer", "Transfer")}
                </h1>
                
                
                <p className="text-center fw-normal mb-5 mt-4">
                    {returnElementByInputType("create", "Create your account and increase your savings.")}
                    {returnElementByInputType("login", "Sign in and increase your savings.")}
                    {returnElementByInputType("deposit", "Deposit an amount into your account.")}
                    {returnElementByInputType("withdraw", "Depositar um valor na sua conta.")}
                    {returnElementByInputType("transfer", "Transfer amount to any account.")}

                </p>
            </div>

            {showError()}

            <form className="col col-sm-8 col-md-7 col-lg-5 col-xl-4 d-flex flex-column align-items-center" >
                <div className="d-flex justify-content-center mb-3 w-100">
                    <input
                        onChange={handleChange}
                        type="number"
                        className="inputs-form form-control background-secondary border-0 px-4 py-3"
                        id="cpf"
                        name="cpf"
                        maxLength={11}
                        placeholder="CPF"
                        pattern="[0-9]*"
                        title="Apenas números são permitidos"
                        required
                    />
                </div>
                <div className="d-flex justify-content-center mb-3 w-100">
                    <input
                    onChange={handleChange}
                    placeholder="Password"
                        type="password"
                        className="inputs-form form-control background-secondary border-0 px-4 py-3"
                        id="password"
                        name="password"
                        required
                    />
                </div>

                {returnElementByInputType("create", 
                
                    <div className="d-flex justify-content-center mb-3 w-100">
                        <input
                            onChange={handleChange}
                            placeholder="Email"
                            type="email"
                            className="inputs-form form-control background-secondary border-0 px-4 py-3"
                            id="address"
                            name="adress"
                            required
                        />
                    </div>)}

                {returnElementByInputType("create", 
                <a href="/login" className="my-4 text-primary text-decoration-none">I have account</a>)}

                

                {returnElementByInputType("deposit", 
                    <div className="d-flex justify-content-center mb-3 w-100">
                        <input
                            onChange={handleChange}
                            placeholder="Value (1500,00)"
                            
                            type="text"
                            className="inputs-form form-control background-secondary border-0 px-4 py-3"
                            id="value"
                            name="value"
                            required
                        />
                    </div>
                )}

                {returnElementByInputType("withdraw", 
                    <div className="d-flex justify-content-center mb-3 w-100">
                        <input
                            onChange={handleChange}
                            placeholder="Amount (1500,00)"
                            
                            type="text"
                            className="inputs-form form-control background-secondary border-0 px-4 py-3"
                            id="value"
                            name="value"
                            required
                        />
                    </div>
                )}

                {returnElementByInputType("transfer", 
                    <div className="d-flex justify-content-center mb-3 w-100">
                        <input
                            onChange={handleChange}
                            placeholder="Amount (1500,00)"
                            
                            type="text"
                            className="inputs-form form-control background-secondary border-0 px-4 py-3"
                            id="value"
                            name="value"
                            required
                        />
                    </div>
                )}

                {returnElementByInputType("transfer", 
                    <div className="d-flex justify-content-center mb-3 w-100">
                        <input
                            onChange={handleChange}
                            placeholder="CPF to receive"
                            
                            type="text"
                            className="inputs-form form-control background-secondary border-0 px-4 py-3"
                            id="cpfToReceive"
                            name="cpfToReceive"
                            required
                        />
                    </div>
                )}


                <button onClick={handleSubmit} className="btn-form btn btn-primary w-80 p-2">
                    {returnElementByInputType("create", "Create")}
                    {returnElementByInputType("login", "Login")}
                    {returnElementByInputType("deposit", "Deposit")}
                    {returnElementByInputType("withdraw", "Withdraw")}
                    {returnElementByInputType("transfer", "Transfer")}
                </button>

            </form>

            { errorExists === false && 
            <div className="row m-0 success-page align-items-center justify-content-center w-100 d-flex flex-column">
                <h1 className="col-12 fw-normal text-center mb-5">
                    {returnElementByInputType("create", "Account created successfully!")}
                    {returnElementByInputType("login", "Login successfully!")}
                    {returnElementByInputType("deposit", "Deposit made successfully!")}
                    {returnElementByInputType("withdraw", "Withdrawal made successfully!")}
                    {returnElementByInputType("transfer", "Transfer made successfully!")}
                </h1>
                <a href="/home" className="col-7 col-sm-5 col-md-4 col-xxl-2 btn-form btn btn-primary p-2">Back</a>
            </div> }

        </main>
    )
}

export default Form