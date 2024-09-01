
import React from 'react';

const NewsItem = ({ article }) => {
  const defaultImage = "https://via.placeholder.com/600x400?text=No+Image+Available"; 

  return (
    <div className="news-item grid gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition w-[90%] mx-auto my-11 py-28">
     
      <h2 className="px-4 py-2 text-5xl font-extrabold text-justify text-black transition rounded hover:bg-gray-300">
        {article.title}
      </h2>

      <p className="text-gray-600">{article.description}</p>
      <img
        src={article.urlToImage ? article.urlToImage : defaultImage}
        alt={article.title || "Article Image"}
        className="object-cover w-full h-auto rounded-md max-h-64"
        onError={(e) => (e.target.src = defaultImage)} 
      />
      <p className="text-right ">published at: {article.publishedAt}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-2xl font-bold text-center text-white transition bg-blue-500 rounded hover:bg-blue-600 "
      >
        Read more
      </a>    
    </div>
  );
};

export default NewsItem;
