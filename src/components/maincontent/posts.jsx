import React from "react";
import { useEffect, useState } from "react";


const Posts = ({ postImg, type }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const getArticleData = async () => {
    const response = await fetch(`https://dev.to/api/articles?page=${page}&per_page=20`);
    const data = await response.json();

    setArticles(prevArticles => {
      console.log("prevArticles", prevArticles)
      const newArticles = data.filter(article => !prevArticles.some(prevArticle => prevArticle.id === article.id));
      return [...prevArticles, ...newArticles];
    });
  };

  useEffect(() => {
    getArticleData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }
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
