import { Link } from 'react-router-dom';
import { Shield, Award, Heart, Target, Eye, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import salonImg from '@/assets/salon-about.jpg';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t('راحة العميلة أولاً', 'Client Comfort First'), desc: t('بيئة مريحة وخصوصية تامة — تحسين إنك ببيتك بس بخدمة فندقية', 'Comfortable environment and complete privacy — feel at home with five-star service') },
    { icon: Shield, title: t('أعلى معايير التعقيم', 'Highest Sterilization Standards'), desc: t('أدوات معقمة ومغلفة بعد كل عميلة — سلامتك أولويتنا', 'Sterilized and sealed tools after every client — your safety is our priority') },
    { icon: Award, title: t('خبيرات متخصصات', 'Specialized Experts'), desc: t('فريقنا كل وحدة متخصصة بمجالها بخبرة +٥ سنوات', 'Each team member specializes in their field with 5+ years experience') },
    { icon: Target, title: t('منتجات عالمية', 'Global Products'), desc: t('نستخدم ماركات مثل Olaplex وKerastase وMAC — منتجات أصلية ١٠٠٪', 'We use brands like Olaplex, Kerastase, and MAC — 100% authentic') },
  ];

  const milestones = [
    { number: t('٥٠٠+', '500+'), label: t('عميلة سعيدة', 'Happy Clients') },
    { number: t('٧+', '7+'), label: t('سنة خبرة', 'Years Experience') },
    { number: t('٩٨٪', '98%'), label: t('نسبة رضا', 'Satisfaction Rate') },
    { number: t('٢٠٠٠+', '2000+'), label: t('خدمة ناجحة', 'Successful Services') },
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
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">{t('عن لمسة جمال', 'About Lamsat Jamal')}</h1>
          <p className="mt-4 text-lg text-primary-foreground/90">{t('تعرفي على قصتنا ورؤيتنا وليش يثقوا فينا المئات', 'Learn about our story, vision, and why hundreds trust us')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-tight grid gap-10 items-center md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">{t('قصتنا', 'Our Story')}</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                'بدأنا لمسة جمال سنة ٢٠١٨ بحلم بسيط: نسوي صالون تحس فيه كل عميلة إنها مميزة. ما بدينا نكون مجرد صالون عادي — بدينا نكون المكان اللي كل وحدة تطلع منه وهي حاسة بالثقة والجمال.',
                "We started Lamsat Jamal in 2018 with a simple dream: to create a salon where every client feels special."
              )}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                'استثمرنا في أفضل المنتجات العالمية واستقطبنا أمهر الخبيرات المتخصصات. نؤمن إن كل عميلة تستحق رعاية شخصية وخدمة مصممة خصيصاً لها.',
                "We invested in the best global products and recruited the most skilled specialized experts. We believe every client deserves personalized care."
              )}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                'اليوم، خدمنا أكثر من ٥٠٠ عميلة وقدمنا أكثر من ٢٠٠٠ خدمة ناجحة. سمعتنا تعتمد على النتائج مش الكلام.',
                "Today, we've served over 500 clients and performed over 2,000 successful services. Our reputation is based on results, not words."
              )}
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={salonImg} alt={t('صالون لمسة جمال', 'Lamsat Jamal Salon')} className="h-full w-full object-cover" loading="lazy" width={1920} height={1080} />
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-primary">{m.number}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-tight grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{t('رؤيتنا', 'Our Vision')}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                'نسعى نكون الخيار الأول لكل عميلة تبحث عن صالون يجمع بين الجودة والراحة والخصوصية. هدفنا إن كل وحدة تطلع أحلى وأثقة بنفسها.',
                "We aim to be the first choice for every client seeking a salon that combines quality, comfort, and privacy."
              )}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{t('مهمتنا', 'Our Mission')}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                'نقدم تجربة جمال متكاملة تجمع بين خبرة عالية ومنتجات عالمية في بيئة مريحة وآمنة. كل عميلة عندنا تحصل على اهتمام شخصي ونتائج تتكلم عن نفسها.',
                "We provide a complete beauty experience combining high expertise with global products in a comfortable, safe environment."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">{t('قيمنا', 'Our Values')}</h2>
          <p className="mb-10 text-center text-muted-foreground">{t('المبادئ اللي توجه شغلنا كل يوم', 'The principles that guide our work every day')}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">{t('جربي الفرق بنفسك', 'Experience the Difference')}</h2>
          <p className="mb-8 text-primary-foreground/80">{t('احجزي موعدك اليوم وابدئي رحلتك معنا', 'Book your appointment today and start your journey with us')}</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/booking">{t('احجزي موعد', 'Book Now')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
