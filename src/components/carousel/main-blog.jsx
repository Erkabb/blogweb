import React, { createContext, useEffect, useState } from "react";

export const EmblaContext = createContext();
const BlogDetail = ({ children }) => {
  const [articles, setArticles] = useState;
  const [page, setPage] = useState(1);

  const getArticle = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=${page}&per_page=5`
    );
    const data = await response.json();

    setArticles((prevArticles) => {
      const newArticles = data.filter(
        (article) =>
          !prevArticles.some((prevArticles) => prevArticles.id === article.id)
      );
      return [...prevArticles, ...newArticles];
    });
  };

  useEffect(() => {
    getArticle();
  }, [page]);

  return (
    <EmblaContext.Provider value={{ articles }}>
      {children}
    </EmblaContext.Provider>
  );
};
export default BlogDetail;
