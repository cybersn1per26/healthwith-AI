import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function GetRecommendations() {
  const navigate = useNavigate();

  // Mock recommendations - in a real app, these would come from your backend
  const recommendations = [
    {
      type: "Immediate Actions",
      items: [
        "Rest and stay hydrated",
        "Monitor your symptoms for any changes",
        "Take over-the-counter medications as needed for symptom relief"
      ]
    },
    {
      type: "Medical Consultation",
      items: [
        "Schedule a virtual consultation with a general practitioner",
        "Prepare a list of your symptoms and their duration",
        "Have your medical history ready for review"
      ]
    },
    {
      type: "Lifestyle Adjustments",
      items: [
        "Ensure adequate rest and sleep",
        "Maintain a balanced diet",
        "Avoid potential triggers"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Recommendations</h1>
        
        <div className="space-y-6">
          {recommendations.map((section, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-green-700">
                {section.type}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Professional Medical Advice
            </h3>
            <p className="text-blue-700">
              Remember that these recommendations are based on AI analysis and should not replace 
              professional medical advice. If your symptoms persist or worsen, please consult with 
              a healthcare provider.
            </p>
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/workflow/receive-analysis')}
            >
              Back
            </Button>
            <Button 
              onClick={() => navigate('/diagnosis')}
              className="bg-green-500 hover:bg-green-600"
            >
              Finish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
