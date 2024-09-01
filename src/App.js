import React from 'react';
import { BookmarkProvider } from './contexts/BookmarkContext';
import NewsList from './components/NewsList';
import BookmarkList from './components/BookmarkList';
import Categories from './components/Categories';

const App = () => {
  return (
    <BookmarkProvider >
      <div className="grid justify-center App">
        <h1 className='flex justify-center text-5xl font-bold uppercase bg-blue-500 m-7'>Latest News</h1>
     
        <NewsList className='bg-yellow-950' />
        {/* <h2>Bookmarked Articles</h2> */}
        <BookmarkList />
      </div>
    </BookmarkProvider>
  );
};

export default App;
