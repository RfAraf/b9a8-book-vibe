import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../utility/localstorage";
import BookCard from "./BookCard";

const ReadBooks = () => {
  const books = useLoaderData();
  const [readBooklist, setReadBooklist] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    if (books.length > 0) {
      const readBooks = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setReadBooklist(readBooks);
    }
  }, []);

  return (
    <div>
      {readBooklist.map((readBook) => (
        <BookCard key={readBook.bookId} book={readBook}></BookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
