import { useEffect } from "react";
import axios from "axios";
import { search } from "../../../APIs/APIs";
import { useState } from "react";
import UsersCard from "./UsersCard";

const UserCard = ({ showResult, searchValue }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {

            if (!searchValue) return;

            axios.get(search + searchValue)
                .then((res) => {
                    if (res.data.users.length < 1) setResults('NOT FOUND');
                    setResults(res.data.users);
                });
        }, 500);
        return () => clearTimeout(timer);
    }, [searchValue]);

    return (
        <div className={searchValue ? 'dropdown-search' : null}>
            {searchValue && results.map((result) => (
                <UsersCard key={result._id} result={result} showResult={showResult} />
            ))}
        </div>
    );
}

export default UserCard;
