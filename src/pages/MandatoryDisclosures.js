
// const MandatoryDisclosures = () => {

//   const downloadItems = [
//     {
//       title: 'CBSE Recognition',
//       description: 'CBSE Recognition form for all students',
//       size: '245 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       ),
//       file: '/downloads/recognition.pdf'
//     },
//     {
//       title: 'Fee Structure 2026-27',
//       description: 'Complete fee structure for all classes',
//       size: '180 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       ),
//       file: '/downloads/fee.pdf'
//     },
//     {
//       title: 'BITS NOC',
//       description: 'BITS NOC pdf',
//       size: '3.2 MB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//         </svg>
//       ),
//       file: '/downloads/noc.pdf'
//     },
//     {
//       title: 'Managing committee',
//       description: 'Managing committee pdf for the academic year',
//       size: '125 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//       ),
//       file: '/downloads/committee.pdf'
//     },
//     {
//       title: 'Building Safety',
//       description: 'Building safety rules pdf',
//       size: '520 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       ),
//       file: '/downloads/building.pdf'
//     },
//     {
//       title: 'Sanitary and Hygiene',
//       description: 'Sanitary and Hygiene pdf',
//       size: '890 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
//         </svg>
//       ),
//       file: '/downloads/sanitary.pdf'
//     },
//     {
//       title: 'Caffiliation',
//       description: 'Caffiliation copy from CBSE pdf',
//       size: '320 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//         </svg>
//       ),
//       file: '/downloads/affilliation.pdf'
//     },
//     {
//       title: 'Water Annexure',
//       description: 'Water Annexure pdf',
//       size: '410 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//         </svg>
//       ),
//       file: '/downloads/water.pdf'
//     },
//     {
//       title: 'Fire Safety',
//       description: 'Fire safety pdf',
//       size: '410 KB',
//       format: 'PDF',
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//         </svg>
//       ),
//       file: '/downloads/fire.pdf'
//     }
//   ];

//   return (
//     <div className="animate-fade-in">
//       {/* Page Header */}
//       <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-2">Mandatory Public Disclosures</h1>
//           <p className="text-lg opacity-90">As per CBSE guidelines</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         {/* CBSE Affiliation */}
//         <section className="mb-12">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-primary-800 mb-6">CBSE Affiliation Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { label: 'School Name', value: 'BITS International School' },
//                 { label: 'Affiliation Number', value: '531021' },
//                 { label: 'School Code', value: '90968' },
//                 { label: 'Principal Name', value: 'ASHOK KUMAR MUNJAL' },
//                 { label: 'Principal Qualification', value: 'M.A., B.Ed., Ph.D.' },
//                 { label: 'Year of Establishment', value: '2010' },
//                 { label: 'Email ID', value: 'bisbhiwani@gmail.com' },
//                 { label: 'Contact Number', value: '+91-9992222480' }
//               ].map((item, index) => (
//                 <div key={index} className="border-l-4 border-primary-500 pl-4 py-2">
//                   <p className="text-sm text-gray-600 mb-1">{item.label}</p>
//                   <p className="font-semibold text-gray-800">{item.value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* School Management */}
//         <section className="mb-12">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-primary-800 mb-6">School Management Committee</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full text-left">
//                 <thead className="bg-primary-50">
//                   <tr>
//                     <th className="px-6 py-3 text-sm font-semibold text-gray-700">S.No.</th>
//                     <th className="px-6 py-3 text-sm font-semibold text-gray-700">Name</th>
//                     <th className="px-6 py-3 text-sm font-semibold text-gray-700">Designation</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {[
//                     { name: 'Mr. Sashi Ranjan parmar Ji', designation: 'Chairman' },
//                     { name: 'Mr. Rishipal Ji', designation: 'Vice Chairman' },
//                     { name: 'Mr. Ashok Kumar Munjal Ji', designation: 'Director' },
//                   ].map((member, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
//                       <td className="px-6 py-4 text-sm text-gray-800 font-medium">{member.name}</td>
//                       <td className="px-6 py-4 text-sm text-gray-700">{member.designation}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* downloads */}
//         <section>
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-primary-800 mb-6">Legal Documents</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {downloadItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
//                 >
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="text-primary-600 group-hover:scale-110 transition-transform">
//                         {item.icon}
//                       </div>
//                       <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
//                         {item.format}
//                       </span>
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
//                     <p className="text-sm text-gray-600 mb-4">{item.description}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs text-gray-500">Size: {item.size}</span>
//                       <a
//                         href={item.file}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-primary-600 hover:bg-gradient-to-r from-primary-400 to-primary-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 group-hover:gap-3"
//                       >
//                         <span>click me</span>
//                       </a>

