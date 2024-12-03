import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Workflow() {
  const navigate = useNavigate();
  const workflowSteps = [
    {
      step: 1,
      title: "Enter your symptoms",
      description: "Enter your symptoms and related information into our secure system"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI analyzes your input against extensive medical databases"
    },
    {
      step: 3,
      title: "Receive Analysis",
      description: "Receive a detailed preliminary analysis of potential health concerns"
    },
    {
      step: 4,
      title: "Get Recommendations",
      description: "Get recommendations for next steps and professional medical consultation if needed"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">How It Works</h1>
      
      <div className="max-w-3xl mx-auto">
        {workflowSteps.map((item) => (
          <div key={item.step} className="mb-8 flex items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-4">
              {item.step}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          <Button
            onClick={() => navigate('/workflow/enter-symptoms')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg"
          >
            Start Symptom Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}
