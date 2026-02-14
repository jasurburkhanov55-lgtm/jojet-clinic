import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface GalleryItem {
  id: number;
  before: string;
  after: string;
  category: string;
  procedure: string;
  description: string;
  patient: string;
}

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('gallery.categories.all') },
    { id: 'facelift', label: t('gallery.categories.facelift') },
    { id: 'rhinoplasty', label: t('gallery.categories.rhinoplasty') },
    { id: 'blepharoplasty', label: t('gallery.categories.blepharoplasty') },
    { id: 'liposuction', label: t('gallery.categories.liposuction') },
    { id: 'breast', label: t('gallery.categories.breast') },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      before: '/images/before-after-1.jpg',
      after: '/images/before-after-1.jpg',
      category: 'facelift',
      procedure: 'Facelift & Neck Lift',
      description: 'Full facial rejuvenation with natural-looking results',
      patient: 'Age 52',
    },
    {
      id: 2,
      before: '/images/before-after-2.jpg',
      after: '/images/before-after-2.jpg',
      category: 'rhinoplasty',
      procedure: 'Rhinoplasty',
      description: 'Refined nasal contour for improved facial harmony',
      patient: 'Age 28',
    },
    {
      id: 3,
      before: '/images/before-after-3.jpg',
      after: '/images/before-after-3.jpg',
      category: 'liposuction',
      procedure: 'Liposuction & Tummy Tuck',
      description: 'Body contouring for a slimmer silhouette',
      patient: 'Age 35',
    },
    {
      id: 4,
      before: '/images/service-facelift.jpg',
      after: '/images/service-facelift.jpg',
      category: 'blepharoplasty',
      procedure: 'Upper & Lower Blepharoplasty',
      description: 'Refreshed eye appearance with reduced bags',
      patient: 'Age 45',
    },
    {
      id: 5,
      before: '/images/service-breast.jpg',
      after: '/images/service-breast.jpg',
      category: 'breast',
      procedure: 'Breast Augmentation',
      description: 'Enhanced volume with natural-looking results',
      patient: 'Age 32',
    },
    {
      id: 6,
      before: '/images/service-rhinoplasty.jpg',
      after: '/images/service-rhinoplasty.jpg',
      category: 'rhinoplasty',
      procedure: 'Revision Rhinoplasty',
      description: 'Corrective surgery for improved breathing and aesthetics',
      patient: 'Age 34',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/before-after-1.jpg"
            alt="Before and after"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-luxury">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
              {t('gallery.subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('gallery.title')}
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-white/80">
              {t('gallery.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-200">
        <div className="container-luxury">
          <div className="flex overflow-x-auto scrollbar-hide justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-4 font-body text-sm uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
                  activeCategory === cat.id
                    ? 'text-gold border-gold'
                    : 'text-gray-600 border-transparent hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ScrollAnimation key={item.id} animation="scaleIn" delay={index * 100}>
                <BeforeAfterSlider item={item} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              * Individual results may vary. These photos represent typical outcomes, but every patient is unique. 
              Schedule a consultation to discuss your specific goals and expected results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Before/After Slider Component
interface BeforeAfterSliderProps {
  item: GalleryItem;
}

const BeforeAfterSlider = ({ item }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="bg-white overflow-hidden luxury-card">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Background) */}
        <img
          src={item.after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={item.before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'grayscale(30%) brightness(0.9)' }}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full shadow-lg flex items-center justify-center">
            <div className="flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 text-white" />
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-xs uppercase tracking-wider">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 text-xs uppercase tracking-wider">
          After
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl mb-2">{item.procedure}</h3>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <p className="text-gold text-sm">Patient: {item.patient}</p>
      </div>
    </div>
  );
};

// Scroll Animation Component
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
}

const ScrollAnimation = ({ children, animation, delay = 0 }: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const animations = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scaleIn: 'animate-scale-in',
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animations[animation] : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Gallery;
