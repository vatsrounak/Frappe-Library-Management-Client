import React from 'react';
import backgroundImage from '../images/bgimage.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="Background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="z-10 text-center relative">
          <h2 className="text-5xl font-extrabold text-white mb-4">Welcome to Our Library!</h2>
          <p className="text-gray-300 text-lg mb-6">
            Explore our vast collection of books and discover new worlds.
          </p>
          <Link to="/books">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-700 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Library Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
