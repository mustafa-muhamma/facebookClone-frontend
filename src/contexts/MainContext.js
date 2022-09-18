import { useState } from "react";
import { createContext } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
    const [userData, setUserData] = useState('');
    const [sign, setSign] = useState();
    const [token,setToken] = useState();



    return (
        <MainContext.Provider value={{ userData, sign, token }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContext;