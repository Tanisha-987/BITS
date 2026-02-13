
const MandatoryDisclosures = () => {

   const downloadItems = [
    {
      title: 'CBSE Recognition',
      description: 'CBSE Recognition form for all students',
      size: '245 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      file: '/downloads/recognition.pdf'
    },
    {
      title: 'Fee Structure 2026-27',
      description: 'Complete fee structure for all classes',
      size: '180 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      file: '/downloads/fee.pdf'
    },
    {
      title: 'BITS NOC',
      description: 'BITS NOC pdf',
      size: '3.2 MB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      file: '/downloads/noc.pdf'
    },
    {
      title: 'Managing committee',
      description: 'Managing committee pdf for the academic year',
      size: '125 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      file: '/downloads/committee.pdf'
    },
    {
      title: 'Building Safety',
      description: 'Building safety rules pdf',
      size: '520 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      file: '/downloads/building.pdf'
    },
    {
      title: 'Sanitary and Hygiene',
      description: 'Sanitary and Hygiene pdf',
      size: '890 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      file: '/downloads/sanitary.pdf'
    },
    {
      title: 'Caffiliation',
      description: 'Caffiliation copy from CBSE pdf',
      size: '320 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      file: '/downloads/affilliation.pdf'
    },
    {
      title: 'Water Annexure',
      description: 'Water Annexure pdf',
      size: '410 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      file: '/downloads/water.pdf'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Mandatory Public Disclosures</h1>
          <p className="text-lg opacity-90">As per CBSE guidelines</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* CBSE Affiliation */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">CBSE Affiliation Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'School Name', value: 'BITS International School' },
                { label: 'Affiliation Number', value: '531021' },
                { label: 'School Code', value: '90968' },
                { label: 'Principal Name', value: 'ASHOK KUMAR MUNJAL' },
                { label: 'Principal Qualification', value: 'M.A., B.Ed., Ph.D.' },
                { label: 'Year of Establishment', value: '2010' },
                { label: 'Email ID', value: 'bisbhiwani@gmail.com' },
                { label: 'Contact Number', value: '+91-9992222480' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-4 py-2">
                  <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                  <p className="font-semibold text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School Management */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">School Management Committee</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">S.No.</th>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-700">Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: 'Mr. Sashi Ranjan parmar Ji', designation: 'Chairman' },
                    { name: 'Mr. Rishipal Ji', designation: 'Vice Chairman' },
                    { name: 'Mr. Ashok Kumar Munjal Ji', designation: 'Director' },
                  ].map((member, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">{member.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* downloads */}
         <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary-600 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Size: {item.size}</span>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 group-hover:gap-3"
                    >
                      <span>click me</span>
                    </a>

                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Staff Details */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Staff Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { category: 'Principal', count: '1', icon: '👔' },
                { category: 'Vice Principal', count: '1', icon: '👔' },
                { category: 'PGT Teachers', count: '15', icon: '👨‍🏫' },
                { category: 'TGT Teachers', count: '20', icon: '👩‍🏫' },
                { category: 'PRT Teachers', count: '12', icon: '👨‍🏫' },
                { category: 'Support Staff', count: '25', icon: '👥' }
              ].map((staff, index) => (
                <div key={index} className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">{staff.icon}</div>
                  <div className="text-3xl font-bold text-primary-700 mb-1">{staff.count}</div>
                  <div className="text-gray-700 font-medium">{staff.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Details */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Infrastructure Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { facility: 'Total Campus Area', details: '5 Acres' },
                { facility: 'Total Built-up Area', details: '50,000 sq. ft.' },
                { facility: 'Number of Classrooms', details: '45 (All Air-conditioned)' },
                { facility: 'Science Laboratories', details: '3 (Physics, Chemistry, Biology)' },
                { facility: 'Computer Lab', details: '2 Labs with 80 Computers' },
                { facility: 'Library Books', details: '12,000+ Books' },
                { facility: 'Sports Facilities', details: 'Football Ground, Basketball Court, Indoor Games' },
                { facility: 'Auditorium Capacity', details: '500 Seats' },
                { facility: 'Medical Room', details: 'Available with Nurse' },
                { facility: 'Transport Facility', details: '15 Buses with GPS' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border-l-4 border-primary-500 bg-gray-50 rounded">
                  <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.facility}</h4>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Certificates */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Safety & Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Fire Safety Certificate',
                  status: 'Valid',
                  validity: 'Valid till: March 2025',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  )
                },
                {
                  title: 'Building Safety Certificate',
                  status: 'Valid',
                  validity: 'Valid till: June 2025',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: 'Health & Sanitation Certificate',
                  status: 'Valid',
                  validity: 'Valid till: December 2024',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: 'CCTV Surveillance',
                  status: 'Installed',
                  validity: '80+ Cameras covering entire campus',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                }
              ].map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-green-600">{cert.icon}</div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-800 mb-1">{cert.title}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{cert.validity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Results */}
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Academic Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { year: '2024-25', class: 'Class X', percentage: '95.2%' },
                { year: '2024-25', class: 'Class XII', percentage: '94.8%' },
                { year: '2023-24', class: 'Class X', percentage: '94.5%' },
                { year: '2023-24', class: 'Class XII', percentage: '93.9%' },
                { year: '2022-23', class: 'Class X', percentage: '93.8%' },
                { year: '2022-23', class: 'Class XII', percentage: '92.5%' }
              ].map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center border-2 border-green-200">
                  <div className="text-sm text-gray-600 mb-2">{result.year}</div>
                  <div className="text-lg font-bold text-gray-800 mb-2">{result.class}</div>
                  <div className="text-3xl font-bold text-green-600">{result.percentage}</div>
                  <div className="text-xs text-gray-600 mt-1">Pass Percentage</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosures;
