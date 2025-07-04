import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";
import logo from "../../assets/logo-icon.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleUserSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successfully user sign out");
      })
      .catch((error) => {
        console.log("please alone me", error);
      });
  };

  const link = [
    <>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
    </>,
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg">
          <img className="w-8" src={logo} alt="" /> JOB PORTAL
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleUserSignOut} className="mx-2 btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/Register">Register</Link>
            <Link to="/signin">
              <button className="mx-2 btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
