import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', type: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `${formData.type}\n\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالرسالة: ${formData.message}`;
    window.open(`https://wa.me/966500000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-16 lg:pb-0">
      <section className="py-16 bg-gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('تواصلي معنا', 'Contact Us')}</h1>
          <p className="text-lg text-primary-foreground/80">{t('نحب نسمع منك — راسلينا أو مري علينا', 'We\'d love to hear from you')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 border border-border/50 space-y-5">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">{t('الاسم', 'Name')} *</label>
                <input type="text" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">{t('رقم الهاتف', 'Phone')} *</label>
                <input type="tel" required dir="ltr" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">{t('نوع الاستفسار', 'Inquiry Type')}</label>
                <select value={formData.type} onChange={e => setFormData(p => ({ ...p, type: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                  <option value="">{t('اختاري', 'Select')}</option>
                  <option value={t('حجز', 'Booking')}>{t('حجز', 'Booking')}</option>
                  <option value={t('استفسار', 'Inquiry')}>{t('استفسار', 'Inquiry')}</option>
                  <option value={t('شكوى', 'Complaint')}>{t('شكوى', 'Complaint')}</option>
                  <option value={t('اقتراح', 'Suggestion')}>{t('اقتراح', 'Suggestion')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">{t('الرسالة', 'Message')} *</label>
                <textarea rows={4} required value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-cta text-primary-foreground text-base">
                {t('أرسلي الرسالة', 'Send Message')}
              </Button>
            </motion.form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl shadow-card p-8 border border-border/50 space-y-5">
                <a href="tel:+966500000000" className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                  <div><p className="font-bold text-sm text-foreground">{t('اتصلي فينا', 'Call Us')}</p><p className="text-xs text-muted-foreground" dir="ltr">+966 50 000 0000</p></div>
                </a>
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors">
                  <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                  <div><p className="font-bold text-sm text-foreground">{t('واتساب', 'WhatsApp')}</p><p className="text-xs text-muted-foreground" dir="ltr">+966 50 000 0000</p></div>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors">
                  <Instagram className="h-6 w-6 text-pink-500" />
                  <div><p className="font-bold text-sm text-foreground">{t('انستقرام', 'Instagram')}</p><p className="text-xs text-muted-foreground">@lamsat_jamal</p></div>
                </a>
                <div className="flex items-start gap-4 p-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div><p className="font-bold text-sm text-foreground">{t('العنوان', 'Address')}</p><p className="text-xs text-muted-foreground">{t('الرياض، حي الملقا، شارع الأمير محمد بن عبدالعزيز', 'Riyadh, Al Malqa, Prince Mohammed Bin Abdulaziz St')}</p></div>
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-card p-8 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />{t('ساعات العمل', 'Working Hours')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>{t('السبت - الخميس', 'Sat - Thu')}</span><span>١٠:٠٠ ص - ١٠:٠٠ م</span></li>
                  <li className="flex justify-between"><span>{t('الجمعة', 'Friday')}</span><span>٢:٠٠ م - ١٠:٠٠ م</span></li>
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">🅿️ {t('موقف سيارات مجاني', 'Free parking available')}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-card max-w-5xl mx-auto h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.8!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('موقع الصالون', 'Salon Location')}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
