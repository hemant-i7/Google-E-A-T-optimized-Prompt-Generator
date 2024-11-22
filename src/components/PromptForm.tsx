import React, { useState } from 'react';
import { Send, Copy, CheckCircle } from 'lucide-react';
import { generateFullPrompt } from '../utils/promptGenerator';

interface FormData {
  name: string;
  years: string;
  websiteName: string;
  industry: string;
}

export default function PromptForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    years: '',
    websiteName: '',
    industry: '',
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = generateFullPrompt(formData);
    setGeneratedPrompt(prompt);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              👤 Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g., Hemant Kadam"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-white/60"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="years" className="block text-sm font-medium text-gray-700">
              ⏳ Years of Experience
            </label>
            <input
              type="number"
              id="years"
              name="years"
              placeholder="e.g., 5"
              value={formData.years}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-white/60"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="websiteName" className="block text-sm font-medium text-gray-700">
              🌐 Website Name
            </label>
            <input
              type="text"
              id="websiteName"
              name="websiteName"
              placeholder="e.g., TechInsights"
              value={formData.websiteName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-white/60"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              🏢 Industry
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              placeholder="e.g., Technology"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-white/60"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
        >
          Generate Prompt
          <Send className="w-4 h-4" />
        </button>
      </form>

      {generatedPrompt && (
        <div className="mt-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">✨ Generated Prompt:</h2>
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <pre className="whitespace-pre-wrap font-sans text-gray-800">
              {generatedPrompt}
            </pre>
          </div>
          <button
            onClick={handleCopy}
            className="mt-4 px-4 py-2 bg-white/50 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white/70 transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy to Clipboard
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}