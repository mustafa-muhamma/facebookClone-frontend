import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import '../../styles/home.css';
import Post from "./posts/Post";
import GetPosts from "./posts/GetPosts";

const Home = () => {
    const { userData, token } = useContext(MainContext);
    const user = JSON.parse(userData);
    const uToken = JSON.parse(token);
    const header = { headers: { Authorization: uToken } };

    return (
        <div className="wall">
            <Post user={user} header={header} />
            <GetPosts header={header} />
        </div>
    );
}

export default Home;
