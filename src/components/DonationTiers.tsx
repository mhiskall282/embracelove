import React from 'react';
import { Heart, Star, Award, Crown } from 'lucide-react';
import { Button } from './Button';

interface TierProps {
  icon: React.ReactNode;
  name: string;
  amount: string;
  benefits: string[];
  highlighted?: boolean;
}

const Tier: React.FC<TierProps> = ({ icon, name, amount, benefits, highlighted }) => (
  <div className={`rounded-lg p-6 ${highlighted ? 'bg-blue-900 text-white ring-2 ring-orange-500' : 'bg-white'}`}>
    <div className="flex items-center justify-center mb-4">
      <div className={`p-3 rounded-full ${highlighted ? 'bg-orange-500' : 'bg-orange-100'}`}>
        {icon}
      </div>
    </div>
    <h3 className={`text-xl font-bold text-center mb-2 ${highlighted ? 'text-white' : 'text-blue-900'}`}>{name}</h3>
    <p className={`text-center text-2xl font-bold mb-4 ${highlighted ? 'text-orange-300' : 'text-orange-500'}`}>{amount}</p>
    <ul className="space-y-3 mb-6">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <span className={`mr-2 ${highlighted ? 'text-orange-300' : 'text-orange-500'}`}>•</span>
          <span className={highlighted ? 'text-blue-100' : 'text-gray-600'}>{benefit}</span>
        </li>
      ))}
    </ul>
    <Button variant={highlighted ? 'primary' : 'outline'} className="w-full">
      Donate Now
    </Button>
  </div>
);

export const DonationTiers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Support Our Cause</h2>
          <p className="text-xl text-gray-600">Choose how you'd like to make a difference</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Tier
            icon={<Heart className="w-6 h-6 text-orange-500" />}
            name="Friend"
            amount="$10/month"
            benefits={[
              "Monthly newsletter",
              "Impact reports",
              "Thank you certificate"
            ]}
          />
          <Tier
            icon={<Star className="w-6 h-6 text-orange-500" />}
            name="Supporter"
            amount="$25/month"
            benefits={[
              "All Friend benefits",
              "Quarterly virtual meetups",
              "Name on donor wall"
            ]}
          />
          <Tier
            icon={<Award className="w-6 h-6 text-white" />}
            name="Champion"
            amount="$50/month"
            benefits={[
              "All Supporter benefits",
              "Exclusive events access",
              "Personal impact updates",
              "Recognition in annual report"
            ]}
            highlighted
          />
          <Tier
            icon={<Crown className="w-6 h-6 text-orange-500" />}
            name="Guardian"
            amount="$100/month"
            benefits={[
              "All Champion benefits",
              "1-on-1 meetings with leadership",
              "Custom impact report",
              "Featured donor spotlight"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
