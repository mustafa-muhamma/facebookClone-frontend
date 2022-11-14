import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import '../../styles/home.css';
import Post from "../common/Post";
const Home = () => {
    const { userData,postView,setPostView } = useContext(MainContext);
    const user = JSON.parse(userData);

    const handleView = () => setPostView(true);

    return (
        <div className="home">
            <div className="wall">
                {!postView ? <input className="postt" type="text" placeholder={`Whats On Your Mind , ${user.firstName}`} onClick={handleView} /> : null}
                {postView ? <Post user={user} setPostView={setPostView} postView={postView}/> : null}
                <div className="feeds"></div>
            </div>
        </div>
    );
}

export default Home;
