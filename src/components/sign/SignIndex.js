import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../contexts/MainContext";
import '../../styles/sign.css'
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignIndex = () => {
    const [signView, setSignview] = useState(false);

    const handleView = () => {
        setSignview(true)
        setErr(null)
    }

    const { handleSign, setErr } = useContext(MainContext);

    return (
        <div className="container">

            <div className="text">
                <h1>Facebook</h1>
                <p className='txt'>Facebook helps you connect and share with the people in your life.</p>
                <div className="crteU">
                    <p className='newUsr'>don't have an account ? {!signView ? <Link className="link" to={'/'} onClick={() => handleView(true)}>SignUp</Link>:<span className="span">SignUp</span>}</p>
                    <button className='newBtn'  disabled={signView ?true : false} onClick={() => handleView(true)} >Sign Up</button>
                </div>
            </div>
            <div className="sign">
                <SignIn handleSign={handleSign} signView={signView}  />
                {signView ? <SignUp closeSignUp={setSignview} handleSign={handleSign} /> : null}

            </div>
        </div>

    );
}

export default SignIndex;