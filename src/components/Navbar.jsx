import { useState } from 'react';
import { Sun, Moon, Menu as MenuIcon, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'Menu', 'Gallery', 'Contact'];

  return (
    <nav className="fixed w-full top-0 left-0 z-40 bg-coffee-50/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-coffee-100/20 dark:border-zinc-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold text-coffee-900 dark:text-coffee-50 tracking-wide">
          VIBE<span className="text-coffee-600">.</span>CAFÉ
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-zinc-700 dark:text-zinc-300 hover:text-coffee-600 dark:hover:text-coffee-400 font-medium transition-colors">
              {link}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-coffee-100/50 dark:bg-zinc-800 text-coffee-900 dark:text-white transition-all cursor-pointer">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-full text-zinc-700 dark:text-zinc-300">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-700 dark:text-zinc-300">
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full left-0 bg-coffee-50 dark:bg-zinc-950 px-6 py-6 space-y-4 shadow-xl border-b border-zinc-200 dark:border-zinc-800"
          >
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-700 dark:text-zinc-300">
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};