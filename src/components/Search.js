import React from "react";

const Search = ({ getQuery, query }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={query} onChange={getQuery} />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
