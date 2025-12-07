import React, { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { generateImage } from '../services/geminiService';

interface AIImageProps {
  src: string;
  alt: string;
  prompt: string;
  className?: string;
}

export const AIImage: React.FC<AIImageProps> = ({ src, alt, prompt, className }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleGenerate = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const newImage = await generateImage(prompt);
    if (newImage) {
      setCurrentSrc(newImage);
    }
    setLoading(false);
  };

  return (
    <div 
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        src={currentSrc} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      
      {/* Overlay for generation */}
      <div className={`absolute top-2 right-2 transition-opacity duration-300 ${hovered || loading ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-nex-blue text-white p-2 rounded-full shadow-lg hover:bg-sky-600 transition-colors z-20 flex items-center justify-center"
          title="Generar nueva imagen con IA"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Wand2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {loading && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm z-10">
          <span className="text-white text-xs font-bold tracking-wider">GENERANDO...</span>
        </div>
      )}
    </div>
  );
};