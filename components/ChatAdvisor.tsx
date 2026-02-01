
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getGeminiAdvice } from '../geminiService';
import { ChatMessage } from '../types';

const ChatAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getGeminiAdvice(input);
    const aiMsg: ChatMessage = { role: 'model', text: aiResponse };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div id="advisor" className="bg-[#2d2d2d] rounded-2xl border-4 border-yellow-600 overflow-hidden shadow-2xl max-w-4xl mx-auto my-12">
      <div className="bg-yellow-600 p-4 flex items-center gap-3">
        <div className="bg-black p-2 rounded-lg">
          <Sparkles className="text-yellow-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">יועץ הזהב האישי שלך</h2>
          <p className="text-black/80 text-sm">שאל אותי כל דבר על בנייה, עיצוב או רדסטון</p>
        </div>
      </div>

      <div className="h-[400px] overflow-y-auto p-6 flex flex-col gap-4 bg-[#1e1e1e]">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 opacity-50">
            <Bot size={48} className="mb-2" />
            <p>שלום בנאי! איך אוכל לעזור לך היום?</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
            <div className={`flex items-start gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-600' : 'bg-green-700'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-xl ${msg.role === 'user' ? 'bg-[#3d3d3d] text-white' : 'bg-[#4d4d4d] text-yellow-50'}`}>
                <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end">
            <div className="bg-[#4d4d4d] p-3 rounded-xl flex items-center gap-2">
              <Loader2 className="animate-spin text-yellow-500" size={18} />
              <span className="text-sm">חושב על פתרון...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 bg-[#2d2d2d] border-t border-white/10 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="למשל: איך לבנות חלון יפה לבית כפרי?"
          className="flex-1 bg-[#1e1e1e] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-yellow-500 transition-colors"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 text-black p-3 rounded-lg transition-all"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatAdvisor;
