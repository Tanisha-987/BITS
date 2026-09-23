import React from 'react';
import PdfCard from '../components/PdfCard';

const Slc = () => {
  const slcDocs = [
    {
      title: 'School Leaving Certificate',
      description: 'Official SLC document and guidelines for students applying for a school leaving certificate.',
      file: '/downloads/slc/slc.pdf',
    },
    {
      title: 'Sample SLC',
      description: 'Sample format of the School Leaving Certificate for reference.',
      file: '/downloads/slc/sample-slc.pdf',
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-delayed" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">School Leaving Certificate</h1>
          <p className="text-lg opacity-90">View and download SLC documents</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-primary-100 shadow-md mb-10 animate-fade-up">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-3">About SLC</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A School Leaving Certificate (SLC) is an official document issued when a student
                  leaves the school. Use the documents below to understand the process and refer
                  to the sample format.
                </p>
                <p className="text-sm text-gray-600">
                  For assistance, contact the school office at{' '}
                  <a href="tel:+919812526326" className="text-primary-700 font-semibold hover:underline">
                    +91 9812526326
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-primary-800 mb-2">SLC Documents</h2>
            <p className="text-gray-600">Open online or download for your records</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {slcDocs.map((item, index) => (
              <PdfCard key={item.title} {...item} delay={index * 120} />
            ))}
          </div>
        </section>

        <section className="animate-fade-up" style={{ animationDelay: '250ms' }}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Apply</h3>
            <ol className="space-y-3 text-gray-700">
              {[
                'Submit a written application to the school office with the student’s details.',
                'Clear all pending dues (fees, library, etc.) before applying.',
                'Collect the SLC from the office after the processing period.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary-100 text-primary-700 text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Slc;