//                     </div>
//                   </div>
//                   <div className="h-1 bg-gradient-to-r from-primary-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Staff Details */}
//         <section className="mb-12">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-primary-800 mb-6">Staff Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 { category: 'Principal', count: '1', icon: '👔' },
//                 { category: 'Vice Principal', count: '1', icon: '👔' },
//                 { category: 'PGT Teachers', count: '15', icon: '👨‍🏫' },
//                 { category: 'TGT Teachers', count: '20', icon: '👩‍🏫' },
//                 { category: 'PRT Teachers', count: '12', icon: '👨‍🏫' },
//                 { category: 'Support Staff', count: '25', icon: '👥' }
//               ].map((staff, index) => (
//                 <div key={index} className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-6 text-center">
//                   <div className="text-4xl mb-2">{staff.icon}</div>
//                   <div className="text-3xl font-bold text-primary-700 mb-1">{staff.count}</div>
//                   <div className="text-gray-700 font-medium">{staff.category}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Infrastructure Details */}
//         <section className="mb-12">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-primary-800 mb-6">Infrastructure Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { facility: 'Total Campus Area', details: '11400 sq. mtr' },
//                 { facility: 'Classrooms Area', details: '53 sq. ft.' },
//                 { facility: 'Laboratories Area', details: '67 sq. ft.' },
//                 { facility: 'No. of Classrooms', details: '21' },
//                 { facility: 'No. of Laboratories Including Computer Labs', details: '5' },
//                 { facility: 'No. Of Girls Toilet', details: '10' },
//                 { facility: 'No. Of Boys Toilet', details: '10' },
//                 { facility: 'Internet Facilities', details: 'Yes' },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start gap-3 p-4 border-l-4 border-primary-500 bg-gray-50 rounded">
//                   <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">{item.facility}</h4>
//                     <p className="text-sm text-gray-600">{item.details}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-start gap-3 p-4 border-l-4 border-primary-500 bg-gray-50 rounded mt-12">
//                   <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Inspection Of School Covering Infrastructure</h4>
//                     <p className="text-sm text-gray-600">
//                       <a href="https://youtu.be/oIQdYUqNlvA?feature=shared" >click me</a>
//                     </p>
//                   </div>
//                 </div>
//           </div>
//         </section>

//         {/* Safety Certificates */}
//         <section className="mb-12">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-primary-800 mb-6">Safety & Security Measures</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 {
//                   title: 'Fire Safety Certificate',
//                   status: 'Valid',
//                   validity: 'Certified',
//                   icon: (
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
//                     </svg>
//                   )
//                 },
//                 {
//                   title: 'Building Safety Certificate',
//                   status: 'Valid',
//                   validity: 'Certified',
//                   icon: (
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                     </svg>
//                   )
//                 },
//                 {
//                   title: 'Health & Sanitation Certificate',
//                   status: 'Valid',
//                   validity: 'Certified',
//                   icon: (
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                     </svg>
//                   )
//                 },
//                 {
//                   title: 'CCTV Surveillance',
//                   status: 'Installed',
//                   validity: 'Certified',
//                   icon: (
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                     </svg>
//                   )
//                 }
//               ].map((cert, index) => (
//                 <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
//                   <div className="flex items-start gap-4">
//                     <div className="text-green-600">{cert.icon}</div>
//                     <div className="flex-grow">
//                       <h4 className="font-bold text-gray-800 mb-1">{cert.title}</h4>
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
//                           {cert.status}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-400 tracking-wide font-bold">{cert.validity}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Academic Results */}
//         <section>
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-primary-800 mb-6">Academic Performance</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 { year: '2024-25', class: 'Class X', percentage: '100%' },
//                 { year: '2024-25', class: 'Class XII', percentage: '100%' },
//                 { year: '2023-24', class: 'Class X', percentage: '100%' },
//                 { year: '2023-24', class: 'Class XII', percentage: '100%' },
//                 { year: '2022-23', class: 'Class X', percentage: '100%' },
//                 { year: '2022-23', class: 'Class XII', percentage: '99%' }
//               ].map((result, index) => (
//                 <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center border-2 border-green-200">
//                   <div className="text-sm text-gray-600 mb-2">{result.year}</div>
//                   <div className="text-lg font-bold text-gray-800 mb-2">{result.class}</div>
//                   <div className="text-3xl font-bold text-green-600">{result.percentage}</div>
//                   <div className="text-xs text-gray-600 mt-1">Pass Percentage</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default MandatoryDisclosures;




