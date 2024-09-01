import React from 'react';

const Categories = ({setCategory} ) => {
  const categories = ['Health', 'sport', 'Technology'];

  return (
    <div className="flex justify-center my-4 space-x-4 categories">
      {categories.map((category) => (
        <button key={category} 
        onClick={()=>setCategory(category)}
        
        className="px-4 py-2 text-2xl font-bold text-gray-700 bg-gray-200 rounded shadow-xl hover:bg-gray-300" >
          
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
