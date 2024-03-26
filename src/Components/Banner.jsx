import banner from "../../src/assets/Images/banner.svg";

const Banner = () => {
  return (
    <div className="hero rounded-2xl mt-5 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse p-20">
        <img src={banner} className="max-w-sm rounded-lg bg-base-200 " />
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
