import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loginFlag = localStorage.getItem("loggedIn");
    const name = localStorage.getItem("name") || "";
    
    if (loginFlag === "1") {
      setIsLoggedIn(true);
      setUsername(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "0");
    setIsLoggedIn(false);
    setUsername('');
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <Link to="/" className="flex items-center">
          <img src="/src/assets/imgs/logo.png" width="50" height="50" className="mr-2" alt="Logo" />
        </Link>

        <div className="hidden md:flex justify-center">
         <ul className="flex space-x-8">
          <li><a href="/#home" className="text-white font-semibold hover:text-blue-400 transition-colors border-b-2 border-blue-400">Home</a></li>
          <li><a href="/#arrivals" className="text-white font-semibold hover:text-blue-400 transition-colors">Arrivals</a></li>
          <li><a href="/#listing" className="text-white font-semibold hover:text-blue-400 transition-colors">Listing</a></li>
          <li><Link to="/blog" className="text-white font-semibold hover:text-blue-400 transition-colors">Blog</Link></li>
          <li><a href="#contact" className="text-white font-semibold hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>

        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">Welcome {username}</span>
              <button 
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-white hover:text-blue-400 transition-colors ml-3">
              <User size={24} />
            </Link>
          )}
          
          <button className="md:hidden ml-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

