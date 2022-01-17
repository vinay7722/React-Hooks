import React from "react";
import "./index.css";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/400x400/?${props.name}`;

  return (
    <>
      <div>
        <img src={img} alt="Image" />
      </div>
    </>
  );
};

export default Sresult;
