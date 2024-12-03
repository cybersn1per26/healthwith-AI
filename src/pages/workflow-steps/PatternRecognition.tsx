import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatternRecognition: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<number | null>(null);

  const detectedPatterns = [
    {
      id: 1,
      type: "Anomaly",
      confidence: 92,
      description: "Irregular tissue pattern detected in lower right quadrant",
      severity: "high",
      recommendations: [
        "Immediate follow-up examination recommended",
        "Additional imaging may be required",
        "Consultation with specialist advised"
      ]
    },
    {
      id: 2,
      type: "Structural Change",
      confidence: 88,
      description: "Minor structural variations observed in comparison to baseline",
      severity: "medium",
      recommendations: [
        "Regular monitoring recommended",
        "Follow-up scan in 3 months",
        "Document changes for progression tracking"
      ]
    },
    {
      id: 3,
      type: "Normal Variation",
      confidence: 95,
      description: "Expected anatomical patterns within normal ranges",
      severity: "low",
      recommendations: [
        "Continue regular check-ups",
        "Maintain current health protocols",
        "No immediate action required"
      ]
    }
  ];

  const aiCapabilities = [
    {
      title: "Pattern Matching",
      description: "Advanced algorithms compare findings with extensive medical databases"
    },
    {
      title: "Anomaly Detection",
      description: "AI identifies deviations from normal medical patterns"
    },
    {
      title: "Confidence Scoring",
      description: "Each finding is rated based on statistical certainty"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return AlertTriangle;
      case 'medium':
        return Info;
      case 'low':
        return CheckCircle;
      default:
        return Info;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Pattern Recognition Results
          </h1>
          <p className="text-lg text-gray-600">
            AI-detected patterns and anomalies in your medical data
          </p>
        </div>

        {/* Detected Patterns */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Detected Patterns</h2>
          <div className="space-y-4">
            {detectedPatterns.map((pattern) => {
              const SeverityIcon = getSeverityIcon(pattern.severity);
              return (
                <div
                  key={pattern.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    selectedPattern === pattern.id ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => setSelectedPattern(pattern.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${getSeverityColor(pattern.severity)}`}>
                        <SeverityIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{pattern.type}</h3>
                        <p className="text-gray-600">{pattern.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {pattern.confidence}% Confidence
                      </span>
                    </div>
                  </div>
                  
                  {selectedPattern === pattern.id && (
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-semibold mb-2">Recommendations:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {pattern.recommendations.map((rec, index) => (
                          <li key={index} className="text-gray-600 text-sm">
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">AI Analysis Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <Search className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <Link
            to="/workflow-steps/neural-processing"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Back to Processing
          </Link>
          <Link
            to="/workflow-steps/results-generation"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Generate Final Results
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatternRecognition;
