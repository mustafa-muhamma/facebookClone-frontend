import { useState } from "react";
import '../styles/sign.css'
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const Index = () => {
    const [sign, setSign] = useState(false);


    return (
        <div className="container">

            <div className="text">
                <h1>Facebook</h1>
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="sign">
                <SignIn setSign={setSign} />
                {sign && <SignUp setSign={setSign} />}
            </div>



        </div>
    );
}

export default Index;