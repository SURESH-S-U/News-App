import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";


import NewsApp from "./pages/NewsApp";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/NewsApp" element={<NewsApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
