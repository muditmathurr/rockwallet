import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import Container from './ui/Container';
import WalletLogo from './ui/WalletLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              {/* <WalletLogo white />
              <span className="ml-2 text-xl font-bold">RockWallet</span> */}
              <img src="https://cdn.prod.website-files.com/636012218b483e2e5e98b3e4/6360316485f6cb0f029d91b3_RW_OneLine_Black.png"  width="200px" height="40px" sizes="(max-width: 479px) 96vw, 396px" alt=""  style={{filter: "invert(1)"}} className="header-logo"/>
            </div>
            <p className="text-blue-200 mb-6">
              A secure and easy way to buy, sell, and manage your cryptocurrency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {['Wallet', 'Exchange', 'Swap', 'Buy & Sell', 'Send & Receive'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press', 'Security', 'Partners'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Status', 'FAQs', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-blue-300 text-sm">
            © {new Date().getFullYear()} RockWallet. All rights reserved.
          </div>
          
          <div className="flex items-center">
            <a href="#" className="text-blue-300 hover:text-white mr-6 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              support@rockwallet.com
            </a>
            <select className="bg-blue-900 text-blue-200 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;