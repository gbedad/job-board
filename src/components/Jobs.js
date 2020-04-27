import React from "react";

const Jobs = (props) => {
  console.log(props);

  return (
    <div className={props.className}>
      <h4> {props.title} </h4> {}{" "}
      <p>
        {" "}
        {props.contractType}
        {" - "}
        {props.country}
        {" - "}
        {props.city}{" "}
      </p>
    </div>
  );
};

export default Jobs;
