import { Link } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar">
          {/* Left: Logo */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                <li> <MyLink to={"/"}>Home</MyLink></li>
                <li> <MyLink to={"/aboutUs"}>About Us</MyLink></li>
                <li><MyLink to={"/course"}>Courses</MyLink></li>
                <li><MyLink to={"/profile"}>My profile</MyLink></li>
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://i.postimg.cc/brdj2pSr/logo.jpg"
                alt="Logo"
                className="h-16 w-15 "
              />
              <div className="leading-tight">
                <h1 className="text-xl font-extrabold text-green-700">
                  Learn <span className="text-gray-900">AL-QURAN</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Center: NavLinks */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/aboutUs"}>About Us</MyLink>
              </li>
              <li>
                <MyLink to={"/course"}>Courses</MyLink>
              </li>
              <li>
                <MyLink to={"/profile"}>My profile</MyLink>
              </li>
            </ul>
          </div>

          {/* Right: Buttons */}
          <div className="navbar-end gap-2">
            <Link
              to="/login"
              className="btn btn-sm border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm bg-green-700 text-white hover:bg-green-800"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
