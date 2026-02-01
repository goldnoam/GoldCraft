export type LanguageCode = 'he' | 'en' | 'zh' | 'hi' | 'de' | 'es' | 'fr' | 'ar';

export interface LocalizedString {
  he: string;
  en: string;
  zh: string;
  hi: string;
  de: string;
  es: string;
  fr: string;
  ar: string;
}

export interface Guide {
  id: string;
  category: 'architecture' | 'bridge' | 'interior' | 'tnt' | 'environment' | 'redstone' | 'survival' | 'pixelart';
  title: LocalizedString;
  description: LocalizedString;
  steps: { [key in LanguageCode]: string[] };
  imageUrl: string;
  galleryImages?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
