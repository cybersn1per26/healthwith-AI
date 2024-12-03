import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '@/components/home/Hero';
import { Stethoscope, FlaskConical, Clipboard } from 'lucide-react';

export function Home() {
  const services = [
    {
      title: "AI-Powered Diagnosis",
      description: "Get accurate health assessments using advanced AI technology. Our system analyzes symptoms and medical data to provide precise diagnostic insights.",
      icon: Stethoscope,
      link: "/diagnosis",
      color: "bg-blue-500",
    },
    {
      title: "Personalized Treatment",
      description: "Receive customized treatment plans based on your unique health profile. Our AI ensures the most effective approach for your recovery.",
      icon: Clipboard,
      link: "/treatment",
      color: "bg-emerald-600",
    },
    {
      title: "Medical Research",
      description: "Access cutting-edge medical research and clinical trials. Stay informed about the latest developments in healthcare and treatment options.",
      icon: FlaskConical,
      link: "/research",
      color: "bg-purple-600",
    },
  ];

  return (
    <main>
      <Hero />
      
      {/* Services Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our advanced healthcare services powered by artificial intelligence
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <Link 
                  key={service.title} 
                  to={service.link}
                  className="relative flex flex-col bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-12 w-12 rounded-full ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="mt-4 text-base text-gray-600">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-emerald-600">
                    Learn more
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}