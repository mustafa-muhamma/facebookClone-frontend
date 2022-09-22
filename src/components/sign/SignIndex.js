import { useState } from "react";
import '../../styles/sign.css'
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const SignIndex = () => {
    const [signView, setSignview] = useState(false);

    const handleView = () => setSignview(true)

    return (
        <div className="container">

            <div className="text">
                <h1>Facebook</h1>
                <p className='txt'>Facebook helps you connect and share with the people in your life.</p>
                <div className="crteU">
                    <p className='newUsr'>don't have an account ? Sign up</p>
                    <button className='newBtn' onClick={() => handleView(true)} >Sign Up</button>
                    {signView ? <SignUp  closeSignUp={setSignview}/> : null}
                </div>
            </div>
            <div className="sign">
                <SignIn />
            </div>
        </div>

    );
}

export default SignIndex;