import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import '../../styles/home.css';
import Post from "./posts/Post";
import GetPosts from "./posts/GetPosts";

const Home = () => {
    const { userData, postView, setPostView, token } = useContext(MainContext);
    const user = JSON.parse(userData);
    const uToken = JSON.parse(token);
    const header = { headers: { Authorization: uToken } };
    const handleView = () => setPostView(true);

    return (
        <div className="wall">
            {!postView ? <input className="postt" type="text" placeholder={`Whats On Your Mind , ${user.firstName}`} onClick={handleView} /> : null}
            {postView && <Post user={user} setPostView={setPostView} postView={postView} header={header} /> }
            <GetPosts header={header} />
        </div>
    );
}

export default Home;
