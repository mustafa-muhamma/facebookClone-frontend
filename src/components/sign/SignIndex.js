import { useState, useContext } from "react";
import MainContext from "../../contexts/MainContext";
import '../../styles/sign.css'
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignIndex = () => {
    const [signView, setSignview] = useState(false);

    const handleView = () => setSignview(true);

    const { handleSign , isSigned } = useContext(MainContext);

    return (
        <div className="container">

            <div className="text">
                <h1>Kosom Basla</h1>
                <p className='txt'>Kosomk  Ya Basla helps you connect and share with the people in your life.</p>
                <div className="crteU">
                    <p className='newUsr'>don't have an account ? Sign up</p>
                    <button className='newBtn' onClick={() => handleView(true)} >Sign Up</button>
                </div>
            </div>
            <div className="sign">
                <SignIn handleSign={handleSign} isSigned={isSigned} />
                {signView ? <SignUp closeSignUp={setSignview} isSigned={isSigned} handleSign={handleSign} /> : null}

            </div>
        </div>

    );
}

export default SignIndex;