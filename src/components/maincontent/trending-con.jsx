const Trending = ({ newsImg }) => {
  return (
    <section className="flex ">
      <div className="relative w-[290px] h-[320px] border-none rounded-xl flex drop-shadow-xl shadow-black">
        <img
          src={newsImg}
          alt=""
          className="trendImg border-none rounded-xl "
        />
        <div className="absolute top-44 left-5 flex flex-col gap-5">
          <button className="w-24 h-7 bg-blue-600 rounded-md text-white">
            Technology
          </button>
          <h2 className="text-xl text-white">
            <strong>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </strong>
          </h2>
        </div>
      </div>
    </section>
  );
};
export default Trending;
