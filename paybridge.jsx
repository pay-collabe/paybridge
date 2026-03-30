import React, { useState, useEffect } from 'react';
import { DollarSign, Globe, CreditCard, Wallet, Zap, Shield, TrendingUp, Mail, ExternalLink, Check, ChevronRight, Star } from 'lucide-react';

// ============================================
// 🎯 EASY EDIT CONFIGURATION
// Change these values to update your entire site!
// ============================================
const CONFIG = {
  siteName: "PayBridge",
  tagline: "Your Bridge to Global Payments",
  description: "Free resources helping freelancers worldwide receive international payments",
  
  // Your contact info
  contact: {
    email: "contact@paybridge.com", // Change to your email
    twitter: "@paybridge",
    github: "paybridge"
  },
  
  // Affiliate links - Replace with YOUR affiliate links to earn commissions!
  affiliateLinks: {
    paypal: "https://www.paypal.com/signin", // Add your PayPal affiliate link
    wise: "https://wise.com/invite/u/", // Add your Wise referral code
    revolut: "https://revolut.com/referral/", // Add your Revolut referral
    coinbase: "https://www.coinbase.com/join/", // Add your Coinbase referral
    payoneer: "https://www.payoneer.com/", // Add your Payoneer affiliate link
  },
  
  // Google AdSense - Add your AdSense code here later
  adsenseId: "ca-pub-XXXXXXXXXX",
  
  // Donation link (Buy Me a Coffee, Ko-fi, etc)
  donationLink: "https://www.buymeacoffee.com/paybridge",
};

// Payment services data
const paymentServices = [
  {
    name: "PayPal",
    description: "Most popular globally, easy setup",
    fees: "2.9% + $0.30 per transaction",
    countries: "200+ countries",
    setup: "5 minutes",
    pros: ["Widely accepted", "Buyer protection", "Easy integration"],
    cons: ["High fees", "Can freeze accounts", "Slow withdrawals"],
    rating: 4.2,
    affiliate: CONFIG.affiliateLinks.paypal,
    icon: "💳",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Wise",
    description: "Low fees for international transfers",
    fees: "0.5-2% (varies by currency)",
    countries: "80+ countries",
    setup: "10 minutes",
    pros: ["Lowest fees", "Real exchange rates", "Multiple currencies"],
    cons: ["Not instant", "Requires verification", "Some country limits"],
    rating: 4.7,
    affiliate: CONFIG.affiliateLinks.wise,
    icon: "🌍",
    color: "from-green-500 to-green-600"
  },
  {
    name: "Revolut",
    description: "Modern digital banking platform",
    fees: "Free for standard transfers",
    countries: "35+ countries",
    setup: "5 minutes",
    pros: ["Free transfers", "Crypto support", "Multiple currencies"],
    cons: ["Limited countries", "Premium features cost", "Customer support"],
    rating: 4.3,
    affiliate: CONFIG.affiliateLinks.revolut,
    icon: "🚀",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Coinbase",
    description: "Cryptocurrency payments",
    fees: "1-3% per transaction",
    countries: "100+ countries",
    setup: "15 minutes",
    pros: ["Global access", "No chargebacks", "Fast transfers"],
    cons: ["Volatile", "Learning curve", "Some countries restricted"],
    rating: 4.1,
    affiliate: CONFIG.affiliateLinks.coinbase,
    icon: "₿",
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "Payoneer",
    description: "Great for freelancers & businesses",
    fees: "1-3% per transaction",
    countries: "190+ countries",
    setup: "24-48 hours",
    pros: ["Multi-currency", "Local bank transfers", "Marketplace friendly"],
    cons: ["Verification takes time", "Withdrawal fees", "Account maintenance"],
    rating: 4.4,
    affiliate: CONFIG.affiliateLinks.payoneer,
    icon: "💼",
    color: "from-red-500 to-red-600"
  }
];

