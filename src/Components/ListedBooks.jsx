import { useState } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(false);
  return (
    <div>
      <div className="mb-10 h-24 bg-slate-100 rounded-2xl flex justify-center items-center">
        <h1 className="font-bold text-3xl">Books</h1>
      </div>
      {/* tab */}
      {/* <div className="flex items-center -mx-4 overflow-x-auto  overflow-y-hidden sm:justify-start bg-white rounded-2xl flex-nowrap  dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(false)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            setTabIndex === false ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(true)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            setTabIndex === true ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div> */}
      <div role="tablist" className="tabs tabs-lifted w-max mb-10">
        <NavLink
          to=""
          role="tab"
          className={`tab font-bold ${({ isActive }) =>
            isActive && "bg-blue-400"}`}
        >
          Read Books
        </NavLink>
        <NavLink
          to={`wishlist`}
          role="tab"
          className={`tab font-bold ${({ isActive }) =>
            isActive && "bg-blue-400"}`}
        >
          Wishlist Books
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
