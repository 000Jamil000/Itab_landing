import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LayoutContainer from './LayoutContainer';
import { SUPPLIER_REGISTRATION_URL } from '../constants/links';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Меняем стиль после 100px скролла
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LayoutContainer>
        {/* 375 Figma Header (8389:34534):
            - container: 375x90
            - padding: 20px
            - inner row: 335x50
            - logo: 100x35 (y=7.5 inside 50)
            - button: 86x48 (y=1 inside 50)
        */}
        <div className="flex items-center justify-between h-[90px] box-border gap-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/logo.svg" 
              alt="iTAB" 
              className="h-[35px] w-[100px] transition-all duration-300 min-[744px]:h-[42px] min-[744px]:w-[120px]"
              style={{
                filter: isScrolled 
                  ? 'brightness(0) saturate(100%) invert(59%) sepia(36%) saturate(625%) hue-rotate(64deg) brightness(95%) contrast(87%)' 
                  : 'none'
              }}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden min-744:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('conditions')}
              className={`text-button transition-colors ${
                isScrolled 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white hover:text-white/80'
              } whitespace-nowrap tracking-normal`}
            >
              Условия сотрудничества
            </button>
            <button 
              onClick={() => scrollToSection('steps')}
              className={`text-button transition-colors ${
                isScrolled 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white hover:text-white/80'
              } whitespace-nowrap tracking-normal`}
            >
              С чего начать
            </button>
            <button 
              onClick={() => scrollToSection('feedback')}
              className={`text-button transition-colors ${
                isScrolled 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white hover:text-white/80'
              } whitespace-nowrap tracking-normal`}
            >
              Отзывы
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href={SUPPLIER_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6CB651] hover:bg-[#5a9d35] text-white text-button transition-colors w-[86px] h-[48px] px-[20px] py-[12px] rounded-[16px] flex items-center justify-center min-[744px]:w-auto min-[744px]:h-auto min-[744px]:px-5 min-[744px]:py-3 min-[744px]:rounded-2xl"
          >
            Войти
          </a>
        </div>
      </LayoutContainer>
    </motion.header>
  );
};

export default Header;
