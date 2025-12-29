import React from "react";

const Footer = () => (
  <footer className="bg-black bg-gradient-to-r from-gradientStart to-gradientEnd text-white py-12">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-400 mb-4">Rishi.dev</div>
        <p className="text-white mb-6">
          Building the future, one line of code at a time.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/Rishidubey15/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
            <i data-lucide="github" className="w-6 h-6"></i>
          </a>
          <a href="https://www.linkedin.com/in/rishi-dubey-703533217/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
            <i data-lucide="linkedin" className="w-6 h-6"></i>
          </a>
          <a href="https://leetcode.com/u/rishi_dubey15/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors">
            <i data-lucide="code" className="w-6 h-6"></i>
          </a>
        </div>
        <div className="border-t border-orange-400 pt-8">
          <p className="text-white">
            © 2024 Rishi Dubey. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
