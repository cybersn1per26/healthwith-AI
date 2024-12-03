import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function AssessmentAnalysis() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('Initializing analysis...');

  const tasks = [
    'Processing health data...',
    'Analyzing lifestyle factors...',
    'Evaluating medical history...',
    'Generating comprehensive insights...',
    'Preparing recommendations...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = Math.min(oldProgress + 1, 100);
        
        // Update current task based on progress
        const taskIndex = Math.floor((newProgress / 100) * tasks.length);
        if (taskIndex < tasks.length) {
          setCurrentTask(tasks[taskIndex]);
        }

        // Navigate when complete
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            navigate('/assessment/results');
          }, 1000);
        }

        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Analyzing Your Health Data</h1>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-700 animate-pulse">
              {currentTask}
            </p>
          </div>

          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600">
                  {progress}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500"
              />
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            Please wait while we process your health assessment data...
          </div>

          <div className="mt-8 space-y-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 ${
                  index <= Math.floor((progress / 100) * tasks.length)
                    ? 'text-green-600'
                    : 'text-gray-400'
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {index <= Math.floor((progress / 100) * tasks.length) ? (
                    <path d="M5 13l4 4L19 7" />
                  ) : (
                    <path d="M12 12h.01" />
                  )}
                </svg>
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
