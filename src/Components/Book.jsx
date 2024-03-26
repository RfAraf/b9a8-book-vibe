/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card card-compact bg-base-100 shadow-xl border ">
        <figure className="bg-gray-100 m-5 rounded-2xl">
          <img src={image} className="py-5 " alt="book" />
        </figure>
        <ul className="flex gap-3 mx-5 *:text-[#23BE0A] *:bg-[#23BE0A0D] *:px-4 *:rounded-full *:font-semibold ">
          {tags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
        <div className="p-5 space-y-3">
          <h2 className="card-title font-bold text-2xl">{bookName}</h2>
          <h2 className="font-semibold">By: {author}</h2>
          <hr className="border-dashed border-b-2" />
          <div className="flex justify-between font-semibold">
            <h1>{category}</h1>
            <h1 className="flex gap-2 justify-center items-center">
              {rating} <AiOutlineStar />
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
