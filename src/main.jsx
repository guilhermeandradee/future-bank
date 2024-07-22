import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from './components/CreateAccount.jsx';
import MainRoutes from './Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>,
)
