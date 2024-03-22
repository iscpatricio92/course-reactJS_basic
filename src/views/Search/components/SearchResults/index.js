import  React from "react";
import SearchResultsItem from "./SearchResultsItem";
import './style.css'
export default function SearchResults({ results, isSearching }) {
  return (
    <div className="search-results-items">
      {!results.length && isSearching && <p>No results</p>}
      {results?.map((value) => (
        <SearchResultsItem key={value.id} {...value} />
      ))}
    </div>
  );
}
