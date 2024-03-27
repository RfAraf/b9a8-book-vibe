import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <h1>Read books are here</h1>
    </div>
  );
};

export default ReadBooks;
