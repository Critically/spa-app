import React from "react";
import './css/Pagination.css'

export default function Pagination({
  articlesPerPage,
  totalArticles,
  nextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination_container">
      {pageNumbers.map((number) => (
        <div key={number}>
          <button onClick={() => nextPage(number)}>{number}</button>
        </div>
      ))}
    </div>
  );
}
