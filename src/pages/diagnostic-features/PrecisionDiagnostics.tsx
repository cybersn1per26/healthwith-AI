import React from 'react';
import { ArrowLeft, Target, Brain, Microscope, Database, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrecisionDiagnostics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/diagnosis" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Diagnosis
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Precision Diagnostics</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Diagnostic Analysis</h2>
          <p className="text-gray-600 mb-6">
            Our precision diagnostics system utilizes advanced AI algorithms to analyze your health data 
            and provide detailed, accurate diagnostic recommendations based on the latest medical research.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Brain className="w-6 h-6 text-emerald-600" />,
                title: "AI Analysis",
                description: "Advanced algorithms for accurate diagnostic recommendations"
              },
              {
                icon: <Target className="w-6 h-6 text-emerald-600" />,
                title: "Precision Targeting",
                description: "Focused analysis of specific health concerns"
              },
              {
                icon: <Database className="w-6 h-6 text-emerald-600" />,
                title: "Data Integration",
                description: "Comprehensive analysis of all available health data"
              },
              {
                icon: <Microscope className="w-6 h-6 text-emerald-600" />,
                title: "Research-Backed",
                description: "Recommendations based on latest medical research"
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Diagnostic Benefits</h2>
          <ul className="space-y-4">
            {[
              "Highly accurate diagnostic recommendations",
              "Early detection of potential health issues",
              "Comprehensive health analysis",
              "Evidence-based medical insights",
              "Personalized health recommendations"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Start Your Diagnostic Analysis</h2>
          <p className="text-emerald-600 mb-4">
            Begin your comprehensive diagnostic assessment using our advanced AI analysis system.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Begin Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
