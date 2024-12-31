import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PS
          </h1>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg  md:hidden outline-none mobile-menu-button hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-3xl">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button
              onClick={toggleDark}
              className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-4"
            >
              {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-2">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <button
              onClick={toggleDark}
              className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-4"
            >
              {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
            </button> 
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="relative px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center" />
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
  >
    {children}
  </a>
);

export default Header;