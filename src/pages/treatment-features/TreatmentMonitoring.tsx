import React from 'react';
import { ArrowLeft, LineChart, AlertCircle, TrendingUp, RefreshCcw, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TreatmentMonitoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/treatment" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Treatment
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Treatment Monitoring</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real-Time Treatment Monitoring</h2>
          <p className="text-gray-600 mb-6">
            Our advanced monitoring system provides continuous oversight of your treatment progress, 
            helping to ensure optimal outcomes and early detection of any potential issues.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <LineChart className="w-6 h-6 text-emerald-600" />,
                title: "Progress Tracking",
                description: "Detailed tracking of treatment effectiveness and health improvements"
              },
              {
                icon: <AlertCircle className="w-6 h-6 text-emerald-600" />,
                title: "Early Warning System",
                description: "Proactive detection of potential treatment complications"
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
                title: "Outcome Analysis",
                description: "Advanced analytics to measure treatment success rates"
              },
              {
                icon: <RefreshCcw className="w-6 h-6 text-emerald-600" />,
                title: "Adaptive Monitoring",
                description: "Monitoring parameters that adjust based on your treatment response"
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
              "Real-time tracking of treatment effectiveness",
              "Early detection of potential side effects or complications",
              "Data-driven treatment adjustments for optimal outcomes",
              "Comprehensive progress reports for healthcare providers",
              "Personalized alerts and notifications based on your health status"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">Start Monitoring Your Treatment</h2>
          <p className="text-emerald-600 mb-4">
            Enable comprehensive monitoring of your treatment progress and receive personalized insights.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Enable Treatment Monitoring
          </button>
        </div>
      </div>
    </div>
  );
}
