import { useTranslation } from 'react-i18next';
import { Award, BookOpen, GraduationCap, Stethoscope, Heart, Shield, Sparkles } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const { t } = useTranslation();

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Harvard Medical School',
      description: 'Fellowship in Aesthetic Surgery, 2008-2010',
    },
    {
      icon: Stethoscope,
      title: 'American Board of Plastic Surgery',
      description: 'Board Certified since 2005',
    },
    {
      icon: Award,
      title: 'Newsweek Top Surgeon 2024',
      description: 'Recognized among America\'s Best Plastic Surgeons',
    },
    {
      icon: BookOpen,
      title: '50+ Publications',
      description: 'Published research in leading medical journals',
    },
  ];

  const philosophy = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every patient receives individualized attention and a customized treatment plan tailored to their unique goals and anatomy.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We maintain the highest standards of safety and hygiene, utilizing state-of-the-art facilities and protocols.',
    },
    {
      icon: Sparkles,
      title: 'Natural Results',
      description: 'Our approach emphasizes enhancing your natural beauty while preserving your unique identity and features.',
    },
  ];

  const team = [
    {
      name: 'Dr. Jasurjon Burkhanov',
      role: 'Lead Surgeon',
      image: '/images/dr-jasurjon.jpg',
      description: 'Board-certified plastic surgeon with 20+ years of experience in aesthetic and reconstructive surgery.',
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Anesthesiologist',
      image: '/images/testimonial-1.jpg',
      description: 'Board-certified anesthesiologist specializing in outpatient surgical anesthesia and pain management.',
    },
    {
      name: 'Nina Patel, RN',
      role: 'Head Nurse',
      image: '/images/testimonial-4.jpg',
      description: 'Registered nurse with 15 years of experience in plastic surgery patient care and recovery.',
    },
    {
      name: 'Maria Santos',
      role: 'Patient Coordinator',
      image: '/images/testimonial-5.jpg',
      description: 'Dedicated to ensuring every patient has a seamless and comfortable experience from consultation to recovery.',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/surgery-room.jpg"
            alt="Surgery room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-luxury">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
              {t('about.subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('about.title')}
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideLeft">
              <div className="relative">
                <img
                  src="/images/dr-jasurjon.jpg"
                  alt="Dr. Jasurjon Burkhanov"
                  className="w-full max-w-lg mx-auto shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-gold text-white p-8 hidden lg:block">
                  <div className="font-display text-5xl mb-2">20+</div>
                  <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="font-display text-4xl md:text-5xl mb-6">
                  A Legacy of <span className="text-gold">Excellence</span>
                </h2>
                <div className="divider-gold mb-8" />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Dr. Jasurjon Burkhanov is a board-certified plastic surgeon with over two decades of experience 
                    in aesthetic and reconstructive surgery. After completing his medical education at Tashkent 
                    Medical Academy, he pursued advanced training at Harvard Medical School, where he completed 
                    a prestigious fellowship in aesthetic surgery.
                  </p>
                  <p>
                    His commitment to excellence has earned him recognition as one of Newsweek's Top Plastic 
                    Surgeons for 2024. Dr. Burkhanov has authored over 50 publications in leading medical journals 
                    and has been invited to speak at international conferences on the latest advances in 
                    aesthetic surgery.
                  </p>
                  <p>
                    {t('about.philosophy')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                Education & Recognition
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Credentials & Awards
              </h2>
              <div className="divider-gold mb-6" />
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-white p-8 luxury-card text-center h-full">
                  <cred.icon className="w-12 h-12 text-gold mx-auto mb-6" />
                  <h3 className="font-display text-xl mb-3">{cred.title}</h3>
                  <p className="text-gray-600 text-sm">{cred.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                Our Approach
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Our Philosophy
              </h2>
              <div className="divider-gold mb-6" />
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                Meet the Team
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Our Expert Team
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-gray-600">
                A dedicated team of professionals committed to providing exceptional care and results.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-white overflow-hidden luxury-card">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-1">{member.name}</h3>
                    <p className="text-gold text-sm uppercase tracking-wider mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideLeft">
              <div>
                <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
                  Our Facility
                </p>
                <h2 className="font-display text-4xl md:text-5xl mb-6">
                  State-of-the-Art <span className="text-gold">Facility</span>
                </h2>
                <div className="divider-gold mb-8" />
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Our clinic is designed with your comfort and safety in mind. From the moment you 
                    enter our elegant reception area to your time in our fully equipped surgical suites, 
                    every detail has been carefully considered to provide a premium experience.
                  </p>
                  <p>
                    We utilize the latest technology and equipment to ensure optimal results and minimize 
                    recovery time. Our facility is accredited by the Joint Commission and meets the highest 
                    standards for patient safety and care.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Fully accredited surgical facility',
                      'Latest medical technology and equipment',
                      'Private recovery suites',
                      'Convenient location in central Tashkent',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/clinic-interior.jpg"
                  alt="Clinic interior"
                  className="w-full h-64 object-cover"
                />
                <img
                  src="/images/consultation-room.jpg"
                  alt="Consultation room"
                  className="w-full h-64 object-cover mt-8"
                />
                <img
                  src="/images/surgery-room.jpg"
                  alt="Surgery room"
                  className="w-full h-64 object-cover -mt-8"
                />
                <img
                  src="/images/service-medspa.jpg"
                  alt="Medspa area"
                  className="w-full h-64 object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
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

export default About;
