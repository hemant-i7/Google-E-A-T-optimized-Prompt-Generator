import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-900">✨ AI Prompt Generator ✨</h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Generate professional prompts for both blog content and AI images. 
        Fill in your details below to get customized prompts that help you create amazing content! 🚀
      </p>
    </header>
  );
}