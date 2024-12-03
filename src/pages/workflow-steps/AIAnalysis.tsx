import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function AIAnalysis() {
  const location = useLocation();
  const navigate = useNavigate();
  const [analyzing, setAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
          setAnalyzing(false);
          // In a real application, this would be where you get the analysis results
          setTimeout(() => {
            navigate('/workflow/receive-analysis', {
              state: {
                ...location.state,
                analysisComplete: true
              }
            });
          }, 1000);
        }
        return Math.min(newProgress, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [navigate, location.state]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">AI Analysis</h1>
        
        <div className="space-y-6">
          <div className="text-center">
            {analyzing ? (
              <p className="text-lg text-gray-700">
                Analyzing your symptoms against our medical database...
              </p>
            ) : (
              <p className="text-lg text-green-600">
                Analysis Complete!
              </p>
            )}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="text-center text-gray-600">
            {analyzing ? (
              <>
                <div className="animate-pulse">Processing...</div>
                <div className="text-sm mt-2">This may take a few moments</div>
              </>
            ) : (
              <div className="text-green-600">Redirecting to your results...</div>
            )}
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/workflow/enter-symptoms')}
              disabled={analyzing}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
