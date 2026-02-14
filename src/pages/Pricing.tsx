import { useTranslation } from 'react-i18next';
import { Check, Sparkles, Crown, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Pricing = () => {
  const { t } = useTranslation();

  const promotions = [
    {
      title: 'Golden Glow Tuesday',
      description: 'Enjoy special pricing on Botox injections every Tuesday',
      originalPrice: '$15',
      salePrice: '$10',
      unit: 'per unit',
      validUntil: 'Valid through December 2024',
      icon: Sparkles,
    },
    {
      title: 'Summer Body Ready',
      description: '20% off liposuction procedures booked this month',
      originalPrice: '$5,000',
      salePrice: '$4,000',
      unit: 'starting',
      validUntil: 'Limited time offer',
      icon: Star,
    },
    {
      title: 'Mommy Makeover Package',
      description: 'Combine tummy tuck + breast lift and save $2,000',
      originalPrice: '$18,000',
      salePrice: '$16,000',
      unit: 'package',
      validUntil: 'Book by March 31, 2024',
      icon: Crown,
    },
  ];

  const procedurePackages = [
    {
      category: 'Facial Procedures',
      procedures: [
        { name: 'Rhinoplasty', price: '$6,000 - $12,000' },
        { name: 'Facelift', price: '$8,000 - $15,000' },
        { name: 'Blepharoplasty', price: '$3,500 - $7,000' },
        { name: 'Brow Lift', price: '$4,000 - $8,000' },
        { name: 'Chin Augmentation', price: '$3,000 - $5,000' },
      ],
    },
    {
      category: 'Breast Procedures',
      procedures: [
        { name: 'Breast Augmentation', price: '$6,000 - $10,000' },
        { name: 'Breast Lift', price: '$5,500 - $9,000' },
        { name: 'Breast Reduction', price: '$7,000 - $12,000' },
        { name: 'Breast Reconstruction', price: 'Consultation required' },
      ],
    },
    {
      category: 'Body Procedures',
      procedures: [
        { name: 'Liposuction', price: '$3,000 - $8,000' },
        { name: 'Tummy Tuck', price: '$6,000 - $12,000' },
        { name: 'Mommy Makeover', price: '$10,000 - $20,000' },
        { name: 'Arm Lift', price: '$4,000 - $7,000' },
        { name: 'Thigh Lift', price: '$5,000 - $8,000' },
      ],
    },
    {
      category: 'Non-Surgical',
      procedures: [
        { name: 'Botox', price: '$12 - $15 per unit' },
        { name: 'Dermal Fillers', price: '$500 - $1,500' },
        { name: 'Laser Treatments', price: '$300 - $2,000' },
        { name: 'PRP Therapy', price: '$500 - $1,500' },
        { name: 'Chemical Peel', price: '$150 - $500' },
      ],
    },
  ];

  const financingOptions = [
    {
      title: 'In-House Payment Plans',
      description: 'Spread your procedure cost over 6, 12, or 24 months with 0% interest for qualified patients.',
      features: ['0% APR for 12 months', 'No hidden fees', 'Quick approval process'],
    },
    {
      title: 'Medical Financing',
      description: 'We partner with leading medical financing companies to offer flexible payment options.',
      features: ['Low monthly payments', 'Extended terms available', 'No prepayment penalties'],
    },
    {
      title: 'Insurance Coverage',
      description: 'Some procedures may be covered by insurance when deemed medically necessary.',
      features: ['Free insurance verification', 'Prior authorization assistance', 'Direct billing available'],
    },
  ];

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
              {t('pricing.subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('pricing.title')}
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-white/80">
              {t('pricing.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                Limited Time Offers
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {t('pricing.promotions')}
              </h2>
              <div className="divider-gold mb-6" />
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-white p-8 luxury-card text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gold text-white px-4 py-1 text-xs uppercase tracking-wider">
                    Special Offer
                  </div>
                  <promo.icon className="w-12 h-12 text-gold mx-auto mb-6" />
                  <h3 className="font-display text-2xl mb-3">{promo.title}</h3>
                  <p className="text-gray-600 mb-6">{promo.description}</p>
                  <div className="mb-6">
                    <p className="text-gray-400 line-through text-sm">{promo.originalPrice}</p>
                    <p className="text-4xl font-display text-gold">{promo.salePrice}</p>
                    <p className="text-gray-500 text-sm">{promo.unit}</p>
                  </div>
                  <p className="text-xs text-gray-400 mb-6">{promo.validUntil}</p>
                  <Link to="/contact" className="btn-primary w-full">
                    Book Now
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Pricing */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                Transparent Pricing
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {t('pricing.packages')}
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-gray-600">
                Prices are estimates and may vary based on individual needs. Schedule a consultation for a personalized quote.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {procedurePackages.map((category, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <div className="bg-light p-8">
                  <h3 className="font-display text-2xl mb-6 pb-4 border-b border-gray-200">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.procedures.map((procedure, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-gray-700">{procedure.name}</span>
                        <span className="font-display text-gold">{procedure.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section-padding bg-dark text-white">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                Flexible Options
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {t('pricing.financing')}
              </h2>
              <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-white/5 p-8 border border-white/10 hover:border-gold/50 transition-colors">
                  <h3 className="font-display text-2xl mb-4">{option.title}</h3>
                  <p className="text-white/70 mb-6">{option.description}</p>
                  <ul className="space-y-3">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="scaleIn">
            <div className="bg-gold text-white p-12 text-center">
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss your goals and receive a personalized treatment plan with detailed pricing.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-gold px-8 py-4 font-body uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-luxury">
          <p className="text-gray-500 text-sm text-center max-w-3xl mx-auto">
            {t('pricing.disclaimer')} All prices are in US Dollars. Financing options are subject to credit approval. 
            We accept major credit cards, bank transfers, and cash payments. Payment plans require a deposit at the time of booking.
          </p>
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

export default Pricing;
