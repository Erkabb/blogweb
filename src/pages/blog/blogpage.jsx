import React from "react";

const Blogpage = ({ imgpost, pfp, name }) => {
  return (
    <div className="drop-shadow-xl shadow-black mb-10">
      <div className="w-[392px] h-[476px] flex flex-col border border-solid rounded-xl border-gray-400 justify-evenly items-center  ">
        <img src={imgpost} alt="" className="w-[360px] h-[240px] rounded-xl" />
        {/* <div>{type}</div> */}
        <h1 className="text-2xl text-center">
          <strong>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </strong>
        </h1>
        <p className="text-sm text-gray-400">August 20, 2022</p>
        <div className="w-[303px] h-[36px] flex">
          <img src={pfp} alt="" className="w-[36px] h-[36px] rounded-full" />
          <p className="text=[16px] text-gray-400">{name}</p>
          <p className="text=[16px] text-gray-400">August 20, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
