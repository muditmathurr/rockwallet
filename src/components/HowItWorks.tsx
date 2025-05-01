import React from 'react';
import { Download, UserPlus, Wallet, ArrowRightLeft } from 'lucide-react';
import Container from './ui/Container';

const steps = [
  {
    icon: <Download className="w-10 h-10 text-white" />,
    title: 'Download the App',
    description: 'Get started by downloading the RockWallet app for iOS or Android.',
    color: 'bg-blue-600'
  },
  {
    icon: <UserPlus className="w-10 h-10 text-white" />,
    title: 'Create an Account',
    description: 'Sign up with your email address and create a secure password.',
    color: 'bg-indigo-500'
  },
  {
    icon: <Wallet className="w-10 h-10 text-white" />,
    title: 'Fund Your Wallet',
    description: 'Add funds using your bank account, debit card, or by transferring crypto.',
    color: 'bg-orange-500'
  },
  {
    icon: <ArrowRightLeft className="w-10 h-10 text-white" />,
    title: 'Start Trading',
    description: 'Buy, sell, and swap cryptocurrencies with competitive rates.',
    color: 'bg-green-500'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            How RockWallet Works
          </h2>
          <p className="text-lg text-slate-600">
            Getting started with cryptocurrency has never been easier.
            Follow these simple steps to begin your crypto journey.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-blue-950 font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3">{step.title}</h3>
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;