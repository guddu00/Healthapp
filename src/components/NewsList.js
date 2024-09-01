import React, { useEffect, useState } from 'react';
import { fetchHealthNews } from '../services/newsApi';
import NewsItem from './NewsItem';
import Categories from './Categories';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory]=useState("health")

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchHealthNews(category);
      setArticles(news);
    };  
    getNews();
  }, [category]);

  return (
    <div>
        <Categories className='bg-blue-300' setCategory={setCategory} />
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
