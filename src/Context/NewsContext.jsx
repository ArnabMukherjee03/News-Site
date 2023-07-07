import { createContext, useEffect, useState } from "react";



export const NewsContext = createContext();

const NewsProvider = ({children})=>{
    const [news,setNews] = useState([]);

    useEffect(()=>{
        const fetchNews = async()=>{
            const apiUrl = `https://newsapi.org/v2/everything?q=everything&from=2023-06-20&language=en&sortBy=publishedAt&apiKey=f9aa60f4e0fc449da80dfbd2143ae128`;
            const response = await fetch(apiUrl);
            const data = await response.json();
           
            setNews(data.articles);
           
        };
        fetchNews();
    },[news]);

    // console.log(news);
    return(
        <NewsContext.Provider value={{news}}>
        {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider;