import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-col items-center justify-center mt-[150px]">
      <img className="flex mb-11" src="/images/err-monkey.png" />

      <p className="mb-11">Sorry, This page could not be found!</p>

      <div className="">
        <Link className="bg-[#c23737] p-2 cursor-pointer" to={"/"}>
          Go Home
        </Link>
      </div>
      {state && (
        <p className="">
          Hata kodunuz
          <span> {state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
