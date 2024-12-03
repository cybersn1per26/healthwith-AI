import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function ReceiveAnalysis() {
  const navigate = useNavigate();
  const location = useLocation();

  // In a real application, this would come from your backend
  const mockAnalysis = {
    potentialConditions: [
      {
        condition: "Common Cold",
        probability: "High",
        description: "A viral infection of the upper respiratory tract"
      },
      {
        condition: "Seasonal Allergies",
        probability: "Medium",
        description: "Allergic response to environmental factors"
      }
    ],
    riskLevel: "Low",
    urgency: "Non-urgent"
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Analysis Results</h1>
        
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              Analysis Summary
            </h2>
            <div className="space-y-2">
              <p className="text-green-700">
                Risk Level: <span className="font-medium">{mockAnalysis.riskLevel}</span>
              </p>
              <p className="text-green-700">
                Urgency: <span className="font-medium">{mockAnalysis.urgency}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Potential Conditions</h3>
            <div className="space-y-4">
              {mockAnalysis.potentialConditions.map((condition, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-lg">{condition.condition}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      condition.probability === 'High' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {condition.probability} Probability
                    </span>
                  </div>
                  <p className="text-gray-600">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/workflow/ai-analysis')}
            >
              Back
            </Button>
            <Button 
              onClick={() => navigate('/workflow/get-recommendations')}
              className="bg-green-500 hover:bg-green-600"
            >
              Get Recommendations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
