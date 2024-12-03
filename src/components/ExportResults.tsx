import React, { useState } from 'react';
import { FileText, Download, Share2, Printer, Mail } from 'lucide-react';

interface ExportResultsProps {
  analysisData?: any; // Replace with proper type based on your analysis data structure
  onExport?: (format: string, action: string) => void;
}

const ExportResults: React.FC<ExportResultsProps> = ({ analysisData, onExport }) => {
  const [selectedFormat, setSelectedFormat] = useState<'detailed' | 'summary'>('detailed');

  const handleExport = (action: string) => {
    if (onExport) {
      onExport(selectedFormat, action);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Export Results</h2>
      
      {/* Report Format Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div
          className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
            selectedFormat === 'detailed' ? 'border-green-500 bg-green-50' : 'border-gray-200'
          }`}
          onClick={() => setSelectedFormat('detailed')}
        >
          <div className="flex items-start space-x-3">
            <FileText className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Detailed Report</h3>
              <p className="text-sm text-gray-600">
                Complete analysis with all findings and technical details
              </p>
            </div>
          </div>
        </div>

        <div
          className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
            selectedFormat === 'summary' ? 'border-green-500 bg-green-50' : 'border-gray-200'
          }`}
          onClick={() => setSelectedFormat('summary')}
        >
          <div className="flex items-start space-x-3">
            <FileText className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Summary Report</h3>
              <p className="text-sm text-gray-600">
                Concise overview of key findings and recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={() => handleExport('download')}
          className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <Download className="h-6 w-6 text-gray-600 mb-2" />
          <span className="text-sm text-gray-700">Download PDF</span>
        </button>

        <button
          onClick={() => handleExport('share')}
          className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <Share2 className="h-6 w-6 text-gray-600 mb-2" />
          <span className="text-sm text-gray-700">Share Report</span>
        </button>

        <button
          onClick={() => handleExport('print')}
          className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <Printer className="h-6 w-6 text-gray-600 mb-2" />
          <span className="text-sm text-gray-700">Print Report</span>
        </button>

        <button
          onClick={() => handleExport('email')}
          className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <Mail className="h-6 w-6 text-gray-600 mb-2" />
          <span className="text-sm text-gray-700">Email Report</span>
        </button>
      </div>
    </div>
  );
};

export default ExportResults;
