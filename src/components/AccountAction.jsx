import { useEffect, useState } from "react"
import Header from "./Header"
import "./AccountAction.css"
import { useNavigate, useParams } from "react-router-dom"

import { useContext } from "react"
import { AuthContext } from "../services/AuthContext";

import { PiHandDeposit } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
import { BiTransferAlt } from "react-icons/bi";


import axios from "axios"
import { baseURL } from "./CreateAccount";


const AccountAction = () => {

    const [errorMessage, setErrorMessage] = useState(null)
 
    const { token, login, logout } = useContext(AuthContext);

    const  { cpf }  = useParams()
    const navigate = useNavigate()
    
    const requestData = {
        "cpf": cpf,
        "token": token
    }
    const [data, setData] = useState({})
    
    const getAccountByCpf = async () => {
        try {
            const response = await axios.post(baseURL + "/account/get-by-cpf", requestData)

            setData(response.data.data)
        } catch (error) {
            console.log(error)

            setErrorMessage(error.response.data.message)
        }
    }

    console.log(data)

    useEffect(() => {
        
            getAccountByCpf(requestData);
        }, []);

        const goToLink = (url) => {
            navigate(url)
        }


    return(
        <>
            <Header />
            {cpf === null || cpf === undefined || cpf === "" && (
                <div className="alert">Nenhuma conta selecionada</div>)
            }

            { errorMessage ? 
                <div className="row m-0 success-page align-items-center justify-content-center w-100 d-flex flex-column">
                <h1 className="text-light col-12 fw-normal text-center mb-5">
                    {errorMessage}
                </h1>
                <a href="/home" className="col-7 col-sm-5 col-md-4 col-xxl-2 btn-form btn btn-primary p-2">Back</a>
            </div> 


                    /*  Sucesso   */
                : 

                    <main className="main m-0 d-flex flex-column align-items-center ">

                    { errorMessage ? (
                    <div className=' text-center mb-5 w-50 '>
                        <h1>{errorMessage}</h1>
                    </div>) : null}
    
                    <div className="row w-100 mt-5">
                        <div className="col-12 col-md">
                            <p className="text-center m-0 mt-4">CPF: {data != null && data.cpf}</p>
                        </div>
                        <div className="col-12 col-md">
                            <p className="text-center m-0 mt-4">Balance: {data != null && data.balance}</p>
                        </div>
                        <div className="col-12 col-md">
                            <p className="text-center m-0 mt-4">Address: {data != null && data.adress}</p>
                        </div>
                    </div>
    
                    <div className="row w-100 my-5 d-flex justify-content-around">
                        <div onClick={() => goToLink(`/deposit/${cpf}`)
    
                        } className="col-8 col-md-2 mt-4 ">
                            <div className="background-secondary rounded d-flex justify-content-center align-items-center flex-column p-4 account-action">
                                <p className="text-center">Depositar</p>
                                <PiHandDeposit/>
                            </div>
                        </div>
                        <div onClick={() => goToLink(`/withdraw/${cpf}`)}
                         className="col-8 col-md-2 mt-4 ">
                            <div className="background-secondary rounded d-flex justify-content-center align-items-center flex-column p-4 account-action">
                                <p className="text-center">Sacar</p>
                                <PiHandWithdraw/>
                            </div>
                        </div>
                        <div className="col-8 col-md-2 mt-4  ">
                            <div onClick={() => goToLink(`/transfer/${cpf}`)}
                             className="background-secondary rounded d-flex justify-content-center align-items-center flex-column p-4 account-action">
                                <p className="text-center">Transferir</p>
                                <BiTransferAlt/>
                            </div>
                        </div>
                        
                    </div>
                </main>
                }

            

        </>


            


                
            


    )
}
export default AccountAction