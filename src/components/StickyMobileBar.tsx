import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const StickyMobileBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
      <div className="grid grid-cols-3 divide-x divide-border rtl:divide-x-reverse">
        <a
          href="tel:+966500000000"
          className="flex flex-col items-center justify-center py-3 text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-[10px] font-medium">{t('اتصلي', 'Call')}</span>
        </a>
        <a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-muted-foreground hover:text-[#25D366] transition-colors"
        >
          <FaWhatsapp className="h-5 w-5 mb-1" />
          <span className="text-[10px] font-medium">{t('واتساب', 'WhatsApp')}</span>
        </a>
        <Link
          to="/booking"
          className="flex flex-col items-center justify-center py-3 bg-gradient-cta text-primary-foreground"
        >
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-[10px] font-bold">{t('احجزي', 'Book')}</span>
        </Link>
      </div>
    </div>
  );
};

export default StickyMobileBar;
