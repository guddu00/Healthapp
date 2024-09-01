
import React, { useContext } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';
import NewsItem from './NewsItem';

const BookmarkList = () => {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <div className="p-4 m-4 text-2xl font-bold text-center bg-red-500 rounded-lg shadow-md bookmark-list">
      {bookmarks.length ? bookmarks.map((article, index) => (
        <NewsItem key={index} article={article}/>
      )) : <p>No bookmarks yet.</p>}
    </div>
  );
};

export default BookmarkList;
