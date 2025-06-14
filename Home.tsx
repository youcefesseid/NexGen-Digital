import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp, Shield, Zap, Code, Smartphone, Globe } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Responsive designs that provide exceptional user experiences across all devices."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Scalable solutions designed to grow with your business and reach customers worldwide."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security measures to protect your data and your customers' information."
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8" />, number: "1000+", label: "Projects Completed" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "99%", label: "Client Satisfaction" },
    { icon: <Zap className="h-8 w-8" />, number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "NexGen Digital transformed our online presence completely. The team's expertise and dedication are unmatched."
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateHub",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Outstanding work! They delivered beyond our expectations and helped us achieve our digital transformation goals."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCorp",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Professional, reliable, and incredibly talented. NexGen Digital is our go-to partner for all digital projects."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Digital Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We create stunning digital experiences that captivate your audience and drive business growth through innovative web development and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose NexGen Digital?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create something extraordinary. Get in touch today and let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;