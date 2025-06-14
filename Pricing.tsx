import React, { useState } from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 2999,
      annualPrice: 29990,
      popular: false,
      features: [
        "Custom Website Design",
        "Responsive Mobile Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "3 Months Support",
        "SSL Certificate",
        "Basic Analytics Setup",
        "Social Media Integration"
      ],
      cta: "Get Started",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 5999,
      annualPrice: 59990,
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced Custom Development",
        "E-commerce Functionality",
        "Advanced SEO & Performance",
        "6 Months Support",
        "Database Integration",
        "Advanced Analytics",
        "Email Marketing Setup",
        "Content Management System",
        "Payment Gateway Integration"
      ],
      cta: "Most Popular",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Enterprise",
      description: "For large-scale applications",
      monthlyPrice: 12999,
      annualPrice: 129990,
      popular: false,
      features: [
        "Everything in Professional",
        "Custom Web Application",
        "Advanced Backend Systems",
        "Third-party API Integrations",
        "12 Months Support",
        "Cloud Infrastructure Setup",
        "Advanced Security Features",
        "Performance Optimization",
        "Dedicated Project Manager",
        "Priority Support",
        "Training & Documentation",
        "Scalability Planning"
      ],
      cta: "Contact Sales",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const addOns = [
    {
      name: "Mobile App Development",
      description: "Native iOS and Android applications",
      price: "Starting at $8,999"
    },
    {
      name: "Digital Marketing Package",
      description: "SEO, PPC, and social media management",
      price: "$1,999/month"
    },
    {
      name: "Maintenance & Updates",
      description: "Ongoing website maintenance and updates",
      price: "$299/month"
    },
    {
      name: "Advanced Analytics",
      description: "Custom dashboard and reporting setup",
      price: "$999 one-time"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transparent Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your business. All plans include our commitment to quality and your success.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
              className="relative w-14 h-7 bg-white/20 rounded-full transition-colors duration-200 focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-200 ${
                billingPeriod === 'annually' ? 'translate-x-7' : ''
              }`}></div>
            </button>
            <span className={`text-lg ${billingPeriod === 'annually' ? 'text-white' : 'text-gray-400'}`}>
              Annually
            </span>
            {billingPeriod === 'annually' && (
              <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-white/10 border-purple-500 shadow-2xl shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice)}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {billingPeriod === 'monthly' ? 'one-time' : 'annual'}
                    </span>
                  </div>
                  {billingPeriod === 'annually' && (
                    <p className="text-green-400 text-sm">
                      Save {formatPrice(plan.monthlyPrice * 12 - plan.annualPrice)} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your package with additional services tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{addOn.name}</h3>
                    <p className="text-gray-400 mb-4">{addOn.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">{addOn.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Got questions? We've got answers. Contact us if you need more information.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What's included in the support period?",
                answer: "Our support includes bug fixes, minor updates, technical assistance, and basic maintenance. We're here to ensure your website runs smoothly during the support period."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade your plan at any time. We'll work with you to add additional features and functionality as your business grows."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Yes, we specialize in custom solutions. If our standard plans don't meet your needs, we'll create a tailored package that fits your specific requirements."
              },
              {
                question: "What happens after the project is completed?",
                answer: "After completion, we provide training, documentation, and ongoing support. We also offer maintenance packages to keep your website updated and secure."
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 space-x-2"
            >
              <Zap className="h-5 w-5" />
              <span>Custom Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;