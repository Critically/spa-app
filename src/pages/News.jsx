import React, { useEffect, useState } from "react";
import Articles from "../components/Articles";
import Pagination from "../components/Pagination";

export default function News() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(6);

  const lastArticleIndex = currentPage * articlePerPage;
  const firsArticletIndex = lastArticleIndex - articlePerPage;
  const currentArticle = data.slice(firsArticletIndex, lastArticleIndex);

  const nextPage = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const loadData = async () => {
      await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-12-24&sortBy=publishedAt&apiKey=74cda2f49ee94aa8ab692f5a74b3dec4"
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.articles);
        })
        .catch(function (error) {
          console.error("Error: ", error);
        });
    };
     loadData();
  }, []);

  return (
    <>
      {data && (
        <>
          <Articles data={currentArticle} />
          <Pagination
            articlesPerPage={articlePerPage}
            totalArticles={data.length}
            nextPage={nextPage}
          />
        </>
      )}
    </>
  );
}
