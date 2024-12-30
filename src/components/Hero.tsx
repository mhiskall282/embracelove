import React from 'react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
          alt="Hero background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We Embrace The Beauty Of Kindness
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Join us in making a difference in our community through education, mentorship, and support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg">Join a Program</Button>
          <Button variant="secondary" size="lg">Become a Mentor</Button>
          <Button variant="outline" size="lg">Donate Now</Button>
        </div>
      </div>
    </div>
  );
};