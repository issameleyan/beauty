import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const BookingPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '', notes: '' });

  const services = [
    t('قص وتصفيف الشعر', 'Hair Cut & Styling'),
    t('صبغات وألوان', 'Hair Color'),
    t('كيراتين / بروتين', 'Keratin / Protein'),
    t('فير / استشوار', 'Blow Dry / Curling'),
    t('العناية بالبشرة', 'Skincare'),
    t('مكياج سهرة', 'Evening Makeup'),
    t('مكياج عروس', 'Bridal Makeup'),
    t('مانيكير / بديكير', 'Manicure / Pedicure'),
    t('حمام مغربي', 'Moroccan Bath'),
    t('إزالة شعر', 'Hair Removal'),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `مرحباً، أبغى أحجز موعد:\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالخدمة: ${formData.service}\nالتاريخ: ${formData.date}\nملاحظات: ${formData.notes}`;
    window.open(`https://wa.me/966500000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-16 lg:pb-0">
      <section className="py-16 bg-gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('احجزي موعدك', 'Book Your Appointment')}</h1>
          <p className="text-lg text-primary-foreground/80">{t('اختاري الوقت اللي يناسبك — وإحنا نهتم بالباقي', 'Choose your preferred time — we\'ll handle the rest')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 border border-border/50 space-y-5">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">{t('الاسم', 'Name')} *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none" placeholder={t('اسمك الكريم', 'Your name')} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">{t('رقم الهاتف', 'Phone')} *</label>
                  <input type="tel" required dir="ltr" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none" placeholder="+966 5X XXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">{t('الخدمة المطلوبة', 'Service')} *</label>
                  <select required value={formData.service} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                    <option value="">{t('اختاري الخدمة', 'Select service')}</option>
                    {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">{t('التاريخ المفضل', 'Preferred Date')}</label>
                  <input type="date" value={formData.date} onChange={e => setFormData(p => ({ ...p, date: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">{t('ملاحظات', 'Notes')}</label>
                  <textarea rows={3} value={formData.notes} onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none" placeholder={t('أي شي تبين تضيفينه', 'Anything you\'d like to add')} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-cta text-primary-foreground text-base">
                  <FaWhatsapp className="h-5 w-5 me-2" />
                  {t('أرسلي الطلب عبر واتساب', 'Send via WhatsApp')}
                </Button>
                <p className="text-center text-xs text-muted-foreground">{t('الحجز بياخذ دقيقة — وبنأكدلك الموعد خلال ساعة', 'Booking takes a minute — we\'ll confirm within an hour')}</p>
              </form>
            </motion.div>

            {/* Side info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl shadow-card p-8 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-4">{t('طرق الحجز', 'Booking Methods')}</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors">
                    <FaWhatsapp className="h-8 w-8 text-[#25D366]" />
                    <div>
                      <p className="font-bold text-foreground text-sm">{t('واتساب', 'WhatsApp')}</p>
                      <p className="text-xs text-muted-foreground">{t('أسرع طريقة للحجز', 'Fastest way to book')}</p>
                    </div>
                  </a>
                  <a href="tel:+966500000000" className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Phone className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-bold text-foreground text-sm">{t('اتصلي فينا', 'Call Us')}</p>
                      <p className="text-xs text-muted-foreground" dir="ltr">+966 50 000 0000</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-card p-8 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {t('ساعات العمل', 'Working Hours')}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>{t('السبت', 'Saturday')}</span><span>١٠ ص - ١٠ م</span></li>
                  <li className="flex justify-between"><span>{t('الأحد', 'Sunday')}</span><span>١٠ ص - ١٠ م</span></li>
                  <li className="flex justify-between"><span>{t('الاثنين', 'Monday')}</span><span>١٠ ص - ١٠ م</span></li>
                  <li className="flex justify-between"><span>{t('الثلاثاء', 'Tuesday')}</span><span>١٠ ص - ١٠ م</span></li>
                  <li className="flex justify-between"><span>{t('الأربعاء', 'Wednesday')}</span><span>١٠ ص - ١٠ م</span></li>
                  <li className="flex justify-between"><span>{t('الخميس', 'Thursday')}</span><span>١٠ ص - ١٠ م</span></li>
                  <li className="flex justify-between"><span>{t('الجمعة', 'Friday')}</span><span>٢ م - ١٠ م</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
