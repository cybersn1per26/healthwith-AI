import React from 'react';
import { ArrowLeft, Users, MessageSquare, CalendarCheck, Share2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SpecialistCoordination() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/treatment" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Treatment
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Specialist Coordination</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Seamless Healthcare Coordination</h2>
          <p className="text-gray-600 mb-6">
            Our specialist coordination system ensures smooth communication and collaboration between all your 
            healthcare providers, creating a unified approach to your treatment.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-emerald-600" />,
                title: "Team Collaboration",
                description: "Seamless coordination between all your healthcare providers"
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
                title: "Secure Communication",
                description: "HIPAA-compliant messaging system for healthcare team communication"
              },
              {
                icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
                title: "Appointment Management",
                description: "Coordinated scheduling across multiple specialists"
              },
              {
                icon: <Share2 className="w-6 h-6 text-emerald-600" />,
                title: "Information Sharing",
                description: "Secure sharing of medical records and treatment updates"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                {feature.icon}
                <div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coordination Benefits</h2>
          <ul className="space-y-4">
            {[
              "Improved communication between healthcare providers",
              "Reduced redundancy in tests and procedures",
              "Better-coordinated treatment plans",
              "Faster response to health changes or concerns",
              "Comprehensive care oversight and management"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Connect Your Healthcare Team</h2>
          <p className="text-emerald-600 mb-4">
            Start coordinating your care team today for more effective and efficient treatment.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Set Up Care Coordination
          </button>
        </div>
      </div>
    </div>
  );
}
