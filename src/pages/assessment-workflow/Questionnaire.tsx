import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Questionnaire() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Basic Information",
      questions: [
        { id: "age", label: "Age", type: "number" },
        { id: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
        { id: "height", label: "Height (cm)", type: "number" },
        { id: "weight", label: "Weight (kg)", type: "number" }
      ]
    },
    {
      title: "Lifestyle",
      questions: [
        { id: "exercise", label: "How often do you exercise?", type: "select", 
          options: ["Never", "1-2 times/week", "3-4 times/week", "5+ times/week"] },
        { id: "sleep", label: "Average hours of sleep per night", type: "number" },
        { id: "stress", label: "Stress level (1-10)", type: "range", min: 1, max: 10 },
        { id: "diet", label: "Diet type", type: "select", 
          options: ["Omnivore", "Vegetarian", "Vegan", "Other"] }
      ]
    },
    {
      title: "Medical History",
      questions: [
        { id: "conditions", label: "Existing medical conditions", type: "textarea" },
        { id: "medications", label: "Current medications", type: "textarea" },
        { id: "allergies", label: "Allergies", type: "textarea" },
        { id: "family_history", label: "Family medical history", type: "textarea" }
      ]
    }
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(curr => curr + 1);
    } else {
      navigate('/assessment/analysis');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Health Questionnaire</h1>
        
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`flex-1 text-center ${
                  index === currentSection ? 'text-green-600 font-semibold' : 'text-gray-400'
                }`}
              >
                {section.title}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        <form className="space-y-6">
          {sections[currentSection].questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {question.label}
              </label>
              {question.type === 'select' ? (
                <select
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select...</option>
                  {question.options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : question.type === 'textarea' ? (
                <textarea
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  rows={3}
                />
              ) : question.type === 'range' ? (
                <input
                  type="range"
                  min={question.min}
                  max={question.max}
                  className="w-full"
                />
              ) : (
                <input
                  type={question.type}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                />
              )}
            </div>
          ))}
        </form>

        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={() => currentSection > 0 && setCurrentSection(curr => curr - 1)}
            disabled={currentSection === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="bg-green-500 hover:bg-green-600"
          >
            {currentSection === sections.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
