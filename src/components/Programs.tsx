import React from 'react';
import { programs } from '../data';

export const Programs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm font-semibold text-orange-500">{program.category}</span>
                <h3 className="text-xl font-bold text-blue-900 mt-2">{program.title}</h3>
                <p className="mt-2 text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};