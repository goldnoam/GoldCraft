
import { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    id: '1',
    category: 'architecture',
    title: 'עיצוב בתי עץ מודרניים',
    description: 'איך לשלב עץ כהה עם חלונות זכוכית למראה יוקרתי.',
    imageUrl: 'https://picsum.photos/seed/mc-house/800/600',
    steps: [
      'הנחת יסודות מעץ אלון כהה',
      'שימוש בלוחות זכוכית (Panes) במקום בלוקים למראה דק',
      'הוספת טרסות עם פרחים מסביב',
      'שימוש בתאורה נסתרת תחת שטיחים'
    ]
  },
  {
    id: '2',
    category: 'bridge',
    title: 'בניית גשר תלוי אסתטי',
    description: 'שילוב גדרות וחבלים למראה גשר הרפתקאות.',
    imageUrl: 'https://picsum.photos/seed/mc-bridge/800/600',
    steps: [
      'שימוש במדריגות אבן ליצירת קשת',
      'תליית גדרות (Fences) מהצדדים',
      'שילוב Campfires כרצפת הגשר (לכבות אותם עם את חפירה)',
      'הוספת Lanterns למראה קסום בלילה'
    ]
  },
  {
    id: '3',
    category: 'tnt',
    title: 'אמנות הפיצוץ המבוקר',
    description: 'איך ליצור מכתשים יפים ומבנים הרוסים בצורה אמינה.',
    imageUrl: 'https://picsum.photos/seed/mc-tnt/800/600',
    steps: [
      'פיזור אקראי של TNT בתוך המבנה',
      'שימוש בבלוקים חצי הרוסים (Mossy Stone, Cracked Bricks)',
      'שילוב של אש ועשן בעזרת Campfires נסתרים',
      'יצירת שכבות עומק במכתש'
    ]
  },
  {
    id: '4',
    category: 'interior',
    title: 'חלונות ומסגרות יצירתיים',
    description: 'שיפור מראה החלון בעזרת מלכודות (Trapdoors).',
    imageUrl: 'https://picsum.photos/seed/mc-window/800/600',
    steps: [
      'שימוש ב-Trapdoors כתריסים חיצוניים',
      'הצבת עציצים על אדן החלון מבחוץ',
      'שילוב של גדרות בתוך מסגרת החלון למראה כפרי',
      'שימוש בזכוכית צבועה למשחקי אור'
    ]
  }
];
