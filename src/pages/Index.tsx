import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Star, Sparkles, ShieldCheck, Award, Heart, Scissors, Palette, Smile, HandMetal, Droplets, SprayCan } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-salon.jpg';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import FeatureCards from '@/components/ui/feature-cards';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => {
  const { t } = useLanguage();

  const trustItems = [
    { icon: <Heart className="h-6 w-6" />, text: t('+٥٠٠ عميلة سعيدة', '500+ Happy Clients') },
    { icon: <Award className="h-6 w-6" />, text: t('منتجات عالمية معتمدة', 'Certified Global Products') },
    { icon: <Sparkles className="h-6 w-6" />, text: t('خبيرات متخصصات', 'Specialized Experts') },
    { icon: <ShieldCheck className="h-6 w-6" />, text: t('نظافة وتعقيم كامل', 'Full Hygiene & Sterilization') },
  ];

  const services = [
    { icon: <Scissors className="h-8 w-8" />, title: t('قص وتصفيف الشعر', 'Hair Cut & Styling'), desc: t('قصة تناسب وجهك وشخصيتك — شعرك يطلع من عندنا أحلى ما يكون', 'A cut that suits your face and personality — your hair leaves looking its best') },
    { icon: <Palette className="h-8 w-8" />, title: t('صبغات وألوان', 'Hair Color'), desc: t('صبغة بدون أمونيا — لون يدوم أسابيع وشعر يبقى صحي ولامع', 'Ammonia-free color — lasts weeks while keeping hair healthy and shiny') },
    { icon: <Smile className="h-8 w-8" />, title: t('العناية بالبشرة', 'Skincare'), desc: t('بشرتك تنور من أول فيشل — تنظيف عميق وترطيب يرجع النضارة', 'Your skin glows from the first facial — deep cleanse and hydration that restores radiance') },
    { icon: <SprayCan className="h-8 w-8" />, title: t('مكياج سهرات وأعراس', 'Event & Bridal Makeup'), desc: t('مكياج يثبت طول الليل — لوك يخطف الأنظار بدون ما يبان ثقيل', 'Makeup that lasts all night — a stunning look that never feels heavy') },
    { icon: <HandMetal className="h-8 w-8" />, title: t('العناية بالأظافر', 'Nail Care'), desc: t('مانيكير وبديكير احترافي — أظافر مرتبة وألوان تدوم أطول', 'Professional manicure & pedicure — neat nails with long-lasting color') },
    { icon: <Droplets className="h-8 w-8" />, title: t('حمام مغربي وسبا', 'Moroccan Bath & Spa'), desc: t('استرخاء كامل وبشرة ناعمة كالحرير — تجربة تنسيك ضغوط الحياة', 'Complete relaxation and silk-smooth skin — an experience that melts away stress') },
  ];

  const testimonials = [
    { name: t('نورة', 'Noura'), service: t('صبغة شعر', 'Hair Color'), text: t('صبغتي طلعت بالضبط زي ما بدي — اللون طبيعي ويدوم فترة طويلة بدون ما يبهت. والبنات اهتمامهم فوق الوصف.', 'My hair color turned out exactly as I wanted — natural and long-lasting. The staff attention was beyond description.'), image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: t('سارة', 'Sara'), service: t('مكياج عرس', 'Bridal Makeup'), text: t('مكياج عرسي كان أحلى شي — كل البنات سألوني وين سويتيه. ثابت طول الليل وما احتجت أعدل شي.', 'My bridal makeup was gorgeous — everyone asked where I got it done. Lasted all night without any touch-ups.'), image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: t('لمى', 'Lama'), service: t('فيشل وتنظيف', 'Facial'), text: t('بشرتي صارت تنور من أول جلسة — المكان نظيف ومرتب والجو مريح جداً. صرت عميلة دائمة.', 'My skin started glowing from the first session — the place is clean, organized, and very comfortable. I became a regular.'), image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: t('دانة', 'Dana'), service: t('كيراتين', 'Keratin'), text: t('شعري كان جاف ومتقصف وبعد الكيراتين صار ناعم ولامع. النتيجة استمرت شهور وأنا مبسوطة جداً.', 'My hair was dry and damaged, after keratin it became smooth and shiny. Results lasted months and I\'m very happy.'), image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: t('هند', 'Hind'), service: t('حمام مغربي', 'Moroccan Bath'), text: t('أحسن حمام مغربي جربته — بشرتي طلعت ناعمة كالحرير والجو كان استرخاء كامل. أسعار معقولة والنتيجة تستاهل.', 'Best Moroccan bath I\'ve ever had — skin came out silky smooth in a totally relaxing atmosphere. Fair prices and worth every penny.'), image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { name: t('ريم', 'Reem'), service: t('مانيكير', 'Manicure'), text: t('أظافري طلعت حلوة ومرتبة — الألوان تدوم أسابيع والخبيرة كانت دقيقة جداً في شغلها. بنصح فيهم بقوة.', 'My nails looked beautiful and neat — colors lasted weeks and the specialist was very precise. Highly recommend.'), image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: t('منال', 'Manal'), service: t('مكياج سهرة', 'Evening Makeup'), text: t('كل ما احتاج مكياج لمناسبة أروح عندهم — يفهمون وش أبي بالضبط والنتيجة دايم تبهرني.', 'Whenever I need makeup for an event, I go to them — they understand exactly what I want and the results always amaze me.'), image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { name: t('عبير', 'Abeer'), service: t('قص وتصفيف', 'Cut & Style'), text: t('أخيراً لقيت صالون يقص شعري صح! القصة طلعت بالضبط زي الصورة اللي وريتها. ما بغير صالون أبداً.', 'Finally found a salon that cuts my hair right! The cut came out exactly like the photo I showed. Never switching salons.'), image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { name: t('لطيفة', 'Latifa'), service: t('تنظيف بشرة', 'Skin Cleansing'), text: t('بشرتي كانت تعبانة من الشمس وبعد جلستين صارت نضرة ومشرقة. المنتجات اللي يستخدمونها فعلاً فرقت معي.', 'My skin was sun-damaged and after two sessions it became fresh and radiant. The products they use truly made a difference.'), image: 'https://randomuser.me/api/portraits/women/9.jpg' },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const teamMembers = [
    { name: t('خبيرة ريم', 'Reem'), role: t('أخصائية شعر وصبغات', 'Hair & Color Specialist'), experience: t('٨ سنوات خبرة', '8 years experience'), img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face' },
    { name: t('خبيرة منال', 'Manal'), role: t('أخصائية مكياج', 'Makeup Artist'), experience: t('١٠ سنوات خبرة', '10 years experience'), img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face' },
    { name: t('خبيرة لينا', 'Lina'), role: t('أخصائية بشرة وسبا', 'Skin & Spa Specialist'), experience: t('٦ سنوات خبرة', '6 years experience'), img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face' },
    { name: t('خبيرة ياسمين', 'Yasmin'), role: t('أخصائية أظافر', 'Nail Specialist'), experience: t('٥ سنوات خبرة', '5 years experience'), img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face' },
  ];

  const pricingItems = [
    { service: t('قص شعر', 'Haircut'), price: t('٨٠ ر.س', '80 SAR') },
    { service: t('صبغة كاملة', 'Full Color'), price: t('٢٥٠ ر.س', '250 SAR') },
    { service: t('مكياج سهرة', 'Evening Makeup'), price: t('٣٥٠ ر.س', '350 SAR') },
    { service: t('العناية بالأظافر', 'Nail Care'), price: t('١٢٠ ر.س', '120 SAR') },
    { service: t('حمام مغربي', 'Moroccan Bath'), price: t('٢٠٠ ر.س', '200 SAR') },
    { service: t('كيراتين برازيلي', 'Brazilian Keratin'), price: t('٥٠٠ ر.س', '500 SAR') },
  ];

  const whyUsFeatures = [
    { title: t('منتجات عالمية أصلية', 'Original Global Products'), description: t('نستخدم ماركات مثل Olaplex وKerastase وMAC — منتجات أصلية ١٠٠٪ عشان نتيجتك تكون مضمونة', 'We use brands like Olaplex, Kerastase, and MAC — 100% authentic for guaranteed results'), icon: <Award className="h-6 w-6" /> },
    { title: t('خبيرات بخبرة +٥ سنوات', 'Experts with 5+ Years'), description: t('كل وحدة من فريقنا متخصصة بمجالها — مش بس موظفة، هي خبيرة تفهم شعرك وبشرتك', 'Each team member specializes in their field — not just staff, but experts who understand your hair and skin'), icon: <Sparkles className="h-6 w-6" /> },
    { title: t('تعقيم كامل بعد كل عميلة', 'Full Sterilization'), description: t('أدوات معقمة ومغلفة — نظافتك وسلامتك أولويتنا قبل أي شي ثاني', 'Sterilized and sealed tools — your hygiene and safety is our top priority'), icon: <ShieldCheck className="h-6 w-6" /> },
    { title: t('خصوصية تامة وأجواء مريحة', 'Full Privacy & Comfort'), description: t('المكان مصمم عشان تحسين بالراحة والخصوصية — كأنك في بيتك بس بخدمة فندقية', 'Designed for your comfort and privacy — like being at home with five-star service'), icon: <Heart className="h-6 w-6" /> },
    { title: t('أسعار واضحة بدون مفاجآت', 'Clear Pricing, No Surprises'), description: t('نحددلك السعر قبل ما نبدأ — ما في تكاليف مخفية ولا مفاجآت بالفاتورة', 'We tell you the price before we start — no hidden costs or surprise bills'), icon: <Star className="h-6 w-6" /> },
    { title: t('نتائج مضمونة من أول زيارة', 'Guaranteed Results'), description: t('ما نرضى إلا لما ترضين — إذا ما عجبتك النتيجة، نعيدها لك بدون أي تكلفة إضافية', "We're not satisfied until you are — if you're not happy with the result, we redo it at no extra cost"), icon: <Scissors className="h-6 w-6" /> },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t('صالون لمسة جمال', 'Lamsat Jamal Salon')} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-primary-foreground pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium">{t('+٥٠٠ عميلة راضية', '500+ Satisfied Clients')}</span>
            </div>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t('جمالك يبدأ من لمسة جمال', 'Your Beauty Starts at Lamsat Jamal')}
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg md:text-xl max-w-2xl mx-auto mb-4 text-primary-foreground/90">
            {t('أفضل خبيرات التجميل في الرياض — نتائج تبهرك من أول زيارة', 'The best beauty experts in Riyadh — stunning results from your first visit')}
          </motion.p>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2.5} className="text-sm md:text-base max-w-xl mx-auto mb-8 text-primary-foreground/70">
            {t('منتجات عالمية — نظافة ١٠٠٪ — نتائج مضمونة', 'Global products — 100% hygiene — guaranteed results')}
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 text-base px-8">
              <Link to="/booking">{t('احجزي موعدك الآن', 'Book Your Appointment')}</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-base px-8 transition-colors">
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5 me-2" />
                {t('تواصلي عبر واتساب', 'Chat on WhatsApp')}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -4, scale: 1.03 }}
                className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-card transition-shadow hover:shadow-soft cursor-default"
              >
                <div className="text-primary mb-3">{item.icon}</div>
                <span className="text-sm font-bold text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('خدماتنا', 'Our Services')}</h2>
            <p className="text-muted-foreground text-lg">{t('كل ما تحتاجينه تحت سقف واحد', 'Everything you need under one roof')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{svc.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-bold text-sm">
                  <Link to="/booking">{t('احجزي الآن ←', 'Book Now →')}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('من أعمالنا', 'Our Work')}</h2>
            <p className="text-muted-foreground text-lg">{t('شوفي النتائج بنفسك', 'See the results for yourself')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop',
            ].map((img, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={img} alt={`${t('عمل', 'Work')} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <span className="text-primary-foreground font-bold opacity-0 group-hover:opacity-100 transition-opacity">{t('شوفي التفاصيل', 'View Details')}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="gradient-cta border-0 text-primary-foreground hover:opacity-90">
              <Link to="/gallery">{t('عجبك اللوك؟ شوفي المزيد', 'Like what you see? View more')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US — Interactive Feature Cards */}
      <FeatureCards
        heading={t('ليش لمسة جمال؟', 'Why Lamsat Jamal?')}
        subheading={t('اللي يميزنا عن غيرنا', 'What sets us apart')}
        features={whyUsFeatures}
      />

      {/* PRICING */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('أسعارنا', 'Our Prices')}</h2>
            <p className="text-muted-foreground">{t('أسعار واضحة — بدون مفاجآت', 'Clear pricing — no surprises')}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-2xl shadow-card overflow-hidden">
              <div className="grid grid-cols-2 gradient-cta text-primary-foreground px-6 py-4 font-bold text-sm">
                <span>{t('الخدمة', 'Service')}</span>
                <span className="text-end">{t('تبدأ من', 'Starting from')}</span>
              </div>
              {pricingItems.map((item, i) => (
                <motion.div key={i}
                  whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.05)' }}
                  className={`grid grid-cols-2 px-6 py-4 text-sm transition-colors ${i % 2 ? 'bg-secondary/50' : ''}`}
                >
                  <span className="font-medium text-foreground">{item.service}</span>
                  <span className="text-end text-primary font-bold">{item.price}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              {t('الأسعار تختلف حسب الخدمة — تواصلي معنا للتفاصيل', 'Prices vary by service — contact us for details')}
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Scrolling Columns */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('عميلاتنا يحكوا', 'Our Clients Speak')}</h2>
            <p className="text-muted-foreground text-lg">{t('شوفي وش يقولون عنا', 'See what they say about us')}</p>
          </div>
          <div className="flex justify-center gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
            <TestimonialsColumn testimonials={secondColumn} duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('فريقنا', 'Our Team')}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -6 }}
                className="text-center bg-background rounded-2xl shadow-card p-6 border border-border/50 transition-all hover:shadow-soft hover:border-primary/30"
              >
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-2 ring-primary/20" loading="lazy" />
                <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                <p className="text-xs text-primary font-medium">{member.experience}</p>
                <Button asChild variant="ghost" className="mt-3 text-xs text-primary h-auto p-0">
                  <Link to="/booking">{t('احجزي معها', 'Book with her')}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="py-20 gradient-cta text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('جمالك يستاهل الأفضل — احجزي موعدك الآن', 'You Deserve the Best — Book Now')}</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">{t('مواعيد مرنة — حجز سهل — نتائج مضمونة', 'Flexible scheduling — easy booking — guaranteed results')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 px-8">
              <Link to="/booking">{t('احجزي الآن', 'Book Now')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5 me-2" />
                {t('واتساب', 'WhatsApp')}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <a href="tel:+966500000000">{t('اتصلي فينا', 'Call Us')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* MAP + CONTACT */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('موقعنا', 'Our Location')}</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><span className="text-primary font-bold">📍</span> {t('الرياض، حي الملقا، شارع الأمير محمد بن عبدالعزيز', 'Riyadh, Al Malqa, Prince Mohammed Bin Abdulaziz St')}</p>
                <p className="flex items-start gap-2"><span className="text-primary font-bold">📞</span> <a href="tel:+966500000000" dir="ltr">+966 50 000 0000</a></p>
                <p className="flex items-start gap-2"><span className="text-primary font-bold">🕐</span> {t('السبت - الخميس: ١٠ ص - ١٠ م | الجمعة: ٢ م - ١٠ م', 'Sat - Thu: 10 AM - 10 PM | Fri: 2 PM - 10 PM')}</p>
                <p className="flex items-start gap-2"><span className="text-primary font-bold">🅿️</span> {t('موقف سيارات مجاني متوفر أمام الصالون', 'Free parking available in front of the salon')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-80">
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
        </div>
      </section>
    </div>
  );
};

export default Index;
