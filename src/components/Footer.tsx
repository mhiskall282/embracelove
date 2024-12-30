import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Embrace Love</h3>
            <p className="text-blue-100">Making a difference through education, mentorship, and community support.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-orange-300">Programs</a></li>
              <li><a href="#" className="text-blue-100 hover:text-orange-300">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-orange-300">Blog</a></li>
              <li><a href="#" className="text-blue-100 hover:text-orange-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-blue-100">
              <li>123 Charity Street</li>
              <li>New York, NY 10001</li>
              <li>contact@embracelove.org</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-orange-300">Twitter</a>
              <a href="#" className="text-blue-100 hover:text-orange-300">Facebook</a>
              <a href="#" className="text-blue-100 hover:text-orange-300">Instagram</a>
              <a href="#" className="text-blue-100 hover:text-orange-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100">© 2024 Embrace Love Foundation. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-blue-100">Developed with</span>
              <Heart className="w-4 h-4 mx-1 text-orange-500" />
              <span className="text-blue-100">by</span>
              <a href="#" className="text-orange-400 hover:text-orange-300 ml-1 font-semibold">
                Blacks Tech Africa
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};