import { Phone, MessageCircle, Shield, Star, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const { t } = useLanguage();

  const trustPoints = [
    { icon: Shield, text: t('+٥٠٠ عميلة سعيدة', '500+ Happy Clients') },
    { icon: Star, text: t('تقييم ٤.٩ من ٥ نجوم', '4.9 out of 5 star rating') },
    { icon: Clock, text: t('رد خلال ٥ دقائق', 'Response within 5 minutes') },
    { icon: CheckCircle, text: t('نتائج مضمونة', 'Guaranteed Results') },
  ];

  return (
    <div>
      {/* Hero with background image */}
      <section className="relative section-padding text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        </div>
        <div className="container-tight relative z-10 py-8 md:py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary-foreground md:text-5xl"
          >
            {t('احجزي موعدك', 'Book Your Appointment')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-primary-foreground/90"
          >
            {t('اختاري الوقت اللي يناسبك — وإحنا نهتم بالباقي', "Choose your preferred time — we'll handle the rest")}
          </motion.p>
        </div>
      </section>

      {/* Main booking section */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left — Image + Trust */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                  alt={t('صالون لمسة جمال', 'Lamsat Jamal Salon')}
                  className="h-80 w-full object-cover lg:h-96"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-bold text-white">
                    {t('صالونا جاهز لاستقبالك', 'Our salon is ready for you')}
                  </p>
                  <p className="text-sm text-white/80">
                    {t('بيئة مريحة، منتجات عالمية، خبيرات متخصصات', 'Comfortable environment, global products, expert team')}
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3">
                {trustPoints.map((tp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2.5 rounded-lg border border-border bg-background p-3 text-sm"
                  >
                    <tp.icon className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground font-medium">{tp.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Client quote */}
              <div className="rounded-xl bg-section-alt border border-border p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm italic text-muted-foreground">
                      "{t('حجزت عبر واتساب وردوا علي خلال دقيقتين. التجربة كانت ممتازة من أول لحظة!', 'I booked via WhatsApp and they replied within 2 minutes. The experience was excellent from the very first moment!')}"
                    </p>
                    <p className="mt-2 text-xs font-semibold text-foreground">{t('— نورة ع.، عميلة', '— Noura A., Client')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Booking options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                  {t('اختاري الطريقة اللي تناسبك', 'Choose What Works for You')}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {t('الحجز بياخذ أقل من دقيقة — ونضمنلك أفضل تجربة', 'Booking takes less than a minute — and we guarantee the best experience')}
                </p>
              </div>

              {/* WhatsApp — Primary */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5 p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <FaWhatsapp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{t('احجزي عبر واتساب', 'Book via WhatsApp')}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        <Sparkles className="h-3 w-3" />
                        {t('الأسرع', 'Fastest')}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {t(
                      'أرسلي رسالة واحدة وفريقنا يرتب لك كل شي — الرد خلال ٥ دقائق أو أقل. لا تحتاجين تتصلين أو تنتظرين.',
                      'Send one message and our team arranges everything — reply within 5 minutes or less.'
                    )}
                  </p>
                  <Button asChild size="lg" className="w-full gradient-cta border-0 text-primary-foreground hover:opacity-90">
                    <a href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%A8%D8%BA%D9%89%20%D8%A3%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="h-5 w-5 me-2" />
                      {t('ابدئي المحادثة الآن', 'Start Chat Now')}
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Call */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-lg hover:border-primary/30"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{t('اتصلي فينا مباشرة', 'Call Us Directly')}</h3>
                    <p className="text-xs text-muted-foreground">{t('متاحين ١٠ص - ١٠م', 'Available 10AM - 10PM')}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {t(
                    'تبين تسألين عن خدمة معينة أو تحجزين مباشرة؟ فريقنا يرد عليك بكل التفاصيل ويساعدك تختارين الموعد المناسب.',
                    'Want to ask about a specific service or book directly? Our team will answer with all details.'
                  )}
                </p>
                <Button asChild size="lg" className="w-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:+966500000000">
                    <Phone size={18} className="me-2" />
                    +966 50 000 0000
                  </a>
                </Button>
              </motion.div>

              {/* Urgency note */}
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 text-center">
                <p className="text-sm font-semibold text-primary">
                  {t('💡 المواعيد محدودة هالأسبوع — احجزي الآن قبل لا تنتهي', '💡 Limited slots this week — book now before they\'re gone')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                {t('جمالك يستاهل الأفضل', 'You Deserve the Best')}
              </h2>
              <p className="mb-3 text-muted-foreground leading-relaxed">
                {t(
                  'في لمسة جمال، ما نقدم خدمة عادية — نقدم تجربة تغير إحساسك بنفسك. كل عميلة عندنا تحصل على اهتمام خاص باستخدام أفضل المنتجات العالمية.',
                  "At Lamsat Jamal, we don't just provide a service — we provide an experience that changes how you feel about yourself."
                )}
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  t('منتجات عالمية أصلية ١٠٠٪', '100% authentic global products'),
                  t('خبيرات بخبرة +٥ سنوات', 'Experts with 5+ years experience'),
                  t('تعقيم كامل وخصوصية تامة', 'Full sterilization and complete privacy'),
                  t('أسعار واضحة بدون مفاجآت', 'Clear pricing with no surprises'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="gradient-cta border-0 text-primary-foreground hover:opacity-90">
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-5 w-5 me-2" />
                  {t('احجزي موعدك الآن', 'Book Your Appointment')}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop"
                alt={t('صالون لمسة جمال', 'Lamsat Jamal Salon')}
                className="h-80 w-full object-cover lg:h-[420px]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
