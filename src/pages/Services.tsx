import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Scissors, Palette, Smile, SprayCan, HandMetal, Droplets, Sparkles, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ServicesPage = () => {
  const { t } = useLanguage();

  const serviceGroups = [
    {
      category: t('العناية بالشعر', 'Hair Care'),
      services: [
        { icon: <Scissors className="h-7 w-7" />, title: t('قص وتصفيف', 'Cut & Styling'), desc: t('قصة تناسب شكل وجهك وأسلوبك — نسمع لرغبتك ونقترح اللي يبرز جمالك الطبيعي. شعرك يطلع من عندنا بشكل مختلف تماماً.', 'A cut that suits your face shape and style — we listen to your wishes and suggest what highlights your natural beauty.'), duration: t('٣٠-٤٥ دقيقة', '30-45 min'), price: t('من ٨٠ ر.س', 'From 80 SAR') },
        { icon: <Palette className="h-7 w-7" />, title: t('صبغة وألوان', 'Color'), desc: t('صبغة بدون أمونيا من أقوى الماركات العالمية — لون يدوم أسابيع بدون ما يبهت وشعرك يبقى صحي ولامع. نختار اللون اللي يناسب بشرتك.', 'Ammonia-free color from top global brands — lasts weeks without fading while keeping hair healthy and shiny.'), duration: t('٩٠-١٢٠ دقيقة', '90-120 min'), price: t('من ٢٥٠ ر.س', 'From 250 SAR') },
        { icon: <Sparkles className="h-7 w-7" />, title: t('كيراتين وبروتين', 'Keratin & Protein'), desc: t('شعرك الجاف والمتقصف يرجع حيوي ولامع من أول جلسة — علاج عميق يغذي الشعر من الداخل ويخليه ناعم وسهل التصفيف لشهور.', 'Dry, damaged hair comes back to life — deep treatment that nourishes from within, leaving hair smooth and easy to style for months.'), duration: t('١٢٠-١٨٠ دقيقة', '120-180 min'), price: t('من ٥٠٠ ر.س', 'From 500 SAR') },
        { icon: <Zap className="h-7 w-7" />, title: t('فير واستشوار', 'Blow Dry & Curling'), desc: t('تسريحة تدوم طول اليوم — سواء بتحبين شعرك مفرود ولامع أو كيرلي وطبيعي، بنسويلك اللوك المثالي لأي مناسبة.', 'A style that lasts all day — whether you prefer straight and shiny or curly and natural.'), duration: t('٣٠-٦٠ دقيقة', '30-60 min'), price: t('من ١٠٠ ر.س', 'From 100 SAR') },
      ]
    },
    {
      category: t('العناية بالبشرة', 'Skincare'),
      services: [
        { icon: <Smile className="h-7 w-7" />, title: t('تنظيف وفيشل', 'Facial & Cleansing'), desc: t('بشرتك تنور من أول جلسة — تنظيف عميق يزيل الشوائب وترطيب يرجع النضارة. نستخدم منتجات طبية تناسب نوع بشرتك بالضبط.', 'Your skin glows from the first session — deep cleanse removes impurities and hydration restores radiance.'), duration: t('٦٠ دقيقة', '60 min'), price: t('من ١٥٠ ر.س', 'From 150 SAR') },
        { icon: <Sparkles className="h-7 w-7" />, title: t('تقشير وماسكات', 'Peeling & Masks'), desc: t('تقشير لطيف يزيل الجلد الميت ويكشف بشرة جديدة نضرة — ماسكات مغذية تعطي بشرتك إشراقة طبيعية تدوم.', 'Gentle peeling reveals fresh radiant skin — nourishing masks give your skin a natural lasting glow.'), duration: t('٤٥ دقيقة', '45 min'), price: t('من ١٢٠ ر.س', 'From 120 SAR') },
      ]
    },
    {
      category: t('المكياج', 'Makeup'),
      services: [
        { icon: <SprayCan className="h-7 w-7" />, title: t('مكياج سهرات', 'Evening Makeup'), desc: t('مكياج يثبت طول الليل — لوك يخطف الأنظار بدون ما يبان ثقيل. نسوي لوك يبرز ملامحك الحلوة ويناسب المناسبة.', 'Makeup that lasts all night — a stunning look that never feels heavy. We create a look that highlights your beautiful features.'), duration: t('٦٠-٩٠ دقيقة', '60-90 min'), price: t('من ٣٥٠ ر.س', 'From 350 SAR') },
        { icon: <SprayCan className="h-7 w-7" />, title: t('مكياج أعراس', 'Bridal Makeup'), desc: t('يوم عرسك أهم يوم — نخلي إطلالتك خيالية من المكياج للشعر. نجربلك اللوك قبل العرس عشان تكونين مرتاحة ومطمنة.', 'Your wedding day is the most important — we make your look magical. We do a trial before the big day so you\'re confident.'), duration: t('١٢٠ دقيقة', '120 min'), price: t('من ٨٠٠ ر.س', 'From 800 SAR') },
      ]
    },
    {
      category: t('العناية بالأظافر', 'Nail Care'),
      services: [
        { icon: <HandMetal className="h-7 w-7" />, title: t('مانيكير وبديكير', 'Manicure & Pedicure'), desc: t('أظافر مرتبة وألوان تدوم أطول — نهتم بكل تفصيلة من التنظيف للتلميع. أدوات معقمة ومنتجات آمنة.', 'Neat nails with long-lasting color — we care about every detail. Sterilized tools and safe products.'), duration: t('٤٥-٦٠ دقيقة', '45-60 min'), price: t('من ١٢٠ ر.س', 'From 120 SAR') },
      ]
    },
    {
      category: t('خدمات السبا', 'Spa Services'),
      services: [
        { icon: <Droplets className="h-7 w-7" />, title: t('حمام مغربي', 'Moroccan Bath'), desc: t('استرخاء كامل وبشرة ناعمة كالحرير — تقشير طبيعي يزيل الجلد الميت وينعش الجسم. تجربة تنسيك ضغوط الحياة وتخليك تحسين بالتجدد.', 'Complete relaxation and silky skin — natural exfoliation that rejuvenates the body and melts away stress.'), duration: t('٩٠ دقيقة', '90 min'), price: t('من ٢٠٠ ر.س', 'From 200 SAR') },
      ]
    },
    {
      category: t('إزالة الشعر', 'Hair Removal'),
      services: [
        { icon: <Sparkles className="h-7 w-7" />, title: t('واكس', 'Waxing'), desc: t('إزالة شعر بواكس طبيعي لطيف على البشرة — نتائج نظيفة تدوم أسابيع. نستخدم منتجات مهدئة للبشرة بعد الجلسة.', 'Natural gentle wax hair removal — clean results that last weeks. We use soothing products after the session.'), duration: t('٣٠-٦٠ دقيقة', '30-60 min'), price: t('من ٥٠ ر.س', 'From 50 SAR') },
      ]
    },
  ];

  return (
    <div className="pt-24 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="py-16 bg-gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('خدمات لمسة جمال', 'Lamsat Jamal Services')}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{t('اكتشفي كل خدماتنا — واختاري اللي يناسبك', 'Discover all our services — choose what suits you')}</p>
        </div>
      </section>

      {/* Services */}
      {serviceGroups.map((group, gi) => (
        <section key={gi} className={`py-16 ${gi % 2 ? 'bg-secondary' : ''}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{group.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {group.services.map((svc, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="p-6 bg-background rounded-2xl shadow-card border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0 mt-1">{svc.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{svc.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{svc.desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                        <span>⏱ {svc.duration}</span>
                        <span className="text-primary font-bold">{svc.price}</span>
                      </div>
                      <Button asChild size="sm" className="bg-gradient-cta text-primary-foreground">
                        <Link to="/booking">{t('احجزي الآن', 'Book Now')}</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t('ما لقيتي اللي تبينه؟ تواصلي معنا', 'Didn\'t find what you need? Contact us')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5 me-2" />{t('واتساب', 'WhatsApp')}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+966500000000">{t('اتصلي فينا', 'Call Us')}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
