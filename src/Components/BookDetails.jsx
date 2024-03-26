import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === parseInt(id));
  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = () => {
    toast("Book Read");
  };

  const handleWishlist = () => {
    toast.success("Added to the wishlist successfully");
  };

  return (
    <div className="hero mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        <img src={image} className="bg-[#1313130D] w-full p-20 rounded-lg " />
        <div className="space-y-4 ">
          <h1 className="card-title font-bold text-5xl">{bookName}</h1>
          <h3 className="font-semibold text-xl">By: {author}</h3>
          <hr />
          <h3 className="font-semibold text-xl">{category}</h3>
          <hr />
          <p className="">
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="flex pt-6">
            <h3 className="font-bold">Tags:</h3>
            <ul className="flex gap-3 mx-5 *:text-[#23BE0A] *:bg-[#23BE0A0D] *:px-4 *:rounded-full *:font-semibold ">
              {tags.map((tag, idx) => (
                <li key={idx}>{tag}</li>
              ))}
            </ul>
          </div>
          <hr />
          {/* table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-96 ">
              <tbody>
                <tr>
                  <td className="text-[#131313B3]">Number of Pages:</td>
                  <td className="font-bold">{totalPages}</td>
                </tr>
                <tr>
                  <td className="text-[#131313B3]">Publisher:</td>
                  <td className="font-bold">{publisher}</td>
                </tr>
                <tr>
                  <td className="text-[#131313B3]">Year of Publishing:</td>
                  <td className="font-bold">{yearOfPublishing}</td>
                </tr>
                <tr>
                  <td className="text-[#131313B3]">Rating:</td>
                  <td className="font-bold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-x-4 pt-5">
            <button
              onClick={handleRead}
              className="btn w-20 bg-white border border-[#50B1C9] text-black font-bold"
            >
              Read
            </button>
            <button
              onClick={handleWishlist}
              className="btn w-20 bg-[#50B1C9] text-white font-bold"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
