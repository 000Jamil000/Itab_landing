import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LayoutContainer from './LayoutContainer';

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
        <div className="flex items-center justify-between h-[90px] gap-20 max-744:gap-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/logo.svg" 
              alt="iTAB" 
              className="h-[42px] w-[120px] transition-all duration-300 max-375:h-[35px] max-375:w-[100px]"
              style={{
                filter: isScrolled 
                  ? 'brightness(0) saturate(100%) invert(59%) sepia(36%) saturate(625%) hue-rotate(64deg) brightness(95%) contrast(87%)' 
                  : 'none'
              }}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('conditions')}
              className={`text-button transition-colors ${
                isScrolled 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Условия сотрудничества
            </button>
            <button 
              onClick={() => scrollToSection('steps')}
              className={`text-button transition-colors ${
                isScrolled 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              С чего начать
            </button>
            <button 
              onClick={() => scrollToSection('feedback')}
              className={`text-button transition-colors ${
                isScrolled 
                  ? 'text-secondary hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Отзывы
            </button>
          </nav>

          {/* CTA Button */}
          <button className="px-5 py-3 bg-[#6CB651] hover:bg-[#5a9d35] text-white text-button rounded-2xl transition-colors">
            Войти
          </button>
        </div>
      </LayoutContainer>
    </motion.header>
  );
};

export default Header;
