import { Program, Testimonial, TeamMember, BlogPost } from '../types';

export const programs: Program[] = [
  {
    id: '1',
    title: 'Youth Mentorship Program',
    description: 'Connecting young minds with experienced mentors to guide their personal and professional growth.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
    category: 'Education'
  },
  {
    id: '2',
    title: 'Community Outreach',
    description: 'Building stronger communities through local initiatives and support programs.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a',
    category: 'Community'
  },
  {
    id: '3',
    title: 'Educational Support',
    description: 'Providing resources and support for underprivileged students to access quality education.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    category: 'Education'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Program Participant',
    quote: 'The mentorship program changed my life. I found direction and purpose through my mentor\'s guidance.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Volunteer',
    quote: 'Being part of this foundation has shown me the true impact of community service.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  },
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Emily Roberts',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    bio: 'With over 15 years of experience in nonprofit leadership, Dr. Roberts leads our mission with passion and dedication.'
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Program Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    bio: 'James brings innovative approaches to our educational programs, ensuring maximum impact in our communities.'
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How We\'re Changing Lives Through Education',
    excerpt: 'Discover the impact of our educational initiatives on local communities.',
    category: 'Educational Resources',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    author: 'Emily Roberts'
  },
  {
    id: '2',
    title: 'Recap: Charity Walk 2024',
    excerpt: 'A look back at our most successful fundraising event of the year.',
    category: 'Inspiring Stories',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    author: 'James Wilson'
  },
];