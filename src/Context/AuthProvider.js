import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth, isAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth, isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;