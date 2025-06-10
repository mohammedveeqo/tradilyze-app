// components/homepage/Navbar.tsx
import { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { navItems } from '../../constants/navigation';

interface NavbarProps {
  scrollY: number;
}

export const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrollY > 0 ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
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
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
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
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 border border-gray-600 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-200 rounded-lg font-medium">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
