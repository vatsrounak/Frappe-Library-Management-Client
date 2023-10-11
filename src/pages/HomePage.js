import React from 'react';
import { Link } from 'react-router-dom';
import libraryImage from '../images/library.jpg'; // Replace with a vibrant library image

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen text-white">
      <main className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={libraryImage} alt="Library" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="z-10 text-center relative">
          <h2 className="text-6xl font-extrabold mb-4">Welcome to Frappe Library!</h2>
          <p className="text-gray-300 text-xl mb-6">
            Explore our diverse collection of books and embark on new adventures.
          </p>
          <Link to="/books">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 px-8 py-4 rounded-full font-semibold shadow-lg transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Frappe Library. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
