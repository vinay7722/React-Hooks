import React, { useState } from "react";
import "./index.css";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(event.target.value);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Anything"
          value={img}
          onChange={inputEvent}
        />
        { img === "" ? null : <Sresult name={img}/>}
      </div>
    </>
  );
};

export default Search;
