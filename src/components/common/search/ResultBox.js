import { useContext, useEffect } from "react";
import axios from "axios";
import { search } from "../../../API/APIs";
import MainContext from "../../../contexts/MainContext";
import { useState } from "react";
import UsersCard from "./UsersCard";

const UserCard = ({ showResult, searchValue }) => {
    const { token } = useContext(MainContext);
    const uToken = JSON.parse(token);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {

            if (!searchValue) return;

            const header = { headers: { Authorization: uToken } };
            axios.get(search + searchValue, header)
                .then((res) => {
                    if (res.data.users.length < 1) setResults('NOT FOUND');
                    setResults(res.data.users);
                });
        }, 500);
        return () => clearTimeout(timer);
    }, [searchValue, uToken]);

    return (
        <div className="dropdown-search">
            {searchValue && results.map((result) => (
                <UsersCard result={result} showResult={showResult} />
            ))}
        </div>
    );
}

export default UserCard;
