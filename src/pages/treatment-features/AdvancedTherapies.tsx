import React from 'react';
import { ArrowLeft, Microscope, Atom, Award, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdvancedTherapies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/treatment" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Treatment
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Advanced Therapies</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cutting-Edge Treatment Options</h2>
          <p className="text-gray-600 mb-6">
            Access the latest innovations in medical treatment through our advanced therapies program, 
            including clinical trials and emerging treatment options backed by scientific research.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Microscope className="w-6 h-6 text-emerald-600" />,
                title: "Clinical Trials",
                description: "Access to cutting-edge clinical trials and research programs"
              },
              {
                icon: <Atom className="w-6 h-6 text-emerald-600" />,
                title: "Innovative Treatments",
                description: "Latest therapeutic approaches and treatment methods"
              },
              {
                icon: <Award className="w-6 h-6 text-emerald-600" />,
                title: "Expert Network",
                description: "Connection to leading specialists and researchers"
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-emerald-600" />,
                title: "Personalized Innovation",
                description: "Advanced treatments tailored to your specific condition"
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Treatment Benefits</h2>
          <ul className="space-y-4">
            {[
              "Access to the latest medical innovations and treatments",
              "Participation in groundbreaking clinical trials",
              "Connection with leading medical experts and researchers",
              "Potential for better treatment outcomes",
              "Contributing to medical research and advancement"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Explore Advanced Treatment Options</h2>
          <p className="text-emerald-600 mb-4">
            Discover cutting-edge therapies and clinical trials that could enhance your treatment outcomes.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Explore Advanced Therapies
          </button>
        </div>
      </div>
    </div>
  );
}
