import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Home } from '@/pages/Home';
import { Auth } from '@/pages/Auth';
import { Chat } from '@/pages/Chat';
import { Diagnosis } from '@/pages/Diagnosis';
import { Treatment } from '@/pages/Treatment';
import { Research } from '@/pages/Research';
import { SymptomAnalysis } from '@/pages/diagnostic-features/SymptomAnalysis';
import { HealthAssessment } from '@/pages/diagnostic-features/HealthAssessment';
import { NeuralAnalysis } from '@/pages/diagnostic-features/NeuralAnalysis';
import { MedicalHistory } from '@/pages/diagnostic-features/MedicalHistory';
import { VitalMonitoring } from '@/pages/diagnostic-features/VitalMonitoring';
import { PrecisionDiagnostics } from '@/pages/diagnostic-features/PrecisionDiagnostics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { Toaster } from 'react-hot-toast';
import { HealthBackground } from '@/components/background/HealthBackground';
import { PersonalizedTreatment } from './pages/treatment-features/PersonalizedTreatment';
import { MedicationManagement } from './pages/treatment-features/MedicationManagement';
import { TreatmentMonitoring } from './pages/treatment-features/TreatmentMonitoring';
import { SpecialistCoordination } from './pages/treatment-features/SpecialistCoordination';
import { TreatmentTimeline } from './pages/treatment-features/TreatmentTimeline';
import { AdvancedTherapies } from './pages/treatment-features/AdvancedTherapies';
import { Workflow } from '@/pages/Workflow';
import { EnterSymptoms } from '@/pages/workflow-steps/EnterSymptoms';
import { AIAnalysis } from '@/pages/workflow-steps/AIAnalysis';
import { ReceiveAnalysis } from '@/pages/workflow-steps/ReceiveAnalysis';
import { GetRecommendations } from '@/pages/workflow-steps/GetRecommendations';
import NeuralAnalysisWorkflow from '@/pages/workflow-steps/NeuralAnalysisWorkflow';
import { AssessmentWorkflow } from '@/pages/assessment-workflow/AssessmentWorkflow';
import { Questionnaire } from '@/pages/assessment-workflow/Questionnaire';
import { AssessmentAnalysis } from '@/pages/assessment-workflow/AssessmentAnalysis';
import { AssessmentResults } from '@/pages/assessment-workflow/AssessmentResults';
import DataInput from '@/pages/workflow-steps/DataInput';
import NeuralProcessing from '@/pages/workflow-steps/NeuralProcessing';
import PatternRecognition from '@/pages/workflow-steps/PatternRecognition';
import ResultsGeneration from '@/pages/workflow-steps/ResultsGeneration';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <HealthBackground />
        <Header />
        <div className="relative pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagnosis"
              element={
                <PrivateRoute>
                  <Diagnosis />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagnosis/symptom-analysis"
              element={
                <PrivateRoute>
                  <SymptomAnalysis />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagnosis/health-assessment"
              element={
                <PrivateRoute>
                  <HealthAssessment />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagnosis/neural-analysis"
              element={
                <PrivateRoute>
                  <NeuralAnalysis />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagnosis/medical-history"
              element={
                <PrivateRoute>
                  <MedicalHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagnosis/vital-monitoring"
              element={
                <PrivateRoute>
                  <VitalMonitoring />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagnosis/precision-diagnostics"
              element={
                <PrivateRoute>
                  <PrecisionDiagnostics />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow"
              element={
                <PrivateRoute>
                  <Workflow />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow/enter-symptoms"
              element={
                <PrivateRoute>
                  <EnterSymptoms />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow/ai-analysis"
              element={
                <PrivateRoute>
                  <AIAnalysis />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow/receive-analysis"
              element={
                <PrivateRoute>
                  <ReceiveAnalysis />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow/get-recommendations"
              element={
                <PrivateRoute>
                  <GetRecommendations />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow-steps/neural-analysis"
              element={
                <PrivateRoute>
                  <NeuralAnalysisWorkflow />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow-steps/data-input"
              element={
                <PrivateRoute>
                  <DataInput />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow-steps/neural-processing"
              element={
                <PrivateRoute>
                  <NeuralProcessing />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow-steps/pattern-recognition"
              element={
                <PrivateRoute>
                  <PatternRecognition />
                </PrivateRoute>
              }
            />
            <Route
              path="/workflow-steps/results-generation"
              element={
                <PrivateRoute>
                  <ResultsGeneration />
                </PrivateRoute>
              }
            />
            <Route
              path="/treatment"
              element={
                <PrivateRoute>
                  <Treatment />
                </PrivateRoute>
              }
            />
            {/* Treatment Feature Routes */}
            <Route path="/treatment/personalized" element={<PrivateRoute><PersonalizedTreatment /></PrivateRoute>} />
            <Route path="/treatment/medication" element={<PrivateRoute><MedicationManagement /></PrivateRoute>} />
            <Route path="/treatment/monitoring" element={<PrivateRoute><TreatmentMonitoring /></PrivateRoute>} />
            <Route path="/treatment/specialist" element={<PrivateRoute><SpecialistCoordination /></PrivateRoute>} />
            <Route path="/treatment/timeline" element={<PrivateRoute><TreatmentTimeline /></PrivateRoute>} />
            <Route path="/treatment/advanced" element={<PrivateRoute><AdvancedTherapies /></PrivateRoute>} />
            <Route
              path="/research"
              element={
                <PrivateRoute>
                  <Research />
                </PrivateRoute>
              }
            />
            <Route
              path="/assessment/workflow"
              element={
                <PrivateRoute>
                  <AssessmentWorkflow />
                </PrivateRoute>
              }
            />
            <Route
              path="/assessment/questionnaire"
              element={
                <PrivateRoute>
                  <Questionnaire />
                </PrivateRoute>
              }
            />
            <Route
              path="/assessment/analysis"
              element={
                <PrivateRoute>
                  <AssessmentAnalysis />
                </PrivateRoute>
              }
            />
            <Route
              path="/assessment/results"
              element={
                <PrivateRoute>
                  <AssessmentResults />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}