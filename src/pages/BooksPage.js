import React from 'react';
import BookList from '../components/BookList';

const BooksPage = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-yellow-600 min-h-screen flex justify-center items-center p-6">
      {/* Removed the commented-out <div> tag
      <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-600 to-amber-100 overflow-hidden shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Book List</h2>
          <BookList />
        </div>
      </div>
      {/* Removed the closing </div> tag
      </div>
      */}
    </div>
  );
};

export default BooksPage;
