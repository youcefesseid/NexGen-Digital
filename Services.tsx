import React from 'react';
import { Code, Smartphone, Globe, Search, Palette, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration", "E-commerce Solutions"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization", "Push Notifications"],
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences for your audience.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online visibility and drive business growth.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Advertising", "Analytics & Reporting"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps Setup", "Performance Optimization", "24/7 Monitoring"],
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Vulnerability Testing", "Data Protection", "Compliance Management", "Incident Response"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements to create a comprehensive strategy."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and prototypes to visualize the user experience and gather feedback early."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies, with continuous testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support, maintenance, and optimization to ensure continued success."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Comprehensive digital solutions tailored to your business needs. From concept to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stay at the forefront of technology to deliver cutting-edge solutions using the latest tools and frameworks.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "AWS", "MongoDB", "PostgreSQL",
              "TypeScript", "Next.js", "Docker", "Kubernetes", "GraphQL", "Flutter"
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className="text-lg font-semibold text-white">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;