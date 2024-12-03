import React from 'react';
import { ArrowLeft, Heart, Clipboard, LineChart, UserCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HealthAssessment() {
  const features = [
    {
      icon: Heart,
      title: "Comprehensive Health Evaluation",
      description: "Complete assessment of your current health status including vital signs, lifestyle factors, and medical history."
    },
    {
      icon: Clipboard,
      title: "Risk Factor Analysis",
      description: "Identification and evaluation of potential health risks based on your personal health data."
    },
    {
      icon: LineChart,
      title: "Trend Analysis",
      description: "Track changes in your health metrics over time to identify patterns and improvements."
    },
    {
      icon: UserCheck,
      title: "Personalized Recommendations",
      description: "Receive tailored health recommendations based on your assessment results."
    },
    {
      icon: AlertCircle,
      title: "Early Warning System",
      description: "Proactive identification of potential health concerns before they become serious."
    }
  ];

  const benefits = [
    "Early detection of potential health issues",
    "Personalized health insights",
    "Regular monitoring of health metrics",
    "Data-driven health recommendations",
    "Improved health awareness"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/diagnosis" className="inline-flex items-center text-green-600 hover:text-green-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Diagnosis
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Health Assessment</h1>
      <p className="text-xl text-gray-600 mb-12">
        Get a comprehensive evaluation of your health status using our advanced AI-powered assessment system.
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

      <div className="bg-green-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Assessment Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Complete Health Questionnaire</h3>
            <p className="text-gray-600">Answer detailed questions about your health and lifestyle</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">Our AI processes your data for comprehensive insights</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Receive Results</h3>
            <p className="text-gray-600">Get detailed assessment results and recommendations</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/assessment/workflow"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
        >
          View Assessment Process
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
  );
}
