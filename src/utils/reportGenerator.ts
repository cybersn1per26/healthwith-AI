import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface AnalysisData {
  summary: {
    title: string;
    date: string;
    confidence: number;
    status: string;
  };
  findings: {
    category: string;
    details: string[];
  }[];
  recommendations: string[];
  technicalDetails: {
    modelVersion: string;
    processingTime: string;
    dataPoints: string;
  };
}

export const generateDetailedReport = (data: AnalysisData): jsPDF => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  
  // Title
  doc.setFontSize(20);
  doc.text(data.summary.title, pageWidth / 2, 20, { align: 'center' });
  
  // Summary Section
  doc.setFontSize(12);
  doc.text(`Date: ${data.summary.date}`, 20, 35);
  doc.text(`Confidence: ${data.summary.confidence}%`, 20, 45);
  doc.text(`Status: ${data.summary.status}`, 20, 55);
  
  // Findings Section
  doc.setFontSize(16);
  doc.text('Findings', 20, 75);
  
  let yPos = 85;
  data.findings.forEach(finding => {
    doc.setFontSize(14);
    doc.text(finding.category, 20, yPos);
    yPos += 10;
    
    doc.setFontSize(12);
    finding.details.forEach(detail => {
      doc.text(`• ${detail}`, 30, yPos);
      yPos += 10;
    });
    yPos += 5;
  });
  
  // Recommendations Section
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(16);
  doc.text('Recommendations', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(12);
  data.recommendations.forEach(rec => {
    doc.text(`• ${rec}`, 30, yPos);
    yPos += 10;
  });
  
  // Technical Details Section
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(16);
  doc.text('Technical Details', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(12);
  doc.text(`Model Version: ${data.technicalDetails.modelVersion}`, 30, yPos);
  doc.text(`Processing Time: ${data.technicalDetails.processingTime}`, 30, yPos + 10);
  doc.text(`Data Points: ${data.technicalDetails.dataPoints}`, 30, yPos + 20);
  
  return doc;
};

export const generateSummaryReport = (data: AnalysisData): jsPDF => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  
  // Title
  doc.setFontSize(20);
  doc.text(data.summary.title, pageWidth / 2, 20, { align: 'center' });
  
  // Summary Section
  doc.setFontSize(12);
  doc.text(`Date: ${data.summary.date}`, 20, 35);
  doc.text(`Confidence: ${data.summary.confidence}%`, 20, 45);
  doc.text(`Status: ${data.summary.status}`, 20, 55);
  
  // Key Findings
  doc.setFontSize(16);
  doc.text('Key Findings', 20, 75);
  
  let yPos = 85;
  data.findings.forEach(finding => {
    doc.setFontSize(12);
    finding.details.slice(0, 1).forEach(detail => {
      doc.text(`• ${detail}`, 30, yPos);
      yPos += 10;
    });
  });
  
  // Key Recommendations
  doc.setFontSize(16);
  doc.text('Key Recommendations', 20, yPos + 10);
  
  yPos += 20;
  doc.setFontSize(12);
  data.recommendations.slice(0, 2).forEach(rec => {
    doc.text(`• ${rec}`, 30, yPos);
    yPos += 10;
  });
  
  return doc;
};

export const shareReport = async (doc: jsPDF): Promise<void> => {
  const pdfBlob = doc.output('blob');
  if (navigator.share) {
    const file = new File([pdfBlob], 'analysis-report.pdf', { type: 'application/pdf' });
    try {
      await navigator.share({
        files: [file],
        title: 'Analysis Report',
        text: 'Here is your analysis report'
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    // Fallback for browsers that don't support sharing
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, '_blank');
  }
};

export const emailReport = (doc: jsPDF): void => {
  const pdfBase64 = doc.output('datauristring');
  const mailtoLink = `mailto:?subject=Analysis Report&body=Please find attached your analysis report.&attachment=${encodeURIComponent(pdfBase64)}`;
  window.location.href = mailtoLink;
};
