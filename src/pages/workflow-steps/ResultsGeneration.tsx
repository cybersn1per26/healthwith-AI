import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ExportResults from '../../components/ExportResults';
import { generateDetailedReport, generateSummaryReport, shareReport, emailReport } from '../../utils/reportGenerator';
import { toast } from 'react-hot-toast';

const ResultsGeneration: React.FC = () => {
  // Mock analysis results data
  const analysisResults = {
    summary: {
      title: "Neural Analysis Results",
      date: new Date().toLocaleDateString(),
      confidence: 95,
      status: "Complete"
    },
    findings: [
      {
        category: "Primary Observations",
        details: [
          "Normal tissue patterns detected",
          "No significant anomalies identified",
          "Standard structural integrity maintained"
        ]
      },
      {
        category: "Secondary Analysis",
        details: [
          "Tissue density within normal range",
          "Blood flow patterns regular",
          "No inflammatory markers present"
        ]
      }
    ],
    recommendations: [
      "Regular follow-up recommended",
      "Continue standard monitoring protocol",
      "No immediate intervention required"
    ],
    technicalDetails: {
      modelVersion: "v2.1.0",
      processingTime: "45 seconds",
      dataPoints: "1.2M analyzed"
    }
  };

  const handleExport = async (format: string, action: string) => {
    try {
      const doc = format === 'detailed' 
        ? generateDetailedReport(analysisResults)
        : generateSummaryReport(analysisResults);

      switch (action) {
        case 'download':
          doc.save(`analysis-report-${format}.pdf`);
          toast.success('Report downloaded successfully');
          break;
        case 'share':
          await shareReport(doc);
          toast.success('Report shared successfully');
          break;
        case 'print':
          doc.autoPrint();
          doc.output('dataurlnewwindow');
          toast.success('Report sent to printer');
          break;
        case 'email':
          emailReport(doc);
          toast.success('Email client opened with report');
          break;
      }
    } catch (error) {
      console.error('Error handling export:', error);
      toast.error('Failed to process report. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/workflow-steps/pattern-recognition"
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Pattern Recognition
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{analysisResults.summary.title}</h1>
            <div className="mt-2 text-sm text-gray-500">
              Analysis Date: {analysisResults.summary.date}
            </div>
            <div className="mt-4 flex items-center">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Confidence: {analysisResults.summary.confidence}%
              </div>
              <div className="ml-4 text-green-600 font-medium">
                Status: {analysisResults.summary.status}
              </div>
            </div>
          </div>

          {/* Findings */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Findings</h2>
            {analysisResults.findings.map((finding, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-medium mb-2">{finding.category}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {finding.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
            <ul className="list-disc list-inside space-y-2">
              {analysisResults.recommendations.map((rec, index) => (
                <li key={index} className="text-gray-600">{rec}</li>
              ))}
            </ul>
          </div>

          {/* Technical Details */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Technical Details</h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Model Version:</span>
                <div className="font-medium">{analysisResults.technicalDetails.modelVersion}</div>
              </div>
              <div>
                <span className="text-gray-500">Processing Time:</span>
                <div className="font-medium">{analysisResults.technicalDetails.processingTime}</div>
              </div>
              <div>
                <span className="text-gray-500">Data Points:</span>
                <div className="font-medium">{analysisResults.technicalDetails.dataPoints}</div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="mt-8">
            <ExportResults 
              analysisData={analysisResults}
              onExport={handleExport}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            to="/workflow-steps/pattern-recognition"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Back
          </Link>
          <Link
            to="/diagnosis"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Complete Analysis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsGeneration;
