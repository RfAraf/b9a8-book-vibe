import { toast } from "react-toastify";

const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBooks = (id) => {
  const storedBooks = getStoredBooks();
  const exists = storedBooks.find((idOfBook) => idOfBook === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("books", JSON.stringify(storedBooks));
    toast("Yey! Finally. You've read this book successfully.");
  } else {
    return toast.error("You already read this book.");
  }
};

// ===================

const getStoredWishBooks = () => {
  const storedWishBooks = localStorage.getItem("wish-books");
  if (storedWishBooks) {
    return JSON.parse(storedWishBooks);
  }
  return [];
};

const saveWishBooks = (id) => {
  const storedWishBooks = getStoredWishBooks();
  const exists = storedWishBooks.find((idOfBook) => idOfBook === id);
  if (!exists) {
    storedWishBooks.push(id);
    localStorage.setItem("wish-books", JSON.stringify(storedWishBooks));
    toast.success("Added your favorite book to the wishlist successfully");
  } else {
    return toast.error("Already added");
  }
};

export { getStoredBooks, saveBooks, getStoredWishBooks, saveWishBooks };
