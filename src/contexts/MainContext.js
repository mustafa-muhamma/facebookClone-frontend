import { useState, createContext } from "react";
import Cookies from "js-cookie";

const MainContext = createContext();

export function MainProvider({ children }) {
    const [userData, setUserData] = useState(Cookies.get('userInf') || null);
    const [isSigned, setIsSigned] = useState(!!Cookies.get("userToken"));
    const [token, setToken] = useState(Cookies.get('userToken') || null);

    const handleSign = (data) => {
        setIsSigned(true);
        Cookies.set('userInf', JSON.stringify(data.user));
        setUserData(Cookies.get('userInf'));
        Cookies.set('userToken', JSON.stringify(data.access_token))
        setToken(Cookies.get('userToken'))
    }
    const signOut = () => { 
        setIsSigned(false);
        Cookies.remove('userInf');
        Cookies.remove('userToken');
    }


    return (
        <MainContext.Provider value={{ isSigned, token, userData, handleSign ,signOut,setIsSigned }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContext;