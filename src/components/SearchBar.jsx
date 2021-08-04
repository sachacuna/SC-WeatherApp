import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Type a city..."
        aria-label="Search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        <b>Search</b>
      </button>
    </form>
  );
}
