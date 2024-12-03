import React from 'react';
import { ArrowLeft, FileText, Brain, History, Search, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MedicalHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/diagnosis" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Diagnosis
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Medical History Review</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intelligent Medical History Analysis</h2>
          <p className="text-gray-600 mb-6">
            Our advanced AI system performs comprehensive analysis of your medical history to identify 
            patterns, risks, and potential health concerns, enabling more informed healthcare decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Brain className="w-6 h-6 text-emerald-600" />,
                title: "AI Pattern Recognition",
                description: "Advanced algorithms identify health patterns and risk factors"
              },
              {
                icon: <History className="w-6 h-6 text-emerald-600" />,
                title: "Comprehensive Timeline",
                description: "Complete overview of your medical history and health events"
              },
              {
                icon: <Search className="w-6 h-6 text-emerald-600" />,
                title: "Risk Assessment",
                description: "Early identification of potential health risks and concerns"
              },
              {
                icon: <FileText className="w-6 h-6 text-emerald-600" />,
                title: "Detailed Reports",
                description: "Clear, actionable insights from your medical history"
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
          <ul className="space-y-4">
            {[
              "Early detection of potential health risks",
              "Comprehensive understanding of your health patterns",
              "AI-powered insights for preventive care",
              "Improved communication with healthcare providers",
              "Better informed medical decisions"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Start Your Health Analysis</h2>
          <p className="text-emerald-600 mb-4">
            Begin your comprehensive medical history review to uncover valuable insights about your health.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Begin Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
