import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="mb-6 text-5xl font-bold">Oops!!!</h2>
      <Link to="/">
        <button className="btn btn-success text-white">Go back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
