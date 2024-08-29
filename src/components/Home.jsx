import { useEffect, useState } from 'react'

import Header from './Header'
import "./Home.css"

import axios from 'axios'
import { baseURL } from './CreateAccount'
import AccountAction from './AccountAction'
import { useNavigate } from 'react-router-dom'

function Home() {

    

    const [data, setData] = useState([])
    const [showAccountActions, setShowAccountActions] = useState(false)

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await axios.get(baseURL + "/account/get-all")
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const goToAccountAction = (cpf) => {
        navigate(`/account/${cpf}`);
    }

    return (
    <div className='container-main' >


        <Header />

        <main className='container-main d-flex flex-column w-100 px-3 px-sm-5'>
            <h1 className='fw-normal fs-3 mt-5'>Accounts</h1>

            <div className='d-flex rounded-div w-100 border border-2 border-secondary p-5 flex-column mt-5'>

                {  
                    data != null && data.length > 0 && data.map(account => (
                        <div 
                        onClick={() => goToAccountAction(account.cpf)}
                        key={account.id} 
                        className='row div-account d-flex justify-content-around align-items-center background-secondary p-4 my-3 rounded-div cursor-pointer div-hover'>
                            <p className='col-12 col-md-4 text-center m-md-0 '>CPF: {account.cpf}</p>
                            <p className='col-12 col-md-4 text-center m-md-0 '>Balance: {account.balance}</p>
                            <p className='col-12 col-md-4 text-center m-md-0 '>Address: {account.adress}</p>
                        </div>
                    ))
                }
                {
                    data.length === 0 && (
                        <div className='alert alert-dark text-center m-0'>Nenhuma conta criada</div>
                    )
                }         



                {/* <div className='row d-flex justify-content-around align-items-center background-secondary p-4 mb-5 rounded-div'>
                    <p className='col-12 col-md-4 text-center m-0'>CPF: 55007238805</p>
                    <p className='col-12 col-md-4 text-center m-0'>Balance: 555125,00</p>
                    <p className='col-12 col-md-4 text-center m-0'>Address: Rua. com</p>
                </div> */}
                
            </div>

            
        
        </main>

    </div>
    )
}

export default Home
