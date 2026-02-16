import principal from "../assets/principal.jpeg"
import about from "../assets/about.jpg"

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12">
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
              BITS INTERNATIONAL SCHOOL , BITS Group of Institution' has enlarged its family last 15 years by including BITS International School, Bhiwani, in its group. The group is known in the country for providing Quality Education at all levels at no profit basis. The Management was keen to open 'School with a difference', which would provide schooling to the children of international standard. Our aim is to prepare students in such a manner as to make them globally acceptable in all walks of life. Just as the purpose of food in not only to fill the stomach but to provide healthy and rich diet, the purpose of BITS International School is to teach a child not only the curricular but to educate him/her in such a manner that he/she is enriched in his/her life with the diet of good habits (Sanskars). smartness. knowledge and awareness and develops virtues of leader in the field of Science, Art and Culture.
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
                <img className="m-[15px]" src={principal} alt="principalimage"/>
                <h4 className="text-xl font-bold text-primary-800">Ashok Kumar Munjal</h4>
                <p className="text-gray-600">Principal</p>
                <p className="text-sm text-gray-500 mt-1">M.A., B.Ed., Ph.D.</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "Warm Greetings to all,"
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  I deem it an honour and privilege to be the Principal of the prestigious BITS International School , Bhiwani, the school that stands for excellence and has continuously set the highest standards in academics as well as co-curricular activities through a wide range of multi dimensional activities which go a long way in propelling among students a sense of self belief, confidence in decision making and problem solving alongwith chiselling of soft skills stretching their inherent competencies through a self discovery process and developing them into the strong and disciplined anchors of society, which is the motto of the school.
                  It is often said, “If you are planning for a year, sow rice, if you are planning for a decade, plant trees, if you are planning for a life time, educate people.” Indeed, one can even say that the quality of education will determine the destiny of nation.
                  Students need to be alert, to be an optimistic worker, to be confident, to be an active learner, to be persistent, to be generous to be temperate to be cheerful and to be their own self. We, as teachers, play a significant role of effective facilitators of learning by making children understand how to learn effectively rather than telling them what to learn.

                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  We aim not just to nurture the students through their formative years but also to place them on a path of life long learning, always with roots firmly entrenched in the soil.
                  We thrive to impart globally relevant education which may develop mental agility in individuals to interact with confidence and work in diverse environs or situations. Moreover, we wish to equip our youth to face the challenges of the future for leading the society from the front while ensuring that at the same time, they are enjoying their experience of learning, their excellence is driven by values, their success is strengthened by ethics and modernity is fortified by tradition.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 text-justify">

                  I am grateful to God to bless me with the educated, experienced, dedicated, generous and worthy team of members of management who continuously advise us, guide us and motivate us.
                  I am very fortunate to have a competent team of teachers who continuously strive to focus on each and every child, monitor and mentor them, appreciate their achievements and encourage them to overcome their shortcomings and enable them to bring laurels to the parents as well as to the school.
                  I would like to request parents to volunteer themselves by co-operating us for the great cause of all round development of students and converting them into the real torch bearers of society.
                  Last but not the least, I expect all the students to focus on their cherished goals, struggle hard to accomplish them transcending mediocrity and procrastinating.

                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  With Regards.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Management Message */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Administrative's Message</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="lg:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary-100 to-blue-100 p-8 flex flex-col items-center justify-center">
                <img className="m-15px" src={about} alt="management"/>
                <h4 className="text-xl font-bold text-primary-800">Administrative</h4>
              </div>
              <div className="md:w-2/3 p-8">

                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  Roots of the civilization lies deep into the education of the young ones. School caters to the needs of nurturing, shaping and moulding the young ones into dynamic youth who are able to take the reins of country's progress in such a manner that the welfare of society are the fruits of personal growth. BITS INTERNATIONAL School has been imparting knowledge while keeping pace with the cultural social milieu. Learning is a continuous process and we learn from everything around us. We feel that education is not just about the subjects that are learnt and taught in school, but as a lifelong process which becomes unbelievably interesting if only we wish to jump into the train of experience and take a trip to every conceivable place on Earth through the books, activities and experimentation to create a conductive, respectful and responsible environment in schools. Children are supported to become self-regulated social and considerate beings. Education system must ensure that it touches the life of each and every citizen and enhances student’s ability to work as active participant in the growing imperatives of the country along with creating a just and equitable society while shaping them into a successful youth. We aspire to create a system that is aligned with the aspirational goals of today's era, while remaining consistent with India's traditions and value systems.

                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  Students must be taught the values of togetherness with mutual understanding while respecting the values of pluralism and peace. Development of their personality where they are able to act with judgement and personal responsibility. Shaping up the potentials of memory, reasoning, aesthetic sense, physical activities and communication skills. We strive for the holistic development of the students with creative potential in all its richness and complexity. Education with a vision where students not only develop their cognitive skills of literacy and numeracy, but higher-order skills of critical thinking and problem solving skills. Creating an environment where social and emotional skills are developed along with cultural awareness, empathy, perseverance, grit teamwork and leadership among others. Our students should become academically, socially and emotionally competent.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 text-justify">

                 We must use the demographic dividend of the country to its fullest so it is necessary that children and youth in the country are equipped with the knowledge, skills, attitudes and values as well as the employable skills that would enable them to contribute to India's social, economic and political transformation.

                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
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
