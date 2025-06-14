import React from 'react';
import { Users, Target, Eye, Heart, Award, Globe, Clock, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "We love what we do and it shows in every line of code and pixel we create."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve shared success."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and reliable delivery."
    }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Visionary leader with 15+ years in digital transformation and strategic growth."
    },
    {
      name: "Maria Rodriguez",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Award-winning designer specializing in user experience and brand identity."
    },
    {
      name: "David Kim",
      role: "CTO",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Technical architect with expertise in scalable systems and emerging technologies."
    },
    {
      name: "Sophie Chen",
      role: "Head of Strategy",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Strategic consultant helping businesses navigate digital transformation successfully."
    }
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to revolutionize digital experiences" },
    { year: "2019", title: "First Major Client", description: "Secured our first enterprise partnership" },
    { year: "2021", title: "Team Expansion", description: "Grew to 25+ talented professionals" },
    { year: "2023", title: "Industry Recognition", description: "Won multiple awards for innovation and excellence" },
    { year: "2024", title: "Global Reach", description: "Expanded to serve clients worldwide" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">NexGen Digital</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe technology should be accessible, beautiful, and purposeful.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white w-fit">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the leading digital transformation partner, recognized for our innovation, excellence, and commitment to client success. We envision a future where every business can harness the full potential of digital technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we work with our clients and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together creativity, technical expertise, and strategic thinking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">
              Key milestones that have shaped our company's growth and success.
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center space-x-8 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;