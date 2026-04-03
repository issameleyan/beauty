import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const GalleryPage = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('الكل', 'All') },
    { id: 'hair', label: t('شعر', 'Hair') },
    { id: 'makeup', label: t('مكياج', 'Makeup') },
    { id: 'nails', label: t('أظافر', 'Nails') },
    { id: 'skin', label: t('بشرة', 'Skin') },
  ];

  const galleryItems = [
    { category: 'hair', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop', title: t('صبغة أشقر رمادي', 'Ash Blonde Color') },
    { category: 'makeup', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop', title: t('مكياج سهرة', 'Evening Makeup') },
    { category: 'nails', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop', title: t('أظافر جل', 'Gel Nails') },
    { category: 'hair', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop', title: t('تصفيف كيرلي', 'Curly Styling') },
    { category: 'skin', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop', title: t('فيشل تنظيف', 'Facial Cleansing') },
    { category: 'makeup', img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop', title: t('مكياج عروس', 'Bridal Makeup') },
    { category: 'hair', img: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=600&fit=crop', title: t('كيراتين', 'Keratin Treatment') },
    { category: 'skin', img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop', title: t('حمام مغربي', 'Moroccan Bath') },
    { category: 'hair', img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop', title: t('صبغة بني شوكولاتي', 'Chocolate Brown') },
    { category: 'nails', img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=600&fit=crop', title: t('فرنش مانيكير', 'French Manicure') },
    { category: 'makeup', img: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&h=600&fit=crop', title: t('مكياج طبيعي', 'Natural Makeup') },
    { category: 'hair', img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop', title: t('استشوار فرد', 'Blow Dry') },
  ];

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter(i => i.category === activeFilter);

  return (
    <div className="pt-24 pb-16 lg:pb-0">
      <section className="py-16 bg-gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('معرض أعمالنا', 'Our Portfolio')}</h1>
          <p className="text-lg text-primary-foreground/80">{t('كل صورة تحكي قصة نجاح', 'Every photo tells a success story')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === f.id ? 'bg-gradient-cta text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-muted'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div key={`${item.img}-${activeFilter}`} initial="hidden" animate="visible" variants={fadeUp} custom={i} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end p-4">
                  <span className="text-primary-foreground font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('عجبك شغلنا؟ احجزي موعدك الآن', 'Like our work? Book now')}</h3>
            <Button asChild size="lg" className="bg-gradient-cta text-primary-foreground">
              <Link to="/booking">{t('احجزي الآن', 'Book Now')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
