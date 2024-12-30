import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900">Embrace Love</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
            >
              Home
            </Link>
            <Link
              to="/programs"
              className={`${isActive('/programs') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
            >
              Programs
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
            >
              Contact
            </Link>
            <Button variant="primary">Donate Now</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 ${isActive('/') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/programs"
              className={`block px-3 py-2 ${isActive('/programs') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 ${isActive('/about') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 ${isActive('/contact') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button variant="primary" className="w-full">Donate Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};