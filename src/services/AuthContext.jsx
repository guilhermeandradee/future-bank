import { useState, createContext, useEffect } from "react"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => (
        localStorage.getItem('token')
    ))

    const login = (newToken) => {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        
        if(!token){
            logout()
        }

    }, [token])

    return(
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
