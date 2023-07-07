import React, { createContext, useEffect, useState } from 'react';


export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("everything");
  const [news, setNews] = useState([]);

  const updateSearchQuery = (query) => {
    setSearchQuery(query);

  };

  useEffect(()=>{
    const fetchNews = async()=>{
      console.log(searchQuery);
      const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-07-01&language=en&sortBy=publishedAt&apiKey=f9aa60f4e0fc449da80dfbd2143ae128`;
      const response = await fetch(apiUrl);
      const data = await response.json();
     
      setNews(data.articles);

  };
  fetchNews();

  },[searchQuery])

  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery,news }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
