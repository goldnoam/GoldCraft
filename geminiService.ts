
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiAdvice = async (userPrompt: string) => {
  if (!API_KEY) return "נא להגדיר מפתח API";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `
          אתה יועץ מומחה למשחק מיינקראפט (Minecraft) בשם "GoldCraft Advisor".
          ענה בעברית ברורה, נעימה ומקצועית.
          עזור למשתמשים בעיצוב בתים, גשרים, חלונות, וכל מבנה אחר.
          תן טיפים על שילובי בלוקים, שימוש בתאורה, וטכניקות בנייה מתקדמות.
          אם שואלים על פיצוצים, הסבר איך ליצור אפקט אסתטי של הרס או מכתשים טבעיים.
          השתמש במונחים המוכרים של המשחק (כמו Trapdoors, Slabs, Slabs וכו').
        `,
        temperature: 0.7,
      },
    });

    return response.text || "סליחה, לא הצלחתי להפיק תשובה.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "אירעה שגיאה בחיבור ליועץ הזהב שלנו.";
  }
};
