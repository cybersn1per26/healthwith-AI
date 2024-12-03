import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';
import { getHealthAssistantResponse } from '@/lib/api/ai-service';
import { toast } from 'react-hot-toast';

export function AIChat() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getHealthAssistantResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      toast.error('Failed to get AI response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-emerald-100">
      <div className="p-4 border-b border-emerald-100 bg-emerald-50">
        <h2 className="text-xl font-semibold text-emerald-800">AI Health Assistant</h2>
        <p className="text-sm text-emerald-600">Ask me anything about your health concerns</p>
      </div>

      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-emerald-50"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === 'user'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-emerald-100 text-gray-800 shadow-sm'
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-emerald-100 rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 text-emerald-600">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Analyzing your query...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-emerald-100 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your health concern..."
            className="flex-1 rounded-lg border border-emerald-200 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}