import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [memberId, setMemberId] = useState('');
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);

  const handleIssue = async () => {
    try {
      const response = await axios.post('http://18.212.181.90:8000/issue-book/', {
        book: 123,  // Replace with appropriate book ID
        member: memberId,
        issue_date: issueDate,
      });
      console.log('Book issued:', response.data);
      // Reset form
      setMemberId('');
      setIssueDate(new Date().toISOString().split('T')[0]);
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Issue Book</h2>
      <label className="block mb-2">
        Member ID:
        <input
          type="number"
          className="border rounded w-full p-2"
          value={memberId}
          onChange={e => setMemberId(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Issue Date:
        <input
          type="date"
          className="border rounded w-full p-2"
          value={issueDate}
          onChange={e => setIssueDate(e.target.value)}
        />
      </label>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleIssue}
      >
        Issue
      </button>
    </div>
  );
};

export default BookForm;
