import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function AssessmentWorkflow() {
  const navigate = useNavigate();
  const workflowSteps = [
    {
      step: 1,
      title: "Complete Health Questionnaire",
      description: "Answer detailed questions about your health and lifestyle"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI processes your data for comprehensive insights"
    },
    {
      step: 3,
      title: "Receive Results",
      description: "Get detailed assessment results and recommendations"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Assessment Process</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {workflowSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold border-2 border-green-500">
                  {item.step}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-center mb-3">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => navigate('/assessment/questionnaire')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg"
          >
            Start Health Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}
