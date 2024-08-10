
import Articles from "@/components/maincontent/articles";
import { useEffect, useState } from "react";

export default function Bloghome() {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticles(data);
    console.log("DOWNLOADED DATA");
  };

  useEffect(() => {
    console.log("EFFECT");
    getArticleData();
  }, []);
  return (
    <main>
      {" "}
      <h1 className="ml-[270px] mt-10 text-2xl">
        <strong>All Blog Posts</strong>
      </h1>
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-4">
        {articles.map((article) => (
          <Articles article={article} />
        ))}
      </div>
      <div className="w-[1216px] h-[40px] m-auto flex justify-center my-10">
        {" "}
        <button
          onClick={() => setCount(count + 1)}
          className="w-[130px] h-[50px] border border-solid border-gray-300 rounded-md text-sm hover:border-green-500"
        >
          Load More
        </button>
      </div>
   
    </main>
  );
}
