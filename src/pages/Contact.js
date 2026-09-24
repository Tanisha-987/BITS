import React from 'react';

const Contact = () => {
  const cards = [
    {
      title: 'Address',
      detail: 'Opp. MRM Honda agency, adj. Sec 23 HUDA, Bhiwani',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Phone',
      detail: '+91 9812526326',
      href: 'tel:+919812526326',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Email',
      detail: 'bisbhiwani@gmail.com',
      href: 'mailto:bisbhiwani@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Office Hours',
      detail: 'Mon–Fri: 8:00 AM – 4:00 PM\nSat: 8:00 AM – 1:00 PM\nSun: Closed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-12 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg opacity-90">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            Reach out during office hours by phone or email. Visit us on campus — our team is
            happy to help with admissions, academics, and general enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => {
            const content = (
              <>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{card.detail}</p>
              </>
            );

            const className =
              'group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 h-full animate-fade-up';

            if (card.href) {
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className={className}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={card.title}
                className={className}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {content}
              </div>
            );
          })}
        </div>

        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6 text-center">Find Us Here</h2>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-primary-100 h-[380px] md:h-[440px]">
            <iframe
              title="school location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.913714246991!2d76.1525642!3d28.811645100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391266c1ac69cd27%3A0x11ea2af43dd3c24!2sBits%20International%20School!5e0!3m2!1sen!2sin!4v1770524370723!5m2!1sen!2sin"
              height="100%"
              width="100%"
              className="border-0"
              allow="geolocation; fullscreen; accelerometer; gyroscope; clipboard-write"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
