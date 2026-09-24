import React from 'react';
import PdfCard from '../components/PdfCard';

const Academics = () => {
  const classRoman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

  const curriculumPdfs = classRoman.map((roman, i) => ({
    title: `Class ${roman}`,
    description: `Curriculum & syllabus documents for Class ${roman}`,
    file: `/downloads/curriculum/class-${i + 1}.pdf`,
  }));

  const academicDocs = [
    {
      title: 'Book List',
      description: 'Official book list for all classes',
      file: '/downloads/academics/book-list.pdf',
    },
    {
      title: 'Fee Rules',
      description: 'Fee rules and payment guidelines',
      file: '/downloads/academics/fee-rules.pdf',
    },
    {
      title: 'Annual Report 2025-26',
      description: 'Yearly academic & activities report',
      file: '/downloads/academics/annual-report-2025-26.pdf',
    },
    {
      title: 'Circulars',
      description: 'Important school circulars and notices',
      file: '/downloads/academics/circulars.pdf',
    },
  ];

  const calendarEvents = [
    { month: 'April', title: 'Session Begins', detail: 'Academic activities start on the 1st working day of April.' },
    { month: 'May', title: 'Unit Test I', detail: '1st Unit Test conducted in the 3rd week of May.' },
    { month: 'June', title: 'Summer Vacation', detail: 'Month of June is observed as Summer Vacation.' },
    { month: 'September', title: 'Mid-Term Exams', detail: 'Half-Yearly exams in the 3rd & 4th week of September.' },
    { month: 'December', title: 'UT-II & Preboard-1', detail: 'Unit Test II and Preboard-1 in the 2nd & 3rd week.' },
    { month: 'January', title: 'Preboard-2 / UT-III', detail: '2nd Preboard for board classes; UT-III for non-board.' },
    { month: 'Feb–Mar', title: 'Practicals', detail: 'Practical exams as per CBSE instructions.' },
    { month: 'March', title: 'Annual Exams & Result', detail: 'Final exams in 1st week; results & Annual Function at month end.' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute -left-8 bottom-0 w-36 h-36 bg-white/10 rounded-full blur-xl animate-float-delayed" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Academics</h1>
          <p className="text-lg opacity-90">Excellence in education through comprehensive curriculum</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Academic Calendar */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-2">Academic Calendar 2026-27</h2>
              <p className="text-gray-600">Key milestones for the academic session</p>
            </div>
            <a
              href="/downloads/academics/academic-calendar-2026-27.docx"
              download
              className="inline-flex items-center gap-2 self-start bg-white border-2 border-primary-200 text-primary-700 hover:bg-primary-50 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Calendar
            </a>
          </div>

          <div className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 rounded-3xl p-6 md:p-10 border border-primary-100 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {calendarEvents.map((event, index) => (
                <div
                  key={index}
                  className="calendar-card bg-white/90 backdrop-blur rounded-2xl p-5 border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2">
                    {event.month}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{event.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CBSE Curriculum + class-wise documents */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary-800 mb-2">CBSE Curriculum</h2>
            <p className="text-gray-600">Class-wise curriculum documents — view online or download</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow mb-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {curriculumPdfs.map((item, index) => (
              <PdfCard key={item.title} {...item} delay={index * 60} />
            ))}
          </div>
        </section>

        {/* Important Academic Documents */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary-800 mb-2">Important Documents</h2>
            <p className="text-gray-600">Book lists, fee rules, reports and circulars</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicDocs.map((item, index) => (
              <PdfCard key={item.title} {...item} delay={index * 80} />
            ))}
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
                subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'IT', 'Art & Craft', 'Physical Education', 'G.K.', 'Reasoning']
              },
              {
                title: 'Middle Level (Classes VI-VIII)',
                description: 'Expanding knowledge base with introduction to diverse subjects',
                subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'IT', 'Sanskrit/Third Language', 'Art Education', 'Physical Education', 'Reasoning']
              },
              {
                title: 'Secondary Level (Classes IX-X)',
                description: 'Board examination preparation with comprehensive subject coverage',
                subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'IT', 'Additional Subject (Optional)', 'Reasoning']
              },
              {
                title: 'Senior Secondary (Classes XI-XII)',
                description: 'Specialized streams for career-focused education',
                subjects: ['Science Stream: Physics, Chemistry, Mathematics/Biology, English, IT', 'Commerce Stream: Accountancy, Business Studies, Economics, English, Mathematics', 'Arts Stream: History, Political Science, Economics, English, Optional Subjects']
              }
            ].map((level, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-4">Assessment Pattern</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Classes I-VIII</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Periodic Tests: 10%</li>
                      <li>• Subject Enrichment: 10%</li>
                      <li>• Half Yearly Exam: 40%</li>
                      <li>• Annual Exam: 40%</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
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
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Marks Range</th>
                        <th className="text-left py-2">Grade</th>
                        <th className="text-left py-2">Grade Point</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b"><td className="py-2">91-100</td><td>A1</td><td>10</td></tr>
                      <tr className="border-b"><td className="py-2">81-90</td><td>A2</td><td>9</td></tr>
                      <tr className="border-b"><td className="py-2">71-80</td><td>B1</td><td>8</td></tr>
                      <tr className="border-b"><td className="py-2">61-70</td><td>B2</td><td>7</td></tr>
                      <tr className="border-b"><td className="py-2">51-60</td><td>C1</td><td>6</td></tr>
                      <tr className="border-b"><td className="py-2">41-50</td><td>C2</td><td>5</td></tr>
                      <tr><td className="py-2">33-40</td><td>D</td><td>4</td></tr>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
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
