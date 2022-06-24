import React, { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <section className="search">
      <h1>
        Awesome Exercises You <br /> Should Know
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search exercises"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <button>Search</button>
      </div>
    </section>
  );
}

export default Search;
