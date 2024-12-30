import React from 'react';
import { programs } from '../data';
import { Button } from '../components/Button';

export const ProgramsPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we're making a difference through our various initiatives and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-16">
          {programs.map((program) => (
            <div key={program.id} className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full md:w-1/3 h-64 object-cover"
              />
              <div className="p-8">
                <span className="text-sm font-semibold text-orange-500">{program.category}</span>
                <h2 className="text-2xl font-bold text-blue-900 mt-2 mb-4">{program.title}</h2>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex gap-4">
                  <Button variant="primary">Learn More</Button>
                  <Button variant="outline">Join Program</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Start a New Program?</h2>
          <p className="mb-6">We're always looking for new ways to help our community.</p>
          <Button variant="primary">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};