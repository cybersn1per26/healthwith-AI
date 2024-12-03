import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDZL2bwArXtVb5n-Rvrrb1jkgMx1_E8DoA');

const systemPrompt = `You are an advanced healthcare AI assistant with expertise in medical knowledge. 
Your role is to:
1. Provide accurate, evidence-based medical information
2. Suggest potential treatments and lifestyle modifications
3. Explain medical concepts in simple terms
4. Always emphasize the importance of consulting healthcare professionals
5. Include relevant preventive measures and health tips

Important: Clearly state that your suggestions are for informational purposes only and not a replacement for professional medical advice.`;

export async function getHealthAssistantResponse(userMessage: string) {
  try {
    // Use only Google AI for now since OpenAI has browser restrictions
    const googleModel = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const googlePrompt = `${systemPrompt}\n\nUser Query: ${userMessage}`;
    
    const googleResult = await googleModel.generateContent(googlePrompt);
    const response = await googleResult.response.text();

    // Format the response
    const formattedResponse = `
🏥 Medical Analysis:
${response}

⚕️ Important Notice:
This information is for educational purposes only. Always consult with a qualified healthcare professional for medical advice, diagnosis, or treatment.`;

    return formattedResponse;
  } catch (error) {
    console.error('AI Health Assistant Error:', error);
    throw new Error('Unable to process your health query. Please try again.');
  }
}