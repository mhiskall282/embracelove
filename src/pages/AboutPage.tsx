import React from 'react';
import { team } from '../data';

export const AboutPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are dedicated to making a positive impact in our community through education,
            mentorship, and support programs.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To create a world where every individual has access to the resources and support
              they need to reach their full potential.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide educational opportunities, mentorship programs, and community support
              that empowers individuals to create positive change in their lives.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-blue-900 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">People Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Active Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years of Impact</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full md:w-48 h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                <div className="text-xl font-semibold text-gray-400">Partner {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};