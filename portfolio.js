/* =====================================================================
   LEB for Video Editing — portfolio.js
   (You normally don't need to edit this file. Add videos/images in content.js)
   ===================================================================== */

(() => {
  "use strict";

  /* ------------------------------------------------------------------
     1. Translations
     ------------------------------------------------------------------ */
  const translations = {
    en: {
      pageTitle: "LEB for Video Editing",
      "a11y.skip": "Skip to content",
      "aria.brandHome": "LEB for Video Editing home",
      "aria.primaryNav": "Primary navigation",
      "aria.mobileNav": "Mobile navigation",
      "aria.closeVideo": "Close video",
      "aria.closeImage": "Close image preview",
      "aria.imagePreview": "Image preview",
      "aria.prevImage": "Previous image",
      "aria.nextImage": "Next image",
      "aria.switchToArabic": "Translate page to Arabic",
      "aria.switchToEnglish": "Switch page to English",
      "aria.menuOpen": "Open navigation menu",
      "aria.menuClose": "Close navigation menu",
      "aria.filterVideos": "Filter videos",
      "aria.copyEmail": "Copy email address",
      "brand.name": "LEB for Video Editing",
      "brand.tagline": "YouTube-focused post-production",
      "nav.home": "Home",
      "nav.work": "Work",
      "nav.skills": "Skills",
      "nav.highlights": "Highlights",
      "nav.contact": "Contact",
      "actions.bookEdit": "Book a Service",
      "actions.startProject": "Start a Project",
      "actions.seeWork": "See My Work",
      "actions.playVideo": "Play Video",
      "actions.watch": "Watch",
      "actions.openYoutube": "Open on YouTube",
      "actions.whatsapp": "Message on WhatsApp",
      "actions.backTop": "Back to Top",
      "hero.eyebrow": "Professional Video Editor",
      "hero.title": "Editing built for attention.",
      "hero.copy1":
        "Hi, I'm Ibrahim Omar. I help YouTube creators turn raw footage into polished, audience-retaining videos with strong pacing, cinematic transitions, clean sound, and color that feels intentional from the first frame to the last.",
      "hero.copy2":
        "I work in DaVinci Resolve Studio and focus on edits that feel dynamic, smooth, and visually clear whether the content is reaction-based, gaming-heavy, or built around storytelling.",
      "hero.yearsUnit": "years",
      "hero.meta1Label": "Hands-on DaVinci Resolve workflow",
      "hero.meta2Value": "2 to 3 days",
      "hero.meta2Label": "Typical delivery speed for quality edits",
      "hero.meta3Value": "Remote worldwide",
      "hero.meta3Label": "Based in Cairo, working with creators globally",
      "hero.showreelBadge": "Showreel",
      "showcase.heading": "Creative snapshots",
      "showcase.gallery1Title": "Studio frame",
      "showcase.gallery1Text": "Visual direction that supports the editing brand.",
      "showcase.gallery2Title": "Creative workflow",
      "showcase.gallery2Text": "Detail-focused editing supported by clean motion and finish work.",
      "showcase.gallery3Title": "Final polish",
      "showcase.gallery3Text": "Strong presentation across pacing, color, and overall feel.",
      "work.eyebrow": "Selected Work",
      "work.title": "Recent edits, ready to watch.",
      "work.copy": "Tap any video to play it right here. New projects are added regularly.",
      "work.empty": "New videos are on the way — check back soon.",
      "work.new": "New",
      "filters.all": "All",
      "cat.gaming": "Gaming",
      "cat.reaction": "Reaction",
      "cat.motion": "Motion graphics",
      "cat.story": "Storytelling",
      "cat.shorts": "Shorts",
      "cat.promo": "Promo / SaaS",
      "cat.other": "Edit",
      "value.eyebrow": "What You Get",
      "value.title": "Professional polish without losing energy.",
      "value.copy": "Every edit is built around one goal: keeping viewers watching until the very last second.",
      "stats.focusLabel": "Editing Focus",
      "stats.focusValue": "YT",
      "stats.focusText": "YouTube content shaped around retention, pacing, and cleaner storytelling.",
      "stats.softwareLabel": "Software",
      "stats.softwareValue": "DRS",
      "stats.softwareText": "Built around DaVinci Resolve Studio for professional control in one pipeline.",
      "stats.workflowLabel": "Workflow",
      "stats.workflowValue": "FX",
      "stats.workflowText": "Motion graphics, masking, sound design, and grading all working together.",
      "stats.responseLabel": "Response",
      "stats.responseValue": "Fast",
      "stats.responseText": "Quick communication and turnaround so creators can stay consistent.",
      "frames.eyebrow": "Behind the Edit",
      "frames.title": "Real timelines, nodes and grades.",
      "frames.copy": "Screenshots straight from real projects in DaVinci Resolve. Tap any frame to take a closer look.",
      "frames.imageAltFallback": "Portfolio frame preview",
      "skills.eyebrow": "My Skills",
      "skills.title": "Built for creators who need more than basic cuts.",
      "skills.copy": "From the first cut to the final export, every stage of post-production is handled in one place.",
      "skills.card1Tag": "Editing",
      "skills.card1Title": "Storytelling and pacing",
      "skills.card1Text": "Strong timing for reaction videos, gaming content, and personality-led YouTube formats so the edit keeps moving without losing clarity.",
      "skills.card2Tag": "Fusion",
      "skills.card2Title": "Motion graphics that add momentum",
      "skills.card2Text": "Animated titles, transitions, and custom visual effects built in Fusion to make videos feel sharper and more memorable.",
      "skills.card3Tag": "Color",
      "skills.card3Title": "Correction and grading",
      "skills.card3Text": "Balanced, stylistically consistent color work that supports the mood of the content instead of overpowering it.",
      "skills.card4Tag": "Masking",
      "skills.card4Title": "Transitions and focus effects",
      "skills.card4Text": "Clean masking for object isolation, custom transitions, and more cinematic visual emphasis inside fast-moving edits.",
      "skills.card5Tag": "Audio",
      "skills.card5Title": "Noise reduction and mix cleanup",
      "skills.card5Text": "Dialogue cleanup, voice balancing, and music integration that help the final video sound polished and easy to follow.",
      "skills.card6Tag": "Delivery",
      "skills.card6Title": "Fast turnaround with attention to detail",
      "skills.card6Text": "High-quality edits delivered in around two to three days, depending on scope, while keeping quality and communication steady.",
      "workflow.eyebrow": "Workflow",
      "workflow.title": "How a project moves from raw footage to final upload",
      "workflow.copy":
        "A strong post-production process matters because the best edits are not just flashy. They guide attention, reduce friction, and keep the viewer engaged throughout the video.",
      "workflow.step1Title": "Structure the story",
      "workflow.step1Text": "Find the best moments, tighten pacing, and shape the flow for YouTube viewing habits.",
      "workflow.step2Title": "Add motion and emphasis",
      "workflow.step2Text": "Use text, transitions, and effects where they improve energy and understanding.",
      "workflow.step3Title": "Polish picture and sound",
      "workflow.step3Text": "Balance audio, clean noise, and finish the grade so the whole video feels complete.",
      "impact.eyebrow": "Why It Matters",
      "impact.title": "Better editing creates a better channel experience.",
      "impact.copy":
        "Strong editing improves retention, sharpens the creator's brand, and helps each upload feel more complete from the first click to the final second.",
      "impact.point1": "Boost watch time and retention with cleaner pacing and stronger hooks.",
      "impact.point2": "Stand out visually through motion graphics, cohesive grading, and sharp transitions.",
      "impact.point3": "Save time as a creator by handing off the post-production process.",
      "impact.point4": "Publish content that feels more professional, shareable, and brand-consistent.",
      "highlights.eyebrow": "Highlights",
      "highlights.title": "What the service is designed to improve.",
      "highlights.copy": "Not just a list of editing features — the real impact they have on your channel.",
      "highlights.card1Label": "Project Highlights",
      "highlights.card1Title": "Editing that matches format and audience",
      "highlights.card1Text": "From reaction videos to gaming content, each project is cut to fit the creator's tone while staying visually engaging and easy to watch.",
      "highlights.card1Point1": "Custom pacing for different YouTube niches",
      "highlights.card1Point2": "Fusion graphics and animated text",
      "highlights.card1Point3": "Masking-based cinematic transitions",
      "highlights.card2Label": "Final Outcome",
      "highlights.card2Title": "Finished videos that feel complete and polished",
      "highlights.card2Text": "Audio cleanup, color finishing, and sharper storytelling all work toward a simple goal: content that looks professional and keeps people watching.",
      "highlights.card2Point1": "Cleaner audio with stronger voice clarity",
      "highlights.card2Point2": "Color correction and grading for consistency",
      "highlights.card2Point3": "Edits shaped around retention and repeat viewing",
      "contact.eyebrow": "Contact",
      "contact.title": "Let's create something strong together.",
      "contact.copy":
        "Whether you need fast-paced YouTube edits, cinematic storytelling, or a cleaner sound and color finish, send a message and let's talk about your next video.",
      "contact.locationLabel": "Location",
      "contact.locationText": "Cairo, Egypt",
      "contact.locationValue": "Working remotely worldwide",
      "contact.languagesLabel": "Languages",
      "contact.languagesText": "Arabic and English",
      "contact.languagesValue": "Fast communication",
      "contact.whatsappLabel": "WhatsApp",
      "contact.whatsappText": "Preferred for project inquiries",
      "contact.emailLabel": "Email",
      "contact.emailText": "Direct project communication",
      "contact.instagramLabel": "Instagram",
      "contact.instagramText": "Recent updates and profile access",
      "contact.instagramValue": "Open Instagram",
      "availability.eyebrow": "Availability",
      "availability.item1Title": "Freelance editing projects",
      "availability.item1Text": "For creators who want a reliable editor handling the full post-production flow.",
      "availability.item2Title": "YouTube collaborations",
      "availability.item2Text": "For channels that need a consistent editing style across recurring uploads.",
      "availability.item3Title": "Post-production support",
      "availability.item3Text": "Color grading, sound cleanup, motion graphics, and overall visual polish.",
      "cta.eyebrow": "Ready When You Are",
      "cta.title": "Turn raw footage into videos people finish.",
      "cta.copy": "Send your footage and the style you have in mind — I'll handle the rest and keep you updated at every step.",
      "footer.name": "LEB for Video Editing",
      "footer.rights": "All rights reserved",
      "modal.videoTitle": "Video Preview",
      "modal.playerTitle": "Video player",
      "toast.copied": "Email copied to clipboard",
      "toast.copyFailed": "Couldn't copy — long-press the email instead",
    },
    ar: {
      pageTitle: "LEB لتحرير الفيديو",
      "a11y.skip": "تخطَّ إلى المحتوى",
      "aria.brandHome": "العودة إلى الصفحة الرئيسية لـ LEB لتحرير الفيديو",
      "aria.primaryNav": "التنقل الرئيسي",
      "aria.mobileNav": "قائمة التنقل",
      "aria.closeVideo": "إغلاق الفيديو",
      "aria.closeImage": "إغلاق معاينة الصورة",
      "aria.imagePreview": "معاينة الصورة",
      "aria.prevImage": "الصورة السابقة",
      "aria.nextImage": "الصورة التالية",
      "aria.switchToArabic": "ترجمة الصفحة إلى العربية",
      "aria.switchToEnglish": "التبديل إلى الإنجليزية",
      "aria.menuOpen": "فتح قائمة التنقل",
      "aria.menuClose": "إغلاق قائمة التنقل",
      "aria.filterVideos": "تصفية الفيديوهات",
      "aria.copyEmail": "نسخ البريد الإلكتروني",
      "brand.name": "LEB لتحرير الفيديو",
      "brand.tagline": "خدمات ما بعد الإنتاج الموجهة لليوتيوب",
      "nav.home": "الرئيسية",
      "nav.work": "أعمالي",
      "nav.skills": "المهارات",
      "nav.highlights": "أبرز النقاط",
      "nav.contact": "التواصل",
      "actions.bookEdit": "احجز خدمة",
      "actions.startProject": "ابدأ مشروعك",
      "actions.seeWork": "شاهد أعمالي",
      "actions.playVideo": "تشغيل الفيديو",
      "actions.watch": "شاهد",
      "actions.openYoutube": "فتح على YouTube",
      "actions.whatsapp": "راسلني على واتساب",
      "actions.backTop": "العودة للأعلى",
      "hero.eyebrow": "مونتير فيديو محترف",
      "hero.title": "مونتاج مصمم لخطف الانتباه.",
      "hero.copy1":
        "مرحبًا، أنا إبراهيم عمر. أساعد صناع المحتوى على يوتيوب في تحويل اللقطات الخام إلى فيديوهات مصقولة تحافظ على انتباه المشاهد، بإيقاع قوي، وانتقالات سينمائية، وصوت نظيف، وألوان مقصودة من أول ثانية إلى آخر لقطة.",
      "hero.copy2":
        "أعمل على DaVinci Resolve Studio، وأركز على مونتاج ديناميكي وسلس وواضح بصريًا، سواء كان المحتوى تفاعليًا، أو قائمًا على الألعاب، أو مبنيًا على السرد.",
      "hero.yearsUnit": "سنوات",
      "hero.meta1Label": "خبرة عملية داخل DaVinci Resolve",
      "hero.meta2Value": "من يومين إلى 3 أيام",
      "hero.meta2Label": "سرعة تسليم معتادة لمونتاج متقن",
      "hero.meta3Value": "عن بُعد حول العالم",
      "hero.meta3Label": "أعمل من القاهرة مع صناع محتوى في مختلف الدول",
      "hero.showreelBadge": "الشوريل",
      "showcase.heading": "لقطات إبداعية",
      "showcase.gallery1Title": "لقطة استوديو",
      "showcase.gallery1Text": "اتجاه بصري يدعم هوية المونتاج ويقوي الانطباع.",
      "showcase.gallery2Title": "سير عمل إبداعي",
      "showcase.gallery2Text": "تركيز على التفاصيل مع حركة نظيفة ولمسات نهائية متقنة.",
      "showcase.gallery3Title": "اللمسة الأخيرة",
      "showcase.gallery3Text": "حضور بصري قوي في الإيقاع، والألوان، والإحساس العام.",
      "work.eyebrow": "أعمال مختارة",
      "work.title": "أحدث المونتاجات، جاهزة للمشاهدة.",
      "work.copy": "اضغط على أي فيديو لتشغيله هنا مباشرة. تتم إضافة مشاريع جديدة باستمرار.",
      "work.empty": "فيديوهات جديدة في الطريق — عُد قريبًا.",
      "work.new": "جديد",
      "filters.all": "الكل",
      "cat.gaming": "ألعاب",
      "cat.reaction": "رياكشن",
      "cat.motion": "موشن جرافيك",
      "cat.story": "سرد قصصي",
      "cat.shorts": "فيديوهات قصيرة",
      "cat.promo": "إعلانات / SaaS",
      "cat.other": "مونتاج",
      "value.eyebrow": "ما الذي تحصل عليه",
      "value.title": "مستوى احترافي من دون أن يفقد الفيديو طاقته.",
      "value.copy": "كل مونتاج مبني حول هدف واحد: أن يكمل المشاهد الفيديو حتى آخر ثانية.",
      "stats.focusLabel": "تركيز المونتاج",
      "stats.focusValue": "يوتيوب",
      "stats.focusText": "محتوى يوتيوب مبني على الاحتفاظ بالمشاهد، والإيقاع، وسرد أوضح.",
      "stats.softwareLabel": "البرنامج",
      "stats.softwareValue": "دافنشي",
      "stats.softwareText": "العمل يتم داخل DaVinci Resolve Studio لتحكم احترافي ضمن خط إنتاج واحد.",
      "stats.workflowLabel": "الأسلوب",
      "stats.workflowValue": "مؤثرات",
      "stats.workflowText": "موشن جرافيك، وماسكينغ، وتصميم صوت، وتلوين يعملون معًا داخل نفس الرؤية.",
      "stats.responseLabel": "الاستجابة",
      "stats.responseValue": "سريع",
      "stats.responseText": "تواصل سريع وتسليم مرن حتى تبقى القناة مستمرة ومنتظمة.",
      "frames.eyebrow": "كواليس المونتاج",
      "frames.title": "تايملاين ونودز وتلوين حقيقي.",
      "frames.copy": "لقطات شاشة مباشرة من مشاريع حقيقية على DaVinci Resolve. اضغط على أي صورة لتشاهدها بحجم أكبر.",
      "frames.imageAltFallback": "معاينة لقطة من الأعمال",
      "skills.eyebrow": "مهاراتي",
      "skills.title": "مخصص لصناع المحتوى الذين يحتاجون أكثر من قصات أساسية.",
      "skills.copy": "من أول قصة إلى التصدير النهائي، كل مراحل ما بعد الإنتاج في مكان واحد.",
      "skills.card1Tag": "المونتاج",
      "skills.card1Title": "السرد والإيقاع",
      "skills.card1Text": "توقيت قوي لفيديوهات الرياكشن، والألعاب، والمحتوى القائم على الشخصية حتى يبقى الفيديو متحركًا وواضحًا في الوقت نفسه.",
      "skills.card2Tag": "Fusion",
      "skills.card2Title": "موشن جرافيك يزيد الزخم",
      "skills.card2Text": "عناوين متحركة، وانتقالات، ومؤثرات مخصصة داخل Fusion تجعل الفيديو أكثر حدة وثباتًا في الذاكرة.",
      "skills.card3Tag": "الألوان",
      "skills.card3Title": "تصحيح وتلوين",
      "skills.card3Text": "معالجة لونية متوازنة ومتسقة تدعم مزاج المحتوى بدل أن تطغى عليه.",
      "skills.card4Tag": "الماسكينغ",
      "skills.card4Title": "انتقالات وتأثيرات تركيز",
      "skills.card4Text": "عزل نظيف للعناصر، وانتقالات مخصصة، وتركيز سينمائي داخل المونتاج السريع.",
      "skills.card5Tag": "الصوت",
      "skills.card5Title": "تنظيف الضوضاء وتحسين المكس",
      "skills.card5Text": "تنظيف الحوار، وضبط التوازن، ودمج الموسيقى بطريقة تجعل النتيجة أكثر وضوحًا واحترافية.",
      "skills.card6Tag": "التسليم",
      "skills.card6Title": "سرعة في التنفيذ مع اهتمام بالتفاصيل",
      "skills.card6Text": "مونتاج عالي الجودة خلال يومين إلى ثلاثة تقريبًا بحسب حجم المشروع، مع ثبات في الجودة والتواصل.",
      "workflow.eyebrow": "سير العمل",
      "workflow.title": "كيف ينتقل المشروع من اللقطات الخام إلى نسخة جاهزة للنشر",
      "workflow.copy":
        "مرحلة ما بعد الإنتاج القوية مهمة لأن أفضل المونتاجات ليست مجرد مؤثرات لافتة، بل توجه الانتباه، وتقلل التشتيت، وتحافظ على تفاعل المشاهد حتى النهاية.",
      "workflow.step1Title": "بناء القصة",
      "workflow.step1Text": "أختار أفضل اللحظات، وأشد الإيقاع، وأشكل التدفق بما يناسب عادات مشاهدة يوتيوب.",
      "workflow.step2Title": "إضافة الحركة والتركيز",
      "workflow.step2Text": "أستخدم النصوص، والانتقالات، والمؤثرات فقط حين تخدم الطاقة والفهم.",
      "workflow.step3Title": "صقل الصورة والصوت",
      "workflow.step3Text": "أوازن الصوت، وأنظف الضوضاء، وأنهي التلوين حتى يبدو الفيديو مكتملاً.",
      "impact.eyebrow": "لماذا يهم ذلك",
      "impact.title": "المونتاج الأفضل يصنع تجربة قناة أفضل.",
      "impact.copy":
        "المونتاج القوي يرفع الاحتفاظ بالمشاهد، ويقوي هوية القناة، ويجعل كل فيديو يبدو أكثر اكتمالًا من أول نقرة إلى آخر ثانية.",
      "impact.point1": "ارفع مدة المشاهدة والاحتفاظ بالمشاهد بإيقاع أنظف وبدايات أقوى.",
      "impact.point2": "تميّز بصريًا عبر الموشن جرافيك، وتلوين متماسك، وانتقالات حادة.",
      "impact.point3": "وفّر وقتك كصانع محتوى عبر تسليم ما بعد الإنتاج بالكامل.",
      "impact.point4": "انشر محتوى يبدو أكثر احترافية وقابلية للمشاركة واتساقًا مع الهوية.",
      "highlights.eyebrow": "أبرز النقاط",
      "highlights.title": "ما الذي صُممت الخدمة لتحسينه.",
      "highlights.copy": "ليست مجرد قائمة بخصائص المونتاج — بل الأثر الحقيقي الذي تصنعه على قناتك.",
      "highlights.card1Label": "ملامح المشروع",
      "highlights.card1Title": "مونتاج يناسب نوع المحتوى والجمهور",
      "highlights.card1Text": "من فيديوهات الرياكشن إلى محتوى الألعاب، يتم قص كل مشروع ليتماشى مع نبرة صانع المحتوى ويظل جذابًا وواضحًا للمشاهدة.",
      "highlights.card1Point1": "إيقاع مخصص لأنواع المحتوى المختلفة على يوتيوب",
      "highlights.card1Point2": "رسوم Fusion ونصوص متحركة",
      "highlights.card1Point3": "انتقالات سينمائية مبنية على الماسكينغ",
      "highlights.card2Label": "النتيجة النهائية",
      "highlights.card2Title": "فيديوهات مكتملة وتشعر بأنها مصقولة",
      "highlights.card2Text": "تنظيف الصوت، والإنهاء اللوني، والسرد الأوضح كلها تعمل لهدف بسيط: محتوى يبدو احترافيًا ويجعل الناس يكملون المشاهدة.",
      "highlights.card2Point1": "صوت أنظف مع وضوح أقوى للصوت البشري",
      "highlights.card2Point2": "تصحيح لوني وتلوين يمنحان اتساقًا بصريًا",
      "highlights.card2Point3": "مونتاج مبني على الاحتفاظ بالمشاهد والعودة للمشاهدة",
      "contact.eyebrow": "التواصل",
      "contact.title": "لنصنع شيئًا قويًا معًا.",
      "contact.copy":
        "سواء كنت تحتاج إلى مونتاج سريع لليوتيوب، أو سرد سينمائي، أو تحسين أوضح للصوت والألوان، راسلني ولنتحدث عن فيديوك القادم.",
      "contact.locationLabel": "الموقع",
      "contact.locationText": "القاهرة، مصر",
      "contact.locationValue": "أعمل عن بُعد مع عملاء حول العالم",
      "contact.languagesLabel": "اللغات",
      "contact.languagesText": "العربية والإنجليزية",
      "contact.languagesValue": "تواصل سريع",
      "contact.whatsappLabel": "واتساب",
      "contact.whatsappText": "الخيار المفضل لاستفسارات المشاريع",
      "contact.emailLabel": "البريد الإلكتروني",
      "contact.emailText": "للتواصل المباشر حول المشاريع",
      "contact.instagramLabel": "إنستغرام",
      "contact.instagramText": "آخر التحديثات والوصول إلى الحساب",
      "contact.instagramValue": "فتح إنستغرام",
      "availability.eyebrow": "التوفر",
      "availability.item1Title": "مشاريع مونتاج حرة",
      "availability.item1Text": "لصناع المحتوى الذين يريدون مونتيرًا يعتمد عليه لإدارة مرحلة ما بعد الإنتاج بالكامل.",
      "availability.item2Title": "تعاونات يوتيوب",
      "availability.item2Text": "للقنوات التي تحتاج إلى أسلوب مونتاج ثابت عبر رفعاتها المتكررة.",
      "availability.item3Title": "دعم ما بعد الإنتاج",
      "availability.item3Text": "تلوين، وتنظيف صوت، وموشن جرافيك، ولمسة بصرية نهائية.",
      "cta.eyebrow": "جاهز عندما تكون جاهزًا",
      "cta.title": "حوّل اللقطات الخام إلى فيديوهات يكملها الناس حتى النهاية.",
      "cta.copy": "أرسل لقطاتك والأسلوب اللي في بالك — وأنا أتولى الباقي وأبقيك على اطلاع في كل خطوة.",
      "footer.name": "LEB لتحرير الفيديو",
      "footer.rights": "جميع الحقوق محفوظة",
      "modal.videoTitle": "معاينة الفيديو",
      "modal.playerTitle": "مشغل الفيديو",
      "toast.copied": "تم نسخ البريد الإلكتروني",
      "toast.copyFailed": "تعذر النسخ — اضغط مطولًا على البريد بدلًا من ذلك",
    },
  };

  const CATEGORY_ICONS = {
    gaming: "i-gamepad",
    reaction: "i-smile",
    motion: "i-wand",
    story: "i-book",
    shorts: "i-phone",
    promo: "i-megaphone",
    other: "i-film",
  };

  /* ------------------------------------------------------------------
     2. Helpers
     ------------------------------------------------------------------ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const html = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const content = window.PORTFOLIO_CONTENT || { videos: [], frames: [] };

  let lang = "en";

  const t = (key) => translations[lang][key] ?? translations.en[key] ?? "";

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const icon = (name, cls = "") => `<svg class="ic ${cls}" aria-hidden="true"><use href="#${name}"/></svg>`;

  /** Bilingual field from content.js: picks titleAr / titleEn with fallback. */
  const pick = (item, field) => {
    if (!item) return "";
    const ar = item[field + "Ar"];
    const en = item[field + "En"] ?? item[field];
    return lang === "ar" ? ar || en || "" : en || ar || "";
  };

  /** Accepts any YouTube URL format or a bare 11-char ID. */
  function parseYouTube(input) {
    const raw = String(input || "").trim();
    if (!raw) return null;
    if (/^[\w-]{11}$/.test(raw)) return { id: raw, vertical: false };
    const patterns = [
      /youtube\.com\/shorts\/([\w-]{11})/,
      /youtu\.be\/([\w-]{11})/,
      /[?&]v=([\w-]{11})/,
      /youtube(?:-nocookie)?\.com\/(?:embed|live|v)\/([\w-]{11})/,
    ];
    for (const re of patterns) {
      const m = raw.match(re);
      if (m) return { id: m[1], vertical: /\/shorts\//.test(raw) };
    }
    console.warn("[content.js] Could not read this YouTube link:", raw);
    return null;
  }

  /** <img> with maxres → hq fallback (maxres doesn't exist for every video). */
  function thumbImg(item, yt, eager = false) {
    if (item.thumbnail) {
      return `<img src="${esc(item.thumbnail)}" alt="" ${eager ? "" : 'loading="lazy"'} decoding="async" />`;
    }
    return `<img src="https://i.ytimg.com/vi/${yt.id}/maxresdefault.jpg" data-fallback="https://i.ytimg.com/vi/${yt.id}/hqdefault.jpg" alt="" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />`;
  }

  function wireThumbFallbacks(root) {
    $$("img[data-fallback]", root).forEach((img) => {
      const swap = () => {
        if (img.dataset.fallback && img.src !== img.dataset.fallback) {
          img.src = img.dataset.fallback;
          img.removeAttribute("data-fallback");
        }
      };
      img.addEventListener("error", swap, { once: true });
      // YouTube returns a 120×90 grey placeholder (not an error) when maxres is missing
      const check = () => img.naturalWidth > 0 && img.naturalWidth <= 120 && swap();
      if (img.complete) check();
      else img.addEventListener("load", check, { once: true });
    });
  }

  let toastTimer;
  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.innerHTML = icon("i-check") + `<span>${esc(message)}</span>`;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2400);
  }

  /* ------------------------------------------------------------------
     3. Render content from content.js
     ------------------------------------------------------------------ */
  const videoItems = (content.videos || [])
    .map((v) => ({ ...v, yt: parseYouTube(v.youtube) }))
    .filter((v) => v.yt || v.thumbnail);
  videoItems.forEach((v) => {
    if (!CATEGORY_ICONS[v.category]) v.category = v.yt?.vertical ? "shorts" : "other";
  });
  let activeFilter = "all";

  function renderShowreel() {
    const box = $("#showreel");
    const item = content.showreel;
    const yt = item && parseYouTube(item.youtube);
    if (!box) return;
    if (!yt) {
      box.hidden = true;
      return;
    }
    box.innerHTML = `
      <button class="thumb" type="button" data-play="${yt.id}" data-vertical="${yt.vertical}" data-title-key="showreel">
        ${thumbImg(item, yt, true)}
        <span class="showreel-badge"><span class="live-dot" aria-hidden="true"></span>${esc(t("hero.showreelBadge"))}</span>
        <span class="play-button">${icon("i-play")}</span>
        <span class="thumb-caption">
          <strong>${esc(pick(item, "title"))}</strong>
          <span>${esc(pick(item, "desc"))}</span>
        </span>
      </button>
      <div class="showreel-actions">
        <button class="button" type="button" data-play="${yt.id}" data-vertical="${yt.vertical}" data-title-key="showreel">
          ${icon("i-play")}<span>${esc(t("actions.playVideo"))}</span>
        </button>
        <a class="button-secondary" href="https://www.youtube.com/watch?v=${yt.id}" target="_blank" rel="noopener">
          ${icon("i-youtube")}<span>${esc(t("actions.openYoutube"))}</span>
        </a>
      </div>`;
    wireThumbFallbacks(box);
  }

  function renderFilters() {
    const bar = $("#video-filters");
    if (!bar) return;
    const counts = videoItems.reduce((acc, v) => ((acc[v.category] = (acc[v.category] || 0) + 1), acc), {});
    const cats = Object.keys(CATEGORY_ICONS).filter((c) => counts[c]);
    if (cats.length < 2) {
      bar.hidden = true;
      activeFilter = "all";
      return;
    }
    bar.hidden = false;
    const chip = (key, label, iconName, count) => `
      <button class="filter-chip" type="button" data-filter="${key}" aria-pressed="${activeFilter === key}">
        ${icon(iconName)}<span>${esc(label)}</span><span class="count">${count}</span>
      </button>`;
    bar.innerHTML =
      chip("all", t("filters.all"), "i-grid", videoItems.length) +
      cats.map((c) => chip(c, t("cat." + c), CATEGORY_ICONS[c], counts[c])).join("");
  }

  function renderVideos() {
    const grid = $("#video-grid");
    if (!grid) return;
    if (!videoItems.length) {
      grid.innerHTML = `<div class="empty-state">${icon("i-film")}<p>${esc(t("work.empty"))}</p></div>`;
      return;
    }
    grid.classList.toggle("is-single", videoItems.length === 1);
    grid.classList.toggle("is-few", videoItems.length > 1 && videoItems.length <= 3);
    grid.innerHTML = videoItems
      .map((v, i) => {
        const id = v.yt ? v.yt.id : "";
        const ytLink = id ? `https://www.youtube.com/watch?v=${id}` : "";
        const hidden = activeFilter !== "all" && v.category !== activeFilter;
        return `
        <article class="video-card card reveal${hidden ? " is-hidden" : ""}" data-category="${v.category}" data-tilt>
          <button class="thumb" type="button" data-play="${id}" data-vertical="${!!v.yt?.vertical}" data-index="${i}" aria-label="${esc(t("actions.playVideo"))}: ${esc(pick(v, "title"))}">
            ${thumbImg(v, v.yt || {})}
            <span class="thumb-tags">
              <span class="thumb-tag">${icon(CATEGORY_ICONS[v.category])}${esc(t("cat." + v.category))}</span>
              ${v.isNew ? `<span class="thumb-tag is-new">${icon("i-sparkles")}${esc(t("work.new"))}</span>` : ""}
            </span>
            <span class="play-button">${icon("i-play")}</span>
          </button>
          <div class="video-card-body">
            <h3>${esc(pick(v, "title"))}</h3>
            ${pick(v, "desc") ? `<p>${esc(pick(v, "desc"))}</p>` : ""}
          </div>
          <div class="video-card-foot">
            <button class="video-trigger" type="button" data-play="${id}" data-vertical="${!!v.yt?.vertical}" data-index="${i}">
              ${icon("i-play")}<span>${esc(t("actions.watch"))}</span>
            </button>
            ${ytLink ? `<a class="icon-button" href="${ytLink}" target="_blank" rel="noopener" aria-label="${esc(t("actions.openYoutube"))}">${icon("i-youtube")}</a>` : ""}
          </div>
        </article>`;
      })
      .join("");
    wireThumbFallbacks(grid);
    enhanceCards(grid);
    observeReveal(grid);
  }

  function applyFilter(filter) {
    activeFilter = filter;
    $$("#video-filters .filter-chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.filter === filter)));
    $$("#video-grid .video-card").forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !show);
      if (show) {
        card.classList.remove("is-entering");
        void card.offsetWidth;
        card.classList.add("is-entering", "is-visible");
      }
    });
  }

  function renderFrames() {
    const gallery = $("#media-gallery");
    if (!gallery) return;
    const frames = (content.frames || []).map((f) => (typeof f === "string" ? { src: f } : f));
    const section = $("#frames");
    if (!frames.length) {
      if (section) section.hidden = true;
      return;
    }
    gallery.innerHTML = frames
      .map((f, i) => {
        const caption = pick(f, "caption");
        return `
        <button class="media-photo reveal" type="button" data-frame="${i}" aria-label="${esc(caption || t("frames.imageAltFallback"))}">
          <img src="${esc(f.src)}" alt="" loading="lazy" decoding="async" />
          <span class="media-photo-caption"><span>${esc(caption)}</span>${icon("i-zoom")}</span>
        </button>`;
      })
      .join("");
    observeReveal(gallery);
  }

  /* ------------------------------------------------------------------
     4. Language
     ------------------------------------------------------------------ */
  function applyLanguage(next, { persist = true } = {}) {
    lang = next === "ar" ? "ar" : "en";
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("pageTitle");

    $$("[data-i18n]").forEach((node) => {
      const value = t(node.dataset.i18n);
      if (value) node.textContent = value;
    });
    $$("[data-i18n-aria-label]").forEach((node) => {
      const value = t(node.dataset.i18nAriaLabel);
      if (value) node.setAttribute("aria-label", value);
    });

    const langBtn = $("#lang-toggle");
    $("#lang-toggle-label").textContent = lang === "ar" ? "EN" : "عربي";
    const label = t(lang === "ar" ? "aria.switchToEnglish" : "aria.switchToArabic");
    langBtn.setAttribute("aria-label", label);
    langBtn.title = label;
    $("#video-modal-frame").title = t("modal.playerTitle");
    syncMenuLabel();

    renderShowreel();
    renderFilters();
    renderVideos();
    renderFrames();
    if (lightbox.isOpen()) lightbox.show(lightbox.index);

    if (persist) {
      try {
        localStorage.setItem("leb-lang", lang);
      } catch (_) {}
    }
  }

  function initialLanguage() {
    const param = new URLSearchParams(location.search).get("lang");
    if (param === "ar" || param === "en") return param;
    try {
      const saved = localStorage.getItem("leb-lang");
      if (saved) return saved;
    } catch (_) {}
    return (navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en";
  }

  /* ------------------------------------------------------------------
     5. Header, menu, scroll UI
     ------------------------------------------------------------------ */
  const topbar = $("#topbar");
  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");

  function syncMenuLabel() {
    const open = topbar.classList.contains("menu-open");
    menuToggle.setAttribute("aria-label", t(open ? "aria.menuClose" : "aria.menuOpen"));
  }

  function setMenu(open) {
    topbar.classList.toggle("menu-open", open);
    mobileMenu.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    syncMenuLabel();
  }

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    setMenu(!topbar.classList.contains("menu-open"));
  });

  $$("#mobile-menu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  document.addEventListener("click", (e) => {
    if (topbar.classList.contains("menu-open") && !topbar.contains(e.target)) setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && topbar.classList.contains("menu-open")) setMenu(false);
  });

  const progress = $("#scroll-progress");
  const backTop = $("#back-to-top");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      topbar.classList.toggle("is-scrolled", y > 12);
      backTop.classList.toggle("is-visible", y > window.innerHeight * 0.8);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  // active nav link
  const navLinks = $$(".nav a, .mobile-nav a");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  ["home", "work", "skills", "highlights", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });

  /* ------------------------------------------------------------------
     6. Reveal on scroll (with stagger inside grids)
     ------------------------------------------------------------------ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );

  function observeReveal(root = document) {
    $$(".reveal:not(.is-visible)", root).forEach((el) => {
      const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"));
      const i = siblings.indexOf(el);
      el.style.setProperty("--d", `${Math.min(i, 6) * 0.07}s`);
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     7. Cards: cursor spotlight + 3D tilt
     ------------------------------------------------------------------ */
  function enhanceCards(root = document) {
    $$(".card, .media-photo", root).forEach((card) => {
      if (card.dataset.spot !== undefined) return;
      card.dataset.spot = "";
      const spot = document.createElement("span");
      spot.className = "spot";
      spot.setAttribute("aria-hidden", "true");
      card.prepend(spot);

      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        if (finePointer && !reduceMotion && card.hasAttribute("data-tilt")) {
          card.classList.add("is-tilting");
          card.style.setProperty("--ry", `${((x / r.width) - 0.5) * 8}deg`);
          card.style.setProperty("--rx", `${(0.5 - y / r.height) * 8}deg`);
        }
      });
      card.addEventListener("pointerleave", () => {
        card.classList.remove("is-tilting");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ------------------------------------------------------------------
     8. Modals (video + image lightbox) with focus trap
     ------------------------------------------------------------------ */
  let lastFocus = null;

  function trapFocus(modal, e) {
    if (e.key !== "Tab") return;
    const focusables = $$('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])', modal).filter(
      (el) => el.offsetParent !== null
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function openModal(modal) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    body.classList.add("modal-open");
    requestAnimationFrame(() => modal.classList.add("is-open"));
    setTimeout(() => $("[data-close]", modal)?.focus({ preventScroll: true }), 50);
  }

  function closeModal(modal, after) {
    modal.classList.remove("is-open");
    setTimeout(() => {
      modal.hidden = true;
      if (!$$(".modal").some((m) => !m.hidden)) body.classList.remove("modal-open");
      after?.();
      lastFocus?.focus?.({ preventScroll: true });
    }, reduceMotion ? 0 : 230);
  }

  // --- video
  const videoModal = $("#video-modal");
  const videoFrame = $("#video-modal-frame");
  const videoWrap = $("#video-frame-wrap");

  function openVideo(id, vertical, title) {
    if (!id) return;
    videoFrame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    videoWrap.classList.toggle("is-vertical", vertical);
    $("#video-modal-title").textContent = title || t("modal.videoTitle");
    $("#video-modal-yt").href = vertical ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`;
    openModal(videoModal);
  }

  function closeVideo() {
    closeModal(videoModal, () => (videoFrame.src = "about:blank"));
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-play]");
    if (!trigger) return;
    let title = "";
    if (trigger.dataset.titleKey === "showreel") title = pick(content.showreel, "title");
    else if (trigger.dataset.index) title = pick(videoItems[+trigger.dataset.index], "title");
    openVideo(trigger.dataset.play, trigger.dataset.vertical === "true", title);
  });

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal || e.target.closest("[data-close]")) closeVideo();
  });

  // --- lightbox
  const imageModal = $("#image-modal");
  const lightbox = {
    index: 0,
    frames: () => (content.frames || []).map((f) => (typeof f === "string" ? { src: f } : f)),
    isOpen: () => !imageModal.hidden,
    show(i) {
      const frames = this.frames();
      if (!frames.length) return;
      this.index = (i + frames.length) % frames.length;
      const f = frames[this.index];
      const img = $("#image-modal-image");
      img.src = f.src;
      img.alt = pick(f, "caption") || t("frames.imageAltFallback");
      $("#lightbox-caption").textContent = pick(f, "caption");
      $("#lightbox-count").textContent = `${this.index + 1} / ${frames.length}`;
      const multi = frames.length > 1;
      $("#lightbox-prev").hidden = !multi;
      $("#lightbox-next").hidden = !multi;
    },
    open(i) {
      this.show(i);
      openModal(imageModal);
    },
    close() {
      closeModal(imageModal, () => ($("#image-modal-image").src = ""));
    },
  };

  document.addEventListener("click", (e) => {
    const frame = e.target.closest("[data-frame]");
    if (frame) lightbox.open(+frame.dataset.frame);
  });

  $("#lightbox-prev").addEventListener("click", () => lightbox.show(lightbox.index - 1));
  $("#lightbox-next").addEventListener("click", () => lightbox.show(lightbox.index + 1));
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal || e.target.closest("[data-close]")) lightbox.close();
  });

  // swipe in lightbox
  let swipeX = null;
  const fig = $(".lightbox-figure");
  fig.addEventListener("pointerdown", (e) => (swipeX = e.clientX));
  fig.addEventListener("pointerup", (e) => {
    if (swipeX === null) return;
    const dx = e.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) < 40) return;
    const forward = lang === "ar" ? dx > 0 : dx < 0;
    lightbox.show(lightbox.index + (forward ? 1 : -1));
  });

  document.addEventListener("keydown", (e) => {
    if (!videoModal.hidden) {
      if (e.key === "Escape") closeVideo();
      trapFocus(videoModal, e);
      return;
    }
    if (!imageModal.hidden) {
      if (e.key === "Escape") lightbox.close();
      if (e.key === "ArrowRight") lightbox.show(lightbox.index + (lang === "ar" ? -1 : 1));
      if (e.key === "ArrowLeft") lightbox.show(lightbox.index + (lang === "ar" ? 1 : -1));
      trapFocus(imageModal, e);
      return;
    }
    if (e.key === "Escape" && topbar.classList.contains("menu-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  /* ------------------------------------------------------------------
     9. Small interactions: filters, copy email, counters, year
     ------------------------------------------------------------------ */
  $("#video-filters").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter]");
    if (chip) applyFilter(chip.dataset.filter);
  });

  $$("[data-copy]").forEach((btn) =>
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        toast(t("toast.copied"));
        btn.innerHTML = icon("i-check");
        setTimeout(() => (btn.innerHTML = icon("i-copy")), 1800);
      } catch (_) {
        toast(t("toast.copyFailed"));
      }
    })
  );

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      counterObserver.unobserve(entry.target);
      const el = entry.target;
      const target = +el.dataset.count;
      if (reduceMotion) return;
      const start = performance.now();
      const dur = 1100;
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = "0";
      requestAnimationFrame(step);
    });
  });
  $$("[data-count]").forEach((el) => counterObserver.observe(el));

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------
     10. Floating emoji background — drifts, bobs, parallaxes and
         reacts to the cursor (push away + spin + grow), bursts on click.
     ------------------------------------------------------------------ */
  function initEmojiField() {
    const field = $("#emoji-field");
    if (!field) return;

    const EMOJIS = [
      "🎬", "🎥", "📹", "🎞️", "📽️", "✂️", "🎧", "🎙️", "🎚️", "🎛️",
      "📷", "📸", "🖥️", "💻", "🖱️", "⌨️", "🔊", "🎵", "🎶", "▶️",
      "⏯️", "⏺️", "🔴", "📺", "🎮", "🎨", "🌈", "✨", "💡", "⚡",
      "🚀", "⏱️", "⏳", "📅", "✅", "📈", "🎯", "🧠", "☕", "🗂️",
      "💾", "🔥", "🌟", "💬", "👀", "🍿", "🎉", "📱",
    ];

    // far → near: smaller & blurrier at the back, bigger & sharper at the front
    const LAYERS = [
      { depth: 0.35, size: [18, 26], blur: 3.2, opacity: 0.3, drift: 0.12 },
      { depth: 0.65, size: [26, 38], blur: 1.6, opacity: 0.42, drift: 0.2 },
      { depth: 1.0, size: [36, 54], blur: 0.6, opacity: 0.55, drift: 0.3 },
    ];

    let W = 0;
    let H = 0;
    let items = [];
    const pointer = { x: -9999, y: -9999, active: false };
    const parallax = { x: 0, y: 0, tx: 0, ty: 0 };
    let lastScroll = window.scrollY;
    let rafId = 0;
    let lastT = 0;

    const rand = (a, b) => a + Math.random() * (b - a);

    function build() {
      W = window.innerWidth;
      H = window.innerHeight;
      field.textContent = "";
      items = [];
      const count = Math.max(12, Math.min(48, Math.round((W * H) / 36000)));
      const shuffled = EMOJIS.slice().sort(() => Math.random() - 0.5);
      const frag = document.createDocumentFragment();

      for (let i = 0; i < count; i++) {
        const r = Math.random();
        const layer = r < 0.4 ? LAYERS[0] : r < 0.75 ? LAYERS[1] : LAYERS[2];
        const size = rand(layer.size[0], layer.size[1]) * (W < 600 ? 0.82 : 1);
        const el = document.createElement("span");
        el.className = "emoji";
        el.textContent = shuffled[i % shuffled.length];
        el.style.fontSize = `${size}px`;
        el.style.opacity = layer.opacity;
        el.style.filter = `blur(${layer.blur}px)`;
        frag.appendChild(el);

        items.push({
          el,
          layer,
          size,
          x: rand(0, W),
          y: rand(0, H),
          vx: rand(-0.12, 0.12),
          vy: -rand(0.5, 1) * layer.drift,
          ox: 0,
          oy: 0,
          vox: 0,
          voy: 0,
          baseRot: rand(-18, 18),
          rot: 0,
          vrot: 0,
          scale: 1,
          phase: rand(0, Math.PI * 2),
          bob: rand(5, 14),
          bobSpeed: rand(0.0004, 0.0009),
        });
      }
      items.forEach((it) => (it.rot = it.baseRot));
      field.appendChild(frag);
      if (reduceMotion) renderStatic();
    }

    function renderStatic() {
      items.forEach((it) => {
        it.el.style.transform = `translate3d(${it.x}px, ${it.y}px, 0) rotate(${it.baseRot}deg)`;
      });
    }

    function frame(now) {
      const dt = Math.min(3, lastT ? (now - lastT) / 16.67 : 1);
      lastT = now;

      parallax.x += (parallax.tx - parallax.x) * 0.05 * dt;
      parallax.y += (parallax.ty - parallax.y) * 0.05 * dt;

      for (const it of items) {
        const d = it.layer.depth;
        it.x += it.vx * dt;
        it.y += it.vy * dt;

        const pad = it.size * 2;
        if (it.y < -pad) {
          it.y = H + pad * 0.5;
          it.x = rand(0, W);
        } else if (it.y > H + pad) {
          it.y = -pad * 0.5;
          it.x = rand(0, W);
        }
        if (it.x < -pad) it.x = W + pad * 0.5;
        else if (it.x > W + pad) it.x = -pad * 0.5;

        const bx = it.x + parallax.x * d * 28;
        const by = it.y + Math.sin(now * it.bobSpeed + it.phase) * it.bob + parallax.y * d * 28;

        // cursor interaction
        let near = 0;
        if (pointer.active) {
          const cx = bx + it.ox + it.size / 2;
          const cy = by + it.oy + it.size / 2;
          const dx = cx - pointer.x;
          const dy = cy - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          const radius = 140 + 90 * d;
          if (dist < radius) {
            near = 1 - dist / radius;
            const force = near * near * 1.6 * (0.5 + d);
            it.vox += (dx / dist) * force * dt;
            it.voy += (dy / dist) * force * dt;
            it.vrot += (dx > 0 ? 1 : -1) * near * 0.9 * dt;
          }
        }

        // spring back home + damping
        it.vox += -it.ox * 0.018 * dt;
        it.voy += -it.oy * 0.018 * dt;
        it.vox *= Math.pow(0.9, dt);
        it.voy *= Math.pow(0.9, dt);
        it.ox += it.vox * dt;
        it.oy += it.voy * dt;

        it.vrot += (it.baseRot - it.rot) * 0.01 * dt;
        it.vrot *= Math.pow(0.92, dt);
        it.rot += it.vrot * dt;

        it.scale += (1 + near * 0.5 - it.scale) * 0.12 * dt;

        it.el.style.transform = `translate3d(${(bx + it.ox).toFixed(1)}px, ${(by + it.oy).toFixed(1)}px, 0) rotate(${it.rot.toFixed(1)}deg) scale(${it.scale.toFixed(3)})`;
      }
      rafId = requestAnimationFrame(frame);
    }

    function burst(x, y) {
      for (const it of items) {
        const cx = it.x + it.ox + it.size / 2;
        const cy = it.y + it.oy + it.size / 2;
        const dx = cx - x;
        const dy = cy - y;
        const dist = Math.hypot(dx, dy) || 1;
        const radius = 320;
        if (dist < radius) {
          const f = (1 - dist / radius) * 14 * (0.5 + it.layer.depth);
          it.vox += (dx / dist) * f;
          it.voy += (dy / dist) * f;
          it.vrot += (Math.random() - 0.5) * 30;
        }
      }
    }

    function setPointer(x, y) {
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
      parallax.tx = -(x / W - 0.5);
      parallax.ty = -(y / H - 0.5);
    }

    build();
    if (reduceMotion) {
      window.addEventListener("resize", debounce(build, 200));
      return;
    }

    window.addEventListener("pointermove", (e) => setPointer(e.clientX, e.clientY), { passive: true });
    window.addEventListener("pointerdown", (e) => {
      setPointer(e.clientX, e.clientY);
      if (!e.target.closest("a, button, input, iframe, .modal")) burst(e.clientX, e.clientY);
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      const tch = e.touches[0];
      if (tch) setPointer(tch.clientX, tch.clientY);
    }, { passive: true });
    window.addEventListener("touchend", () => setTimeout(() => (pointer.active = false), 300), { passive: true });
    document.addEventListener("pointerleave", () => (pointer.active = false));
    window.addEventListener("blur", () => (pointer.active = false));

    // scroll parallax: nudge layers at different speeds
    window.addEventListener("scroll", () => {
      const dy = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      const clamped = Math.max(-80, Math.min(80, dy));
      for (const it of items) it.y -= clamped * it.layer.depth * 0.25;
    }, { passive: true });

    window.addEventListener("resize", debounce(() => {
      const oldW = W;
      const oldH = H;
      W = window.innerWidth;
      H = window.innerHeight;
      const target = Math.max(12, Math.min(48, Math.round((W * H) / 36000)));
      if (Math.abs(target - items.length) > 6) return build();
      items.forEach((it) => {
        it.x = (it.x / oldW) * W;
        it.y = (it.y / oldH) * H;
      });
    }, 200));

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (!rafId) {
        lastT = 0;
        rafId = requestAnimationFrame(frame);
      }
    });

    rafId = requestAnimationFrame(frame);
  }

  function debounce(fn, ms) {
    let id;
    return (...args) => {
      clearTimeout(id);
      id = setTimeout(() => fn(...args), ms);
    };
  }

  /* ------------------------------------------------------------------
     11. Boot
     ------------------------------------------------------------------ */
  applyLanguage(initialLanguage(), { persist: false });
  $("#lang-toggle").addEventListener("click", () => applyLanguage(lang === "ar" ? "en" : "ar"));
  enhanceCards();
  observeReveal();
  initEmojiField();
})();
