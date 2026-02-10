import { useState, useRef, useEffect } from "react";
import { useChat } from "@/hooks/use-chat";
import { ComicButton } from "./ComicButton";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import johnnyImage from "@assets/MV5BM2M5YjYxZTktYzIzNi00MjkxLTljYTEtYjllNWY3Y2RkMTYwXkEyXkFqcG_1770673945010.jpg";

interface Message {
  id: string;
  role: "user" | "johnny";
  content: string;
}

export function AskJohnny() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "intro", role: "johnny", content: "Hey pretty mama! Or handsome dude! Ask the Johnny anything! Hah-huh!" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const chatMutation = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || chatMutation.isPending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await chatMutation.mutateAsync({ message: userMessage.content });
      const johnnyMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "johnny",
        content: response.response,
      };
      setMessages((prev) => [...prev, johnnyMessage]);
    } catch (error) {
      // Error is handled by mutation hook via toast
      console.error(error);
    }
  };

  return (
    <div id="ask-johnny" className="py-20 bg-bravo-blue relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 halftone-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-display text-white text-shadow-md mb-4 rotate-1 inline-block">
            Ask Johnny!
          </h2>
          <p className="text-2xl text-yellow-300 font-comic rotate-1">
            "I'm pretty, you're pretty... let's talk!"
          </p>
        </div>

        <div className="bg-white border-4 border-black shadow-[16px_16px_0px_rgba(0,0,0,1)] p-4 md:p-8 transform -rotate-1">
          <div className="flex flex-col md:flex-row gap-8 items-start h-[600px]">
            {/* Johnny Avatar Column */}
            <div className="hidden md:flex flex-col items-center gap-4 w-1/3">
              <div className="w-full aspect-[3/4] border-4 border-black bg-bravo-yellow overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] relative">
                 <img 
                  src={johnnyImage} 
                  alt="Johnny Bravo" 
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white font-display text-center py-2 text-xl">
                  The Man
                </div>
              </div>
              <div className="bg-bravo-pink text-white font-comic p-4 text-center border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-2">
                "Man, I'm pretty!"
              </div>
            </div>

            {/* Chat Column */}
            <div className="flex-1 w-full flex flex-col h-full bg-gray-50 border-4 border-black p-4 relative">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-6 pr-2 custom-scrollbar">
                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`
                        max-w-[85%] p-4 text-lg font-bold border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
                        ${msg.role === 'user' 
                          ? 'bg-bravo-pink text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' 
                          : 'bg-bravo-yellow text-black rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'}
                      `}>
                        {msg.role === 'johnny' && (
                          <span className="block text-xs uppercase font-display mb-1 text-black/60">Johnny says:</span>
                        )}
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {chatMutation.isPending && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="flex justify-start"
                  >
                    <div className="bg-gray-200 text-black p-4 border-4 border-black rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex items-center gap-2">
                      <Sparkles className="animate-spin text-bravo-pink" />
                      <span className="font-display">COMBING HAIR...</span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="relative z-20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Talk to the hair..."
                    className="flex-1 bg-white border-4 border-black px-4 py-3 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-bravo-yellow/50 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] placeholder:text-gray-400"
                    disabled={chatMutation.isPending}
                  />
                  <button
                    type="submit"
                    disabled={chatMutation.isPending || !input.trim()}
                    className="bg-black text-white p-4 border-4 border-black hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_rgba(255,215,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                  >
                    <Send size={24} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
