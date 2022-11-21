import React from 'react';
import './App.css';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {LatestArticles} from "./pages/latestArticles/LatestArticles";
import {StarredArticles} from "./pages/starredArticles/StarredArticles";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LatestArticles />} />
              <Route path="starred" element={<StarredArticles />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
