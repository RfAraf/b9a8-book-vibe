import { NavLink, Outlet } from "react-router-dom";

const ListedBooks = () => {
  return (
    <div>
      <div className="mb-10 h-24 bg-slate-100 rounded-2xl flex justify-center items-center">
        <h1 className="font-bold text-3xl">Books</h1>
      </div>
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
