import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Downloads: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Take Your Crypto Anywhere with Our Mobile App
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Access your wallet, trade cryptocurrencies, and monitor your portfolio on the go.
              Download the RockWallet app for iOS and Android today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center justify-center">
                <Apple className="mr-2 w-5 h-5" />
                App Store
              </Button>
              <Button variant="outline" size="lg" className="flex items-center justify-center">
                <Smartphone className="mr-2 w-5 h-5" />
                Google Play
              </Button>
            </div>
            
            <div className="mt-10 bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-medium text-blue-950 mb-3">App Features:</h3>
              <ul className="space-y-2">
                {[
                  'Secure biometric authentication',
                  'Real-time price notifications',
                  'Easy portfolio tracking',
                  'Quick buy & sell functionality',
                  'QR code for easy transfers'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <div className="bg-green-500 w-2 h-2 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative z-10 flex">
              <div className="transform -rotate-12 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="RockWallet Mobile App" 
                  className="w-56 h-auto rounded-3xl border-4 border-white shadow-lg"
                />
              </div>
              <div className="transform rotate-12 mt-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="RockWallet Mobile App" 
                  className="w-56 h-auto rounded-3xl border-4 border-white shadow-lg"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500 rounded-full opacity-10 z-0"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-orange-400 rounded-full opacity-10 z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Downloads;