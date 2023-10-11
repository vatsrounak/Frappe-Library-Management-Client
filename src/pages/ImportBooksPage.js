import React, { useState } from 'react';
import axios from 'axios';

const ImportBooksPage = () => {
  const [bookName, setBookName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleImport = async () => {
    try {
      const response = await axios.post('http://18.212.181.90:8000/api/import-books/', {
        title: bookName,
        num_books: quantity,
      });
      console.log('Books imported:', response.data);
      // Reset form
      setBookName('');
      setQuantity('');
    } catch (error) {
      console.error('Error importing books:', error);
    }
  };

  return (
    // <div className="bg-white rounded-lg shadow-md p-6">
          <div className="bg-gradient-to-r from-amber-600 to-amber-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">

      <h2 className="text-xl font-semibold mb-4">Import Books</h2>
      <label className="block mb-2">
        Book Name:
        <input
          type="text"
          className="border rounded w-full p-2"
          value={bookName}
          onChange={e => setBookName(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Quantity:
        <input
          type="number"
          className="border rounded w-full p-2"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </label>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleImport}
      >
        Import
      </button>
    </div>
  );
};

export default ImportBooksPage;
