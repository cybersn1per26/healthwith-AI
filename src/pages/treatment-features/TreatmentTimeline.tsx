import React from 'react';
import { ArrowLeft, CalendarDays, Flag, Target, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TreatmentTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dcfce7] via-[#d1fae5] to-[#ecfdf5] p-6">
      {/* Navigation */}
      <Link to="/treatment" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Treatment
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Treatment Timeline</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visual Treatment Progress Tracking</h2>
          <p className="text-gray-600 mb-6">
            Our treatment timeline provides a clear visualization of your healthcare journey, tracking milestones, 
            progress, and upcoming treatment phases to keep you informed and motivated.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <CalendarDays className="w-6 h-6 text-emerald-600" />,
                title: "Progress Visualization",
                description: "Clear visual representation of your treatment journey"
              },
              {
                icon: <Flag className="w-6 h-6 text-emerald-600" />,
                title: "Milestone Tracking",
                description: "Track and celebrate important treatment milestones"
              },
              {
                icon: <Target className="w-6 h-6 text-emerald-600" />,
                title: "Goal Setting",
                description: "Set and monitor treatment goals and objectives"
              },
              {
                icon: <Clock className="w-6 h-6 text-emerald-600" />,
                title: "Phase Management",
                description: "Clear overview of treatment phases and durations"
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Timeline Benefits</h2>
          <ul className="space-y-4">
            {[
              "Clear visualization of treatment progress and milestones",
              "Better understanding of treatment phases and duration",
              "Improved motivation through progress tracking",
              "Easy sharing of progress with healthcare providers",
              "Predictable treatment expectations and goals"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-3">View Your Treatment Timeline</h2>
          <p className="text-emerald-600 mb-4">
            Get a clear view of your treatment journey and track your progress towards better health.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            View Timeline
          </button>
        </div>
      </div>
    </div>
  );
}
