import { useState } from "react";
import { createContext } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
    const [userData] = useState('');
    const [sign] = useState();
    const [token] = useState();



    return (
        <MainContext.Provider value={{ userData, sign, token }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContext;