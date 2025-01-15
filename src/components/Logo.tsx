import { Brain } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Brain className="w-8 h-8 text-white" />
      <span className="text-2xl font-bold text-white">RAGify</span>
    </div>
  );
}