import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBooks } from "../utility/localstorage";
import BookCard from "./BookCard";

const WishlistBooks = () => {
  const books = useLoaderData();
  const [wishBooklist, setWishBooklist] = useState([]);

  useEffect(() => {
    const storedBooksIds = getStoredWishBooks();
    if (books.length > 0) {
      const wishBooks = books.filter((book) =>
        storedBooksIds.includes(book.bookId)
      );
      setWishBooklist(wishBooks);
    }
  }, []);
  return (
    <div>
      {wishBooklist.map((wishBook) => (
        <BookCard key={wishBook.bookId} book={wishBook}></BookCard>
      ))}
    </div>
  );
};

export default WishlistBooks;
