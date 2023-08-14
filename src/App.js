import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import MembersPage from './pages/MembersPage';
import IssuePage from './pages/IssuePage';
import ReturnPage from './pages/ReturnPage';
import ImportBooksPage from './pages/ImportBooksPage';

function App() {
  return (
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/books" element={<BooksPage />}/>
          <Route path="/members" element={<MembersPage />} />
          <Route path="/import-books" element={<ImportBooksPage />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
