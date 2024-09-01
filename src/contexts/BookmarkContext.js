import React, { createContext, useState } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (article) => {
    setBookmarks([...bookmarks, article]);
  };

  const removeBookmark = (url) => {
    setBookmarks(bookmarks.filter((article) => article.url !== url));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
