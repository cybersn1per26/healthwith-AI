import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';

const openai = new OpenAI({
  apiKey: 'sk-1Lii0vcjVMjVlmPc_DudETdhE7iKjeWxFmU0JJBj66T3BlbkFJBTIuzCaI7edqY5xcVu0gfgltr3drLzXX6szgj10zkA',
});

const genAI = new GoogleGenerativeAI('AIzaSyDZL2bwArXtVb5n-Rvrrb1jkgMx1_E8DoA');

const OPENROUTER_API_KEY = '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';
const DEEPSEEK_API_KEY = 'sk-05d8828472d343bbb5087d9c2e8a294e';
const MISTRAL_API_KEY = 'gjvId3PBslQBSC9bxopxJnJ09wd9Kvsb';

export async function getAIResponse(message: string) {
  try {
    // OpenAI response
    const openAIResponse = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a knowledgeable healthcare AI assistant. Provide accurate, helpful medical information while clearly stating that you are not a replacement for professional medical advice.',
        },
        { role: 'user', content: message },
      ],
    });

    // Google AI response
    const googleModel = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const googleResult = await googleModel.generateContent(message);
    const googleResponse = await googleResult.response.text();

    // Combine and analyze responses
    const combinedResponse = `Based on multiple AI analyses:\n\n${openAIResponse.choices[0].message.content}\n\nAdditional insights:\n${googleResponse}\n\nPlease note: This information is for educational purposes only and should not replace professional medical advice.`;

    return combinedResponse;
  } catch (error) {
    console.error('AI Response Error:', error);
    throw new Error('Failed to get AI response');
  }
}