import mainLogo from "../../assets/app-logo.jpg";
import { useState } from "react";
import * as ReactRouterDOM from "react-router-dom";
import useOnline from "../utils/useOnline";

// const loggedInUser = () => {
//   // API call to check authentication
//   return false;
// };
console.log(ReactRouterDOM);
const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={mainLogo} />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  if (isOnline === false)
    return (
      <h1>Looks like you are offline, please check your internet connetion</h1>
    );

  return (
    <div className="flex justify-between place-items-center bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <ReactRouterDOM.Link to="/">Home</ReactRouterDOM.Link>
          </li>
          <ReactRouterDOM.Link to="/about">
            <li className="px-2">About</li>
          </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/contact">
            <li className="px-2">Contact</li>
          </ReactRouterDOM.Link>
          <li className="px-2">Cart</li>
          <ReactRouterDOM.Link to="/instamart">
            <li className="px-2">Instamart</li>
          </ReactRouterDOM.Link>
        </ul>
      </div>
      <h4>User Status:{isOnline ? "✅" : "🔴"}</h4>

      {isLoggedIn ? (
        <button className="mr-10" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="mr-10" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
