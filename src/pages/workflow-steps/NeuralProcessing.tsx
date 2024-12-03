import React, { useState, useEffect } from 'react';
import { Brain, Activity, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeuralProcessing: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const processingSteps = [
    {
      name: "Image Preprocessing",
      description: "Normalizing and enhancing image quality for analysis",
      duration: 2000,
    },
    {
      name: "Feature Extraction",
      description: "Identifying key medical features and markers",
      duration: 3000,
    },
    {
      name: "Model Analysis",
      description: "Applying trained neural networks for diagnosis",
      duration: 4000,
    },
    {
      name: "Validation Check",
      description: "Verifying results against medical databases",
      duration: 2000,
    }
  ];

  const modelFeatures = [
    {
      title: "Deep Learning Models",
      description: "State-of-the-art neural networks trained on vast medical datasets",
      icon: Brain
    },
    {
      title: "Real-time Processing",
      description: "Advanced algorithms for rapid medical data analysis",
      icon: Activity
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    let totalDuration = 0;
    
    const processStep = () => {
      if (currentIndex < processingSteps.length) {
        const step = processingSteps[currentIndex];
        setCurrentStep(step.name);
        
        const stepProgress = (currentIndex / processingSteps.length) * 100;
        setProgress(stepProgress);
        
        setTimeout(() => {
          currentIndex++;
          processStep();
        }, step.duration);
        
        totalDuration += step.duration;
      } else {
        setProgress(100);
        setIsComplete(true);
      }
    };

    processStep();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Neural Processing
          </h1>
          <p className="text-lg text-gray-600">
            Advanced AI models analyzing your medical data
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Analysis Progress</span>
              <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            {!isComplete && <Loader className="h-5 w-5 text-green-500 animate-spin" />}
            <span className="text-gray-600">{currentStep || "Initializing..."}</span>
          </div>
        </div>

        {/* Processing Steps */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Processing Steps</h2>
          <div className="space-y-6">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className={`
                  flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4
                  ${progress >= ((index + 1) / processingSteps.length) * 100
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-400'}
                `}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.name}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Model Features */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Advanced AI Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modelFeatures.map((feature, index) => (
              <div key={index} className="flex items-start p-4 border rounded-lg">
                <feature.icon className="h-8 w-8 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <Link
            to="/workflow-steps/data-input"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Back to Data Input
          </Link>
          {isComplete && (
            <Link
              to="/workflow-steps/pattern-recognition"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              View Results
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeuralProcessing;
