import { useState } from 'react';
import { Message } from '../types';
import { ChatMessage } from '../components/ChatMessage';
import { Search, Trash2 } from 'lucide-react';

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: query,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');

    try {
      // TODO: Replace with actual API call
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      
      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        isUser: false,
        sources: data.sources
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Chat</h1>
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear Chat
          </button>
        )}
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="text-xl">Ask me anything about your documents</p>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white border-t p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your question..."
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-600 hover:text-purple-500"
          >
            <Search className="w-6 h-6" />
          </button>
        </form>
      </footer>
    </div>
  );
}