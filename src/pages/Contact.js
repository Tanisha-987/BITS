import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig, isEmailjsConfigured } from '../config/emailjs';

const CLASSES = [
  'Not applicable',
  'Nursery',
  'LKG',
  'UKG',
  'Class I',
  'Class II',
  'Class III',
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
  'Class IX',
  'Class X',
  'Class XI',
  'Class XII',
];

const ENQUIRY_TYPES = ['Admission', 'Academics', 'Fees', 'SLC', 'General'];

const emptyForm = {
  parentName: '',
  studentName: '',
  phone: '',
  email: '',
  className: 'Not applicable',
  enquiryType: 'General',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

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
      detail: 'Mon–Fri: 8 AM – 4 PM\nSat: 8 AM – 1 PM\nSun: Closed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.parentName.trim()) next.parentName = 'Please enter your name.';
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) next.phone = 'Enter a valid 10-digit mobile number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Please write at least 10 characters.';
    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (!isEmailjsConfigured()) {
      setStatus('error');
      setStatusMessage('Email service is not set up yet. Add your EmailJS keys in src/config/emailjs.js.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.parentName.trim(),
          name: form.parentName.trim(),
          student_name: form.studentName.trim() || 'Not provided',
          phone: form.phone.trim(),
          reply_to: form.email.trim(),
          email: form.email.trim(),
          class_name: form.className,
          enquiry_type: form.enquiryType,
          title: form.enquiryType,
          message: form.message.trim(),
          school_name: 'BITS International School, Bhiwani',
          to_email: 'bisbhiwani@gmail.com',
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus('success');
      setStatusMessage('Thank you. Your message has been sent to the school office.');
      setForm(emptyForm);
    } catch (error) {
      setStatus('error');
      setStatusMessage('We could not send your message. Please call +91 9812526326 or try again.');
    }
  };

  const fieldClass = (name) =>
    `w-full rounded-xl border px-3.5 py-2.5 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-primary-200 ${
      errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white focus:border-primary-400'
    }`;

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-primary-400 to-primary-900 text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-base sm:text-lg opacity-90">We&apos;d love to hear from you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-3">Get In Touch</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Send a message to the school office, or reach us by phone and email during office hours.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {cards.map((card, index) => {
            const content = (
              <>
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 text-white flex items-center justify-center mb-3 sm:mb-5 shadow-lg">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">{card.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line break-words">{card.detail}</p>
              </>
            );
            const className =
              'group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-3.5 sm:p-6 h-full animate-fade-up';

            if (card.href) {
              return (
                <a key={card.title} href={card.href} className={className} style={{ animationDelay: `${index * 80}ms` }}>
                  {content}
                </a>
              );
            }
            return (
              <div key={card.title} className={className} style={{ animationDelay: `${index * 80}ms` }}>
                {content}
              </div>
            );
          })}
        </div>

        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-lg p-5 sm:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-1">Send a Message</h2>
              <p className="text-sm text-gray-500 mb-6">
                Admissions, academics, SLC, or a general query — the office will reply on the email you share.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Your name</span>
                    <input name="parentName" value={form.parentName} onChange={updateField} className={`${fieldClass('parentName')} mt-1.5`} placeholder="Parent or guardian" />
                    {errors.parentName && <span className="text-xs text-red-600 mt-1 block">{errors.parentName}</span>}
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Student name</span>
                    <input name="studentName" value={form.studentName} onChange={updateField} className={`${fieldClass('studentName')} mt-1.5`} placeholder="Optional" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Mobile number</span>
                    <input name="phone" value={form.phone} onChange={updateField} inputMode="numeric" maxLength={10} className={`${fieldClass('phone')} mt-1.5`} placeholder="10-digit number" />
                    {errors.phone && <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>}
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Email</span>
                    <input name="email" type="email" value={form.email} onChange={updateField} className={`${fieldClass('email')} mt-1.5`} placeholder="you@email.com" />
                    {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Class</span>
                    <select name="className" value={form.className} onChange={updateField} className={`${fieldClass('className')} mt-1.5`}>
                      {CLASSES.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Enquiry about</span>
                    <select name="enquiryType" value={form.enquiryType} onChange={updateField} className={`${fieldClass('enquiryType')} mt-1.5`}>
                      {ENQUIRY_TYPES.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Message</span>
                  <textarea name="message" value={form.message} onChange={updateField} rows={5} className={`${fieldClass('message')} mt-1.5 resize-y`} placeholder="How can the school help you?" />
                  {errors.message && <span className="text-xs text-red-600 mt-1 block">{errors.message}</span>}
                </label>

                {statusMessage && (
                  <p className={`text-sm rounded-xl px-4 py-3 ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}`}>
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 disabled:opacity-70 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-gradient-to-br from-primary-800 to-primary-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Visit the campus</h3>
              <p className="text-primary-100 text-sm leading-relaxed mb-5">
                Opp. MRM Honda agency, adj. Sec 23 HUDA, Bhiwani. Office is open Monday to Friday, 8 AM – 4 PM, and Saturday, 8 AM – 1 PM.
              </p>
              <a href="tel:+919812526326" className="block font-semibold mb-2 hover:underline">+91 9812526326</a>
              <a href="mailto:bisbhiwani@gmail.com" className="block text-primary-200 break-all hover:underline">bisbhiwani@gmail.com</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-6 text-center">Find Us Here</h2>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-primary-100 h-[280px] sm:h-[380px] md:h-[440px]">
            <iframe
              title="school location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.913714246991!2d76.1525642!3d28.811645100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391266c1ac69cd27%3A0x11ea2af43dd3c24!2sBits%20International%20School!5e0!3m2!1sen!2sin!4v1770524370723!5m2!1sen!2sin"
              height="100%"
              width="100%"
              className="border-0"
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
