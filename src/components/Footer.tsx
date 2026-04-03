import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">لمسة جمال</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              {t(
                'صالون متكامل للعناية بجمالك — نقدم أرقى خدمات التجميل بأيدي خبيرات متخصصات في قلب الرياض. جمالك أمانة عندنا.',
                'A complete beauty salon — we offer the finest beauty services by specialized experts in the heart of Riyadh. Your beauty is our trust.'
              )}
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/50 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/50 transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">{t('الرئيسية', 'Home')}</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">{t('خدماتنا', 'Services')}</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-foreground transition-colors">{t('أعمالنا', 'Our Work')}</Link></li>
              <li><Link to="/booking" className="hover:text-primary-foreground transition-colors">{t('احجزي موعد', 'Book Now')}</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">{t('من نحن', 'About')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">{t('تواصلي معنا', 'Contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('تواصلي معنا', 'Contact Us')}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+966500000000" dir="ltr">+966 50 000 0000</a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="h-4 w-4 text-primary" />
                <a href="https://wa.me/966500000000" dir="ltr">+966 50 000 0000</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>{t('الرياض، حي الملقا، شارع الأمير محمد بن عبدالعزيز', 'Riyadh, Al Malqa, Prince Mohammed Bin Abdulaziz St')}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('ساعات العمل', 'Working Hours')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{t('السبت - الخميس: ١٠ ص - ١٠ م', 'Sat - Thu: 10 AM - 10 PM')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{t('الجمعة: ٢ م - ١٠ م', 'Fri: 2 PM - 10 PM')}</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-primary-foreground/50">
              {t('🅿️ موقف سيارات مجاني متوفر', '🅿️ Free parking available')}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} لمسة جمال — {t('جميع الحقوق محفوظة', 'All Rights Reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
