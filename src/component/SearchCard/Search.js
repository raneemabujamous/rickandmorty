import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

export default function Search({ setResultSearch, setPageNum, search }) {
  const [query, setQuery] = useState("");
  let searchBtn = (e) => {
    e.preventDefault();
    setResultSearch(query);
  };

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          e.preventDefault();
          setQuery(e.target.value);
          setPageNum(1);
        }}
        placeholder="Search for characters"
        className={styles.input}
        value={query}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
}
