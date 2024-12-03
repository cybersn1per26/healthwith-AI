import React from 'react';
import { ArrowLeft, Activity, Bell, LineChart, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function VitalMonitoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/diagnosis" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Diagnosis
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Vital Monitoring</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real-Time Vital Sign Monitoring</h2>
          <p className="text-gray-600 mb-6">
            Our advanced vital monitoring system provides continuous tracking and analysis of your vital signs, 
            ensuring early detection of any health concerns and maintaining optimal wellness.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Activity className="w-6 h-6 text-emerald-600" />,
                title: "Continuous Monitoring",
                description: "24/7 tracking of essential vital signs and health metrics"
              },
              {
                icon: <Bell className="w-6 h-6 text-emerald-600" />,
                title: "Smart Alerts",
                description: "Immediate notifications for any concerning changes"
              },
              {
                icon: <LineChart className="w-6 h-6 text-emerald-600" />,
                title: "Trend Analysis",
                description: "Advanced analytics to identify patterns and trends"
              },
              {
                icon: <Zap className="w-6 h-6 text-emerald-600" />,
                title: "Real-Time Insights",
                description: "Instant access to vital sign data and analysis"
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Monitoring Benefits</h2>
          <ul className="space-y-4">
            {[
              "Early detection of health issues",
              "Continuous health status awareness",
              "Improved emergency response",
              "Better communication with healthcare providers",
              "Personalized health insights"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Start Monitoring Your Vitals</h2>
          <p className="text-emerald-600 mb-4">
            Begin tracking your vital signs for better health awareness and early detection of concerns.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Enable Monitoring
          </button>
        </div>
      </div>
    </div>
  );
}
