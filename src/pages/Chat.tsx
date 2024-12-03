import React from 'react';
import { AIChat } from '@/components/chat/AIChat';

export function Chat() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">AI Health Assistant</h1>
      <AIChat />
    </div>
  );
}