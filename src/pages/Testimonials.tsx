import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote, Video, Play } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  procedure: string;
  rating: number;
  quote: string;
  fullStory: string;
  date: string;
  hasVideo: boolean;
}

const Testimonials = () => {
  const { t } = useTranslation();
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sofia M.',
      image: '/images/testimonial-1.jpg',
      procedure: 'Rhinoplasty',
      rating: 5,
      quote: 'Dr. Jasurjon is a true artist. My results exceeded all expectations.',
      fullStory: 'I had been self-conscious about my nose for years. After extensive research, I chose Dr. Burkhanov for my rhinoplasty. From the first consultation, I knew I was in expert hands. He listened carefully to my concerns and explained every aspect of the procedure. The results are beyond what I imagined - my nose looks natural and perfectly balanced with my face. The recovery was smooth, and the staff was incredibly supportive throughout. I can\'t recommend Dr. Burkhanov enough!',
      date: 'March 2024',
      hasVideo: true,
    },
    {
      id: 2,
      name: 'Elizabeth R.',
      image: '/images/testimonial-2.jpg',
      procedure: 'Facelift',
      rating: 5,
      quote: 'The entire experience was exceptional from start to finish.',
      fullStory: 'At 55, I wanted to look as young as I felt inside. Dr. Burkhanov performed a facelift that has taken years off my appearance while maintaining my natural look. What impressed me most was his artistic eye and attention to detail. He didn\'t just tighten my skin - he restored the youthful contours of my face. My friends keep asking what my secret is! The clinic is beautiful, the staff is professional, and the care I received was world-class.',
      date: 'February 2024',
      hasVideo: false,
    },
    {
      id: 3,
      name: 'Michael T.',
      image: '/images/testimonial-3.jpg',
      procedure: 'Gynecomastia Surgery',
      rating: 5,
      quote: 'Finally, I have the confidence to be myself.',
      fullStory: 'As a man struggling with gynecomastia, I was embarrassed to even seek help. Dr. Burkhanov made me feel comfortable from the moment we met. He explained the procedure clearly and addressed all my concerns. The surgery was quick, and the recovery was much easier than I expected. Now I can wear fitted shirts without feeling self-conscious. This procedure has truly changed my life, and I\'m grateful to Dr. Burkhanov for his expertise and understanding.',
      date: 'January 2024',
      hasVideo: true,
    },
    {
      id: 4,
      name: 'Amanda K.',
      image: '/images/testimonial-4.jpg',
      procedure: 'Breast Augmentation',
      rating: 5,
      quote: 'I finally feel confident in my own body.',
      fullStory: 'After having children, I lost volume and shape in my breasts. Dr. Burkhanov helped me choose the perfect size and type of implants for my body. He was patient, never rushing me through the decision process. The results are absolutely perfect - natural-looking and proportionate to my frame. I feel like myself again, only better! The surgical facility is state-of-the-art, and the follow-up care has been exceptional.',
      date: 'December 2023',
      hasVideo: false,
    },
    {
      id: 5,
      name: 'Jessica L.',
      image: '/images/testimonial-5.jpg',
      procedure: 'Mommy Makeover',
      rating: 5,
      quote: 'Dr. Burkhanov gave me my pre-baby body back!',
      fullStory: 'After three pregnancies, my body had changed significantly. Dr. Burkhanov created a customized mommy makeover plan that included a tummy tuck and breast lift. The transformation has been incredible. I can wear clothes I haven\'t fit into in years, and I feel confident at the beach again. Dr. Burkhanov and his team made me feel cared for every step of the way. This was the best investment I\'ve ever made in myself.',
      date: 'November 2023',
      hasVideo: true,
    },
    {
      id: 6,
      name: 'David H.',
      image: '/images/testimonial-3.jpg',
      procedure: 'Liposuction',
      rating: 5,
      quote: 'The results are better than I ever imagined.',
      fullStory: 'Despite working out regularly, I couldn\'t get rid of stubborn fat around my midsection. Dr. Burkhanov performed liposuction that completely transformed my physique. The procedure was straightforward, and I was back to work within a week. Now I have the defined abs I\'ve always wanted. Dr. Burkhanov\'s precision and skill are remarkable. If you\'re considering this procedure, don\'t hesitate - it\'s worth every penny.',
      date: 'October 2023',
      hasVideo: false,
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/testimonial-1.jpg"
            alt="Happy patient"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-luxury">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
              {t('testimonials.subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('testimonials.title')}
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-white/80">
              {t('testimonials.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="bg-white p-8 md:p-12 luxury-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="/images/testimonial-1.jpg"
                    alt="Featured patient"
                    className="w-full max-w-md mx-auto"
                  />
                  {testimonials[0].hasVideo && (
                    <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </button>
                  )}
                </div>
                <div>
                  <Quote className="w-12 h-12 text-gold mb-6" />
                  <p className="font-display text-2xl md:text-3xl italic mb-6">
                    "{testimonials[0].fullStory}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[0].image}
                      alt={testimonials[0].name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-display text-xl">{testimonials[0].name}</p>
                      <p className="text-gold">{testimonials[0].procedure}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                More Patient Stories
              </h2>
              <div className="divider-gold mb-6" />
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <ScrollAnimation key={testimonial.id} animation="slideUp" delay={index * 100}>
                <div
                  className="bg-light p-8 cursor-pointer hover-lift"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <Quote className="w-8 h-8 text-gold mb-4" />
                  <p className="text-gray-600 italic mb-6 line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <p className="font-display text-lg">{testimonial.name}</p>
                      <p className="text-gold text-sm">{testimonial.procedure}</p>
                    </div>
                    {testimonial.hasVideo && (
                      <Video className="w-5 h-5 text-gray-400" />
                    )}
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Happy Patients' },
              { value: '4.9', label: 'Average Rating' },
              { value: '98%', label: 'Would Recommend' },
              { value: '500+', label: '5-Star Reviews' },
            ].map((stat, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-gold mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-dark"
            >
              ✕
            </button>
            <Quote className="w-12 h-12 text-gold mb-6" />
            <p className="font-display text-xl italic mb-8">
              "{selectedTestimonial.fullStory}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-xl">{selectedTestimonial.name}</p>
                <p className="text-gold">{selectedTestimonial.procedure}</p>
                <p className="text-gray-400 text-sm">{selectedTestimonial.date}</p>
              </div>
            </div>
            <div className="flex gap-1 mt-4">
              {[...Array(selectedTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
          </div>
        </div>
      )}
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

export default Testimonials;
