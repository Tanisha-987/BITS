import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
          <p className="text-lg opacity-90">Learn more about our journey and values</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* School History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our History</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2004, BITS International School emerged from a vision to create an educational 
              institution that would blend traditional values with modern teaching methodologies. 
              What started as a small school with just 50 students has now grown into one of the 
              most reputed CBSE-affiliated schools in the region.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the past two decades, we have consistently maintained high academic standards 
              while ensuring the all-round development of our students. Our alumni have gone on 
              to excel in various fields including medicine, engineering, arts, sports, and public service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, BITS International School stands as a testament to quality education, with state-of-the-art 
              facilities, dedicated faculty, and a student community that continues to make us proud.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-8 border-l-4 border-primary-600">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-2xl font-bold text-primary-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a center of excellence in education, fostering intellectual curiosity, 
                moral values, and social responsibility in our students. We envision creating 
                global citizens who are confident, compassionate, and capable of making positive 
                contributions to society.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-2xl font-bold text-primary-800">Our Mission</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Provide quality education following CBSE curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Nurture critical thinking and creativity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Develop strong moral and ethical values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Encourage participation in sports and arts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Foster a safe and inclusive learning environment</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Principal's Message</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary-100 to-blue-100 p-8 flex flex-col items-center justify-center">
                <div className="w-40 h-40 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary-800">Dr. Rajesh Kumar</h4>
                <p className="text-gray-600">Principal</p>
                <p className="text-sm text-gray-500 mt-1">M.A., B.Ed., Ph.D.</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "Dear Students, Parents, and Guardians,"
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  It gives me immense pleasure to welcome you to BITS International School. As we continue 
                  our journey of educational excellence, I am proud to lead an institution that 
                  has consistently demonstrated commitment to holistic student development.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our focus extends beyond academic achievement. We believe in nurturing well-rounded 
                  individuals who are equipped with knowledge, skills, and values necessary to navigate 
                  an ever-changing world. Our dedicated faculty works tirelessly to create a learning 
                  environment that is both challenging and supportive.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I invite you to explore our school and discover the opportunities that await. 
                  Together, we can shape a bright future for our students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Smart Classrooms',
                description: 'Air-conditioned rooms equipped with interactive boards and audio-visual aids',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Science Laboratories',
                description: 'Well-equipped Physics, Chemistry, and Biology labs with modern apparatus',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: 'Library',
                description: 'Extensive collection of books, journals, and digital resources',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: 'Computer Lab',
                description: 'State-of-the-art computers with high-speed internet connectivity',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Sports Facilities',
                description: 'Basketball court, football ground, indoor games room, and athletics track',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Auditorium',
                description: 'Modern auditorium with seating capacity of 500 for events and programs',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                )
              }
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary-600 mb-3">{facility.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{facility.title}</h4>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
