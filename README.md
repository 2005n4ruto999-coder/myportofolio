# LEB for Video Editing — Portfolio

بورتفوليو إبراهيم عمر كمونتير فيديو (YouTube / DaVinci Resolve Studio).
الموقع ثابت (HTML + CSS + JS) وجاهز للرفع على GitHub Pages بدون أي تثبيت.

## 📁 الملفات

| الملف | شو فيه | بتعدّله؟ |
|---|---|---|
| `content.js` | الشوريل + قائمة الفيديوهات + صور الشغل | ✅ **هذا الملف الوحيد اللي بتعدّله عادة** |
| `index.html` | هيكل الصفحة | نادراً |
| `portfolio.css` | التصميم وكل مقاسات الشاشات | نادراً |
| `portfolio.js` | الترجمة، الحركات، الإيموجيات، النوافذ | لا |
| `images/` | الصور | لما تضيف صورة |

## 🎬 إضافة فيديو جديد

1. افتح `content.js`.
2. انسخ "قالب الفيديو" الموجود فوق في الملف.
3. الصقه في **أول** قائمة `videos: [` وحط رابط اليوتيوب:

```js
videos: [
  {
    youtube: "https://youtu.be/XXXXXXXXXXX",
    titleEn: "Elden Ring — boss challenge",
    titleAr: "إلدن رينغ — تحدي البوس",
    descEn: "Fast-paced gaming edit with Fusion titles.",
    descAr: "مونتاج ألعاب سريع مع عناوين Fusion.",
    category: "gaming",
    isNew: true,
  },
  // ... الفيديوهات القديمة
],
```

- الصورة المصغّرة بتنجاب تلقائياً من يوتيوب.
- روابط Shorts بتنفتح بشكل عمودي تلقائياً.
- التصنيفات: `gaming` · `reaction` · `motion` · `story` · `shorts` · `promo` · `other`
- لتغيير الشوريل الرئيسي عدّل `showreel` في نفس الملف.

## 🖼️ إضافة صورة لقسم "كواليس المونتاج"

ارفع الصورة لمجلد `images` وضيف سطر في `frames` داخل `content.js`:

```js
{ src: "images/my-new-shot.png", captionEn: "Fusion node tree", captionAr: "نودز داخل Fusion" },
```

## 🌐 اللغة

زر الترجمة بيبدّل بين العربي والإنجليزي وبيتذكر اختيار الزائر.
تقدر تشارك رابط بالعربي مباشرة بإضافة `?lang=ar` لآخر الرابط.
