import React, { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataInput: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const validTypes = ['image/jpeg', 'image/png', 'image/dicom', 'application/pdf'];
    const droppedFiles = Array.from(e.dataTransfer.files);
    
    const invalidFiles = droppedFiles.filter(file => !validTypes.includes(file.type));
    if (invalidFiles.length > 0) {
      setError('Please upload only medical images (JPEG, PNG, DICOM) or PDF reports.');
      return;
    }

    setFiles(prev => [...prev, ...droppedFiles]);
    setError('');
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(prev => [...prev, ...Array.from(selectedFiles)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const acceptedFileTypes = [
    {
      type: "Medical Images",
      formats: "JPEG, PNG, DICOM",
      description: "Radiological images, scans, and other medical imagery"
    },
    {
      type: "Medical Reports",
      formats: "PDF",
      description: "Lab reports, test results, and medical documentation"
    }
  ];

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All uploaded files are encrypted during transfer and storage"
    },
    {
      title: "HIPAA Compliance",
      description: "Our system adheres to healthcare data privacy regulations"
    },
    {
      title: "Secure Storage",
      description: "Files are stored in secure, encrypted cloud storage"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Data Input
          </h1>
          <p className="text-lg text-gray-600">
            Securely upload your medical images and test results for analysis
          </p>
        </div>

        {/* File Upload Area */}
        <div 
          className={`border-2 border-dashed rounded-lg p-8 mb-8 text-center
            ${dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'}
            ${error ? 'border-red-500 bg-red-50' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg mb-2">
            Drag and drop your files here, or{' '}
            <label className="text-green-600 hover:text-green-700 cursor-pointer">
              browse
              <input
                type="file"
                className="hidden"
                multiple
                accept=".jpg,.jpeg,.png,.pdf,.dcm"
                onChange={handleFileInput}
              />
            </label>
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: JPEG, PNG, DICOM, PDF
          </p>
          {error && (
            <div className="mt-4 text-red-600 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}
        </div>

        {/* Uploaded Files List */}
        {files.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
            <div className="space-y-3">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accepted File Types */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Accepted File Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {acceptedFileTypes.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{item.type}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Formats: {item.formats}
                </p>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Security Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <Link
            to="/workflow-steps/neural-analysis"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Back to Overview
          </Link>
          {files.length > 0 && (
            <Link
              to="/workflow-steps/neural-processing"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Proceed to Analysis
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataInput;
