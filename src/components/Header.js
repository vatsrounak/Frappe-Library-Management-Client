import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-yellow-500 py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/books"
              className="text-purple-800 hover:text-black transition duration-300 font-semibold text-lg"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className="text-purple-800 hover:text-black transition duration-300 font-semibold text-lg"
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              to="/import-books"
              className="text-purple-800 hover:text-black transition duration-300 font-semibold text-lg"
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
