import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from './Button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Annual Charity Gala',
    date: 'March 25, 2024',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, NYC',
    description: 'Join us for an evening of celebration and fundraising to support our educational initiatives.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
  },
  {
    id: '2',
    title: 'Community Workshop',
    date: 'April 2, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Community Center',
    description: 'Learn about volunteer opportunities and how you can make a difference in your community.',
    image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86'
  },
  {
    id: '3',
    title: 'Youth Leadership Summit',
    date: 'April 15, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Tech Hub Center',
    description: 'A day of inspiration and learning for young leaders shaping the future.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
  }
];

export const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Join us in making a difference</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-orange-500 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
