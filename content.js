/* =====================================================================
   ✏️  content.js — هذا هو الملف الوحيد اللي بتعدّله لما تضيف شغل جديد
   =====================================================================

   🎬 لإضافة فيديو جديد:
      1) انسخ "قالب الفيديو" اللي تحت (من { إلى },)
      2) الصقه في أول قائمة videos (عشان الأحدث يطلع أول)
      3) حط رابط اليوتيوب وعدّل العنوان والوصف — خلص!
         الصورة المصغّرة (thumbnail) بتنجاب تلقائياً من يوتيوب.

   ✅ أي شكل من روابط يوتيوب بيشتغل:
        https://www.youtube.com/watch?v=XXXXXXXXXXX
        https://youtu.be/XXXXXXXXXXX
        https://www.youtube.com/shorts/XXXXXXXXXXX   ← فيديو عمودي (Shorts)

   🏷️  category (التصنيف) اختار واحد من هدول:
        "gaming"    ألعاب
        "reaction"  رياكشن
        "motion"    موشن جرافيك
        "story"     سرد / قصصي
        "shorts"    فيديوهات قصيرة
        "promo"     إعلانات / SaaS
        "other"     غير ذلك
      (أزرار الفلترة بتظهر تلقائياً لما يكون عندك أكثر من تصنيف)

   ⚠️ انتبه: كل سطر لازم يخلص بفاصلة , وكل نص لازم يكون بين علامتين " "
   ===================================================================== */

/* ---------- قالب الفيديو (انسخه) ----------
    {
      youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
      titleEn: "Video title in English",
      titleAr: "عنوان الفيديو بالعربي",
      descEn: "One short line about the edit.",
      descAr: "سطر قصير عن المونتاج.",
      category: "gaming",
      isNew: true,          // اختياري: بيحط شارة "جديد" على الفيديو
      // thumbnail: "images/my-thumb.jpg",   // اختياري: صورة مصغّرة خاصة بدل صورة يوتيوب
    },
-------------------------------------------- */

window.PORTFOLIO_CONTENT = {
  /* 🎞️ الفيديو الرئيسي (Showreel) اللي بيظهر في أعلى الصفحة */
  showreel: {
    youtube: "https://www.youtube.com/watch?v=tj8V_6grayA",
    titleEn: "Main Showreel",
    titleAr: "العرض الرئيسي",
    descEn: "A featured preview of the editing style, pacing, and final polish.",
    descAr: "معاينة أساسية توضح أسلوب المونتاج، والإيقاع، واللمسة النهائية.",
  },

  /* 🎬 قائمة الفيديوهات — ضيف الجديد في الأول */
  videos: [
    {
      youtube: "https://www.youtube.com/watch?v=13I3VqSs1Co",
      titleEn: "Featured edit",
      titleAr: "نموذج مونتاج مميز",
      descEn: "An example focused on energy, clarity, and audience retention.",
      descAr: "مثال يركز على الطاقة، والوضوح، والاحتفاظ بالمشاهد.",
      category: "other",
    },
  ],

  /* 🖼️ صور من الشغل (لقطات شاشة من DaVinci وغيره)
     لإضافة صورة: ارفعها لمجلد images وضيف سطر جديد بنفس الشكل */
  frames: [
    {
      src: "images/Screenshot (30).png",
      captionEn: "Color grading on the Color page",
      captionAr: "تلوين وتصحيح ألوان على صفحة Color",
    },
    {
      src: "images/Screenshot (541).png",
      captionEn: "Multi-track timeline — Elden Ring project",
      captionAr: "تايملاين متعدد الطبقات — مشروع Elden Ring",
    },
    {
      src: "images/Screenshot (543).png",
      captionEn: "3D composition built in Fusion",
      captionAr: "مشهد ثلاثي الأبعاد مبني داخل Fusion",
    },
    {
      src: "images/Screenshot (848).png",
      captionEn: "Motion graphics for the showreel in Fusion",
      captionAr: "موشن جرافيك للشوريل داخل Fusion",
    },
  ],
};
