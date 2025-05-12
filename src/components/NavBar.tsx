import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';
import AccountMenu from './AccountMenu';
import {getStoredTheme, applyTheme, type Theme } from '../utils/themeController';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getStoredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <nav className="nav-primary shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex-1"></div>

        <h1 className="text-2xl font-bold">Loren AA</h1>
        
        <div className="flex-1 flex justify-end items-center gap-4">
          
          
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <FaMoon className="text-xl" />
            ) : (
              <FaSun className="text-xl" />
            )}
          </button>

          
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-full transition-colors"
            >
              <FaUser className="text-xl" />
            </button>
            {isMenuOpen && <AccountMenu onClose={() => setIsMenuOpen(false)} />}
          </div>


        </div>
      </div>
    </nav>
  );
} 