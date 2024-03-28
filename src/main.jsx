import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import ListedBooks from "./Components/ListedBooks";
import PagesToRead from "./Components/PagesToRead";
import BooksDetails from "./Components/BookDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReadBooks from "./Components/ReadBooks";
import WishlistBooks from "./Components/WishlistBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("/Books.json"),
          },
          {
            path: "wishlist",
            element: <WishlistBooks></WishlistBooks>,
            loader: () => fetch("/Books.json"),
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:id",
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch("/Books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
