import { Message } from '../types';
import { FileText } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] rounded-lg p-4 ${
        message.isUser ? 'bg-purple-600 text-white' : 'bg-white text-gray-800'
      }`}>
        <p className="whitespace-pre-wrap">{message.content}</p>
        {message.sources && message.sources.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p className="text-sm font-medium mb-1">Sources:</p>
            {message.sources.map((source, index) => (
              <a
                key={index}
                href={source.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:underline"
              >
                <FileText className="w-4 h-4" />
                {source.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}