import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 text-center text-gray-500 animate-fade-in">
      <p className="flex items-center justify-center gap-2">
        Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Hemant Kadam
      </p>
    </footer>
  );
}