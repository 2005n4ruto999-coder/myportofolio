# LEB for Video Editing — Portfolio

بورتفوليو إبراهيم عمر كمونتير فيديو (YouTube / DaVinci Resolve Studio).
موقع ثابت (HTML + CSS + JS) شغّال على GitHub Pages بدون أي تثبيت.

## 📁 الملفات

| الملف | شو فيه | بتعدّله؟ |
|---|---|---|
| `content.js` | الشوريل + كل المشاريع (فيديوهات) + صور الكواليس | ✅ **هذا الملف الوحيد اللي بتعدّله عادة** |
| `index.html` | الصفحة الرئيسية | نادراً |
| `gallery.html` | صفحة المعرض الكاملة (قصير / طويل / كواليس / منصات) | نادراً |
| `portfolio.css` | التصميم لكل الشاشات (للصفحتين) | نادراً |
| `i18n.js` | كل نصوص الموقع بالعربي والإنجليزي | لما بدك تغيّر جملة |
| `portfolio.js` | المشغّل، الفلاتر، البحث، الترجمة، الإيموجيات | لا |
| `images/` | الصور | لما تضيف صورة |

## 🎬 إضافة مشروع جديد

افتح `content.js`، انسخ "قالب المشروع" الموجود فوق، والصقه في **أول** قائمة `videos: [`:

```js
videos: [
  {
    video: "https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing",
    titleEn: "SaaS promo — Product launch",
    titleAr: "إعلان SaaS — إطلاق منتج",
    descEn: "Motion-heavy promo with kinetic type.",
    descAr: "إعلان بموشن جرافيك ونصوص متحركة.",
    thumbnail: "images/thumbs/saas-promo.jpg",
    platform: "instagram",
    platformUrl: "https://www.instagram.com/reel/XXXX/",
    format: "short",
    category: "promo",
    isNew: true,
  },
  // ... المشاريع القديمة
],
```

- **video**: يوتيوب، شورتس، **جوجل درايف**، Vimeo، إنستغرام، تيك توك، أو ملف mp4. أي رابط ثاني (لينكدإن مثلاً) بيفتح بتبويب جديد.
- **درايف**: لازم الملف يكون مشارك "Anyone with the link".
- **thumbnail**: اختياري — يوتيوب بيجيبها لحاله. إذا ما في صورة بيطلع غلاف تلقائي.
- **platform / platformUrl**: المنصة اللي انعرض عليها المشروع ورابط المنشور.
- **format**: `short` أو `long` — اختياري، بينعرف لحاله من الرابط.
- **category**: `gaming` · `reaction` · `motion` · `story` · `shorts` · `promo` · `other`

المشروع بيظهر تلقائياً بصفحة المعرض، والأحدث منه بيظهر بالرئيسية (العدد بـ `settings`).

## 🖼️ صور الكواليس

ارفع الصورة لمجلد `images` وضيف سطر في `frames`:

```js
{ src: "images/fusion-titles.png", captionEn: "Fusion node tree", captionAr: "نودز داخل Fusion" },
```

## 🌐 روابط مفيدة

- الصفحة بالعربي مباشرة: أضف `?lang=ar` لآخر الرابط.
- المعرض مفلتر جاهز: `gallery.html?format=short` أو `gallery.html?cat=motion` أو `gallery.html?platform=instagram`
