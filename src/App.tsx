import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PromptForm from './components/PromptForm';
import ImagePromptForm from './components/ImagePromptForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <Header />
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-center">📝 Blog Prompt Generator</h2>
            <PromptForm />
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-center">🎨 AI Image Prompt Generator</h2>
            <ImagePromptForm />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;