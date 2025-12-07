import { GoogleGenAI } from "@google/genai";

export const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
      console.warn("Gemini API Key is missing. Skipping image generation.");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash-image';

    // Enhance the prompt for architectural photography style tailored to Aluminum/PVC/Glass
    const enhancedPrompt = `Professional architectural photography, high resolution, 4k, photorealistic, modern minimalist style, clean lines, bright natural lighting, focus on materials like aluminium, glass and white PVC: ${prompt}. No text overlays.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            text: enhancedPrompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }

    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};