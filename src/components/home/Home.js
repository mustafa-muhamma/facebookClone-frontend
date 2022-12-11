import { useContext,useState } from "react";
import MainContext from "../../contexts/MainContext";
import '../../styles/home.css';
import Post from "./posts/Post";
import GetPosts from "./posts/GetPosts";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { userData } = useContext(MainContext);
    const user = JSON.parse(userData);

    return (
        <div className="wall">
            <Post user={user} setPosts={setPosts} />
            <GetPosts  user={user} posts={posts} setPosts={setPosts}/>
        </div>
    );
}

export default Home;
