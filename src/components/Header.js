import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/books"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Members
            </Link>
          </li>
          
          <li>
            <Link
              to="/import-books"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Import Books
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
