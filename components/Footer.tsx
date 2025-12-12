import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nex-dark text-white pt-16 pb-8 border-t-4 border-nex-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">


          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <div className="text-white font-display font-bold text-2xl tracking-tight">
                Alu<span className="text-nex-blue">Nexo</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expertos en carpintería de aluminio, PVC y sistemas de vidrio. Transformamos tu hogar con soluciones modernas y eficientes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg mb-6 text-nex-blue">Páginas</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-nex-blue transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-nex-blue transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-nex-blue transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-nex-blue transition-colors">Galería</a></li>
              <li><a href="#" className="hover:text-nex-blue transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg mb-6 text-nex-blue">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Carpintería Aluminio</li>
              <li>Carpintería PVC</li>
              <li>Vidrio y Cristalería</li>
              <li>Sistemas de Vidrio</li>
              <li>Cortina Cristal</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg mb-6 text-nex-blue">Contáctanos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-nex-blue shrink-0" />
                <span>Carrer de sa Torre, 35, 07141 Marratxinet, Illes Balears</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-nex-blue shrink-0" />
                <span>+34 667 405 156</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-nex-blue shrink-0" />
                <span>info@alunexo.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© Copyright AluNexo 2024.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook className="w-5 h-5 hover:text-nex-blue cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 hover:text-nex-blue cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-nex-blue cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};