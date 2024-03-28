/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";

const BookCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className=" mb-6 border rounded-2xl">
        <div className="p-4 gap-6 flex flex-col justify-start lg:flex-row">
          <figure className="bg-gray-100 w-52 rounded-2xl">
            <img src={image} className="py-5 mx-auto" alt="book" />
          </figure>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <h3 className="font-medium">By: {author}</h3>
            <div className="flex ">
              <h3 className="font-bold">Tags:</h3>
              <ul className="flex gap-3 mx-5 *:text-[#23BE0A] *:bg-[#23BE0A0D] *:px-4 *:rounded-full *:font-semibold ">
                {tags.map((tag, idx) => (
                  <li key={idx}>{tag}</li>
                ))}
              </ul>
              <p className="flex justify-center items-center gap-3">
                <IoLocationOutline /> Year of Publishing: {yearOfPublishing}
              </p>
            </div>
            <div className="flex  gap-4">
              <p className="flex justify-center items-center gap-3">
                <BsPeople /> Publisher: {publisher}
              </p>
              <p className="flex justify-center items-center gap-3">
                <FaRegFileAlt /> Page: {totalPages}
              </p>
            </div>
            <hr />
            <div className="flex gap-4">
              <div className="py-1 px-5 rounded-full bg-[#328EFF26] w-max">
                <h3 className="text-[#328EFF]">Category: {category}</h3>
              </div>
              <div className="py-1 px-5 rounded-full bg-[#FFAC3326] w-max">
                <h3 className="text-[#FFAC33]">Rating: {rating}</h3>
              </div>
              <button className="py-1 px-5 rounded-full text-white bg-[#23BE0A]">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
