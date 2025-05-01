import React from 'react';
import { ShieldCheck, Lock, Fingerprint as FingerPrint, Eye } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Security: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Leading Security for Your Peace of Mind
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Your security is our top priority. RockWallet implements multiple layers of protection
              to ensure your assets remain safe and secure at all times.
            </p>
            <Button variant="light" size="lg">
              Learn About Our Security
            </Button>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">2FA Protection</h4>
                  <p className="text-blue-200 text-sm">Secure your account with two-factor authentication</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lock className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">AES-256 Encryption</h4>
                  <p className="text-blue-200 text-sm">Military-grade encryption for all sensitive data</p>
                </div>
              </div>
              <div className="flex items-start">
                <FingerPrint className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Biometric Access</h4>
                  <p className="text-blue-200 text-sm">Unlock your wallet using fingerprint or Face ID</p>
                </div>
              </div>
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Privacy Focus</h4>
                  <p className="text-blue-200 text-sm">We never track or store your private keys</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-800 to-indigo-800 rounded-2xl p-8 shadow-2xl border border-blue-700">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">Security Features</h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Cold Storage', desc: '95% of assets stored offline in cold storage' },
                  { title: 'SOC Certified', desc: 'SOC 1 Type 2 and SOC 2 Type 2 certified' },
                  { title: 'Bug Bounty', desc: 'Active bug bounty program to identify vulnerabilities' },
                  { title: 'Insurance', desc: 'Assets insured against theft and cyber attacks' },
                ].map((item, index) => (
                  <div key={index} className="flex p-3 bg-blue-900/50 rounded-lg">
                    <div className="bg-green-500 w-3 h-3 rounded-full mt-1 mr-3"></div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-blue-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-400 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Security;