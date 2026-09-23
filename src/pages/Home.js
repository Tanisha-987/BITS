import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../assets/2.jpg';
import slide2 from '../assets/1.jpg';
import slide3 from '../assets/3.jpg';
import slide4 from '../assets/4.jpeg';
import aboutImg from '../assets/about.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: 'BITS International School',
      subtitle: "Building tomorrow's leaders with excellence in learning",
      image: slide1,
    },
    {
      title: 'Excellence in Education',
      subtitle: 'CBSE affiliated · Quality learning for every child',
      image: slide2,
    },
    {
      title: 'Holistic Development',
      subtitle: 'Nurturing mind, body and character together',
      image: slide3,
    },
    {
      title: 'A Campus That Inspires',
      subtitle: 'Modern facilities, caring faculty, bright futures',
      image: slide4,
    },
  ];

  const goTo = useCallback(
    (index) => {
      setCurrentSlide((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const nextSlide = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prevSlide = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const highlights = [
    {
      title: 'Quality Education',
      description: 'CBSE curriculum with conceptual learning and practical application.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Experienced Faculty',
      description: 'Qualified, caring teachers committed to every student’s success.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Modern Infrastructure',
      description: 'Labs, library, sports facilities and smart classrooms on campus.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Safe Campus',
      description: 'Secure environment with CCTV and trained security personnel.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '800+', label: 'Students' },
    { value: '75+', label: 'Expert Faculty' },
    { value: '95%', label: 'Success Rate' },
  ];

  const pathways = [
    { title: 'Admissions', desc: 'Start your journey with us', path: '/admissions' },
    { title: 'Academics', desc: 'Curriculum & calendar', path: '/academics' },
    { title: 'Disclosures', desc: 'CBSE mandatory docs', path: '/mandatory-disclosures' },
  ];

  return (
    <div className="animate-fade-in bg-slate-50">
      {/* Hero Carousel */}
      <section
        className="relative h-[70vh] min-h-[420px] max-h-[720px] md:h-[78vh] overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-roledescription="carousel"
        aria-label="School highlights"
      >
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
              }`}
              aria-hidden={!isActive}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-900/55 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div
                  className={`max-w-3xl text-white transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary-200 mb-4">
                    <span className="w-8 h-px bg-primary-300" />
                    CBSE Affiliated
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-2 bg-white text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Apply for Admission
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Explore Campus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:bg-white/25 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-all duration-300 hover:bg-white/25 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-20 px-4">
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block text-white/80 text-sm font-medium tracking-wide">
              <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="mx-2 text-white/40">/</span>
              <span>{String(slides.length).padStart(2, '0')}</span>
            </div>
            <div className="flex justify-center gap-2 flex-1 sm:flex-none">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index}
                  className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-500 ${
                    currentSlide === index ? 'w-10 bg-white/30' : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                >
                  {currentSlide === index && (
                    <span
                      key={`progress-${currentSlide}-${isPaused}`}
                      className={`absolute inset-y-0 left-0 bg-white rounded-full ${
                        isPaused ? 'w-full' : 'animate-banner-progress'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-primary-200/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative order-2 lg:order-1 animate-fade-up">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-400/30 to-primary-800/20 rounded-[2rem] blur-sm" />
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl shadow-primary-900/15 aspect-[4/3]">
                <img src={aboutImg} alt="BITS International School campus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur text-primary-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    CBSE Affiliated · Aff. No. 531021
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-4">
                <span className="w-8 h-px bg-primary-400" />
                About the School
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-5 leading-tight">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">
                  BITS International School
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
                A beacon of excellence in education for over a decade. Affiliated with CBSE, we
                nurture young minds and prepare them for the challenges of tomorrow.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                Our holistic approach ensures every student gets personalized attention — to excel
                academically, athletically, and artistically — and grow into responsible citizens.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary-700/25 hover:-translate-y-0.5 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white border-2 border-primary-200 text-primary-800 hover:border-primary-400 hover:bg-primary-50 px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-primary-50/40 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3 justify-center">
              <span className="w-8 h-px bg-primary-400" />
              Why BITS
              <span className="w-8 h-px bg-primary-400" />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-3">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              Everything your child needs to learn, grow, and thrive — under one caring roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-6 border border-primary-100/80 shadow-md hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1.5 transition-all duration-400 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-400 to-primary-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 text-white flex items-center justify-center mb-5 shadow-lg shadow-primary-700/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-400/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary-200 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Our Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Numbers That Inspire</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-8 px-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-3">Explore Next</h2>
            <p className="text-gray-600">Quick links to what parents and students look for most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathways.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative bg-white rounded-2xl p-7 border border-primary-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-950 mb-1 group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <span className="w-11 h-11 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-800 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
