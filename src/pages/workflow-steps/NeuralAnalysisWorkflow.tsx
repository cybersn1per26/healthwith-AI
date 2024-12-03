import React from 'react';
import { ArrowLeft, Upload, Brain, Search, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NeuralAnalysisWorkflow: React.FC = () => {
  const navigate = useNavigate();
  
  const workflowSteps = [
    {
      step: 1,
      title: "Data Input",
      description: "Medical images or test results are securely uploaded to our system",
      icon: Upload,
      path: "/workflow-steps/data-input"
    },
    {
      step: 2,
      title: "Neural Processing",
      description: "Advanced neural networks analyze the data using trained medical models",
      icon: Brain,
      path: "/workflow-steps/neural-processing"
    },
    {
      step: 3,
      title: "Pattern Recognition",
      description: "AI identifies patterns and anomalies in the medical data",
      icon: Search,
      path: "/workflow-steps/pattern-recognition"
    },
    {
      step: 4,
      title: "Results Generation",
      description: "Detailed analysis results and recommendations are provided",
      icon: FileText,
      path: "/workflow-steps/results-generation"
    }
  ];

  const startWorkflow = () => {
    navigate(workflowSteps[0].path);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/diagnosis/neural-analysis" className="inline-flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Neural Analysis
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Neural Analysis Workflow
          </h1>
          <p className="text-lg text-gray-600">
            Follow these steps to complete your medical data analysis
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-medium">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                  <Link
                    to={step.path}
                    className="flex-shrink-0 text-green-600 hover:text-green-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            onClick={startWorkflow}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Start Analysis Process
            <ArrowLeft className="ml-2 h-5 w-5 transform rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeuralAnalysisWorkflow;
