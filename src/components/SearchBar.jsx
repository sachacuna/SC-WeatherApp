import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      class="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Type a city..."
        aria-label="Search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button class="btn btn-outline-success" type="submit">
        <b>Search</b>
      </button>
    </form>
  );
}
