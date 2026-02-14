import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const Blog = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('blog.categories.all') },
    { id: 'procedures', label: t('blog.categories.procedures') },
    { id: 'recovery', label: t('blog.categories.recovery') },
    { id: 'trends', label: t('blog.categories.trends') },
    { id: 'wellness', label: t('blog.categories.wellness') },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Art of Facelift: Achieving Timeless Elegance',
      excerpt: 'Discover how modern facelift techniques can restore youthful contours while maintaining your natural expressions and unique beauty.',
      image: '/images/blog-facelift.jpg',
      category: 'procedures',
      author: 'Dr. Jasurjon Burkhanov',
      date: 'March 15, 2024',
      readTime: '8 min read',
      slug: 'art-of-facelift',
    },
    {
      id: 2,
      title: 'Rhinoplasty Recovery: What to Expect Week by Week',
      excerpt: 'A comprehensive guide to the rhinoplasty recovery process, from immediate post-op care to seeing your final results.',
      image: '/images/service-rhinoplasty.jpg',
      category: 'recovery',
      author: 'Dr. Jasurjon Burkhanov',
      date: 'March 10, 2024',
      readTime: '6 min read',
      slug: 'rhinoplasty-recovery-guide',
    },
    {
      id: 3,
      title: '2024 Trends in Aesthetic Medicine',
      excerpt: 'Explore the latest innovations and trends shaping the future of plastic surgery and non-surgical aesthetic treatments.',
      image: '/images/blog-injectables.jpg',
      category: 'trends',
      author: 'Dr. Sarah Chen',
      date: 'March 5, 2024',
      readTime: '5 min read',
      slug: '2024-aesthetic-trends',
    },
    {
      id: 4,
      title: 'Mommy Makeover: Restoring Your Pre-Baby Body',
      excerpt: 'Learn how a customized combination of procedures can help mothers regain confidence in their post-pregnancy bodies.',
      image: '/images/service-tummytuck.jpg',
      category: 'procedures',
      author: 'Dr. Jasurjon Burkhanov',
      date: 'February 28, 2024',
      readTime: '7 min read',
      slug: 'mommy-makeover-guide',
    },
    {
      id: 5,
      title: 'The Benefits of Combining Surgical and Non-Surgical Treatments',
      excerpt: 'How integrating Botox, fillers, and laser treatments with surgery can enhance and prolong your results.',
      image: '/images/service-medspa.jpg',
      category: 'procedures',
      author: 'Nina Patel, RN',
      date: 'February 20, 2024',
      readTime: '4 min read',
      slug: 'combining-treatments',
    },
    {
      id: 6,
      title: 'Nutrition for Optimal Healing After Surgery',
      excerpt: 'Expert tips on the best foods and supplements to support your body\'s healing process after plastic surgery.',
      image: '/images/blog-injectables.jpg',
      category: 'wellness',
      author: 'Maria Santos',
      date: 'February 15, 2024',
      readTime: '5 min read',
      slug: 'nutrition-for-healing',
    },
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/blog-facelift.jpg"
            alt="Blog header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-luxury">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
              {t('blog.subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('blog.title')}
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-white/80">
              {t('blog.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <ScrollAnimation animation="fadeIn">
            <div className="bg-white overflow-hidden luxury-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider">
                      {categories.find(c => c.id === featuredPost.category)?.label}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="btn-outline inline-flex items-center gap-2 self-start"
                  >
                    {t('blog.readMore')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
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

      {/* Blog Grid */}
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <ScrollAnimation key={post.id} animation="slideUp" delay={index * 100}>
                <article className="bg-white overflow-hidden luxury-card group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider">
                        {categories.find(c => c.id === post.category)?.label}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-xl mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-gold text-sm flex items-center gap-1 hover:underline"
                      >
                        {t('blog.readMore')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-luxury">
          <ScrollAnimation animation="scaleIn">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Stay Informed
              </h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter for the latest insights, tips, and updates in aesthetic medicine.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
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

export default Blog;
