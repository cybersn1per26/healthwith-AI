import React from 'react';
import { ArrowLeft, Brain, Image, Database, Zap, FileCheck, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function NeuralAnalysis() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Advanced Neural Networks",
      description: "State-of-the-art deep learning models analyze medical imaging and test results with high accuracy."
    },
    {
      icon: Image,
      title: "Medical Imaging Analysis",
      description: "Comprehensive analysis of X-rays, MRIs, CT scans, and other medical imaging data."
    },
    {
      icon: Database,
      title: "Pattern Recognition",
      description: "Advanced pattern recognition to identify subtle indicators in medical test results."
    },
    {
      icon: Zap,
      title: "Rapid Processing",
      description: "Fast and efficient analysis of complex medical data for quick results."
    },
    {
      icon: FileCheck,
      title: "Accuracy Verification",
      description: "Multi-layer verification system to ensure high accuracy in analysis results."
    }
  ];

  const capabilities = [
    {
      title: "Medical Imaging",
      items: [
        "X-Ray Analysis",
        "MRI Scan Interpretation",
        "CT Scan Analysis",
        "Ultrasound Image Processing",
        "PET Scan Evaluation"
      ]
    },
    {
      title: "Laboratory Results",
      items: [
        "Blood Test Analysis",
        "Pathology Reports",
        "Genetic Test Interpretation",
        "Biomarker Analysis",
        "Microscopy Image Analysis"
      ]
    }
  ];

  const startAnalysis = () => {
    navigate('/workflow-steps/data-input');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/diagnosis" className="inline-flex items-center text-green-600 hover:text-green-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Diagnosis
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Neural Analysis</h1>
      <p className="text-xl text-gray-600 mb-12">
        Experience the power of advanced neural networks in analyzing medical imaging and test results for accurate diagnostic insights.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <feature.icon className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {capabilities.map((category, index) => (
          <div key={index} className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-lg border">
        <h2 className="text-2xl font-bold mb-6">How Neural Analysis Works</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">
              <span className="text-green-600 font-semibold">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Data Input</h3>
              <p className="text-gray-600">Medical images or test results are securely uploaded to our system</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">
              <span className="text-green-600 font-semibold">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Neural Processing</h3>
              <p className="text-gray-600">Advanced neural networks analyze the data using trained medical models</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">
              <span className="text-green-600 font-semibold">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Pattern Recognition</h3>
              <p className="text-gray-600">AI identifies patterns and anomalies in the medical data</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">
              <span className="text-green-600 font-semibold">4</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Results Generation</h3>
              <p className="text-gray-600">Detailed analysis results and recommendations are provided</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={startAnalysis}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Start Neural Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
