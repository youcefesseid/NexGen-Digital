import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@nexgendigital.com",
      description: "Send us an email anytime!"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Mon-Fri: 8AM-5PM",
      description: "Weekend support available"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <div className="mb-6 p-4 rounded-full bg-green-500 w-fit mx-auto">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to help you succeed. Reach out to us through any of the following channels, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-blue-400 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
                <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-white text-lg font-medium">San Francisco, CA</p>
                    <p className="text-gray-400">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-xl text-gray-300">
              Quick answers to questions you might have before reaching out.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "We typically begin new projects within 1-2 weeks of signing the contract, depending on our current workload and your project's complexity."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! We work with clients worldwide and can accommodate different time zones for meetings and communication."
              },
              {
                question: "What information do you need to provide a quote?",
                answer: "We need details about your project scope, timeline, desired features, target audience, and any specific requirements or preferences you have."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Absolutely! We offer various support and maintenance packages to keep your website or application running smoothly long after launch."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;