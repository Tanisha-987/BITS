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
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-8 px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Faculty</h1>
          <p className="text-lg opacity-90">Meet our dedicated team of educators</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our teachers undergo regular professional development programs to stay updated with 
            the latest educational practices and technologies.
          </p>
        </div>

        {/* Faculty Table - Desktop & Tablet */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold uppercase tracking-wider w-20">
                    S.No.
                  </th>
                  <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Faculty Name
                  </th>
                  <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Qualification
                  </th>
                  <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Designation
                  </th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-4 text-sm md:text-base text-gray-700 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-gray-800 text-sm md:text-base">
                        {teacher.name}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-xs md:text-sm">
                      {teacher.qualification}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-xs md:text-sm font-medium">
                        {teacher.post}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Card Style */}
          <div className="sm:hidden">
            {teachers.map((teacher, index) => (
              <div 
                key={index}
                className="border-b border-gray-200 p-4 hover:bg-blue-50 transition-colors"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800 text-base">{teacher.name}</h3>
                    <span className="text-sm font-semibold text-gray-500">{index + 1}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-md text-xs font-medium">
                      {teacher.post}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                      {teacher.qualification}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Development Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-10 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            Faculty Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Regular Training</h3>
              <p className="text-sm text-gray-600">
                Workshops and seminars on modern teaching methodologies
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Technology Integration</h3>
              <p className="text-sm text-gray-600">
                Training in digital tools and online teaching platforms
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Collaborative Learning</h3>
              <p className="text-sm text-gray-600">
                Peer learning sessions and experience sharing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;