import { useContext, useEffect } from "react";
import '../../styles/navbar.css';
import { Link } from "react-router-dom";
import MainContext from "../../contexts/MainContext";
import axios from "axios";
import { useState } from "react";
import { search } from "../../API/APIs";

const Navbar = () => {
    const { signOut, userData, setPostView, token } = useContext(MainContext);
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const user = JSON.parse(userData);
    const uToken = JSON.parse(token);
    const avatar = user.avatar;

    useEffect(() => {
        const timer = setTimeout(() => {

            if (!searchValue) return;

            const header = { headers: { Authorization: uToken } };
            axios.get(search + searchValue, header)
                .then((res) => {
                    if (res.data.users.length < 1) setResults('NOT FOUND');
                    setResults(res.data.users);
                });

        }, 1000);
        return () => clearTimeout(timer)
    }, [searchValue, uToken])

    return (
        <div className="nav">
            <h1 onClick={() => setPostView(false)}><Link to={'/'}>Facebook</Link></h1>
            <div className="dropdown" onBlur={() => setShowResult(false)}
                onFocus={() => setShowResult(true)}>
                <input
                    onClick={() => setPostView(false)}
                    type="text" placeholder="Search"
                    className="searchInp"

                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value.toLowerCase().replace(/ /g, ''))}
                />
                <div className={showResult ? "dropdown-search" : "dropdown-hide"}>
                    {searchValue && results.map((result) => (
                        <div key={result._id}>
                            <Link to={`/profile/${result._id}`} className="user-card">
                                <img src={result.avatar} alt="" />
                                <div className="info">
                                    <span> {`${result.firstName} ${result.lastName}`}</span>
                                    <p>{'@' + result.username}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dropdown">
                <img alt="" src={avatar} />
                <div className="dropdown-content">
                    <Link onClick={() => setPostView(false)} to={`/profile/${user._id}`}>My Profile ..</Link>
                    <Link onClick={signOut} to={'/'}>Log Out</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
