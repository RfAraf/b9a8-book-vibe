import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && "bg-none  border border-[#23BE0A] text-[#23BE0A]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && "bg-none  border border-[#23BE0A] text-[#23BE0A]"
          }
          to="/listed-books"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive && "bg-none  border border-[#23BE0A] text-[#23BE0A]"
          }
          to="/pages-to-read"
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3 ">
        <a className="btn text-white font-semibold bg-[#59C6D2]">Sign Up</a>
        <a className="btn text-white font-semibold bg-[#23BE0A]">Sign In</a>
      </div>
    </div>
  );
};

export default Nav;
