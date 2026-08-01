import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Trash2, 
  X, 
  Key, 
  User,
} from 'lucide-react';
import { chatbotKnowledgeBase, personalInfo } from '../../data/portfolioData';

export default function AiChatbot({ isOpenAsModal = false, onCloseModal }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I am **${personalInfo.name}'s AI Assistant** powered by Google Gemini. Ask me anything about Hardik's background, MERN stack skills, AI projects, or how to hire him!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);

  // Read API key from env variable first, then localStorage override
  const envKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || envKey);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  const chatContainerRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition if supported
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        setIsListening(false);
      }
    }
  };

  const speakText = (text) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    // Strip markdown formatting for voice output
    const cleanText = text.replace(/[*#_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    let aiReply = '';

    // If API key available (from env or user-provided), try calling Gemini API
    if (apiKey.trim()) {
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${chatbotKnowledgeBase.systemPrompt}\nUser question: ${query}` }]
              }
            ]
          })
        });

        const data = await res.json();
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          aiReply = data.candidates[0].content.parts[0].text;
        }
      } catch (e) {
        console.warn('Gemini API call failed, switching to local knowledge base', e);
      }
    }

    // Knowledge Base Fallback if no reply yet
    if (!aiReply) {
      const lowerQuery = query.toLowerCase();
      const match = chatbotKnowledgeBase.faqs.find((faq) =>
        faq.keywords.some((kw) => lowerQuery.includes(kw))
      );

      if (match) {
        aiReply = match.response;
      } else {
        aiReply = `Hardik is a Full Stack MERN & AI Developer skilled in React.js, Node.js, Express, MongoDB, Tailwind CSS v4, and Google Gemini API integrations. You can view his featured **AI Virtual Assistant** or **Lawyer Appointment Booking System** projects on this site, or reach out directly at **${personalInfo.email}**!`;
      }
    }

    // Simulate natural typing delay
    setTimeout(() => {
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      speakText(aiReply);
    }, 600);
  };

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    setShowApiKeyModal(false);
  };

  const suggestedQuestions = [
    "Tell me about Hardik",
    "What are his MERN & AI skills?",
    "Explain his AI Virtual Assistant project",
    "How can I hire Hardik or download resume?"
  ];

  const content = (
    <div className="w-full h-full flex flex-col glass-card rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl">
      
      {/* Header */}
      <div className="p-4 sm:p-5 bg-gray-950/90 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-gray-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base">Hardik's AI Assistant</h3>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/50">
                Gemini
              </span>
            </div>
            <p className="text-xs text-gray-400">Ask about experience, skills & projects</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Text to speech toggle */}
          <button
            onClick={() => setSpeechEnabled(!speechEnabled)}
            className={`p-2 rounded-xl border transition-colors ${
              speechEnabled
                ? 'bg-cyan-950 border-cyan-500/40 text-cyan-300'
                : 'bg-gray-900 border-white/10 text-gray-400 hover:text-white'
            }`}
            title={speechEnabled ? 'Disable Voice Output' : 'Enable Voice Output'}
          >
            {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Gemini API key config button */}
          <button
            onClick={() => setShowApiKeyModal(true)}
            className="p-2 rounded-xl bg-gray-900 border border-white/10 text-gray-400 hover:text-white transition-colors"
            title="Configure Gemini API Key"
          >
            <Key className="w-4 h-4" />
          </button>

          {/* Clear chat */}
          <button
            onClick={() => setMessages([messages[0]])}
            className="p-2 rounded-xl bg-gray-900 border border-white/10 text-gray-400 hover:text-white transition-colors"
            title="Clear Chat History"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          {isOpenAsModal && (
            <button
              onClick={onCloseModal}
              className="p-2 rounded-xl bg-gray-800 border border-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div 
        ref={chatContainerRef}
        className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar bg-gray-950/50"
      >
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`p-2 rounded-xl shrink-0 ${
              msg.sender === 'user'
                ? 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white'
                : 'bg-gray-900 border border-cyan-500/30 text-cyan-400'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm space-y-1 ${
              msg.sender === 'user'
                ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-none'
                : 'glass-card border border-white/10 text-gray-200 rounded-tl-none'
            }`}>
              <div className="whitespace-pre-wrap leading-relaxed">
                {msg.text}
              </div>
              <p className={`text-[10px] text-right ${msg.sender === 'user' ? 'text-cyan-200' : 'text-gray-400'}`}>
                {msg.timestamp}
              </p>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gray-900 border border-cyan-500/30 text-cyan-400">
              <Bot className="w-4 h-4 animate-spin-slow" />
            </div>
            <div className="glass-card p-4 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Suggested Question Chips */}
      <div className="px-4 py-2 bg-gray-950/80 border-t border-white/5 flex items-center gap-2 overflow-x-auto custom-scrollbar">
        <span className="text-[11px] text-cyan-400 font-semibold shrink-0">Try:</span>
        {suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="px-3 py-1 rounded-full bg-gray-900 hover:bg-gray-800 border border-white/10 text-gray-300 hover:text-white text-xs whitespace-nowrap transition-colors shrink-0"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Form Footer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 sm:p-4 bg-gray-950 border-t border-white/10 flex items-center gap-2"
      >
        <button
          type="button"
          onClick={toggleVoiceInput}
          className={`p-3 rounded-xl border transition-all ${
            isListening
              ? 'bg-rose-950 border-rose-500 text-rose-300 animate-pulse'
              : 'bg-gray-900 border-white/10 text-gray-400 hover:text-white'
          }`}
          title={isListening ? 'Stop Listening' : 'Voice Speech-to-Text Input'}
        >
          {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={isListening ? 'Listening... speak now...' : "Ask Hardik's AI Assistant..."}
          className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
        />

        <button
          type="submit"
          disabled={!inputText.trim()}
          className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>

      {/* Optional Gemini API Key Dialog */}
      {showApiKeyModal && (
        <div className="absolute inset-0 z-50 bg-gray-950/90 backdrop-blur-md flex items-center justify-center p-6">
          <div className="glass-card p-6 rounded-2xl border border-white/15 max-w-md w-full space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-cyan-400" />
                <span>Configure Gemini API Key</span>
              </h4>
              <button onClick={() => setShowApiKeyModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-300">
              Optional: Enter your own Google Gemini API key to enable live Gemini LLM inference. If left empty, the portfolio smart fallback knowledge base will answer queries instantly.
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => handleSaveApiKey('')}
                className="px-3.5 py-2 rounded-xl bg-gray-800 text-gray-300 text-xs hover:text-white"
              >
                Clear Key
              </button>
              <button
                onClick={() => handleSaveApiKey(apiKey)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold"
              >
                Save Preference
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );

  if (isOpenAsModal) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseModal}
            className="fixed inset-0 bg-gray-950/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl h-[85vh] z-10"
          >
            {content}
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // Inline rendering — no extra section wrapper (App.jsx provides the wrapper)
  return content;
}
