import React from 'react';
import { Wallet } from 'lucide-react';

interface WalletLogoProps {
  white?: boolean;
}

const WalletLogo: React.FC<WalletLogoProps> = ({ white = false }) => {
  return (
    <div className={`flex items-center justify-center rounded-lg p-1 ${white ? 'bg-blue-500' : 'bg-blue-600'}`}>
      <Wallet className="w-6 h-6 text-white" />
    </div>
  );
};

export default WalletLogo;