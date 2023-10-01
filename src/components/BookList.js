import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedMember, setSelectedMember] = useState('');
  const [members, setMembers] = useState([]);
  const [isIssuingModalOpen, setIsIssuingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks();
    fetchMembers();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://18.212.181.90:8000/api/books/');
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://18.212.181.90:8000/api/members/');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const openIssuingModal = (book) => {
    setSelectedBook(book);
    setSelectedMember('');
    setIsIssuingModalOpen(true);
  };

  const closeIssuingModal = () => {
    setSelectedBook(null);
    setSelectedMember('');
    setIsIssuingModalOpen(false);
  };

  const handleIssuing = async () => {
    try {
      const response = await axios.post('http://18.212.181.90:8000/api/issue-book/', {
        book: selectedBook.id,
        member: selectedMember,
        issue_date: new Date().toISOString().split('T')[0],
      });
      closeIssuingModal();
      fetchBooks(); // Refresh book list
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`http://18.212.181.90:8000/api/books/${bookId}/`);
      fetchBooks(); // Refresh book list
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      fetchBooks(); // Reset the list if the search query is empty
    } else {
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.authors.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBooks(filteredBooks);
    }
  };

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author"
          className="border rounded w-full p-2"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-2 mt-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Render book cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600">Author: {book.authors}</p>
            <p className="text-gray-600">ISBN: {book.isbn}</p>
            <p className="text-gray-600">Average Rating: {book.average_rating}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2 mr-3"
              onClick={() => openIssuingModal(book)}
            >
              Issue Book
            </button>
          
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-2"
              onClick={() => handleDeleteBook(book.id)}
            >
              Delete Book
            </button>
          </div>
        ))}
      </div>

      {/* Issuing Modal */}
      {isIssuingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Issue/Edit Book</h2>
            <label className="block mb-2">
              Member:
              <select
                className="border rounded w-full p-2"
                value={selectedMember}
                onChange={e => setSelectedMember(e.target.value)}
              >
                <option value="">Select a member</option>
                {members.map(member => (
                  <option key={member.id} value={member.id}>{member.name}</option>
                ))}
              </select>
            </label>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                onClick={handleIssuing}
                disabled={!selectedMember}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                onClick={closeIssuingModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
