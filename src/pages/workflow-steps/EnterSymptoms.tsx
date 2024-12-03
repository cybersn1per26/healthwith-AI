import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function EnterSymptoms() {
  const [symptoms, setSymptoms] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just navigate to the next step
    navigate('/workflow/ai-analysis', { 
      state: { symptoms, additionalInfo } 
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Enter Your Symptoms</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe your symptoms
            </label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Please describe your symptoms in detail..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="w-full h-24 p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Any relevant medical history, medications, or other information..."
            />
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/workflow')}
            >
              Back to Workflow
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Proceed to Analysis
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
