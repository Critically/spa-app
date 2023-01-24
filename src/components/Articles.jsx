import React from "react";
import "./css/Articles.css";
export default function Articles({ data }) {
  return (
    <div className="articles_container">
      {data.map((item, index) => (
        <div className="articles_item" key={`${item}-${index}`}>
          <img
            src={item.urlToImage}
            alt="img"
            className="articles_item_img"
          />
          {item.author}
          <br />
          {item.description}
        </div>
      ))}
    </div>
  );
}
