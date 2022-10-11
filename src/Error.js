import { useContext } from "react";
import MainContext from "./contexts/MainContext";


const Error = () => {
    const { err } = useContext(MainContext)
    return (
        <div>
            <p className="errorMsg">{err}</p>
        </div>
      );
}
 
export default Error;
