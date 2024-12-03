import React from 'react';
import { ArrowLeft, Clock, Shield, Zap, Bell, PieChart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MedicationManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/treatment" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Treatment
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Medication Management</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Smart Medication Management System</h2>
          <p className="text-gray-600 mb-6">
            Our advanced medication management system helps you stay on track with your prescriptions, 
            avoid drug interactions, and maintain optimal treatment effectiveness through intelligent 
            scheduling and monitoring.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Clock className="w-6 h-6 text-emerald-600" />,
                title: "Smart Scheduling",
                description: "Intelligent medication timing based on your daily routine and medical requirements"
              },
              {
                icon: <Shield className="w-6 h-6 text-emerald-600" />,
                title: "Interaction Checking",
                description: "Automatic detection of potential drug interactions and conflicts"
              },
              {
                icon: <Bell className="w-6 h-6 text-emerald-600" />,
                title: "Smart Reminders",
                description: "Customizable alerts and notifications for medication doses"
              },
              {
                icon: <PieChart className="w-6 h-6 text-emerald-600" />,
                title: "Adherence Tracking",
                description: "Detailed tracking of medication adherence and effectiveness"
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Benefits</h2>
          <ul className="space-y-4">
            {[
              "Improved medication adherence through smart reminders",
              "Reduced risk of medication errors and adverse interactions",
              "Real-time tracking of medication effectiveness",
              "Easy communication with healthcare providers about medication concerns",
              "Comprehensive medication history and analytics"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Get Started with Smart Medication Management</h2>
          <p className="text-emerald-600 mb-4">
            Take control of your medication schedule and improve your treatment outcomes with our intelligent management system.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Set Up Medication Management
          </button>
        </div>
      </div>
    </div>
  );
}
