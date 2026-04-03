import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { GradientCard } from '@/components/ui/gradient-card';
import { Button } from '@/components/ui/button';
import { Scissors, Palette, Smile, SprayCan, HandMetal, Droplets, Sparkles, Zap, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const servicesData = {
  ar: [
    { title: 'قص وتصفيف الشعر', desc: 'قصة تناسب شكل وجهك وأسلوبك — نسمع لرغبتك ونقترح اللي يبرز جمالك الطبيعي. شعرك يطلع من عندنا بشكل مختلف تماماً.', badge: 'الأكثر طلباً', badgeColor: '#C06C84', gradient: 'rose' as const, img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop' },
    { title: 'صبغات وألوان', desc: 'صبغة بدون أمونيا من أقوى الماركات العالمية — لون يدوم أسابيع بدون ما يبهت وشعرك يبقى صحي ولامع.', badge: 'لون يدوم أطول', badgeColor: '#D4A373', gradient: 'amber' as const, img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=300&auto=format&fit=crop' },
    { title: 'كيراتين وبروتين', desc: 'شعرك الجاف والمتقصف يرجع حيوي ولامع من أول جلسة — علاج عميق يغذي الشعر من الداخل ويخليه ناعم لشهور.', badge: 'نتائج فورية', badgeColor: '#6D6875', gradient: 'purple' as const, img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=300&auto=format&fit=crop' },
    { title: 'العناية بالبشرة', desc: 'بشرتك تنور من أول فيشل — تنظيف عميق وترطيب يرجع النضارة. منتجات طبية تناسب نوع بشرتك بالضبط.', badge: 'بشرة مشرقة', badgeColor: '#14B8A6', gradient: 'teal' as const, img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop' },
    { title: 'مكياج سهرات وأعراس', desc: 'مكياج يثبت طول الليل — لوك يخطف الأنظار بدون ما يبان ثقيل. نسوي لوك يبرز ملامحك الحلوة.', badge: 'يثبت طول الليل', badgeColor: '#E8998D', gradient: 'pink' as const, img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=300&auto=format&fit=crop' },
    { title: 'حمام مغربي وسبا', desc: 'استرخاء كامل وبشرة ناعمة كالحرير — تقشير طبيعي يزيل الجلد الميت وينعش الجسم. تجربة تنسيك ضغوط الحياة.', badge: 'استرخاء كامل', badgeColor: '#0EA5E9', gradient: 'sky' as const, img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=300&auto=format&fit=crop' },
  ],
  en: [
    { title: 'Hair Cut & Styling', desc: 'A cut that suits your face shape and style — we listen to your wishes and suggest what highlights your natural beauty.', badge: 'Most Popular', badgeColor: '#C06C84', gradient: 'rose' as const, img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop' },
    { title: 'Hair Color', desc: 'Ammonia-free color from top global brands — lasts weeks without fading while keeping hair healthy and shiny.', badge: 'Long-Lasting Color', badgeColor: '#D4A373', gradient: 'amber' as const, img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=300&auto=format&fit=crop' },
    { title: 'Keratin & Protein', desc: 'Dry, damaged hair comes back to life — deep treatment that nourishes from within, leaving hair smooth for months.', badge: 'Instant Results', badgeColor: '#6D6875', gradient: 'purple' as const, img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=300&auto=format&fit=crop' },
    { title: 'Skincare', desc: 'Your skin glows from the first facial — deep cleanse and hydration that restores radiance with medical-grade products.', badge: 'Glowing Skin', badgeColor: '#14B8A6', gradient: 'teal' as const, img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop' },
    { title: 'Event & Bridal Makeup', desc: 'Makeup that lasts all night — a stunning look that never feels heavy. We highlight your beautiful features.', badge: 'All-Night Hold', badgeColor: '#E8998D', gradient: 'pink' as const, img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=300&auto=format&fit=crop' },
    { title: 'Moroccan Bath & Spa', desc: 'Complete relaxation and silky skin — natural exfoliation that rejuvenates the body and melts away stress.', badge: 'Full Relaxation', badgeColor: '#0EA5E9', gradient: 'sky' as const, img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=300&auto=format&fit=crop' },
  ],
};

const ServicesPage = () => {
  const { t, lang } = useLanguage();
  const data = lang === 'ar' ? servicesData.ar : servicesData.en;

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
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">{t('خدمات لمسة جمال', 'Lamsat Jamal Services')}</h1>
          <p className="mt-4 text-lg text-primary-foreground/90">{t('اكتشفي كل خدماتنا — واختاري اللي يناسبك', 'Discover all our services — choose what suits you')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((s, i) => (
            <GradientCard
              key={i}
              gradient={s.gradient}
              badgeText={s.badge}
              badgeColor={s.badgeColor}
              title={s.title}
              description={s.desc}
              ctaText={t('احجزي الآن', 'Book Now')}
              ctaHref="/booking"
              imageUrl={s.img}
            />
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <div className="grid items-center gap-8 overflow-hidden rounded-2xl border-2 border-primary bg-background shadow-sm md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                {t('مو متأكدة وش تحتاجين؟', 'Not Sure What You Need?')}
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                {t(
                  'لا تقلقين — تواصلي معنا وخلينا نساعدك تختارين الخدمة المناسبة. بدون أي التزام.',
                  "Don't worry — contact us and let us help you choose the right service. No commitment required."
                )}
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  t('استشارة مجانية بدون أي رسوم', 'Free consultation with no fees'),
                  t('خبيرات متخصصات يساعدونك', 'Specialized experts to help you'),
                  t('أسعار واضحة بدون مفاجآت', 'Transparent pricing with no surprises'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-cta border-0 text-primary-foreground hover:opacity-90">
                  <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-5 w-5 me-2" />
                    {t('تواصلي عبر واتساب', 'Chat on WhatsApp')}
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/booking">{t('صفحة الحجز', 'Booking Page')}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block h-full">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                alt={t('استشارة مجانية', 'Free consultation')}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
