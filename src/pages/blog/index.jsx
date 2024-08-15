import Loader from "@/components/loader/loader";
import Articles from "@/components/maincontent/articles";
import { SearchContext } from "@/provider/search-provider";
import { useContext } from "react";

export default function Bloghome() {
  const { isLoading, articles, searchValue } = useContext(SearchContext);

  return (
    <main>
      <h1 className="ml-[270px] mt-10 text-2xl">
        <strong>All Blog Posts</strong>
      </h1>
      <p>{searchValue}</p>
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-4 justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          articles.map((article) => <Articles article={article} />)
        )}
      </div>
      <div className="w-[1216px] h-[40px] m-auto flex justify-center my-10">
        <button className="w-[130px] h-[50px] border border-solid border-gray-300 rounded-md text-sm hover:border-green-500">
          Load More
        </button>
      </div>
    </main>
  );
}
