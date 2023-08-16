import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import MembersPage from './pages/MembersPage';
import ImportBooksPage from './pages/ImportBooksPage';
import HomePage from './pages/HomePage';

function App() {
  return (
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/books" element={<BooksPage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/members" element={<MembersPage />} />
          <Route path="/import-books" element={<ImportBooksPage />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
