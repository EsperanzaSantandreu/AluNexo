import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import { Logo } from './Logo';

interface NavigationProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: ViewState.HOME, label: 'Inicio' },
    { id: ViewState.ABOUT, label: 'Nosotros' },
    { id: ViewState.SERVICES, label: 'Servicios' },
    { id: ViewState.GALLERY, label: 'Galería' },
    { id: ViewState.CONTACT, label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3 text-nex-dark' : 'bg-transparent py-6 text-white'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="flex flex-col items-start cursor-pointer group"
          onClick={() => onChangeView(ViewState.HOME)}
        >
          <div className="flex items-center gap-3">
             <Logo className={`w-10 h-10 ${scrolled ? 'text-nex-blue' : 'text-white'}`} />
             <div className={`font-display font-bold text-3xl tracking-tight leading-none ${scrolled ? 'text-nex-dark' : 'text-white'}`}>
                Alu<span className="text-nex-blue">Nexo</span>
                <span className="block text-[10px] font-sans tracking-widest font-normal opacity-80">ALUMINIO Y PVC</span>
             </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onChangeView(link.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                currentView === link.id 
                  ? 'text-nex-blue' 
                  : (scrolled ? 'text-nex-slate hover:text-nex-blue' : 'text-white/90 hover:text-white')
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => onChangeView(ViewState.CONTACT)}
            className="bg-nex-blue hover:bg-sky-500 text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-md"
          >
            Contáctanos
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`${scrolled ? 'text-nex-dark' : 'text-white' } md:hidden`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
             {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onChangeView(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-bold uppercase tracking-widest ${
                  currentView === link.id ? 'text-nex-blue' : 'text-nex-dark'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};