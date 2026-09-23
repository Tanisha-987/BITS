import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import slide1 from "../assets/2.jpg";
import slide2 from "../assets/1.jpg";
import slide3 from "../assets/3.jpg";
import slide4 from "../assets/4.jpeg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: 'BITS International School',
      subtitle: 'Building tomorrow\'s leaders with excellence in learning',
      image: slide1
    },
    {
      title: 'Excellence in Education',
      subtitle: 'CBSE affiliated · Quality learning for every child',
      image: slide2
    },
    {
      title: 'Holistic Development',
      subtitle: 'Nurturing mind, body and character together',
      image: slide3
    },
    {
      title: 'A Campus That Inspires',
      subtitle: 'Modern facilities, caring faculty, bright futures',
      image: slide4
    }
  ];

  const goTo = useCallback((index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  }, [slides.length]);

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
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Quality Education',
      description: 'CBSE curriculum with focus on conceptual learning and practical application'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Experienced Faculty',
      description: 'Highly qualified and dedicated teachers committed to student success'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Modern Infrastructure',
      description: 'Well-equipped laboratories, library, sports facilities and smart classrooms'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Safe Campus',
      description: 'Secure environment with CCTV surveillance and trained security personnel'
    }
  ];

  return (
    <div className="animate-fade-in">
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
                    isActive
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
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

        {/* Nav arrows */}
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

        {/* Slide indicators + progress */}
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

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Welcome to BITS International School
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            BITS International School has been a beacon of excellence in education for over two decades. 
            Affiliated with CBSE, we are committed to providing quality education that nurtures 
            young minds and prepares them for the challenges of tomorrow.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our holistic approach to education ensures that every student receives personalized 
            attention and opportunities to excel academically, athletically, and artistically. 
            We believe in creating responsible citizens who will contribute positively to society.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary-800 mb-12">
            Why Choose BITS International School
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-primary-500"
              >
                <div className="text-primary-600 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-primary-400 to-primary-900 rounded-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-sm opacity-90">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75+</div>
              <div className="text-sm opacity-90">Expert Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
