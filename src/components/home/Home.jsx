import { useContext } from "react";
import MainContext from "../../contexts/MainContext";

const Home = () => {
    const { signOut, userData } = useContext(MainContext)

    const user = JSON.parse(userData)

    return (
        <div>
            <h1>hello {user.firstName}  </h1>
            <button onClick={signOut}>log outt</button>
        </div>
    );
}

export default Home;
