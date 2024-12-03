import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Activity, Target, Stethoscope, Heart, Brain } from 'lucide-react';

export function Diagnosis() {
  const features = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Symptom Analysis",
      description: "AI-powered analysis of your symptoms for accurate preliminary assessments",
      link: "/diagnosis/symptom-analysis"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Assessment",
      description: "Comprehensive evaluation of your current health status",
      link: "/diagnosis/health-assessment"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Analysis",
      description: "Advanced neural networks for analyzing medical data",
      link: "/diagnosis/neural-analysis"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Medical History Review",
      description: "Intelligent analysis of your medical history to identify patterns and risks",
      link: "/diagnosis/medical-history"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Vital Monitoring",
      description: "Real-time monitoring and analysis of vital signs",
      link: "/diagnosis/vital-monitoring"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Diagnostics",
      description: "Detailed diagnostic recommendations based on AI analysis",
      link: "/diagnosis/precision-diagnostics"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Diagnostic Solutions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
            <div className="mt-4 flex items-center text-emerald-600 hover:text-emerald-700">
              <span>Learn more</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
