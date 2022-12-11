import { useContext } from "react";
import '../../styles/navbar.css';
import { Link } from "react-router-dom";
import MainContext from "../../contexts/MainContext";
import Search from "./search/Search"

const Navbar = () => {
    const { signOut, userData } = useContext(MainContext);
    const user = JSON.parse(userData);
    const avatar = user.avatar;

    return (
        <div className="nav">
            <Link to={'/'} className="logo">
                <h1 className="homeLogo">Facebook</h1>
            </Link>
            <div className="icons">
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>
                </Link>

                <Link to={`/profile/${user._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" cursor='pointer' width="36" height="36" fill="currentColor" className="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                </svg>


            </div>

            <Search />
            <div className="userInf">
                <img alt="" className="avatar" src={avatar} />
                <Link className="option" to={`/profile/${user._id}`}>
                    {`${user.firstName} ${user.lastName}`}
                </Link>

            </div>

            <Link className="logout" to={'/'} onClick={signOut}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="logout-logo" viewBox="0 0 16 16">
                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                </svg>
                <p className="option">Log Out</p>
            </Link>
        </div>
    );
}

export default Navbar;
