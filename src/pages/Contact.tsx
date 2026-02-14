import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Video } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      details: ['45 Amir Temur Avenue', 'Tashkent, Uzbekistan 100000'],
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: ['+998 91 977 27 91', '+998 71 123 45 67'],
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: ['info@drjasurjon.com', 'appointments@drjasurjon.com'],
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: ['Mon - Fri: 9:00 - 18:00', 'Sat: 10:00 - 15:00'],
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
              {t('contact.subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('contact.title')}
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-white/80">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimation key={index} animation="scaleIn" delay={index * 100}>
                <div className="bg-white p-8 text-center luxury-card h-full">
                  <info.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl mb-4">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollAnimation animation="slideLeft">
              <div>
                <h2 className="font-display text-4xl mb-6">
                  Send Us a <span className="text-gold">Message</span>
                </h2>
                <div className="divider-gold mb-8" />

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-2xl mb-2">Thank You!</h3>
                    <p className="text-gray-600">{t('contact.form.success')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="form-label">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">{t('contact.form.email')}</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="form-label">{t('contact.form.phone')}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+998 XX XXX XX XX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">{t('contact.form.message')}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="form-input resize-none"
                        placeholder="Tell us about your goals and questions..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t('contact.form.submit')}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollAnimation>

            {/* Map */}
            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="font-display text-4xl mb-6">
                  Visit Our <span className="text-gold">Clinic</span>
                </h2>
                <div className="divider-gold mb-8" />
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6384084725!2d69.2798!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTYnNDcuMyJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location"
                  />
                </div>
                <div className="mt-6 p-6 bg-gold/10">
                  <div className="flex items-start gap-4">
                    <Video className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display text-lg mb-2">{t('contact.virtual')}</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Can\'t visit in person? Schedule a virtual consultation from the comfort of your home.
                      </p>
                      <button className="text-gold text-sm font-semibold hover:underline">
                        Schedule Virtual Consultation →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Frequently Asked Questions
              </h2>
              <div className="divider-gold mb-6" />
            </div>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How do I schedule a consultation?',
                answer: 'You can schedule a consultation by filling out the contact form, calling our office directly, or using our online booking system. We typically offer appointments within 1-2 weeks.',
              },
              {
                question: 'What should I bring to my consultation?',
                answer: 'Please bring a valid ID, your medical history, list of current medications, and any questions you may have. If you have specific goals in mind, photos can be helpful for discussion.',
              },
              {
                question: 'Do you offer financing options?',
                answer: 'Yes, we offer various financing options to help make your procedure more affordable. Our patient coordinators can discuss payment plans during your consultation.',
              },
              {
                question: 'How long is the recovery period?',
                answer: 'Recovery time varies depending on the procedure. Minor procedures may require only a few days, while major surgeries can take several weeks. We\'ll provide detailed recovery instructions.',
              },
            ].map((faq, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <div className="bg-white p-6 luxury-card">
                  <h3 className="font-display text-xl mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
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

export default Contact;
