const Posts = ({ postImg, type }) => {
  return (
    <div className="drop-shadow-xl shadow-black">
      <div className="w-[392px] h-[476px] flex flex-col border border-solid rounded-xl border-gray-400 justify-evenly items-center hover:bg-gray-100">
        <img src={postImg} alt="" className="w-[360px] h-[240px] rounded-xl" />
        <div>{type}</div>
        <h1 className="text-2xl text-center">
          <strong>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </strong>
        </h1>
        <p className="text-sm text-gray-400">August 20, 2022</p>
      </div>
    </div>
  );
};

export default Posts;
