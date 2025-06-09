import { ArrowRight, Menu, X, Brain, TrendingUp, Camera, BarChart3, Download, CheckCircle, Users, Target, Zap, Chrome, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

 useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.history.replaceState(null, document.title, window.location.pathname);
      }, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
<nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
  scrollY > 0  // Changed from 50 to 0 for immediate effect
    ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
    : 'bg-transparent'
}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Chartilyze
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Pricing
            </a>
            <button className="px-4 py-2 border border-gray-600 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-200 rounded-lg font-medium">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute w-full bg-black/95 backdrop-blur-xl border-b border-gray-800/50 md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors py-2">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors py-2">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
              <button className="w-full mt-4 px-4 py-2 border border-gray-600 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-200 rounded-lg font-medium">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8">
              <Chrome className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-300">New: TradingView Browser Extension is Live</span>
            </div>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
              Your AI-powered
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                trading journal
              </span>
            </h1>
            
            <p className="mb-12 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stop filling endless spreadsheets. Chartilyze automatically captures your TradingView trades, 
              analyzes your psychology, and turns your trading data into meaningful insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 rounded-lg flex items-center justify-center">
                <Chrome className="w-5 h-5 mr-2" />
                Install Extension
              </button>
              <button className="border border-gray-600 hover:border-emerald-500 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg text-white">
                View Demo
              </button>
            </div>
          </div>

          {/* Hero Image/Trading Dashboard Mock */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="mx-auto max-w-5xl">
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between bg-gray-800/50 px-6 py-4 border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Chartilyze Dashboard</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Connected to TradingView
                    </span>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="text-emerald-400 text-2xl font-bold">73.2%</div>
                      <div className="text-gray-400 text-sm">Win Rate</div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="text-blue-400 text-2xl font-bold">2.3x</div>
                      <div className="text-gray-400 text-sm">Avg R:R</div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="text-purple-400 text-2xl font-bold">142</div>
                      <div className="text-gray-400 text-sm">Trades Logged</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Recent Trade: EURUSD</h4>
                      <span className="text-emerald-400 text-sm">+2.3R</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      AI Analysis: "Great patience waiting for the breakout confirmation. 
                      Risk management was perfect - you followed your 1% rule."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Chartilyze
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From trade to insight in seconds - completely automated.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Place Trade",
                description: "Trade on TradingView like you normally do",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                step: "2", 
                title: "Auto Capture",
                description: "Extension captures chart, data, and context",
                icon: <Camera className="w-6 h-6" />
              },
              {
                step: "3",
                title: "AI Analysis", 
                description: "AI evaluates strategy, psychology, and rules",
                icon: <Brain className="w-6 h-6" />
              },
              {
                step: "4",
                title: "Get Insights",
                description: "Review performance and improvement areas",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                step: "5",
                title: "Improve",
                description: "Apply learnings to become a better trader",
                icon: <Target className="w-6 h-6" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-600 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                What makes Chartilyze
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> unique?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "TradingView Integration",
                    description: "Browser extension captures everything automatically - no manual entry needed",
                    icon: <Chrome className="w-6 h-6" />
                  },
                  {
                    title: "AI-Powered Psychology",
                    description: "Get insights into your trading mindset and emotional patterns",
                    icon: <Brain className="w-6 h-6" />
                  },
                  {
                    title: "Visual Trade Journal",
                    description: "Chart screenshots with your annotations, not just boring spreadsheets",
                    icon: <Camera className="w-6 h-6" />
                  },
                  {
                    title: "Community Learning",
                    description: "Share trades anonymously and learn from other successful traders",
                    icon: <Users className="w-6 h-6" />
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-gray-800/30 hover:shadow-lg hover:shadow-emerald-500/10">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
             <div className="relative">
              <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-center">Chartilyze vs Others</h3>
                <div className="space-y-4">
                  {[
                    { feature: "Browser extension auto-logging", tradilyze: true, others: false },
                    { feature: "TradingView integration", tradilyze: true, others: false },
                    { feature: "AI trade analysis", tradilyze: true, others: false },
                    { feature: "Psychology tracking", tradilyze: true, others: false },
                    { feature: "Visual chart capture", tradilyze: true, others: false },
                    { feature: "Community feedback", tradilyze: true, others: false }
                  ].map((row, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0">
                      <span className="text-gray-300 text-sm">{row.feature}</span>
                      <div className="flex gap-8">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          row.tradilyze ? 'bg-emerald-500' : 'bg-gray-600'
                        }`}>
                          {row.tradilyze ? <CheckCircle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          row.others ? 'bg-emerald-500' : 'bg-gray-600'
                        }`}>
                          {row.others ? <CheckCircle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-4">
                  <span>Chartilyze</span>
                  <span>Other Journals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple,
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> transparent </span>
              pricing
            </h2>
            <p className="text-xl text-gray-400">Start free, upgrade when you're ready to level up your trading.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: ["10 trades per month", "Basic AI analysis", "Chart screenshots", "Personal journal"],
                popular: false,
                description: "Perfect for beginners"
              },
              {
                name: "Pro Trader", 
                price: "$19",
                period: "per month",
                features: ["Unlimited trades", "Advanced AI insights", "Psychology tracking", "Rule adherence monitoring", "Performance analytics", "Priority support"],
                popular: true,
                description: "Most popular for serious traders"
              },
              {
                name: "Trading Team",
                price: "$49", 
                period: "per month",
                features: ["Everything in Pro", "Team collaboration", "Shared strategies", "Group analytics", "Custom integrations", "Dedicated support"],
                popular: false,
                description: "For trading groups & firms"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-emerald-900/30 to-emerald-900/10 border-2 border-emerald-500 shadow-xl shadow-emerald-500/20' 
                    : 'bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 font-semibold transition-all duration-300 rounded-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-xl hover:shadow-emerald-500/25'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {index === 0 ? 'Start Free' : 'Start Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-emerald-900/20 to-blue-900/20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to level up your trading?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of traders who've improved their consistency and psychology with Chartilyze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 rounded-lg flex items-center justify-center">
              <Chrome className="w-5 h-5 mr-2" />
              Install Extension - Free
            </button>
            <button className="border border-gray-600 hover:border-emerald-500 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg text-white">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gradient-to-b from-transparent to-gray-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Product",
                links: ["Extension", "Features", "Pricing", "Demo"]
              },
              {
                title: "Resources",
                links: ["Blog", "Trading Psychology", "Tutorials", "Help Center"]
              },
              {
                title: "Community",
                links: ["Discord", "Reddit", "Twitter", "Feedback"]
              },
              {
                title: "Company",
                links: ["About", "Privacy", "Terms", "Contact"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Chartilyze
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Chartilyze. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}

    </div>
  );
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
