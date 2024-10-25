import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaValid(!!value); // Validate the captcha
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if CAPTCHA is not completed
    if (!captchaValid) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }

    // Start loading
    setLoading(true);

    // Send email with EmailJS
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target,process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
        console.log('Message sent successfully');
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Failed to send message');
      })
      .finally(() => {
        // Stop loading when the request is done
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Get in Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8"
        >
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="sender_name"
              name="sender_name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your message"
              rows="6"
            ></textarea>
          </div>

          <div className="mb-6">
            {/* <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} /> */}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading} // Disable button while loading
              className={`w-full bg-gradient-to-r from-[#F74949] to-[#F2147B] text-white font-semibold py-3 rounded-lg shadow-md ${
                loading ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'} {/* Show loading text */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
