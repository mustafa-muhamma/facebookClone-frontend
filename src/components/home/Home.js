import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import '../../styles/home.css';
import Post from "./posts/Post";
import GetPosts from "./posts/GetPosts";

const Home = () => {
    const { userData } = useContext(MainContext);
    const user = JSON.parse(userData);

    return (
        <div className="wall">
            <div className="createPost">
                <Post user={user} />
            </div>
            <GetPosts user={user} />
        </div>
    );
}

export default Home;
