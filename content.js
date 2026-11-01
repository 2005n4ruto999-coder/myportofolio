/* =====================================================================
   ✏️  content.js — هذا هو الملف الوحيد اللي بتعدّله لما تضيف شغل جديد
   =====================================================================

   كل مشروع بتضيفه هون بيظهر تلقائياً في:
     • صفحة المعرض الكاملة  (gallery.html)  ← كل المشاريع، مقسمة قصير / طويل
     • الصفحة الرئيسية       (index.html)    ← أحدث المشاريع بس (العدد في settings تحت)

   🎬 لإضافة مشروع جديد:
      1) انسخ "قالب المشروع" اللي تحت (من { إلى },)
      2) الصقه في أول قائمة videos (عشان الأحدث يطلع أول)
      3) عدّل الرابط والاسم — والباقي كله اختياري

   🔗 video — رابط الفيديو. بيقبل:
        يوتيوب:        https://www.youtube.com/watch?v=XXXX   أو   https://youtu.be/XXXX
        يوتيوب شورتس:  https://www.youtube.com/shorts/XXXX
        جوجل درايف:    https://drive.google.com/file/d/XXXX/view?usp=sharing
                       ⚠️ لازم الملف يكون مشارك "Anyone with the link" (أي شخص لديه الرابط)
        Vimeo:         https://vimeo.com/123456789
        إنستغرام:      https://www.instagram.com/reel/XXXX/
        تيك توك:       https://www.tiktok.com/@user/video/123456789
        ملف على الموقع: videos/my-clip.mp4   (أقل من 100MB — حدّ GitHub)
        أي رابط ثاني (لينكدإن، بيهانس...) بيفتح بتبويب جديد بدل ما يشتغل جوا الموقع

   📐 القصير والطويل بيتحددوا تلقائياً:
        • يوتيوب: رابط shorts = عمودي (قصير)، رابط watch أو youtu.be = عرضي (طويل)
          ← فإذا الفيديو عمودي على يوتيوب استعمل رابط الـ Shorts تبعه
        • ريلز إنستغرام وتيك توك = عمودي
        • درايف وملفات mp4: الموقع بيقيس أبعاد الفيديو بنفسه
        • إذا بدك تجبره: format: "short" أو format: "long"

   🖼️ thumbnail — الصورة المصغّرة (اختياري)
        • يوتيوب: بتنجاب تلقائياً، ما بتحتاجها
        • درايف وإنستغرام: الموقع بيحاول يجيبها تلقائياً، بس الأفضل تحط صورة
        • إذا ما في صورة: بيطلع غلاف تلقائي بلون المنصة واسم المشروع
        مثال صورة بالموقع:  "images/thumbs/my-project.jpg"
        مثال صورة من النت: "https://....jpg"

   📢 platform — المنصة اللي انعرض عليها المشروع (اختياري)
        "youtube" "instagram" "tiktok" "facebook" "x" "linkedin"
        "vimeo" "behance" "khamsat" "client" "drive"
        أو اكتب أي اسم بنفسك، مثل: "Kick"
        إذا ما كتبتها، بتنعرف تلقائياً من رابط الفيديو.
   🔗 platformUrl — رابط المنشور على المنصة (اختياري)
        مفيد لما يكون الفيديو مرفوع على درايف بس منشور على إنستغرام مثلاً

   🏷️ category — التصنيف (اختياري):
        "gaming" ألعاب · "reaction" رياكشن · "motion" موشن جرافيك
        "story" سرد · "shorts" قصير · "promo" إعلانات/SaaS · "other" غير ذلك
   🔖 tagsEn / tagsAr — كلمات صغيرة بتظهر تحت الوصف (اختياري)
   📱 vertical: true — للفيديو العمودي من درايف أو ملف mp4 (عشان يشتغل بشكل عمودي)
   ✨ isNew: true    — بيحط شارة "جديد"
   📅 date           — تاريخ اختياري بيظهر على الكرت، مثل "2026-11"

   ⚠️ انتبه: كل سطر لازم يخلص بفاصلة , وكل نص بين علامتين " " (إنجليزية)
   ===================================================================== */

