import React from 'react';

const Admissions = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Admissions</h1>
          <p className="text-lg opacity-90">Join our family of learners</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Admission Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 border-l-4 border-primary-600">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Admission Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BITS International School welcomes applications from students seeking quality education in a 
              nurturing environment. Our admission process is designed to be transparent, fair, 
              and inclusive. We admit students based on merit and availability of seats.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Admissions are open throughout the year, subject to availability of seats. However, 
              we encourage parents to apply early to secure admission for their child.
            </p>
          </div>
        </section>

        {/* Classes Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Classes Offered</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { level: 'Nursery to UKG', description: 'Pre-Primary Education' },
              { level: 'Class I to V', description: 'Primary Level' },
              { level: 'Class VI to VIII', description: 'Middle Level' },
              { level: 'Class IX to XII', description: 'Secondary & Sr. Secondary' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-primary-500">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.level}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Admission Process</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Obtain Application Form',
                  description: 'Download the admission form from our website or collect it from the school office.'
                },
                {
                  step: '2',
                  title: 'Fill the Form',
                  description: 'Complete all sections of the application form carefully with accurate information.'
                },
                {
                  step: '3',
                  title: 'Submit Documents',
                  description: 'Submit the filled form along with all required documents and photographs.'
                },
                {
                  step: '4',
                  title: 'Entrance Assessment',
                  description: 'Students will appear for an age-appropriate assessment (for classes I onwards).'
                },
                {
                  step: '5',
                  title: 'Parent Interview',
                  description: 'Interaction with parents to understand expectations and discuss school policies.'
                },
                {
                  step: '6',
                  title: 'Admission Confirmation',
                  description: 'Pay the admission fee to confirm the seat allocation.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-4">For New Admissions</h3>
              <ul className="space-y-3">
                {[
                  'Birth Certificate (original and photocopy)',
                  'Transfer Certificate from previous school',
                  'Recent passport size photographs (4 copies)',
                  'Address proof (Aadhar Card/Voter ID/Utility Bill)',
                  'Caste Certificate (if applicable)',
                  'Previous year mark sheet/report card',
                  'Medical fitness certificate',
                  'Parents\' ID proof (Aadhar Card)'
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Age Criteria</h3>
              <div className="space-y-3">
                {[
                  { class: 'Nursery', age: '3+ years' },
                  { class: 'LKG', age: '4+ years' },
                  { class: 'UKG', age: '5+ years' },
                  { class: 'Class I', age: '6+ years' },
                  { class: 'Class II onwards', age: 'As per CBSE norms' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium text-gray-800">{item.class}</span>
                    <span className="text-primary-600 font-semibold">{item.age}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Age should be completed as on 31st March of the admission year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Information
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span>Admissions are subject to availability of seats in respective classes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span>Incomplete forms or forms without required documents will not be processed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span>The school reserves the right to accept or reject any application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span>For more information, please contact the school office during working hours</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
