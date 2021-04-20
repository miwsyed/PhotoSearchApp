import React, { useState, useCallback, memo } from "react";
import { apiGet } from "../misc/config";
import Images from "./Images";
const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const clientID = "UeashFF84U9Xi1urb0mACBxVi_nqC_apmcsTx4dDPRw";

  const onInputChange = useCallback((event) => {
    setInput(event.target.value);
  }, []);
  const onSearch = () => {
    apiGet(
      `/search/photos?query=${input}&client_id=${clientID}`
    ).then((apiData) => setResults(apiData.results));
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.id}>
              <Images src={item.urls.small} alt={item.alt_description} />
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <h1
        style={{
          color: "blue",
          letterSpacing: "10px",
          textTransform: "uppercase",
          margin: "0 0 10px",
        }}
      >
        Search For Photos
      </h1>
      <input
        style={{
          display: "block",
          fontFamily: "Roboto, sans-serif",
          width: "200px",
          margin: "auto",
          outline: "none",
          padding: "13px 15px",
          border: "1px solid rgb(219, 219, 219)",
          boxShadow: "rgb(219 219 219 / 50%) 0px 0px 10px 0px",
          fontSize: "14px",
          borderRadius: "12px",
        }}
        onChange={onInputChange}
        type="text"
        name="photo"
        placeholder="Search for photos"
        onKeyDown={onKeyDown}
        value={input}
      ></input>
      <button
        style={{
          color: "rgb(255, 255, 255)",
          backgroundColor: "rgb(36, 0, 255)",
          margin: "10px auto",
          padding: "10px 50px",
          fontSize: "15px",
          border: "none",
          outline: "none",
          borderRadius: "12px",
        }}
        onClick={onSearch}
        type="submit"
      >
        Search
      </button>
      {renderResults()}
    </div>
  );
};

export default memo(Home);
