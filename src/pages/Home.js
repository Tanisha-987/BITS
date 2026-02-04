import React, { useState, useEffect } from 'react';
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome to BITS International School',
      subtitle: 'Building Tomorrow\'s Leaders Today',
      image: slide1
    },
    {
      title: 'Excellence in Education',
      subtitle: 'CBSE Affiliated - Quality Learning',
      image: slide2
    },
    {
      title: 'Holistic Development',
      subtitle: 'Nurturing Mind, Body & Spirit',
      image: slide3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl opacity-90 drop-shadow-md">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

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
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1500+</div>
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
