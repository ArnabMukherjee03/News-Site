import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewsProvider from './Context/NewsContext';
import { BrowserRouter } from "react-router-dom"
import CatagoryProvider from './Context/CatagoryContext';
import SearchProvider from './Context/SearchContext';
import PaginationProvider from './Context/PaginationContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NewsProvider>
    <CatagoryProvider>
      <SearchProvider>
        <PaginationProvider>
        <App />
        </PaginationProvider>
      </SearchProvider>
    </CatagoryProvider>
    </NewsProvider>
    </BrowserRouter>
    </React.StrictMode>
);

