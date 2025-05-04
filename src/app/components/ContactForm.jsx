'use client'
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-red-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Ready to grow your business? Contact me for a free consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+92 327 020 1665 </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  📧
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">awaistalha078@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">House no 403, Block 5, Sector A/2, Township Lahore</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition">🐦</a>
                <a href="#" className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-200 transition">📸</a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition">💼</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {submitMessage && (
              <p className="mt-4 text-green-600 text-center">{submitMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
