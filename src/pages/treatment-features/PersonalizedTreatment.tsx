import React from 'react';
import { ArrowLeft, CheckCircle2, Brain, Calendar, FileText, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PersonalizedTreatment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/treatment" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Treatment
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Personalized Treatment Plans</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 mb-6">
            Our AI-powered system creates customized treatment plans by analyzing your medical history, 
            symptoms, and health goals. Each plan is tailored to your specific needs and regularly 
            adjusted based on your progress.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Brain className="w-6 h-6 text-emerald-600" />,
                title: "AI-Powered Analysis",
                description: "Advanced algorithms analyze your health data to create optimal treatment strategies"
              },
              {
                icon: <Calendar className="w-6 h-6 text-emerald-600" />,
                title: "Dynamic Scheduling",
                description: "Flexible treatment schedules that adapt to your lifestyle and progress"
              },
              {
                icon: <FileText className="w-6 h-6 text-emerald-600" />,
                title: "Detailed Documentation",
                description: "Comprehensive treatment documentation and progress tracking"
              },
              {
                icon: <Activity className="w-6 h-6 text-emerald-600" />,
                title: "Progress Monitoring",
                description: "Real-time monitoring and adjustments based on your response to treatment"
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
              "Customized treatment approaches based on your unique health profile",
              "Regular optimization of treatment plans based on your progress",
              "Integration with other healthcare providers and specialists",
              "Evidence-based recommendations supported by latest medical research",
              "Continuous monitoring and adjustment of treatment strategies"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Ready to Start?</h2>
          <p className="text-emerald-600 mb-4">
            Begin your personalized treatment journey today and experience healthcare tailored to your needs.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Create Your Treatment Plan
          </button>
        </div>
      </div>
    </div>
  );
}
