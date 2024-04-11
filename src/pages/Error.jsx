import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>Oops! Something went wrong.</p>
      <p>Please try again later.</p>
      <Link to={"/"}>Go Home </Link>
    </div>
  );
};

export default Error;
