import { useState } from "react";
import { useContext } from "react";
import MainContext from "../../../contexts/MainContext";
import ResultBox from "./ResultBox";


const Search = () => {
    const { setPostView } = useContext(MainContext);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    return (
        <div className="dropdown-result">
            <input
                onClick={() => setPostView(false)}
                type="text"
                placeholder="Search"
                className="searchInp"
                onFocus={() => setShowResult(true)}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value.toLowerCase().replace(/ /g, ''))}
            />
            <button className="clearResult" onClick={() => setSearchValue('')}>X</button>

            {<ResultBox showResult={showResult} searchValue={searchValue} />}
        </div>

    );
}

export default Search;
