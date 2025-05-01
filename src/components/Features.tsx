import React from 'react';
import { Shield, Zap, Globe, Repeat, Lock, CreditCard } from 'lucide-react';
import Container from './ui/Container';

const features = [
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: 'Secure Storage',
    description: 'Your digital assets are stored in our secure offline storage with multi-layer protection and insurance coverage.'
  },
  {
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: 'Instant Trading',
    description: 'Buy, sell, and swap cryptocurrencies instantly with competitive rates and minimal fees.'
  },
  {
    icon: <Globe className="w-10 h-10 text-green-500" />,
    title: 'Worldwide Access',
    description: 'Access your wallet from anywhere in the world with our mobile and web applications.'
  },
  {
    icon: <Repeat className="w-10 h-10 text-purple-500" />,
    title: 'Easy Swaps',
    description: 'Instantly exchange between different cryptocurrencies with just a few clicks.'
  },
  {
    icon: <Lock className="w-10 h-10 text-indigo-600" />,
    title: 'Private Keys',
    description: 'You maintain full control of your private keys with our non-custodial wallet solution.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-blue-500" />,
    title: 'Buy with Card',
    description: 'Purchase crypto directly with your credit or debit card for instant access to digital assets.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-slate-600">
            RockWallet combines security, simplicity, and control to give you the best crypto experience possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-950 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;