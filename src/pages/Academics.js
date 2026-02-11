import React from 'react';

const Academics = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Academics</h1>
          <p className="text-lg opacity-90">Excellence in education through comprehensive curriculum</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Curriculum Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">CBSE Curriculum</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              BITS International School follows the Central Board of Secondary Education (CBSE) curriculum, 
              which is designed to provide a balanced and holistic education. Our curriculum 
              emphasizes conceptual understanding, critical thinking, and practical application 
              of knowledge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We integrate innovative teaching methodologies, technology-enabled learning, and 
              student-centric approaches to ensure that every child receives quality education 
              aligned with national standards.
            </p>
          </div>
        </section>

        {/* Academic Levels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Academic Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Primary Level (Classes I-V)',
                description: 'Foundation building with focus on basic literacy, numeracy, and essential skills',
                subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'IT', 'Art & Craft', 'Physical Education','G.K.','Reasoning']
              },
              {
                title: 'Middle Level (Classes VI-VIII)',
                description: 'Expanding knowledge base with introduction to diverse subjects',
                subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'IT', 'Sanskrit/Third Language', 'Art Education', 'Physical Education','Reasoning']
              },
              {
                title: 'Secondary Level (Classes IX-X)',
                description: 'Board examination preparation with comprehensive subject coverage',
                subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'IT', 'Additional Subject (Optional)','Reasoning']
              },
              {
                title: 'Senior Secondary (Classes XI-XII)',
                description: 'Specialized streams for career-focused education',
                subjects: ['Science Stream: Physics, Chemistry, Mathematics/Biology, English, IT', 'Commerce Stream: Accountancy, Business Studies, Economics, English, Mathematics', 'Arts Stream: History, Political Science, Economics, English, Optional Subjects']
              }
            ].map((level, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary-700 mb-3">{level.title}</h3>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Subjects:</h4>
                  <ul className="space-y-1">
                    {level.subjects.map((subject, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary-600">•</span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Examination System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Examination System</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-4">Assessment Pattern</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Classes I-VIII</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Periodic Tests: 10%</li>
                      <li>• Subject Enrichment: 10%</li>
                      <li>• Half Yearly Exam: 40%</li>
                      <li>• Annual Exam: 40%</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Classes IX-X</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Internal Assessment: 20%</li>
                      <li>• Term Examinations: 80%</li>
                      <li>• Board Exam in Class X</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-4">Grading System</h3>
                <div className="bg-white rounded p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Marks Range</th>
                        <th className="text-left py-2">Grade</th>
                        <th className="text-left py-2">Grade Point</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b">
                        <td className="py-2">91-100</td>
                        <td>A1</td>
                        <td>10</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">81-90</td>
                        <td>A2</td>
                        <td>9</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">71-80</td>
                        <td>B1</td>
                        <td>8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">61-70</td>
                        <td>B2</td>
                        <td>7</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">51-60</td>
                        <td>C1</td>
                        <td>6</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">41-50</td>
                        <td>C2</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td className="py-2">33-40</td>
                        <td>D</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Co-Curricular Activities */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Co-Curricular Activities</h2>
          <p className="text-gray-700 mb-6">
            We believe in holistic development and offer a wide range of co-curricular activities 
            to nurture talents and develop well-rounded personalities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Sports',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                activities: ['Cricket', 'Football', 'Basketball', 'Volleyball', 'Athletics', 'Chess', 'Table Tennis', 'Badminton']
              },
              {
                category: 'Arts & Culture',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                activities: ['Music', 'Dance', 'Drama', 'Painting', 'Debate', 'Quiz', 'Creative Writing', 'Poetry']
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary-600 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
