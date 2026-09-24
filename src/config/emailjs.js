// Paste these three values from your EmailJS dashboard
// (Email Services → Service ID, Email Templates → Template ID, Account → Public Key).
// You can also set them in a .env file as REACT_APP_EMAILJS_*.

export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_36ucllr',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_okszldp',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'O84XvhD_6Vbf5y5Uu',
};

export const isEmailjsConfigured = () => {
  const { serviceId, templateId, publicKey } = emailjsConfig;
  return [serviceId, templateId, publicKey].every(
    (value) => value && !value.startsWith('YOUR_')
  );
};
