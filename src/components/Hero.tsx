import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import LoginModal from "./ui/LoginModal";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Hero: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-12">
          <motion.div
            className="max-w-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-6 leading-tight"
              variants={fadeInUp}
              custom={0}
            >
              Take Custody of Your Digital Assets Today
            </motion.h1>
            <motion.p
              className="text-lg text-slate-700 mb-8"
              variants={fadeInUp}
              custom={0.2}
            >
              Buy, sell, and manage your crypto securely with RockWallet. The
              most trusted and secure platform for all your cryptocurrency
              needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              custom={0.4}
            >
              <Button size="lg" onClick={() => setShowLogin(true)}>
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>

            <LoginModal
              isOpen={showLogin}
              onClose={() => setShowLogin(false)}
            />

            <motion.div
              className="mt-12 flex items-center space-x-6"
              variants={fadeInUp}
              custom={0.6}
            >
              {[
                { label: "4.8M+ Users", color: "bg-green-500" },
                { label: "150+ Countries", color: "bg-blue-500" },
                { label: "$10B+ Transactions", color: "bg-purple-500" },
              ].map((item, idx) => (
                <div className="flex items-center" key={idx}>
                  <div className={`${item.color} w-3 h-3 rounded-full mr-2`} />
                  <span className="text-slate-700">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-blue-600 px-6 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold">Your Wallet</h3>
                  <span className="text-blue-100 text-sm">
                    Balance: $12,450.32
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      name: "Bitcoin",
                      symbol: "BTC",
                      balance: "0.15",
                      value: "$5,236.20",
                      color: "bg-orange-500",
                    },
                    {
                      name: "Ethereum",
                      symbol: "ETH",
                      balance: "2.45",
                      value: "$4,521.80",
                      color: "bg-indigo-500",
                    },
                    {
                      name: "Litecoin",
                      symbol: "LTC",
                      balance: "15.5",
                      value: "$1,782.50",
                      color: "bg-slate-500",
                    },
                    {
                      name: "USD Coin",
                      symbol: "USDC",
                      balance: "910",
                      value: "$910.82",
                      color: "bg-blue-500",
                    },
                  ].map((coin, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 rounded-lg p-3"
                    >
                      <div
                        className={`${coin.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3`}
                      >
                        {coin.symbol.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{coin.name}</h4>
                        <div className="text-sm text-gray-500">
                          {coin.balance} {coin.symbol}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{coin.value}</div>
                        <div className="text-sm text-green-600">+2.4%</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button size="sm" variant="outline">
                    Send
                  </Button>
                  <Button size="sm">Receive</Button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-full opacity-10 z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full opacity-10 z-0"></div>
          </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
