
const SignIn = ({ setSign }) => {




    return (
        <div className="signin-form">
            <form className="signIn">
                <input type="text" placeholder="Email adress or phone number" required />
                <input type="password" placeholder="Password" required />
                <button>Log In</button>
            </form>

            <button className="newBtn" onClick={() => setSign(true)}> Create New Acount </button>
        </div>
    );
}

export default SignIn;