import React, { useState } from "react";

// this is not in use right now it is made for the search functionality in our app 

const Search = ({}) => {
  return (
    <>
      <div>Search</div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter here"
          //  value="Type"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
