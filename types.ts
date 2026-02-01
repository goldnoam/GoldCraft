
export interface Guide {
  id: string;
  title: string;
  category: 'architecture' | 'bridge' | 'interior' | 'tnt' | 'environment';
  description: string;
  steps: string[];
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum BuildingCategory {
  ARCHITECTURE = 'עיצוב מבנים',
  BRIDGE = 'גשרים',
  INTERIOR = 'עיצוב פנים',
  TNT = 'פיצוצים ואסתטיקה',
  ENVIRONMENT = 'נוף וסביבה'
}