import React from 'react';

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
      title: 'Fee Structure 2024-25',
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
      title: 'School NOC',
      description: 'NOC from competent authority',
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
      title: 'Managing Committee',
      description: 'School managing committee details',
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
      title: 'Building Safety Certificate',
      description: 'Building safety compliance certificate',
      size: '520 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      file: '/downloads/building.pdf'
    },
    {
      title: 'Sanitation & Hygiene Certificate',
      description: 'Sanitation and hygiene compliance',
      size: '890 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      file: '/downloads/sanitary.pdf'
    },
    {
      title: 'Affiliation Certificate',
      description: 'CBSE affiliation certificate copy',
      size: '320 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      file: '/downloads/affiliation.pdf'
    },
    {
      title: 'Water Quality Certificate',
      description: 'Water quality test certificate',
      size: '410 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      file: '/downloads/water.pdf'
    },
    {
      title: 'Fire Safety Certificate',
      description: 'Fire safety NOC and certificate',
      size: '410 KB',
      format: 'PDF',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      file: '/downloads/fire.pdf'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Mandatory Public Disclosures</h1>
          <p className="text-lg opacity-90">As per CBSE guidelines and norms</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Section A: General Information */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">A. GENERAL INFORMATION</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-50 w-1/6">S.No.</td>
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-50">INFORMATION</td>
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-50">DETAILS</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">1</td>
                    <td className="px-6 py-4 text-gray-800">Name of the School</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">BITS INTERNATIONAL SCHOOL PALUWAS BHIWANI HRY</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-800">Affiliation No. </td>
                    <td className="px-6 py-4 text-gray-900 font-medium">531021</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">3</td>
                    <td className="px-6 py-4 text-gray-800">School Code</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">40968</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">4</td>
                    <td className="px-6 py-4 text-gray-800">Complete Address with Pin Code</td>
                    <td className="px-6 py-4 text-gray-900">BITS INTERNATIONAL SCHOOL, NEAR GAUSHALA, MEHAM ROAD, PALUWAS BHIWANI, BHIWANI, - 127021</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">5</td>
                    <td className="px-6 py-4 text-gray-800">Principal Name</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">Mr. ASHOK KUMAR MUNJAL</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">6</td>
                    <td className="px-6 py-4 text-gray-800">Principal Qualification</td>
                    <td className="px-6 py-4 text-gray-900">M.A B.ED</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">7</td>
                    <td className="px-6 py-4 text-gray-800">School Email ID</td>
                    <td className="px-6 py-4 text-gray-900">bisbhiwani@gmail.com</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">8</td>
                    <td className="px-6 py-4 text-gray-800">Contact No.</td>
                    <td className="px-6 py-4 text-gray-900">+91 8199928253</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section B: Documents and Information */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">B. DOCUMENTS AND INFORMATION</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">S.No.</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">DOCUMENTS/INFORMATION</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">UPLOAD DOCUMENTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {downloadItems.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-gray-800">{item.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-400 to-primary-900 hover:bg-gradient-to-r from-primary-400 to-primary-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                          
                          View PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section C: Result and Academics */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">C. RESULT CLASS: X</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">S.No.</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">YEAR</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">NO. OF REGISTERED STUDENTS</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">NO. OF STUDENTS PASSED</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">PASS PERCENTAGE</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">REMARKS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">1</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">2023-24</td>
                    <td className="px-6 py-4 text-gray-800">58</td>
                    <td className="px-6 py-4 text-gray-800">56</td>
                    <td className="px-6 py-4 text-green-600 font-bold">96.55%</td>
                    <td className="px-6 py-4 text-gray-600">Excellent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">2022-23</td>
                    <td className="px-6 py-4 text-gray-800">145</td>
                    <td className="px-6 py-4 text-gray-800">137</td>
                    <td className="px-6 py-4 text-green-600 font-bold">94.5%</td>
                    <td className="px-6 py-4 text-gray-600">Excellent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">3</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">2021-22</td>
                    <td className="px-6 py-4 text-gray-800">140</td>
                    <td className="px-6 py-4 text-gray-800">131</td>
                    <td className="px-6 py-4 text-green-600 font-bold">93.6%</td>
                    <td className="px-6 py-4 text-gray-600">Very Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section D: Result Class XII */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">D. RESULT CLASS: XII</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">S.No.</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">YEAR</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">NO. OF REGISTERED STUDENTS</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">NO. OF STUDENTS PASSED</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">PASS PERCENTAGE</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">REMARKS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">1</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">2023-24</td>
                    <td className="px-6 py-4 text-gray-800">91</td>
                    <td className="px-6 py-4 text-gray-800">82</td>
                    <td className="px-6 py-4 text-green-600 font-bold">90.01%</td>
                    <td className="px-6 py-4 text-gray-600">Good</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">2022-23</td>
                    <td className="px-6 py-4 text-gray-800">115</td>
                    <td className="px-6 py-4 text-gray-800">108</td>
                    <td className="px-6 py-4 text-green-600 font-bold">93.9%</td>
                    <td className="px-6 py-4 text-gray-600">Excellent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">3</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">2021-22</td>
                    <td className="px-6 py-4 text-gray-800">110</td>
                    <td className="px-6 py-4 text-gray-800">102</td>
                    <td className="px-6 py-4 text-green-600 font-bold">92.7%</td>
                    <td className="px-6 py-4 text-gray-600">Very Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section E: School Infrastructure */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">E. SCHOOL INFRASTRUCTURE</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-50 w-1/6">S.No.</td>
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-50">INFORMATION</td>
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-gray-50">DETAILS</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">1</td>
                    <td className="px-6 py-4 text-gray-800">Total Campus Area of the School</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">11400 sq. mtr</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-800">No. and Size of the Classrooms (in sq mtr)</td>
                    <td className="px-6 py-4 text-gray-900">21 Classrooms (Each 53 sq. mtr)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">3</td>
                    <td className="px-6 py-4 text-gray-800">No. and Size of Laboratories including Computer Labs </td>
                    <td className="px-6 py-4 text-gray-900">5 Labs (Each 67 sq. mtr)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">4</td>
                    <td className="px-6 py-4 text-gray-800">Internet Facility </td>
                    <td className="px-6 py-4 text-green-600 font-bold">YES</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">5</td>
                    <td className="px-6 py-4 text-gray-800">No. of Girls Toilets</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">10</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">6</td>
                    <td className="px-6 py-4 text-gray-800">No. of Boys Toilets</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">10</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">7</td>
                    <td className="px-6 py-4 text-gray-800">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
                    <td className="px-6 py-4">
                      <a 
                        href="https://youtu.be/oIQdYUqNlvA" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 underline font-medium"
                      >
                        View Video
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section F: Staff Details */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">F. STAFF (TEACHING)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">S.No.</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">INFORMATION</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">DETAILS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">1</td>
                    <td className="px-6 py-4 text-gray-800">Principal</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">JAI PRAKASH</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-800">Total No. of Teachers</td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-gray-900 font-medium">23</div>
                        <div className="text-sm text-gray-600">PGT: 10  |  TGT: 06  |  PRT: 07 </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">3</td>
                    <td className="px-6 py-4 text-gray-800">Teachers Section Ratio</td>
                    <td className="px-6 py-4 text-gray-900">32</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">4</td>
                    <td className="px-6 py-4 text-gray-800">Details of Special Educator</td>
                    <td className="px-6 py-4 text-gray-900">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">5</td>
                    <td className="px-6 py-4 text-gray-800">Details of Counsellor and Wellness Teacher</td>
                    <td className="px-6 py-4 text-gray-900">Ms. Rupa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section G: School Managing Committee */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">G. SCHOOL MANAGING COMMITTEE (SMC)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">S.No.</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">NAME</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">DESIGNATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">1</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">Mr. Sashi Ranjan parmar Ji</td>
                    <td className="px-6 py-4 text-gray-800">Chairperson</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">Mr. Rishipal Ji</td>
                    <td className="px-6 py-4 text-gray-800">Vice Chairperson</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">3</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">Mr. Ashok Kumar Munjal Ji</td>
                    <td className="px-6 py-4 text-gray-800">Director</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
       

        {/* Safety Certificates Info */}
        <section>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <svg className="w-12 h-12 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Safety & Compliance Certificates</h3>
                <p className="text-gray-700 mb-4">
                  All mandatory safety certificates including Fire Safety, Building Safety, Sanitation & Hygiene, 
                  and Water Quality certificates are valid and up-to-date. Documents are available for download 
                  in Section B above.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">✓ Fire Safety Certified</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">✓ Building Safety Certified</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">✓ Hygiene Certified</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">✓ CCTV Surveillance</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosures;
