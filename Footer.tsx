import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NexGen Digital</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses through cutting-edge digital solutions. We create exceptional web experiences that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Web Development
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Mobile Apps
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Digital Marketing
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                UI/UX Design
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">hello@nexgendigital.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 NexGen Digital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;