import { useContext } from "react";
import '../../styles/navbar.css';
import { Link } from "react-router-dom";
import MainContext from "../../contexts/MainContext";
import Search from "./search/Search"

const Navbar = () => {
    const { signOut, userData, setPostView } = useContext(MainContext);
    const user = JSON.parse(userData);
    const avatar = user.avatar;

    return (
        <div className="nav">
            <h1 onClick={() => setPostView(false)}><Link to={'/'}>Facebook</Link></h1>
            <Search />
            <div className="userInf">
                <img alt="" src={avatar} />
                <Link
                    className="option"
                    onClick={() => setPostView(false)}
                    to={`/profile/${user._id}`}
                >
                    {`${user.firstName} ${user.lastName}`}
                </Link>

            </div>

            <div className="dropdown-conten">
                <Link className="option" onClick={signOut} to={'/'}>Log Out</Link>
            </div>
        </div>
    );
}

export default Navbar;
