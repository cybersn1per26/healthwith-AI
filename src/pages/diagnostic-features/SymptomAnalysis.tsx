import React from 'react';
import { ArrowLeft, Activity, Brain, Microscope, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SymptomAnalysis() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analysis",
      description: "Our cutting-edge AI algorithms process your symptoms using vast medical databases to provide accurate preliminary assessments."
    },
    {
      icon: Activity,
      title: "Real-time Processing",
      description: "Get instant analysis of your symptoms with our powerful real-time processing system."
    },
    {
      icon: Microscope,
      title: "Comprehensive Evaluation",
      description: "Detailed analysis of symptoms considering multiple medical conditions and their relationships."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access symptom analysis any time, day or night, from the comfort of your home."
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your health information is encrypted and protected with state-of-the-art security measures."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/diagnosis" className="inline-flex items-center text-green-600 hover:text-green-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Diagnosis
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">Symptom Analysis</h1>
      <p className="text-xl text-gray-600 mb-12">
        Experience advanced AI-powered symptom analysis that helps identify potential health concerns quickly and accurately.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <feature.icon className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>Enter your symptoms and related information into our secure system</li>
          <li>Our AI analyzes your input against extensive medical databases</li>
          <li>Receive a detailed preliminary analysis of potential health concerns</li>
          <li>Get recommendations for next steps and professional medical consultation if needed</li>
        </ol>
        <div className="mt-6">
          <Link 
            to="/workflow" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            View Detailed Workflow
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
          </Link>
        </div>
      </div>
    </div>
  );
}
