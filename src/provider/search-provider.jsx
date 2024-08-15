import React from "react";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?page=${page}&per_page=20`
      );
      const data = await response.json();

      setArticles((prevArticles) => {
        const newArticles = data.filter(
          (article) =>
            !prevArticles.some((prevArticle) => prevArticle.id === article.id)
        );
        return [...prevArticles, ...newArticles];
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.success("Try again");
    }
  };

  useEffect(() => {
    getArticleData();
  }, [page]);

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, articles, isLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
