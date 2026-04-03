import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import salonImg from '@/assets/salon-about.jpg';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 lg:pb-0">
      <section className="py-16 bg-gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('عن لمسة جمال', 'About Lamsat Jamal')}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={salonImg} alt={t('داخل صالون لمسة جمال', 'Inside Lamsat Jamal Salon')} className="rounded-2xl shadow-card w-full" loading="lazy" width={1200} height={800} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('قصتنا', 'Our Story')}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t(
                  'بدأنا لمسة جمال سنة ٢٠١٨ بحلم بسيط: نسوي صالون تحس فيه كل عميلة إنها مميزة. ما بدينا نكون مجرد صالون عادي — بدينا نكون المكان اللي كل وحدة تطلع منه وهي حاسة بالثقة والجمال.',
                  'We started Lamsat Jamal in 2018 with a simple dream: to create a salon where every client feels special. We didn\'t want to be just another salon — we wanted to be the place where every woman leaves feeling confident and beautiful.'
                )}</p>
                <p>{t(
                  'اليوم، بعد أكثر من ٥٠٠ عميلة سعيدة وفريق من أمهر الخبيرات، صرنا واحد من أفضل صالونات التجميل في الرياض. نفتخر إننا نستخدم منتجات عالمية أصلية ونلتزم بأعلى معايير النظافة والتعقيم.',
                  'Today, with over 500 happy clients and a team of the most skilled experts, we\'ve become one of the best beauty salons in Riyadh. We\'re proud to use authentic global products and maintain the highest hygiene standards.'
                )}</p>
                <p>{t(
                  'رؤيتنا بسيطة: كل عميلة تطلع أحلى وأثقة بنفسها. نؤمن إن الجمال مش بس مظهر — هو إحساس بالراحة والثقة. وهذا اللي نسعى نقدمه لكل وحدة تزورنا.',
                  'Our vision is simple: every client leaves more beautiful and confident. We believe beauty isn\'t just appearance — it\'s a feeling of comfort and confidence. That\'s what we strive to give every woman who visits us.'
                )}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">{t('قيمنا', 'Our Values')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: '💎', title: t('جودة', 'Quality'), desc: t('منتجات أصلية ونتائج مضمونة', 'Authentic products, guaranteed results') },
              { emoji: '🧼', title: t('نظافة', 'Hygiene'), desc: t('تعقيم كامل بعد كل عميلة', 'Full sterilization after every client') },
              { emoji: '🔒', title: t('خصوصية', 'Privacy'), desc: t('أجواء مريحة وخصوصية تامة', 'Comfortable atmosphere, total privacy') },
              { emoji: '💝', title: t('احترام', 'Respect'), desc: t('نعاملك كأنك من العائلة', 'We treat you like family') },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-background rounded-2xl shadow-card">
                <span className="text-3xl block mb-3">{v.emoji}</span>
                <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-xs text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t('جربي الفرق بنفسك', 'Experience the difference yourself')}</h2>
          <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 mt-4">
            <Link to="/booking">{t('احجزي موعدك الآن', 'Book Your Appointment')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
