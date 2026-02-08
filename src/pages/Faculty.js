
const Faculty = () => {
  const teachers = [
    {
      name: 'ASHOK KUMAR MUNJAL',
      post: 'Principal',
      qualification: 'M.A., B.Ed., Ph.D.'
    },
    {
      name: 'SONIA',
      post: 'PGT',
      qualification: 'M.Com, B.Ed'
    },
    {
      name: 'EKTA SHARMA',
      post: 'PGT',
      qualification: 'M.Sc, B.Ed'
    },
    {
      name: 'SABHYA',
      post: 'PGT',
      qualification: 'M.Sc, B.Ed'
    },
    {
      name: 'ASHA',
      post: 'PGT',
      qualification: 'M.A, B.Ed'
    },
    {
      name: 'PRATIBHA',
      post: 'PGT',
      qualification: 'M.C.A , B.Ed.'
    },
    {
      name: 'JYOTI RANI',
      post: 'PGT',
      qualification: 'M.Sc, B.Ed'
    },
    {
      name: 'Chahat',
      post: 'PGT',
      qualification: 'M.Sc, B.Ed'
    },
    {
      name: 'VINITA',
      post: 'PGT',
      qualification: 'M.A., B.Ed.'
    },
    {
      name: 'GOLDI SINGH',
      post: 'TGT',
      qualification: 'M.A., B.Ed.'
    },
    {
      name: 'SANJANA',
      post: 'PGT',
      qualification: 'M.Sc, B.Ed'
    },
    {
      name: 'YAMAN',
      post: 'PGT',
      qualification: 'M.Com ,B.Ed'
    },
    {
      name: 'ANJU',
      post: 'PGT',
      qualification: 'M.Sc, B.Ed'
    },
    {
      name: 'NEELAM DEVI',
      post: 'PRT',
      qualification: 'M.A., B.Ed.'
    },
    {
      name: 'MONIKA',
      post: 'PRT',
      qualification: 'M.A, B.Ed'
    },
    {
      name: 'SUVEKA',
      post: 'PRT',
      qualification: 'M.Com, B.Ed.'
    },
    {
      name: 'MEENAKSHI',
      post: 'PRT',
      qualification: 'B.A., B.Ed.'
    },
    {
      name: 'ANITA TANWAR',
      post: 'PGT',
      qualification: 'M.A., B.Ed.'
    },
    {
      name: 'BABITA',
      post: 'TGT',
      qualification: 'M.C.A'
    },
    {
      name: 'SHALINI',
      post: 'TGT',
      qualification: 'M.A., B.Ed.'
    },
    {
      name: 'JYOTI',
      post: 'PGT',
      qualification: 'M.A., B.Ed.'
    },
    {
      name: 'KARAN',
      post: 'WELLNEES TEACHER',
      qualification: 'B. pharma'
    },
    {
      name: 'MANJU KUMARI',
      post: 'ACCOUNTANT',
      qualification: 'MBA'
    },
    {
      name: 'SANJAY KUMAR',
      post: 'LIBRARIAN',
      qualification: 'M.LIB'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Faculty</h1>
          <p className="text-lg opacity-90">Meet our dedicated team of educators</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our faculty comprises highly qualified, experienced, and dedicated educators who are 
              passionate about teaching and committed to student success. Each member brings unique 
              expertise and employs innovative teaching methods to make learning engaging and effective.
            </p>
            <p className="text-gray-600">
              Our teachers undergo regular professional development programs to stay updated with 
              the latest educational practices and technologies.
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 h-32 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{teacher.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{teacher.post}</p>
                  <p className="text-sm text-gray-600">{teacher.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Faculty Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Regular Training',
                  description: 'Workshops and seminars on modern teaching methodologies',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                },
                {
                  title: 'Technology Integration',
                  description: 'Training in digital tools and online teaching platforms',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Collaborative Learning',
                  description: 'Peer learning sessions and experience sharing',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="text-primary-600 flex justify-center mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faculty;
