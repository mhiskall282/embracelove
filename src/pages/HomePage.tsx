import React from 'react';
import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { Testimonials } from '../components/Testimonials';
import { Team } from '../components/Team';
import { Blog } from '../components/Blog';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Programs />
      <Testimonials />
      <Team />
      <Blog />
    </>
  );
};