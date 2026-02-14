import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Clock, Calendar, DollarSign, Check } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  const { t } = useTranslation();
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'face');

  const categories = [
    { id: 'face', label: t('services.categories.face') },
    { id: 'breast', label: t('services.categories.breast') },
    { id: 'body', label: t('services.categories.body') },
    { id: 'nonsurgical', label: t('services.categories.nonsurgical') },
    { id: 'men', label: t('services.categories.men') },
  ];

  const services = {
    face: [
      {
        id: 'facelift',
        title: 'Facelift (Rhytidectomy)',
        description: 'Restore a youthful appearance by lifting and tightening facial tissues, reducing sagging skin and wrinkles.',
        image: '/images/service-facelift.jpg',
        duration: '3-4 hours',
        recovery: '2-3 weeks',
        price: '$8,000 - $15,000',
        benefits: [
          'Reduces visible signs of aging',
          'Restores facial contours',
          'Long-lasting results (10-15 years)',
          'Natural-looking enhancement',
        ],
      },
      {
        id: 'rhinoplasty',
        title: 'Rhinoplasty',
        description: 'Reshape the nose to improve facial harmony and proportions, or correct breathing issues.',
        image: '/images/service-rhinoplasty.jpg',
        duration: '2-3 hours',
        recovery: '1-2 weeks',
        price: '$6,000 - $12,000',
        benefits: [
          'Improves facial balance',
          'Can correct breathing problems',
          'Permanent results',
          'Enhanced self-confidence',
        ],
      },
      {
        id: 'blepharoplasty',
        title: 'Eyelid Surgery (Blepharoplasty)',
        description: 'Remove excess skin and fat from the upper and lower eyelids for a more alert, youthful appearance.',
        image: '/images/service-blepharoplasty.jpg',
        duration: '1-2 hours',
        recovery: '1-2 weeks',
        price: '$3,500 - $7,000',
        benefits: [
          'Reduces under-eye bags',
          'Improves field of vision',
          'Refreshes tired appearance',
          'Minimal scarring',
        ],
      },
      {
        id: 'browlift',
        title: 'Brow Lift',
        description: 'Elevate the brows to reduce forehead wrinkles and create a more youthful, alert expression.',
        image: '/images/service-browlift.jpg',
        duration: '1-2 hours',
        recovery: '1-2 weeks',
        price: '$4,000 - $8,000',
        benefits: [
          'Reduces forehead lines',
          'Lifts sagging brows',
          'Opens up the eye area',
          'Long-lasting results',
        ],
      },
    ],
    breast: [
      {
        id: 'augmentation',
        title: 'Breast Augmentation',
        description: 'Enhance breast size and shape using implants or fat transfer for a more proportionate figure.',
        image: '/images/service-breast.jpg',
        duration: '1-2 hours',
        recovery: '1-2 weeks',
        price: '$6,000 - $10,000',
        benefits: [
          'Increased breast volume',
          'Improved body proportions',
          'Enhanced self-confidence',
          'Customizable size and shape',
        ],
      },
      {
        id: 'lift',
        title: 'Breast Lift (Mastopexy)',
        description: 'Raise and reshape sagging breasts for a more youthful, perky appearance.',
        image: '/images/service-breast.jpg',
        duration: '2-3 hours',
        recovery: '2-3 weeks',
        price: '$5,500 - $9,000',
        benefits: [
          'Restores breast position',
          'Improves breast shape',
          'Can be combined with augmentation',
          'Long-lasting results',
        ],
      },
      {
        id: 'reduction',
        title: 'Breast Reduction',
        description: 'Remove excess breast tissue and skin to achieve a breast size in proportion with your body.',
        image: '/images/service-breast.jpg',
        duration: '2-4 hours',
        recovery: '2-4 weeks',
        price: '$7,000 - $12,000',
        benefits: [
          'Relieves back and neck pain',
          'Improves physical activity',
          'Better proportioned figure',
          'May be covered by insurance',
        ],
      },
      {
        id: 'reconstruction',
        title: 'Breast Reconstruction',
        description: 'Restore breast shape and appearance after mastectomy or injury.',
        image: '/images/service-breast.jpg',
        duration: '2-6 hours',
        recovery: '4-6 weeks',
        price: 'Varies - Consultation required',
        benefits: [
          'Restores natural appearance',
          'Improves emotional well-being',
          'Multiple technique options',
          'Often covered by insurance',
        ],
      },
    ],
    body: [
      {
        id: 'liposuction',
        title: 'Liposuction',
        description: 'Remove stubborn fat deposits to sculpt and contour specific areas of the body.',
        image: '/images/service-liposuction.jpg',
        duration: '1-3 hours',
        recovery: '1-2 weeks',
        price: '$3,000 - $8,000',
        benefits: [
          'Removes stubborn fat',
          'Improves body contours',
          'Permanent fat removal',
          'Minimal scarring',
        ],
      },
      {
        id: 'tummytuck',
        title: 'Tummy Tuck (Abdominoplasty)',
        description: 'Remove excess skin and fat from the abdomen and tighten abdominal muscles.',
        image: '/images/service-tummytuck.jpg',
        duration: '2-4 hours',
        recovery: '2-4 weeks',
        price: '$6,000 - $12,000',
        benefits: [
          'Flatter, firmer abdomen',
          'Removes stretch marks',
          'Tightens muscles',
          'Long-lasting results',
        ],
      },
      {
        id: 'mommymakeover',
        title: 'Mommy Makeover',
        description: 'A combination of procedures to restore your pre-pregnancy body shape.',
        image: '/images/service-tummytuck.jpg',
        duration: '4-6 hours',
        recovery: '4-6 weeks',
        price: '$10,000 - $20,000',
        benefits: [
          'Customized combination',
          'Restores pre-baby body',
          'Single recovery period',
          'Comprehensive transformation',
        ],
      },
      {
        id: 'armlift',
        title: 'Arm & Thigh Lift',
        description: 'Remove excess skin and fat from the upper arms and thighs for a toned appearance.',
        image: '/images/service-liposuction.jpg',
        duration: '2-4 hours',
        recovery: '2-4 weeks',
        price: '$4,000 - $8,000',
        benefits: [
          'Tighter, smoother skin',
          'Improved arm/thigh contour',
          'Enhanced confidence',
          'Long-lasting results',
        ],
      },
    ],
    nonsurgical: [
      {
        id: 'botox',
        title: 'Botox Injections',
        description: 'Smooth fine lines and wrinkles with precise neurotoxin injections.',
        image: '/images/blog-injectables.jpg',
        duration: '15-30 minutes',
        recovery: 'None',
        price: '$12 - $15 per unit',
        benefits: [
          'Reduces wrinkles',
          'Prevents new lines',
          'Quick procedure',
          'No downtime',
        ],
      },
      {
        id: 'fillers',
        title: 'Dermal Fillers',
        description: 'Restore volume and smooth lines with hyaluronic acid injections.',
        image: '/images/blog-injectables.jpg',
        duration: '30-45 minutes',
        recovery: 'Minimal (1-2 days)',
        price: '$500 - $1,500',
        benefits: [
          'Restores facial volume',
          'Smooths deep lines',
          'Immediate results',
          'Long-lasting (6-18 months)',
        ],
      },
      {
        id: 'laser',
        title: 'Laser Treatments',
        description: 'Improve skin texture, tone, and appearance with advanced laser technology.',
        image: '/images/service-medspa.jpg',
        duration: '30-60 minutes',
        recovery: '1-7 days',
        price: '$300 - $2,000',
        benefits: [
          'Improves skin texture',
          'Reduces pigmentation',
          'Stimulates collagen',
          'Minimal discomfort',
        ],
      },
      {
        id: 'prp',
        title: 'PRP Therapy',
        description: 'Use your body\'s own healing factors to rejuvenate skin and hair.',
        image: '/images/service-medspa.jpg',
        duration: '45-60 minutes',
        recovery: '1-2 days',
        price: '$500 - $1,500',
        benefits: [
          'Natural treatment',
          'Stimulates collagen',
          'Improves skin quality',
          'Can treat hair loss',
        ],
      },
    ],
    men: [
      {
        id: 'gynecomastia',
        title: 'Gynecomastia Surgery',
        description: 'Reduce enlarged male breast tissue for a more masculine chest contour.',
        image: '/images/service-men.jpg',
        duration: '1-2 hours',
        recovery: '1-2 weeks',
        price: '$4,000 - $8,000',
        benefits: [
          'Masculine chest contour',
          'Improved confidence',
          'Permanent results',
          'Minimal scarring',
        ],
      },
      {
        id: 'facelift-men',
        title: 'Male Facelift',
        description: 'Achieve a refreshed, natural look while maintaining masculine features.',
        image: '/images/service-facelift.jpg',
        duration: '3-4 hours',
        recovery: '2-3 weeks',
        price: '$8,000 - $15,000',
        benefits: [
          'Natural-looking results',
          'Maintains masculinity',
          'Long-lasting',
          'Subtle enhancement',
        ],
      },
      {
        id: 'rhinoplasty-men',
        title: 'Male Rhinoplasty',
        description: 'Reshape the nose to enhance facial harmony while preserving masculine characteristics.',
        image: '/images/service-rhinoplasty.jpg',
        duration: '2-3 hours',
        recovery: '1-2 weeks',
        price: '$6,000 - $12,000',
        benefits: [
          'Stronger nasal profile',
          'Improved breathing',
          'Masculine appearance',
          'Permanent results',
        ],
      },
      {
        id: 'liposuction-men',
        title: 'Male Liposuction',
        description: 'Target stubborn fat areas to reveal underlying muscle definition.',
        image: '/images/service-men.jpg',
        duration: '1-3 hours',
        recovery: '1-2 weeks',
        price: '$3,000 - $8,000',
        benefits: [
          'Enhanced definition',
          'Targeted fat removal',
          'Permanent results',
          'Quick recovery',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/clinic-interior.jpg"
            alt="Clinic interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-luxury">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
              {t('services.subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('services.title')}
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-200">
        <div className="container-luxury">
          <div className="flex overflow-x-auto scrollbar-hide">
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

      {/* Services Grid */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gray-600">
                {t('services.description')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services[activeCategory as keyof typeof services]?.map((service, index) => (
              <ScrollAnimation key={service.id} animation="slideUp" delay={index * 100}>
                <div className="bg-white overflow-hidden luxury-card">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-square lg:aspect-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col">
                      <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4 text-gold" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4 text-gold" />
                          <span>Recovery: {service.recovery}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <DollarSign className="w-4 h-4 text-gold" />
                          <span>{service.price}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-gold flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/contact?service=${service.id}`}
                        className="btn-primary text-center text-sm inline-flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-luxury">
          <ScrollAnimation animation="scaleIn">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Not Sure Which Procedure is Right for You?
              </h2>
              <p className="text-white/80 mb-8">
                Schedule a consultation with Dr. Burkhanov to discuss your goals and receive personalized recommendations.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
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

export default Services;
