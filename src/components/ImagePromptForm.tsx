import React, { useState } from 'react';
import { Wand2, Copy, CheckCircle } from 'lucide-react';
import { generateImagePrompt } from '../utils/promptGenerator';

interface ImageFormData {
  heading: string;
  imageType: string;
  colorStyle: string;
}

const IMAGE_TYPES = [
  'Realistic',
  'Imaginative',
  'Abstract',
  'Cinematic',
  'Minimalist',
  'Fantasy',
  'Surreal',
  'Artistic',
];

const COLOR_STYLES = [
  'Vibrant & Colorful',
  'Dark & Moody',
  'Light & Airy',
  'Monochromatic',
  'Pastel',
  'High Contrast',
  'Vintage',
  'Neon',
];

export default function ImagePromptForm() {
  const [formData, setFormData] = useState<ImageFormData>({
    heading: '',
    imageType: '',
    colorStyle: '',
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = generateImagePrompt(formData);
    setGeneratedPrompt(prompt);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="heading" className="block text-sm font-medium text-gray-700">
              📝 Description
            </label>
            <input
              type="text"
              id="heading"
              name="heading"
              placeholder="e.g., A majestic mountain peak at sunset"
              value={formData.heading}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:bg-white/60"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="imageType" className="block text-sm font-medium text-gray-700">
                🎨 Image Type
              </label>
              <select
                id="imageType"
                name="imageType"
                value={formData.imageType}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:bg-white/60"
                required
              >
                <option value="">Select image type</option>
                {IMAGE_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="colorStyle" className="block text-sm font-medium text-gray-700">
                �palette Color Style
              </label>
              <select
                id="colorStyle"
                name="colorStyle"
                value={formData.colorStyle}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:bg-white/60"
                required
              >
                <option value="">Select color style</option>
                {COLOR_STYLES.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-purple-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
        >
          Generate Image Prompt
          <Wand2 className="w-4 h-4" />
        </button>
      </form>

      {generatedPrompt && (
        <div className="mt-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">✨ Generated Image Prompt:</h2>
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