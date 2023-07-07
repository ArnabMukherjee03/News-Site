import React, { createContext, useState } from 'react';

export const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
 
    const [currentPage, setCurrentPage] = useState(1);
    

    const indexOfLastItem = currentPage * 20;
    const indexOfFirstItem = indexOfLastItem - 20;

    console.log(indexOfFirstItem);
    console.log(indexOfLastItem);

    const handlePageChange = (pageNumber) => {
       window.scrollTo(0,0);
        setCurrentPage(pageNumber);
      };
      

  return (
    <PaginationContext.Provider value={{currentPage,indexOfLastItem,indexOfFirstItem,handlePageChange }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