const App = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [email, setEmail] = useState('');
  const [calculatorAmount, setCalculatorAmount] = useState(100);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  // Simple email signup
  const handleEmailSignup = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  // Contact form
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // In real deployment, this would send to a free service like Formspree or EmailJS
    alert(`Thanks ${contactForm.name}! We'll respond to ${contactForm.email} soon.`);
    setContactForm({ name: '', email: '', message: '' });
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .title-font {
          font-family: 'DM Serif Display', serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
        }
        
        .glow {
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        
        .bg-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(52, 211, 153, 0.1) 0%, transparent 50%);
        }
      `}</style>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold title-font">{CONFIG.siteName}</span>
            </div>
            <button
              onClick={() => setShowContactForm(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center slide-in">
            <h1 className="text-5xl md:text-7xl font-bold title-font mb-6">
              <span className="gradient-text">{CONFIG.tagline}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              {CONFIG.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="#compare"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105"
              >
                Compare Payment Options
              </a>
              <a
                href="#calculator"
                className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl font-semibold hover:bg-slate-700 transition"
              >
                Calculate Your Fees
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Payment Options", value: "5+" },
                { label: "Countries Covered", value: "200+" },
                { label: "Average Fee Savings", value: "60%" },
                { label: "Setup Time", value: "5 min" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Services Comparison */}
      <section id="compare" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold title-font mb-4">Compare Payment Services</h2>
            <p className="text-slate-400 text-lg">Find the best option for your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 card-hover cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-4xl bg-gradient-to-br ${service.color} p-3 rounded-xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-slate-400">{service.rating}/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{service.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Fees:</span>
                    <span className="text-green-400 font-semibold">{service.fees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Coverage:</span>
                    <span className="font-semibold">{service.countries}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Setup:</span>
                    <span className="font-semibold">{service.setup}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-green-400 mb-2">✓ Pros:</div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {service.pros.slice(0, 2).map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.affiliate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 bg-gradient-to-r ${service.color} rounded-xl text-center font-semibold hover:shadow-lg transition flex items-center justify-center space-x-2`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Get Started</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Calculator */}
      <section id="calculator" className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold title-font mb-4">Fee Calculator</h2>
            <p className="text-slate-400 text-lg">See how much you'll actually receive</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">Payment Amount (USD)</label>
              <input
                type="number"
                value={calculatorAmount}
                onChange={(e) => setCalculatorAmount(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-2xl font-bold focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              {paymentServices.map((service, i) => {
                const feePercent = parseFloat(service.fees.match(/[\d.]+/)[0]) / 100;
                const fixedFee = service.fees.includes('$') ? parseFloat(service.fees.match(/\$[\d.]+/)[0].slice(1)) : 0;
                const totalFee = (calculatorAmount * feePercent) + fixedFee;
                const youReceive = calculatorAmount - totalFee;

                return (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm text-red-400">-${totalFee.toFixed(2)} fee</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">${youReceive.toFixed(2)}</div>
                      <div className="text-xs text-slate-400">You receive</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold title-font mb-4">How PayBridge Helps You</h2>
            <p className="text-slate-400 text-lg">Simple steps to start receiving payments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Compare Options",
                description: "See all payment services side by side with real fees and features",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                step: "2",
                title: "Choose Best Fit",
                description: "Pick the service that works for your country and needs",
                icon: <Check className="w-8 h-8" />
              },
              {
                step: "3",
                title: "Start Earning",
                description: "Set up your account and start receiving global payments",
                icon: <DollarSign className="w-8 h-8" />
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-4">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-green-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold title-font mb-4">Stay Updated</h2>
          <p className="text-slate-300 text-lg mb-8">
            Get the latest payment options, fee updates, and freelance tips
          </p>
          <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl font-semibold hover:shadow-2xl transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold title-font mb-4">Support PayBridge</h2>
          <p className="text-slate-300 mb-8">
            This resource is 100% free. If it helped you, consider supporting us!
          </p>
          <a
            href={CONFIG.donationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-500 text-slate-900 rounded-xl font-bold hover:bg-yellow-400 transition"
          >
            <span>☕</span>
            <span>Buy Me a Coffee</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold title-font">{CONFIG.siteName}</span>
            </div>
            <p className="text-slate-400 mb-4">{CONFIG.tagline}</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href={`mailto:${CONFIG.contact.email}`} className="text-slate-400 hover:text-white transition">
                Email
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                GitHub
              </a>
            </div>
            <p className="text-sm text-slate-500">
              © 2026 {CONFIG.siteName}. Made with ❤️ for freelancers worldwide.
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Free resources • No hidden fees • We may earn commission from affiliate links
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl font-semibold hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
