import React from "react";
import { Link } from "react-router-dom";

export const GlobalErrorPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">
        Oops... This page doesn't exist. Return{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          home
        </Link>
      </h1>
    </>
  );
};
