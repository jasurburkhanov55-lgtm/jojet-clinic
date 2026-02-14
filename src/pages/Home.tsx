import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Award, Users, Star, Calendar } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/jojet-clinic">

const Home = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      image: '/images/service-rhinoplasty.jpg',
      title: 'Rhinoplasty',
      description: 'Sculpt the perfect nose for facial harmony',
      link: '/services/face',
    },
    {
      image: '/images/service-facelift.jpg',
      title: 'Facelift',
      description: 'Turn back time with natural rejuvenation',
      link: '/services/face',
    },
    {
      image: '/images/service-breast.jpg',
      title: 'Breast Augmentation',
      description: 'Enhance your silhouette with artistry',
      link: '/services/breast',
    },
    {
      image: '/images/service-liposuction.jpg',
      title: 'Liposuction',
      description: 'Sculpt your ideal body contours',
      link: '/services/body',
    },
  ];

  const testimonials = [
    {
      image: '/images/testimonial-1.jpg',
      name: 'Sofia M.',
      procedure: 'Rhinoplasty',
      quote: 'Dr. Jasurjon is a true artist. My results exceeded all expectations - natural, elegant, and perfectly suited to my face.',
      rating: 5,
    },
    {
      image: '/images/testimonial-2.jpg',
      name: 'Elizabeth R.',
      procedure: 'Facelift',
      quote: 'The entire experience was exceptional. From consultation to recovery, I felt cared for and confident in every decision.',
      rating: 5,
    },
    {
      image: '/images/testimonial-3.jpg',
      name: 'Michael T.',
      procedure: 'Gynecomastia',
      quote: 'Finally, I have the confidence to be myself. Dr. Burkhanov understood exactly what I needed and delivered beyond my hopes.',
      rating: 5,
    },
  ];

  const stats = [
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Happy Patients' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Calendar, value: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          ref={heroRef}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img
            src="/images/hero-bg.jpg"
            alt="Luxury aesthetic clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-luxury">
          <div className="max-w-2xl text-white">
            <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
              Elite Plastic Surgery
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-slide-up">
              {t('hero.title')}
            </h1>
            <p className="font-display text-2xl md:text-3xl italic text-white/90 mb-8 animate-slide-up delay-200">
              {t('hero.subtitle')}
            </p>
            <p className="text-white/80 text-lg mb-10 max-w-lg animate-slide-up delay-300">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
              <Link to="/contact" className="btn-primary text-center">
                {t('hero.cta')}
              </Link>
              <Link to="/services" className="btn-outline text-center">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} animation="fadeIn" delay={index * 100}>
                <div className="text-center text-white">
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                  <div className="font-display text-4xl md:text-5xl mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideLeft">
              <div className="relative">
                <img
                  src="/images/dr-jasurjon.jpg"
                  alt="Dr. Jasurjon Burkhanov"
                  className="w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 hidden md:block">
                  <div className="font-display text-4xl">20+</div>
                  <div className="text-sm uppercase tracking-wider">Years</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                {t('about.subtitle')}
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {t('about.title')}
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('about.philosophy')}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-12 h-12 text-gold" />
                <div>
                  <p className="font-display text-lg">Newsweek Top Surgeon 2024</p>
                  <p className="text-gray-500 text-sm">Recognized Excellence</p>
                </div>
              </div>
              <Link to="/about" className="btn-outline inline-flex items-center gap-2">
                {t('about.readMore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                {t('services.subtitle')}
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {t('services.title')}
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-gray-600">
                {t('services.description')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <Link to={service.link} className="service-card group block aspect-[3/4]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="overlay" />
                  <div className="content">
                    <h3 className="font-display text-2xl mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
                      {t('services.learnMore')}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeIn" delay={400}>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                {t('services.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Before/After Preview Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                {t('gallery.subtitle')}
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {t('gallery.title')}
              </h2>
              <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
              <p className="text-gray-400">
                {t('gallery.description')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['/images/before-after-1.jpg', '/images/before-after-2.jpg', '/images/before-after-3.jpg'].map((image, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="relative overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`Before and after transformation ${index + 1}`}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-display text-xl">View Details</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeIn" delay={400}>
            <div className="text-center mt-12">
              <Link to="/gallery" className="btn-outline border-white text-white hover:bg-white hover:text-dark inline-flex items-center gap-2">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                {t('testimonials.subtitle')}
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {t('testimonials.title')}
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-gray-600">
                {t('testimonials.description')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <div className="testimonial-card">
                  <div className="quote">"</div>
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-display text-lg">{testimonial.name}</p>
                      <p className="text-gold text-sm">{testimonial.procedure}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeIn" delay={400}>
            <div className="text-center mt-12">
              <Link to="/testimonials" className="btn-primary inline-flex items-center gap-2">
                {t('testimonials.readMore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/clinic-interior.jpg)' }}>
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative z-10 container-luxury">
          <ScrollAnimation animation="scaleIn">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Begin Your Transformation
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Schedule a consultation today and discover how Dr. Jasurjon Burkhanov can help you achieve your aesthetic goals with precision, artistry, and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  {t('hero.cta')}
                </Link>
                <Link to="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-dark">
                  View Pricing
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
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

export default Home;