/* ---------- قالب المشروع (انسخه) ----------
    {
      video: "https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing",
      titleEn: "Project name in English",
      titleAr: "اسم المشروع بالعربي",
      descEn: "Short description (optional).",
      descAr: "وصف قصير (اختياري).",
      thumbnail: "images/thumbs/project.jpg",
      platform: "instagram",
      platformUrl: "https://www.instagram.com/reel/XXXX/",
      category: "promo",
      tagsEn: ["Reel", "Captions"],
      tagsAr: ["ريل", "كابشن"],
      date: "2026-11",
      isNew: true,
    },
-------------------------------------------- */

window.PORTFOLIO_CONTENT = {
  settings: {
    homeLong: 3, // كم مشروع طويل يظهر في الصفحة الرئيسية
    homeShort: 5, // كم مشروع قصير يظهر في الصفحة الرئيسية
  },

  /* 🎞️ الفيديو الرئيسي (Showreel) اللي بيظهر في أعلى الصفحة الرئيسية */
  showreel: {
    video: "https://www.youtube.com/watch?v=tj8V_6grayA",
    titleEn: "Main Showreel",
    titleAr: "العرض الرئيسي",
    descEn: "A featured preview of the editing style, pacing, and final polish.",
    descAr: "معاينة أساسية توضح أسلوب المونتاج، والإيقاع، واللمسة النهائية.",
  },

  /* 🎬 كل المشاريع — ضيف الجديد في الأول */
  videos: [
    /* ---------- فيديوهات قصيرة ---------- */
    {
      video: "https://youtube.com/shorts/XKlFe4DwkMc",
      titleEn: "Short Sample 01",
      titleAr: "عينة قصيرة 01",
      descEn: "A fast vertical sample focused on hook timing, movement, and clean presentation.",
      descAr: "عينة رأسية سريعة تركز على توقيت الهوك والحركة والعرض النظيف.",
      platform: "youtube",
      category: "shorts",
      tagsEn: ["Vertical", "Hook-first", "Captions"],
      tagsAr: ["رأسي", "هوك أولًا", "كابشن"],
    },
    {
      video: "https://youtube.com/shorts/S4ELfEkozTE",
      titleEn: "Short Sample 02",
      titleAr: "عينة قصيرة 02",
      descEn: "Another short-form cut with quick emphasis, readable rhythm, and mobile-friendly pacing.",
      descAr: "مونتاج قصير آخر بإبراز سريع وإيقاع مقروء يناسب مشاهدة الموبايل.",
      platform: "youtube",
      category: "shorts",
      tagsEn: ["Short-form", "Rhythm", "Mobile-first"],
      tagsAr: ["قصير", "إيقاع", "موبايل أولًا"],
    },
    {
      video: "https://youtube.com/shorts/HTfICUpeAUA",
      titleEn: "Short Sample 03",
      titleAr: "عينة قصيرة 03",
      descEn: "A vertical sample highlighting polished subtitle flow and sharper pacing control.",
      descAr: "عينة رأسية تبرز تدفق الترجمة المصقول والتحكم الأقوى في الإيقاع.",
      platform: "youtube",
      category: "shorts",
      tagsEn: ["Subtitles", "Pacing", "Polish"],
      tagsAr: ["ترجمة", "إيقاع", "لمسة نهائية"],
    },
    {
      video: "https://www.instagram.com/reel/DZBK6aLt6BX/",
      titleEn: "Instagram Reel 01",
      titleAr: "ريل إنستغرام 01",
      descEn: "A vertical Instagram reel cut for quick, mobile-first viewing.",
      descAr: "ريل إنستغرام رأسي مصمم لمشاهدة سريعة على الموبايل.",
      platform: "instagram",
      category: "shorts",
      tagsEn: ["Instagram", "Reel", "Vertical"],
      tagsAr: ["إنستغرام", "ريل", "رأسي"],
    },
    {
      video: "https://www.instagram.com/reel/DZEb7uyCqTM/",
      titleEn: "Instagram Reel 02",
      titleAr: "ريل إنستغرام 02",
      descEn: "Another vertical reel, edited to sit right beside the YouTube Shorts.",
      descAr: "ريل رأسي آخر بنفس أسلوب شورتس يوتيوب.",
      platform: "instagram",
      category: "shorts",
      tagsEn: ["Instagram", "Short-form", "Mobile"],
      tagsAr: ["إنستغرام", "قصير", "موبايل"],
    },

    /* ---------- مشاريع طويلة ---------- */
    {
      video: "https://www.youtube.com/watch?v=13I3VqSs1Co",
      titleEn: "Featured edit",
      titleAr: "نموذج مونتاج مميز",
      descEn: "An example focused on energy, clarity, and audience retention.",
      descAr: "مثال يركز على الطاقة، والوضوح، والاحتفاظ بالمشاهد.",
      platform: "youtube",
      category: "other",
    },
    {
      video: "https://www.youtube.com/shorts/S4ELfEkozTE",
      titleEn: "3D Visual Masterpiece",
      titleAr: "تحفة بصرية ثلاثية الأبعاد",
      descEn: "Fusion 3D environment work that turns explanatory footage into a deeper visual story.",
      descAr: "عمل بيئة ثلاثية الأبعاد داخل Fusion يحول اللقطات التوضيحية إلى قصة بصرية أعمق.",
      platform: "youtube",
      category: "motion",
      tagsEn: ["Fusion 3D", "Motion Design", "Visual Storytelling"],
      tagsAr: ["Fusion 3D", "موشن ديزاين", "سرد بصري"],
    },
    {
      video: "https://www.linkedin.com/posts/ibrahim-omar-for-business_cubitteam-davinciresolve-motiondesign-activity-7457328974268960768-kV4d",
      thumbnail: "images/opt/frame-541.webp",
      titleEn: "Timeline Architecture",
      titleAr: "هندسة التايملاين",
      descEn: "A project centered on keyframing precision, workflow structure, and the craft behind the timeline.",
      descAr: "مشروع يركز على دقة الكيفريم، وتنظيم سير العمل، والحرفة خلف التايملاين.",
      platform: "linkedin",
      category: "motion",
      tagsEn: ["Cubit Team", "Keyframes", "Workflow"],
      tagsAr: ["Cubit Team", "كيفريم", "سير العمل"],
    },
    {
      video: "https://www.linkedin.com/posts/ibrahim-omar-for-business_davinciresolve-motiongraphics-sounddesign-activity-7457014470494638080-I5Qx",
      thumbnail: "images/opt/frame-854.webp",
      titleEn: "Motion Graphics and Sound Design",
      titleAr: "موشن جرافيك وتصميم صوت",
      descEn: "A Cubit Team project built around motion graphics, sound design, and a tighter audiovisual finish.",
      descAr: "مشروع Cubit Team مبني حول الموشن جرافيك وتصميم الصوت ولمسة صوتية بصرية أكثر إحكامًا.",
      platform: "linkedin",
      category: "motion",
      tagsEn: ["Sound Design", "Motion Graphics", "DaVinci Resolve"],
      tagsAr: ["تصميم صوت", "موشن جرافيك", "DaVinci Resolve"],
    },
  ],

  /* 🖼️ صور من الشغل (لقطات شاشة من DaVinci وغيره)
     بتظهر في قسم "كواليس المونتاج" بالصفحتين
     src = الصورة الكاملة (بتنفتح لما تكبّرها) · thumb = نسخة خفيفة للعرض (اختياري) */
  frames: [
    {
      src: "images/Screenshot (30).png",
      thumb: "images/opt/frame-30.webp",
      captionEn: "Color grading on the Color page",
      captionAr: "تلوين وتصحيح ألوان على صفحة Color",
    },
    {
      src: "images/Screenshot (541).png",
      thumb: "images/opt/frame-541.webp",
      captionEn: "Multi-track timeline — Elden Ring project",
      captionAr: "تايملاين متعدد الطبقات — مشروع Elden Ring",
    },
    {
      src: "images/Screenshot (543).png",
      thumb: "images/opt/frame-543.webp",
      captionEn: "3D composition built in Fusion",
      captionAr: "مشهد ثلاثي الأبعاد مبني داخل Fusion",
    },
    {
      src: "images/Screenshot (848).png",
      thumb: "images/opt/frame-848.webp",
      captionEn: "Motion graphics for the showreel in Fusion",
      captionAr: "موشن جرافيك للشوريل داخل Fusion",
    },
  ],
};
