import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navItems = [
    { path: '/', label: t('الرئيسية', 'Home') },
    { path: '/services', label: t('خدماتنا', 'Services') },
    { path: '/gallery', label: t('أعمالنا', 'Our Work') },
    { path: '/booking', label: t('احجزي موعد', 'Book Now') },
    { path: '/about', label: t('من نحن', 'About') },
    { path: '/contact', label: t('تواصلي معنا', 'Contact') },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl shadow-soft' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 lg:py-4">
          <Link to="/" className="text-2xl font-bold text-foreground">
            <span className="text-gradient-primary">لمسة جمال</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="text-sm font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <Button asChild className="bg-gradient-cta hover:opacity-90 text-primary-foreground">
              <Link to="/booking">{t('احجزي موعد', 'Book Now')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="text-xs font-medium px-2 py-1 rounded-full border border-border"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 bg-background/95 backdrop-blur-xl rounded-2xl mt-2 border p-6 shadow-card">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-base font-medium ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-4 bg-gradient-cta text-primary-foreground">
              <Link to="/booking">{t('احجزي موعد', 'Book Now')}</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
