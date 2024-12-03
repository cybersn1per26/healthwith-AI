import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function AssessmentResults() {
  const navigate = useNavigate();

  // Mock results - in a real app, this would come from your backend
  const results = {
    overallHealth: {
      score: 85,
      status: "Good",
      summary: "Your overall health indicators are positive with some areas for improvement."
    },
    categories: [
      {
        name: "Physical Health",
        score: 88,
        insights: [
          "Regular exercise routine is beneficial",
          "BMI is within healthy range",
          "Consider increasing cardiovascular activities"
        ]
      },
      {
        name: "Lifestyle",
        score: 82,
        insights: [
          "Sleep pattern is adequate",
          "Stress management could be improved",
          "Good dietary habits observed"
        ]
      },
      {
        name: "Medical Factors",
        score: 85,
        insights: [
          "No major health concerns identified",
          "Family history suggests preventive care focus",
          "Regular check-ups recommended"
        ]
      }
    ],
    recommendations: [
      "Schedule a routine check-up with your primary care physician",
      "Include stress-reduction activities in your daily routine",
      "Maintain current exercise habits",
      "Consider adding more variety to your diet"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Your Health Assessment Results</h1>
        
        {/* Overall Health Score */}
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-green-800">Overall Health Score</h2>
            <div className="text-4xl font-bold text-green-600">{results.overallHealth.score}/100</div>
          </div>
          <p className="text-green-700">{results.overallHealth.summary}</p>
        </div>

        {/* Detailed Categories */}
        <div className="space-y-6 mb-8">
          {results.categories.map((category, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <div className="text-lg font-semibold text-green-600">
                  {category.score}/100
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {category.insights.map((insight, i) => (
                  <li key={i}>{insight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Recommendations</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            {results.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4">
          <Button
            variant="outline"
            onClick={() => navigate('/diagnosis/health-assessment')}
          >
            Back to Assessment
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
  );
}
