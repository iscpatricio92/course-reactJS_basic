import  React, {useState} from "react";
import "./style.css";
export default function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchText, setsearchText] = useState("");
  const handleSearchClick = () => {
    setsearchText("");
    onClose();
  };
  return (
    <div className="search-box">
      <h2 className="search-box-title">Personal Search</h2>
      <div className="search-box-buttons">
        <label>
          <input
            name="searchText"
            value={searchText}
            className="search-box-input"
            onChange={({ target: { value } }) => setsearchText(value)}
          />
        </label>
        <button
          onClick={() => onSearch(searchText)}
          disabled={!searchText.length}
        >
          Search
        </button>
        {isSearching && (
          <button onClick={handleSearchClick} disabled={!searchText.length}>
            Close
          </button>
        )}
      </div>
    </div>
  );
}
