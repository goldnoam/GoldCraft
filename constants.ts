import { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    id: '1',
    category: 'architecture',
    title: { he: 'עיצוב בתי עץ מודרניים', en: 'Modern Wood House Design', zh: '现代木屋设计', hi: 'आधुनिक लकड़ी के घर का डिज़ाइन', de: 'Modernes Holzhaus-Design', es: 'Diseño de casa de madera moderna', fr: 'Design de maison en bois moderne', ar: 'تصميم بيت خشبي حديث' },
    description: { he: 'איך לשלב עץ כהה עם חלונות זכוכית למראה יוקרתי.', en: 'Combining dark wood with glass for a luxury look.', zh: '将深色木材与玻璃结合，打造奢华外观。', hi: 'लक्जरी लुक के लिए कांच के साथ डार्क वुड का संयोजन।', de: 'Dunkles Holz mit Glas für einen luxuriösen Look kombinieren.', es: 'Combinación de madera oscura con vidrio para un aspecto de lujo.', fr: 'Combiner le bois sombre avec le verre pour un look de luxe.', ar: 'الجمع بين الخشب الداكن والزجاج للحصول على مظهر فاخر.' },
    steps: {
      he: ['הנחת יסודות מעץ כהה.', 'שימוש בלוחות זכוכית.', 'הוספת טרסות.', 'תאורה נסתרת.', 'גג שטוח.'],
      en: ['Lay dark wood foundations.', 'Use glass panes.', 'Add terraces.', 'Hidden lighting.', 'Flat roof.'],
      zh: ['铺设深色木材基础。', '使用玻璃面板。', '增加露台。', '隐藏式照明。', '平屋顶。'],
      hi: ['डार्क लकड़ी की नींव रखें।', 'कांच के पैन का उपयोग करें।', 'छत जोड़ें।', 'छिपी हुई रोशनी।', 'सपाट छत।'],
      de: ['Dunkle Holzfundamente legen.', 'Glasscheiben verwenden.', 'Terrassen hinzufügen.', 'Versteckte Beleuchtung.', 'Flachdach.'],
      es: ['Colocar cimientos de madera oscura.', 'Usar paneles de vidrio.', 'Añadir terrazas.', 'Iluminación oculta.', 'Techo plano.'],
      fr: ['Poser des fondations en bois sombre.', 'Utiliser des vitres.', 'Ajouter des terrasses.', 'Éclairage caché.', 'Toit plat.'],
      ar: ['وضع أساسات الخشب الداكن.', 'استخدام الألواح الزجاجية.', 'إضافة شرفات.', 'إضاءة مخفية.', 'سقف مسطح.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    category: 'bridge',
    title: { he: 'גשר אבן מקושת', en: 'Stone Arch Bridge', zh: '石拱桥', hi: 'पत्थर का मेहराब पुल', de: 'Steinbogenbrücke', es: 'Puente de arco de piedra', fr: 'Pont en arc de pierre', ar: 'جسر حجري مقوس' },
    description: { he: 'בניית גשר אבן קלאסי המשתלב בנהרות.', en: 'Building a classic stone bridge for rivers.', zh: '建造一座经典的河流石桥。', hi: 'नदियों के लिए एक क्लासिक पत्थर का पुल बनाना।', de: 'Bau einer klassischen Steinbrücke für Flüsse.', es: 'Construcción de un puente de piedra clásico para ríos.', fr: 'Construction d\'un pont en pierre classique pour les rivières.', ar: 'بناء جسر حجري كلاسيكي للأنهار.' },
    steps: {
      he: ['בניית בסיסי אבן.', 'יצירת קשת.', 'הוספת מעקות.', 'שילוב טחב.', 'תאורה עתיקה.'],
      en: ['Build stone bases.', 'Create an arch.', 'Add railings.', 'Incorporate moss.', 'Antique lighting.'],
      zh: ['建造石基。', '创建一个拱门。', '增加栏杆。', '加入苔藓。', '仿古照明。'],
      hi: ['पत्थर के आधार बनाएं।', 'एक मेहराब बनाएं।', 'रेलिंग जोड़ें।', 'काई शामिल करें।', 'एंटीक लाइटिंग।'],
      de: ['Steinbasen bauen.', 'Einen Bogen erstellen.', 'Geländer hinzufügen.', 'Moos einbauen.', 'Antike Beleuchtung.'],
      es: ['Construir bases de piedra.', 'Crear un arco.', 'Añadir barandillas.', 'Incorporar musgo.', 'Iluminación antigua.'],
      fr: ['Construire des bases en pierre.', 'Créer une arche.', 'Ajouter des balustrades.', 'Incorporer de la mousse.', 'Éclairage antique.'],
      ar: ['بناء قواعد حجرية.', 'إنشاء قوس.', 'إضافة حواجز.', 'دمج الطحالب.', 'إضاءة عتيقة.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    category: 'redstone',
    title: { he: 'דלת 2x2 אוטומטית', en: '2x2 Automatic Piston Door', zh: '2x2 自动活塞门', hi: '2x2 स्वचालित पिस्टन दरवाजा', de: '2x2 automatische Kolbentür', es: 'Puerta de pistón automática 2x2', fr: 'Porte à pistons automatique 2x2', ar: 'باب مكبس آلي 2x2' },
    description: { he: 'דלת חבויה שנפתחת בעזרת לוחות לחץ.', en: 'Hidden door that opens with pressure plates.', zh: '使用压力板开启的隐藏门。', hi: 'प्रेशर प्लेट्स के साथ खुलने वाला छिपा हुआ दरवाजा।', de: 'Versteckte Tür, die sich mit Druckplatten öffnet.', es: 'Puerta oculta que se abre con placas de presión.', fr: 'Porte cachée qui s\'ouvre avec des plaques de pression.', ar: 'باب مخفي يفتح بصفائح الضغط.' },
    steps: {
      he: ['הצבת בוכנות דביקות.', 'חיבור אבקת רדסטון.', 'שימוש בלפיד רדסטון.', 'כיסוי המכניקה.', 'בדיקה סופית.'],
      en: ['Place sticky pistons.', 'Connect redstone dust.', 'Use redstone torch.', 'Cover mechanics.', 'Final test.'],
      zh: ['放置粘性活塞。', '连接红石粉。', '使用红石火把。', '覆盖机械装置。', '最终测试。'],
      hi: ['चिपचिपा पिस्टन रखें।', 'रेडस्टोन धूल कनेक्ट करें।', 'रेडस्टोन मशाल का उपयोग करें।', 'मैकेनिक्स को कवर करें।', 'अंतिम परीक्षण।'],
      de: ['Klebrige Kolben platzieren.', 'Redstone-Staub verbinden.', 'Redstone-Fackel verwenden.', 'Mechanik abdecken.', 'Abschlusstest.'],
      es: ['Colocar pistones pegajosos.', 'Conectar polvo de redstone.', 'Usar antorcha de redstone.', 'Cubrir la mecánica.', 'Prueba final.'],
      fr: ['Placer des pistons collants.', 'Connecter la poudre de redstone.', 'Utiliser une torche redstone.', 'Couvrir la mécanique.', 'Test final.'],
      ar: ['وضع مكابس لزجة.', 'توصيل غبار الريدستون.', 'استخدام شعلة الريدستون.', 'تغطية الميكانيكا.', 'الاختبار النهائي.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1581291417067-285048fc850d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    category: 'survival',
    title: { he: 'בסיס הישרדות תת-קרקעי', en: 'Underground Survival Base', zh: '地下生存基地', hi: 'भूमिगत जीवन रक्षा आधार', de: 'Unterirdische Überlebensbasis', es: 'Base de supervivencia subterránea', fr: 'Base de survie souterraine', ar: 'قاعدة بقاء تحت الأرض' },
    description: { he: 'בסיס מוגן ובטוח מתחת לאדמה.', en: 'Safe protected base underground.', zh: '地下安全保护基地。', hi: 'भूमिगत सुरक्षित संरक्षित आधार।', de: 'Sicher geschützte Basis unter der Erde.', es: 'Base subterránea protegida y segura.', fr: 'Base souterraine protégée et sûre.', ar: 'قاعدة محمية آمنة تحت الأرض.' },
    steps: {
      he: ['חפירת חלל מרכזי.', 'חלוקה לחדרים.', 'שימוש בזכוכית לתאורה.', 'כניסה מוסתרת.', 'אוורור דקורטיבי.'],
      en: ['Dig central space.', 'Divide into rooms.', 'Use glass for light.', 'Hidden entrance.', 'Decorative ventilation.'],
      zh: ['挖掘中心空间。', '划分房间。', '使用玻璃采光。', '隐藏入口。', '装饰性通风。'],
      hi: ['केंद्रीय स्थान खोदें।', 'कमरों में विभाजित करें।', 'रोशनी के लिए कांच का उपयोग करें।', 'छिपा हुआ प्रवेश द्वार।', 'सजावटी वेंटिलेशन।'],
      de: ['Zentralen Raum graben.', 'In Räume unterteilen.', 'Glas für Licht verwenden.', 'Versteckter Eingang.', 'Dekorative Belüftung.'],
      es: ['Cavar espacio central.', 'Dividir en habitaciones.', 'Usar vidrio para luz.', 'Entrada oculta.', 'Ventilación decorativa.'],
      fr: ['Creuser l\'espace central.', 'Diviser en pièces.', 'Utiliser du verre pour la lumière.', 'Entrée cachée.', 'Ventilation décorative.'],
      ar: ['حفر مساحة مركزية.', 'التقسيم إلى غرف.', 'استخدام الزجاج للإضاءة.', 'مدخل مخفي.', 'تهوية ديكورية.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    category: 'interior',
    title: { he: 'עיצוב מטבח מודרני', en: 'Modern Kitchen Design', zh: '现代厨房设计', hi: 'आधुनिक रसोई डिजाइन', de: 'Modernes Küchendesign', es: 'Diseño de cocina moderna', fr: 'Design de cuisine moderne', ar: 'تصميم مطبخ حديث' },
    description: { he: 'יצירת מטבח פונקציונלי ומעוצב.', en: 'Creating a functional designer kitchen.', zh: '打造功能齐全的设计师厨房。', hi: 'एक कार्यात्मक डिजाइनर रसोई बनाना।', de: 'Eine funktionale Designerküche gestalten.', es: 'Creación de una cocina de diseño funcional.', fr: 'Création d\'une cuisine design fonctionnelle.', ar: 'إنشاء مطبخ مصمم وظيفي.' },
    steps: {
      he: ['בניית ארונות.', 'יצירת תנור.', 'שימוש בבאנרים.', 'הוספת מדפים.', 'עציצים קטנים.'],
      en: ['Build cabinets.', 'Create oven.', 'Use banners.', 'Add shelves.', 'Small flower pots.'],
      zh: ['建造橱柜。', '建造烤箱。', '使用旗帜。', '增加架子。', '小花盆。'],
      hi: ['कैबिनेट बनाएं।', 'ओवन बनाएं।', 'बैनर का उपयोग करें।', 'अलमारियां जोड़ें।', 'छोटे फूलों के गमले।'],
      de: ['Schränke bauen.', 'Ofen erstellen.', 'Banner verwenden.', 'Regale hinzufügen.', 'Kleine Blumentöpfe.'],
      es: ['Construir armarios.', 'Crear horno.', 'Usar estandartes.', 'Añadir estantes.', 'Macetas pequeñas.'],
      fr: ['Construire des armoires.', 'Créer un four.', 'Utiliser des bannières.', 'Ajouter des étagères.', 'Petits pots de fleurs.'],
      ar: ['بناء الخزائن.', 'إنشاء فرن.', 'استخدام اللافتات.', 'إضافة أرفف.', 'أواني زهور صغيرة.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1536376074432-bf12177d4f93?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    category: 'environment',
    title: { he: 'גן זן יפני', en: 'Japanese Zen Garden', zh: '日式禅意花园', hi: 'जापानी जेन गार्डन', de: 'Japanischer Zen-Garten', es: 'Jardín Zen japonés', fr: 'Jardin zen japonais', ar: 'حديقة زين اليابانية' },
    description: { he: 'פינת מרגוע עם חול ואבנים.', en: 'Relaxing corner with sand and stones.', zh: '带沙石的休闲角落。', hi: 'रेत और पत्थरों के साथ आरामदायक कोना।', de: 'Entspannungsecke mit Sand und Steinen.', es: 'Rincón relajante con arena y piedras.', fr: 'Coin détente avec sable et pierres.', ar: 'ركن مريح مع الرمل والأحجار.' },
    steps: {
      he: ['חצץ בהיר לחול.', 'פיזור סלעים.', 'עץ דובדבן.', 'בריכת מים.', 'שימוש בבמבוק.'],
      en: ['Light gravel for sand.', 'Scatter rocks.', 'Cherry tree.', 'Water pond.', 'Use bamboo.'],
      zh: ['用浅色碎石代替沙子。', '散布岩石。', '樱花树。', '水池。', '使用竹子。'],
      hi: ['रेत के लिए हल्की बजרי।', 'चट्टानें बिखेरें।', 'चेरी का पेड़।', 'पानी का तालाब।', 'बांस का प्रयोग करें।'],
      de: ['Hellen Kies für Sand.', 'Steine verteilen.', 'Kirschbaum.', 'Wasserteich.', 'Bambus verwenden.'],
      es: ['Grava clara para arena.', 'Esparcir rocas.', 'Cerezo.', 'Estanque de agua.', 'Usar bambú.'],
      fr: ['Gravier léger pour le sable.', 'Disperser des rochers.', 'Cerisier.', 'Bassin d\'eau.', 'Utiliser du bambou.'],
      ar: ['حصى خفيف للرمال.', 'نشر الصخور.', 'شجرة الكرز.', 'بركة مياه.', 'استخدام الخيزران.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1501004318641-72e542844e27?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    category: 'architecture',
    title: { he: 'מגדל שמירה ימי-ביניימי', en: 'Medieval Watchtower', zh: '中世纪瞭望塔', hi: 'मध्ययुगीन वॉचटावर', de: 'Mittelalterlicher Wachturm', es: 'Atalaya medieval', fr: 'Tour de guet médiévale', ar: 'برج مراقبة من العصور الوسطى' },
    description: { he: 'מגדל אבן גבוה עם גג מחודד.', en: 'Tall stone tower with a pointed roof.', zh: '尖顶的高石塔。', hi: 'नुकीली छत वाला ऊँचा पत्थर का टॉवर।', de: 'Hoher Steinturm mit Spitzdach.', es: 'Torre de piedra alta con techo puntiagudo.', fr: 'Haute tour en pierre avec un toit pointu.', ar: 'برج حجري طويل بسقف مدبب.' },
    steps: {
      he: ['בסיס אבן רחב.', 'מדרגות לעיטור.', 'קומת תצפית.', 'גג מעץ כהה.', 'הוספת דגל.'],
      en: ['Wide stone base.', 'Decor stairs.', 'Observation floor.', 'Dark wood roof.', 'Add a flag.'],
      zh: ['宽石基。', '装饰楼梯。', '观景层。', '深色木屋顶。', '增加旗帜。'],
      hi: ['चौड़ा पत्थर का आधार।', 'सजावटी सीढ़ियां।', 'अवलोकन तल।', 'डार्क लकड़ी की छत।', 'एक झंडा जोड़ें।'],
      de: ['Breite Steinbasis.', 'Dekortreppen.', 'Aussichtsetage.', 'Dunkles Holzdach.', 'Flagge hinzufügen.'],
      es: ['Base de piedra ancha.', 'Escaleras decorativas.', 'Planta de observación.', 'Techo de madera oscura.', 'Añadir bandera.'],
      fr: ['Base en pierre large.', 'Escaliers de décoration.', 'Étage d\'observation.', 'Toit en bois sombre.', 'Ajouter un drapeau.'],
      ar: ['قاعدة حجرة واسعة.', 'درج للديكور.', 'طابق مراقبة.', 'سقف خشب داكن.', 'إضافة علم.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1599427303058-f06cb9e980ee?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    category: 'pixelart',
    title: { he: 'חרב יהלום ענקית', en: 'Giant Diamond Sword', zh: '巨型钻石剑', hi: 'विशाल हीरा तलवार', de: 'Riesiges Diamantschwert', es: 'Espada de diamante gigante', fr: 'Épée en diamant géante', ar: 'سيف ماسي عملاق' },
    description: { he: 'פסל חרב יהלום מרשים.', en: 'Impressive diamond sword statue.', zh: '令人印象深刻的钻石剑雕像。', hi: 'प्रभावशाली हीरे की तलवार की मूर्ति।', de: 'Beeindruckende Diamantschwert-Statue.', es: 'Impresionante estatua de espada de diamante.', fr: 'Impressionnante statue d\'épée en diamant.', ar: 'تمثال سيف ماسي مثير للإعجاب.' },
    steps: {
      he: ['פלטת צבעים כחולה.', 'בניית הידית.', 'יצירת הלהב.', 'הוספת הצללות.', 'תאורה היקפית.'],
      en: ['Blue color palette.', 'Build the handle.', 'Create the blade.', 'Add shading.', 'Perimeter lighting.'],
      zh: ['蓝色调色板。', '建造手柄。', '创建剑刃。', '添加阴影。', '周边照明。'],
      hi: ['नीला रंग पैलेट।', 'हैंडल बनाएं।', 'ब्लेड बनाएं।', 'छायांकन जोड़ें।', 'परिधि प्रकाश।'],
      de: ['Blaue Farbpalette.', 'Griff bauen.', 'Klinge erstellen.', 'Schattierung hinzufügen.', 'Umfangsbeleuchtung.'],
      es: ['Paleta de colores azul.', 'Construir el mango.', 'Crear la hoja.', 'Añadir sombreado.', 'Iluminación perimetral.'],
      fr: ['Palette de couleurs bleues.', 'Construire la poignée.', 'Créer la lame.', 'Ajouter des ombres.', 'Éclairage périmétrique.'],
      ar: ['لوحة ألوان زرقاء.', 'بناء المقبض.', 'إنشاء النصل.', 'إضافة التظليل.', 'إضاءة محيطة.']
    },
    imageUrl: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&q=80&w=800'
  }
];

export const UI_STRINGS = {
  he: {
    heroTitle: 'GoldCraft', heroSub: 'הפוך את עולם הקוביות שלך ליצירת אדריכלות מופת.', learnBtn: 'התחל ללמוד', feedbackBtn: 'שלח משוב',
    featuresTitle1: 'טכניקות בנייה', featuresDesc1: 'למד להשתמש בבלוקים בצורה שלא חשבת עליה מעולם.',
    featuresTitle2: 'אפקטים מיוחדים', featuresDesc2: 'יצירת פיצוצים אסתטיים ותאורה דינמית.',
    featuresTitle3: 'תכנון אדריכלי', featuresDesc3: 'הבנת פרופורציות ושילובי צבעים.',
    guidesTitle: 'מדריכי בנייה נבחרים', noGuides: 'לא נמצאו מדריכים בקטגוריה זו...',
    footerDesc: 'קהילת הבנייה המובילה בישראל למיינקראפט.', copyBtn: 'העתק מדריך', copied: 'הועתק!', fullGuide: 'למדריך המלא',
    categoryAll: 'הכל', categoryArch: 'מבנים', categoryBridge: 'גשרים', categoryInterior: 'פנים', categoryTnt: 'פיצוצים', categoryEnv: 'נוף', categoryRedstone: 'רדסטון', categorySurvival: 'הישרדות', categoryPixel: 'פיקסל',
    home: 'ראשי', guides: 'מדריכים', language: 'שפה', quickLinks: 'קישורים מהירים', madeWithLove: 'מיוצר באהבה עבור הקהילה.'
  },
  en: {
    heroTitle: 'GoldCraft', heroSub: 'Turn your block world into an architectural masterpiece.', learnBtn: 'Start Learning', feedbackBtn: 'Send Feedback',
    featuresTitle1: 'Building Techniques', featuresDesc1: 'Learn to use blocks in ways you never thought of.',
    featuresTitle2: 'Special Effects', featuresDesc2: 'Aesthetic explosions and dynamic lighting.',
    featuresTitle3: 'Architecture', featuresDesc3: 'Proportions and color combinations.',
    guidesTitle: 'Featured Guides', noGuides: 'No guides found...',
    footerDesc: 'Leading building community for Minecraft.', copyBtn: 'Copy Guide', copied: 'Copied!', fullGuide: 'Full Guide',
    categoryAll: 'All', categoryArch: 'Arch', categoryBridge: 'Bridges', categoryInterior: 'Interior', categoryTnt: 'Explosions', categoryEnv: 'Landscape', categoryRedstone: 'Redstone', categorySurvival: 'Survival', categoryPixel: 'Pixel Art',
    home: 'Home', guides: 'Guides', language: 'Language', quickLinks: 'Quick Links', madeWithLove: 'Made with love for the community.'
  },
  zh: {
    heroTitle: 'GoldCraft', heroSub: '将您的方块世界变成建筑杰作。', learnBtn: '开始学习', feedbackBtn: '发送反馈',
    featuresTitle1: '建筑技巧', featuresDesc1: '以意想不到的方式使用方块。',
    featuresTitle2: '特效', featuresDesc2: '审美爆炸和动态照明。',
    featuresTitle3: '建筑设计', featuresDesc3: '比例和颜色组合。',
    guidesTitle: '精选指南', noGuides: '未找到指南...',
    footerDesc: '领先的 Minecraft 建筑社区。', copyBtn: '复制指南', copied: '已复制！', fullGuide: '完整指南',
    categoryAll: '全部', categoryArch: '建筑', categoryBridge: '桥梁', categoryInterior: '室内', categoryTnt: '爆炸', categoryEnv: '景观', categoryRedstone: '红石', categorySurvival: '生存', categoryPixel: '像素',
    home: '首页', guides: '指南', language: '语言', quickLinks: '快速链接', madeWithLove: '为社区精心制作。'
  },
  hi: {
    heroTitle: 'GoldCraft', heroSub: 'अपनी ब्लॉक दुनिया को वास्तुकला की उत्कृष्ट कृति में बदलें।', learnBtn: 'सीखना शुरू करें', feedbackBtn: 'प्रतिक्रिया भेजें',
    featuresTitle1: 'निर्माण तकनीक', featuresDesc1: 'ब्लॉक का अभिनव उपयोग करना सीखें।',
    featuresTitle2: 'विशेष प्रभाव', featuresDesc2: 'सौंदर्यपूर्ण विस्फोट और प्रकाश व्यवस्था।',
    featuresTitle3: 'वास्तुकला', featuresDesc3: 'अनुपात और रंग संयोजन।',
    guidesTitle: 'चुनिंदा गाइड', noGuides: 'कोई गाइड नहीं मिली...',
    footerDesc: 'Minecraft के लिए अग्रणी निर्माण समुदाय।', copyBtn: 'गाइड कॉपी करें', copied: 'कॉपी किया गया!', fullGuide: 'पूर्ण गाइड',
    categoryAll: 'सभी', categoryArch: 'आर्क', categoryBridge: 'पुल', categoryInterior: 'इंटीरियर', categoryTnt: 'विस्फोट', categoryEnv: 'लैंडस्केप', categoryRedstone: 'रेडस्टोन', categorySurvival: 'जीवन रक्षा', categoryPixel: 'पिक्सेल',
    home: 'होम', guides: 'गाइड', language: 'भाषा', quickLinks: 'त्वरित लिंक', madeWithLove: 'समुदाय के लिए प्यार से बनाया गया।'
  },
  de: {
    heroTitle: 'GoldCraft', heroSub: 'Verwandeln Sie Ihre Welt in ein Meisterwerk.', learnBtn: 'Lernen', feedbackBtn: 'Feedback',
    featuresTitle1: 'Bautechniken', featuresDesc1: 'Blöcke neu entdecken.',
    featuresTitle2: 'Spezialeffekte', featuresDesc2: 'Explosionen und Beleuchtung.',
    featuresTitle3: 'Architektur', featuresDesc3: 'Proportionen und Farben.',
    guidesTitle: 'Guides', noGuides: 'Keine gefunden...',
    footerDesc: 'Baugemeinschaft für Minecraft.', copyBtn: 'Kopieren', copied: 'Kopiert!', fullGuide: 'Vollständig',
    categoryAll: 'Alle', categoryArch: 'Arch', categoryBridge: 'Brücken', categoryInterior: 'Innen', categoryTnt: 'TNT', categoryEnv: 'Landschaft', categoryRedstone: 'Redstone', categorySurvival: 'Überleben', categoryPixel: 'Pixel',
    home: 'Start', guides: 'Guides', language: 'Sprache', quickLinks: 'Links', madeWithLove: 'Mit Liebe gemacht.'
  },
  es: {
    heroTitle: 'GoldCraft', heroSub: 'Convierte tu mundo en una obra maestra.', learnBtn: 'Aprender', feedbackBtn: 'Comentarios',
    featuresTitle1: 'Técnicas', featuresDesc1: 'Usa bloques de formas nuevas.',
    featuresTitle2: 'Efectos', featuresDesc2: 'Explosiones y luz dinámica.',
    featuresTitle3: 'Arquitectura', featuresDesc3: 'Proporciones y colores.',
    guidesTitle: 'Guías', noGuides: 'No encontrado...',
    footerDesc: 'Comunidad de construcción de Minecraft.', copyBtn: 'Copiar', copied: 'Copiado!', fullGuide: 'Guía completa',
    categoryAll: 'Todo', categoryArch: 'Arq', categoryBridge: 'Puentes', categoryInterior: 'Interior', categoryTnt: 'TNT', categoryEnv: 'Paisaje', categoryRedstone: 'Redstone', categorySurvival: 'Supervivencia', categoryPixel: 'Pixel',
    home: 'Inicio', guides: 'Guías', language: 'Idioma', quickLinks: 'Enlaces', madeWithLove: 'Hecho con amor.'
  },
  fr: {
    heroTitle: 'GoldCraft', heroSub: 'Transformez votre monde en chef-d\'œuvre.', learnBtn: 'Apprendre', feedbackBtn: 'Avis',
    featuresTitle1: 'Techniques', featuresDesc1: 'Utilisez les blocs différemment.',
    featuresTitle2: 'Effets', featuresDesc2: 'Explosions et lumière.',
    featuresTitle3: 'Architecture', featuresDesc3: 'Proportions et couleurs.',
    guidesTitle: 'Guides', noGuides: 'Non trouvé...',
    footerDesc: 'Communauté de construction Minecraft.', copyBtn: 'Copier', copied: 'Copié!', fullGuide: 'Détails',
    categoryAll: 'Tout', categoryArch: 'Arch', categoryBridge: 'Ponts', categoryInterior: 'Intérieur', categoryTnt: 'TNT', categoryEnv: 'Paysage', categoryRedstone: 'Redstone', categorySurvival: 'Survie', categoryPixel: 'Pixel',
    home: 'Accueil', guides: 'Guides', language: 'Langue', quickLinks: 'Liens', madeWithLove: 'Fait avec amour.'
  },
  ar: {
    heroTitle: 'GoldCraft', heroSub: 'حوّل عالم المكعبات الخاص بك إلى تحفة معمارية.', learnBtn: 'ابدأ التعلم', feedbackBtn: 'إرسال ملاحظات',
    featuresTitle1: 'تقنيات البناء', featuresDesc1: 'تعلم استخدام المكعبات بطرق مبتكرة.',
    featuresTitle2: 'تأثيرات خاصة', featuresDesc2: 'انفجارات جمالية وإضاءة ديناميكية.',
    featuresTitle3: 'التخطيط المعماري', featuresDesc3: 'فهم النسب وتנסיק الألوان.',
    guidesTitle: 'الأדلة المختارة', noGuides: 'لم يتم العثور على أدلة...',
    footerDesc: 'مجتمع البناء الرائد في ماين كرافت.', copyBtn: 'نسخ الدليل', copied: 'تم النسخ!', fullGuide: 'الدليل الكامل',
    categoryAll: 'الكل', categoryArch: 'عمارة', categoryBridge: 'جسور', categoryInterior: 'داخلية', categoryTnt: 'انفجارات', categoryEnv: 'بيئة', categoryRedstone: 'ريدستون', categorySurvival: 'بقاء', categoryPixel: 'بكسל',
    home: 'الرئيسية', guides: 'الأدلة', language: 'اللغة', quickLinks: 'روابط سريعة', madeWithLove: 'صنع بكل حب للمجتمع.'
  }
};