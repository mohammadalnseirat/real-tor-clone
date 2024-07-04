import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // declare the location component:
  const location = useLocation();
  // function to match the location with path:
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="bg-white border-b shadow-md sticky top-0 z-50">
      <header className="px-3 flex items-center justify-between max-w-6xl mx-auto">
        <Link to={"/"}>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </Link>
        <div>
          <ul className="flex space-x-10 items-center">
            <Link
              to={"/"}
              className={`py-3 text-md font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-600"
              }`}
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/offers"}
              className={`py-3 text-md font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-600"
              }`}
            >
              <li>Offers</li>
            </Link>
            <Link
              to={"/sign-in"}
              className={`py-3 text-md font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-600"
              }`}
            >
              <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
