import { createContext, useEffect, useState } from "react";



export const CatagoryContext = createContext();

const CatagoryProvider = ({ children }) => {
  const [sports, setSports] = useState([]);
  const [science, setScience] = useState([]);
  const [type, setType] = useState("everthing");
  console.log(type);
  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `https://newsapi.org/v2/everything?q=science&from=2023-07-01&language=en&sortBy=publishedAt&apiKey=f9aa60f4e0fc449da80dfbd2143ae128`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setScience(data.articles);
      
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `https://newsapi.org/v2/everything?q=sports&from=2023-07-01&language=en&sortBy=publishedAt&apiKey=f9aa60f4e0fc449da80dfbd2143ae128`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSports(data.articles);
      
    };
    fetchNews();
  }, []);

  return (
    <CatagoryContext.Provider value={{ sports, science, setType }}>
      {children}
    </CatagoryContext.Provider>
  );
};

export default CatagoryProvider;
