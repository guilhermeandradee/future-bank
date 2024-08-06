import { useEffect, useState } from "react"
import Header from "./Header"
import "./AccountAction.css"
import { useNavigate, useParams } from "react-router-dom"

import { PiHandDeposit } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
import { BiTransferAlt } from "react-icons/bi";


import axios from "axios"

export const baseURL = "http://localhost:8080"

const AccountAction = () => {

    const  { cpf }  = useParams()
    const navigate = useNavigate()
    
    const requestData = {
        "cpf": cpf
    }
    const [data, setData] = useState({})
    
    const getAccountByCpf = async () => {
        try {
            const response = await axios.post(baseURL + "/account/get-by-cpf", requestData)

            setData(response.data.data)
        } catch (error) {
            console.log(error)
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

            <main className="main m-0 d-flex flex-column align-items-center ">

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
                    <div onClick={() => goToLink("/deposit")

                    } className="col-8 col-md-2 mt-4 ">
                        <div className="background-secondary d-flex justify-content-center align-items-center flex-column p-4 account-action">
                            <p className="text-center">Depositar</p>
                            <PiHandDeposit/>
                        </div>
                    </div>
                    <div onClick={() => goToLink("/withdraw")}
                     className="col-8 col-md-2 mt-4 ">
                        <div className="background-secondary d-flex justify-content-center align-items-center flex-column p-4 account-action">
                            <p className="text-center">Sacar</p>
                            <PiHandWithdraw/>
                        </div>
                    </div>
                    <div className="col-8 col-md-2 mt-4  ">
                        <div onClick={() => goToLink("/transfer")}
                         className="background-secondary d-flex justify-content-center align-items-center flex-column p-4 account-action">
                            <p className="text-center">Transferir</p>
                            <BiTransferAlt/>
                        </div>
                    </div>
                    
                </div>
            </main>

        </>


            


                
            


    )
}
export default AccountAction