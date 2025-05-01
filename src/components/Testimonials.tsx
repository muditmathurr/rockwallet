import React from 'react';
import { Star } from 'lucide-react';
import Container from './ui/Container';

const testimonials = [
  {
    name: 'Sreya',
    role: 'Crypto Investor',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'RockWallet has transformed how I manage my crypto assets. The interface is intuitive, transactions are fast, and I feel confident knowing my investments are secure.',
    rating: 5
  },
  {
    name: 'Pulkit Mathur',
    role: 'Day Trader',
    image: 'https://images.pexels.com/photos/31839785/pexels-photo-31839785/free-photo-of-moody-portrait-of-a-man-with-dramatic-lighting.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'As someone who trades daily, I need reliability and speed. RockWallet delivers on both fronts with competitive rates and excellent customer support.',
    rating: 5
  },
  {
    name: 'Suhrid Mathur',
    role: 'Tech Enthusiast',
    image: 'https://images.pexels.com/photos/31804109/pexels-photo-31804109/free-photo-of-man-in-scarf-with-dramatic-lighting.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'The security features are impressive. Two-factor authentication, biometric login, and the clean UI make RockWallet stand out from other crypto wallets.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Trusted by Thousands of Users
          </h2>
          <p className="text-lg text-slate-600">
            Join the community of satisfied users who trust RockWallet for their cryptocurrency needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-blue-950">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4.8', text: 'App Store Rating' },
              { number: '1.5M+', text: 'Downloads' },
              { number: '150+', text: 'Countries' },
              { number: '10B+', text: 'Transactions Processed' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-slate-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;