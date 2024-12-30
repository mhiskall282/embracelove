import React from 'react';
import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { Testimonials } from '../components/Testimonials';
import { Team } from '../components/Team';
import { Blog } from '../components/Blog';
import { UpcomingEvents } from '../components/UpcomingEvents';
import { DonationTiers } from '../components/DonationTiers';
import { NewsletterSignup } from '../components/NewsletterSignup';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Programs />
      <UpcomingEvents />
      <Testimonials />
      <DonationTiers />
      <Team />
      <Blog />
      <NewsletterSignup />
    </>
  );
};
