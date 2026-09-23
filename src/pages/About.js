import { Link } from 'react-router-dom';
import principal from '../assets/principal.jpeg';
import about from '../assets/about.jpg';

const About = () => {
  const missionPoints = [
    'Provide quality education following CBSE curriculum',
    'Nurture critical thinking and creativity',
    'Develop strong moral and ethical values',
    'Encourage participation in sports and arts',
    'Foster a safe and inclusive learning environment',
  ];

  const values = [
    { title: 'Excellence', desc: 'High standards in academics and co-curricular pursuits' },
    { title: 'Integrity', desc: 'Honesty, ethics and responsibility in every action' },
    { title: 'Innovation', desc: 'Curiosity, creativity and modern learning methods' },
    { title: 'Compassion', desc: 'Empathy, respect and care for every learner' },
  ];

  const facilities = [
    {
      title: 'Smart Classrooms',
      description: 'Air-conditioned rooms with interactive boards and AV aids',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Science Laboratories',
      description: 'Well-equipped Physics, Chemistry and Biology labs',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Library',
      description: 'Extensive books, journals and digital resources',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Computer Lab',
      description: 'Modern systems with high-speed internet',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Sports Facilities',
      description: 'Courts, grounds, indoor games and athletics',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Auditorium',
      description: 'Modern hall for events with 500 seating capacity',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="animate-fade-in bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-900 to-primary-950" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-primary-400/40 rounded-full blur-3xl animate-float" />
          <div className="absolute left-1/4 bottom-0 w-48 h-48 bg-blue-300/30 rounded-full blur-2xl animate-float-delayed" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-200 mb-4">
            <span className="w-8 h-px bg-primary-300" />
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">About Us</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">
            Learn more about our journey, values, and the people who shape BITS International School.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative animate-fade-up">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-400/25 to-primary-800/15 rounded-[2rem] blur-sm" />
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl shadow-primary-900/15 aspect-[4/3]">
                <img src={about} alt="BITS International School" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex bg-white/95 backdrop-blur text-primary-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
                    15+ years of quality education
                  </span>
                </div>
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-4">
                <span className="w-8 h-px bg-primary-400" />
                Our History
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-5 leading-tight">
                A school with a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">
                  difference
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BITS Group of Institutions has enlarged its family over the last 15 years by including
                  BITS International School, Bhiwani. The group is known for providing quality education
                  at all levels on a no-profit basis. Management was keen to open a school of international
                  standard — preparing students to be globally acceptable in all walks of life.
                </p>
                <p>
                  Just as food must nourish, not only fill the stomach, our purpose is to educate beyond
                  the curriculum — enriching lives with good habits (Sanskars), knowledge, awareness, and
                  the virtues of leadership in Science, Art and Culture.
                </p>
                <p>
                  Today we stand as a testament to quality education — with dedicated faculty,
                  modern facilities, and a student community that continues to make us proud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-primary-50/50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3 justify-center">
              <span className="w-8 h-px bg-primary-400" />
              Purpose
              <span className="w-8 h-px bg-primary-400" />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950">Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group relative bg-white rounded-3xl p-8 border border-primary-100 shadow-md hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary-400 to-primary-700" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary-700/30">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-950 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a center of excellence in education, fostering intellectual curiosity, moral values,
                and social responsibility. We envision global citizens who are confident, compassionate,
                and capable of making positive contributions to society.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 border border-primary-100 shadow-md hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary-600 to-primary-900" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-950 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary-800/30">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-950 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-primary-800 to-primary-950 text-white rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="text-primary-300 text-sm font-bold tracking-widest uppercase mb-2">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-primary-100/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3 justify-center">
              <span className="w-8 h-px bg-primary-400" />
              Leadership
              <span className="w-8 h-px bg-primary-400" />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950">Principal&apos;s Message</h2>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-primary-100 shadow-xl overflow-hidden max-w-6xl mx-auto animate-fade-up">
            <div className="lg:flex">
              <div className="lg:w-[34%] relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 p-8 md:p-10 flex flex-col items-center justify-center text-center text-white">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 right-8 w-32 h-32 bg-white/30 rounded-full blur-2xl" />
                </div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-5 ring-4 ring-primary-400/30">
                  <img src={principal} alt="Ashok Kumar Munjal, Principal" className="w-full h-full object-cover" />
                </div>
                <h3 className="relative text-xl md:text-2xl font-bold mb-1">Ashok Kumar Munjal</h3>
                <p className="relative text-primary-200 font-medium mb-1">Principal</p>
                <p className="relative text-sm text-primary-300/90">M.A., B.Ed., Ph.D.</p>
              </div>

              <div className="lg:w-[66%] p-8 md:p-10">
                <p className="text-primary-700 font-semibold italic mb-4 text-lg">&ldquo;Warm Greetings to all,&rdquo;</p>
                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>
                    I deem it an honour and privilege to be the Principal of the prestigious BITS
                    International School, Bhiwani — a school that stands for excellence and has
                    continuously set the highest standards in academics as well as co-curricular
                    activities. Through multi-dimensional programmes we build self-belief, confident
                    decision-making, problem-solving and soft skills, developing students into strong,
                    disciplined anchors of society.
                  </p>
                  <p>
                    It is often said: “If you are planning for a year, sow rice; if for a decade,
                    plant trees; if for a lifetime, educate people.” The quality of education will
                    determine the destiny of a nation. Students need to be alert, optimistic,
                    confident, active learners — persistent, generous, temperate and cheerful.
                    Teachers are facilitators who help children understand <em>how</em> to learn,
                    not only <em>what</em> to learn.
                  </p>
                  <p>
                    We aim to place students on a path of lifelong learning, with roots firmly
                    entrenched in values — excellence driven by ethics, modernity fortified by
                    tradition. I am grateful to our management and our dedicated teachers, and I
                    request parents to partner with us. Students — focus on your goals, struggle hard,
                    and transcend mediocrity.
                  </p>
                  <p className="text-primary-900 font-semibold pt-2">With Regards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Message */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-primary-50/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3 justify-center">
              <span className="w-8 h-px bg-primary-400" />
              Administration
              <span className="w-8 h-px bg-primary-400" />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950">Administrative&apos;s Message</h2>
          </div>

          <div className="bg-white rounded-3xl border border-primary-100 shadow-xl overflow-hidden max-w-6xl mx-auto animate-fade-up">
            <div className="lg:flex lg:flex-row-reverse">
              <div className="lg:w-[34%] relative overflow-hidden min-h-[280px]">
                <img src={about} alt="BITS Administration" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/50 to-primary-800/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Administration</h3>
                  <p className="text-primary-200 text-sm">BITS International School</p>
                </div>
              </div>

              <div className="lg:w-[66%] p-8 md:p-10">
                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>
                    Roots of civilization lie deep in the education of the young. School nurtures
                    and moulds them into dynamic youth who can take the reins of the country&apos;s
                    progress with society&apos;s welfare as the fruit of personal growth. BITS
                    International School imparts knowledge while keeping pace with our cultural and
                    social milieu.
                  </p>
                  <p>
                    Education is a lifelong process — through books, activities and experimentation —
                    creating a respectful, responsible environment where children become
                    self-regulated, social and considerate. We aspire to align with today&apos;s
                    aspirational goals while remaining consistent with India&apos;s traditions and
                    value systems.
                  </p>
                  <p>
                    We strive for holistic development: literacy and numeracy along with critical
                    thinking, problem-solving, empathy, perseverance, teamwork and leadership — so
                    our students become academically, socially and emotionally competent, and
                    contribute to India&apos;s social, economic and political transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3 justify-center">
              <span className="w-8 h-px bg-primary-400" />
              Campus
              <span className="w-8 h-px bg-primary-400" />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-3">Our Infrastructure</h2>
            <p className="text-gray-600">Spaces designed for learning, discovery and growth.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-primary-100/80 shadow-sm hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-400 to-primary-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 text-white flex items-center justify-center mb-5 shadow-lg shadow-primary-700/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-950 mb-2 group-hover:text-primary-700 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white p-8 md:p-12 text-center shadow-2xl">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -left-8 bottom-0 w-40 h-40 bg-primary-400/20 rounded-full blur-xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to join our family?</h2>
              <p className="text-primary-100 mb-8 max-w-xl mx-auto">
                Explore admissions or get in touch — we&apos;d love to welcome you to BITS International School.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-white text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Admissions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/40 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
