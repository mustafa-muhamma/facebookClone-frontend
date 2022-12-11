import { useState } from "react";
import ResultBox from "./ResultBox";


const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    return (
        <div className="dropdown-input">
            <div className="search">
                <svg xmlns="http://www.w3.org/2000/svg" overflow='visible' width="26" height="40" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="searchInp"
                    onFocus={() => setShowResult(true)}
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value.toLowerCase().replace(/ /g, ''))}
                />
                <button className="clearResult" onClick={() => setSearchValue('')}>X</button>
            </div>

            {<ResultBox showResult={showResult} searchValue={searchValue} />}
        </div>

    );
}

export default Search;
