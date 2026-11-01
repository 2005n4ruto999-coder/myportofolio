/* =====================================================================
   LEB for Video Editing — portfolio.js (shared by index.html + gallery.html)
   You normally don't need to edit this file:
     • projects, showreel, screenshots → content.js
     • text / translations             → i18n.js
   ===================================================================== */

(() => {
  "use strict";

  /* ------------------------------------------------------------------
     1. Setup & helpers
     ------------------------------------------------------------------ */
  const translations = window.LEB_I18N || { en: {}, ar: {} };
  const content = window.PORTFOLIO_CONTENT || { videos: [], frames: [] };
  const settings = content.settings || {};

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const html = document.documentElement;
  const body = document.body;
  const page = body.dataset.page || "home";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  let lang = "en";
  const t = (key) => translations[lang]?.[key] ?? translations.en?.[key] ?? "";

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const icon = (name, cls = "") => `<svg class="ic ${cls}" aria-hidden="true"><use href="#${name}"/></svg>`;

  /** Bilingual field from content.js: titleAr / titleEn (or plain title) with fallback. */
  const pick = (item, field) => {
    if (!item) return "";
    const ar = item[field + "Ar"];
    const en = item[field + "En"] ?? item[field];
    return lang === "ar" ? ar || en || "" : en || ar || "";
  };

  const pickList = (item, field) => {
    const ar = item[field + "Ar"];
    const en = item[field + "En"] ?? item[field];
    const list = lang === "ar" ? ar || en : en || ar;
    return Array.isArray(list) ? list : [];
  };

  /** Makes local paths with spaces safe for src attributes (and never throws). */
  const safeUrl = (u) => {
    try {
      return encodeURI(decodeURI(String(u)));
    } catch (_) {
      return encodeURI(String(u));
    }
  };

  function debounce(fn, ms) {
    let id;
    return (...args) => {
      clearTimeout(id);
      id = setTimeout(() => fn(...args), ms);
    };
  }

  /* ------------------------------------------------------------------
     2. Platforms, categories, media parsing
     ------------------------------------------------------------------ */
  const PLATFORMS = {
    youtube: { icon: "i-youtube", color: "#ff4d4d" },
    drive: { icon: "i-drive", color: "#1fa463" },
    instagram: { icon: "i-instagram", color: "#e1306c" },
    tiktok: { icon: "i-tiktok", color: "#25c8d9" },
    facebook: { icon: "i-facebook", color: "#1877f2" },
    vimeo: { icon: "i-vimeo", color: "#1ab7ea" },
    x: { icon: "i-x", color: "#6b7280" },
    linkedin: { icon: "i-linkedin", color: "#0a66c2" },
    behance: { icon: "i-behance", color: "#0057ff" },
    khamsat: { icon: "i-briefcase", color: "#f59e0b" },
    client: { icon: "i-users", color: "#5fb0ff" },
    file: { icon: "i-film", color: "#5fb0ff" },
    other: { icon: "i-link", color: "#5fb0ff" },
  };
  const PLATFORM_ALIASES = { twitter: "x", "x / twitter": "x", ig: "instagram", yt: "youtube", "google drive": "drive", gdrive: "drive" };

  const CATEGORY_ICONS = {
    gaming: "i-gamepad",
    reaction: "i-smile",
    motion: "i-wand",
    story: "i-book",
    shorts: "i-phone",
    promo: "i-megaphone",
    other: "i-film",
  };

  /** Turns any supported link into { kind, id, embed, vertical, thumbs[], watchUrl }. */
  function parseMedia(url, item = {}) {
    const raw = String(url || "").trim();
    if (!raw) return null;
    let m;

    // YouTube (or a bare 11-char id)
    if (/^[\w-]{11}$/.test(raw) || /youtu\.?be/.test(raw)) {
      const id = /^[\w-]{11}$/.test(raw)
        ? raw
        : (m = raw.match(/(?:shorts\/|youtu\.be\/|[?&]v=|embed\/|live\/)([\w-]{11})/)) && m[1];
      if (id) {
        const vertical = /\/shorts\//.test(raw) || !!item.vertical;
        return {
          kind: "youtube",
          id,
          vertical,
          embed: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
          thumbs: vertical
            ? [`https://i.ytimg.com/vi/${id}/hqdefault.jpg`]
            : [`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
          watchUrl: vertical ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
        };
      }
    }

    // Google Drive
    if ((m = raw.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{10,})/))) {
      const id = m[1];
      return {
        kind: "drive",
        id,
        vertical: !!item.vertical,
        embed: `https://drive.google.com/file/d/${id}/preview`,
        thumbs: [`https://drive.google.com/thumbnail?id=${id}&sz=w1280`],
        watchUrl: `https://drive.google.com/file/d/${id}/view`,
      };
    }

    // Vimeo
    if ((m = raw.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return {
        kind: "vimeo",
        id: m[1],
        vertical: !!item.vertical,
        embed: `https://player.vimeo.com/video/${m[1]}?autoplay=1`,
        thumbs: [],
        watchUrl: `https://vimeo.com/${m[1]}`,
      };
    }

    // Instagram reel / post
    if ((m = raw.match(/instagram\.com\/(reels?|p|tv)\/([\w-]+)/))) {
      const type = m[1] === "reels" ? "reel" : m[1];
      return {
        kind: "instagram",
        id: m[2],
        vertical: item.vertical !== false,
        embed: `https://www.instagram.com/${type}/${m[2]}/embed/`,
        thumbs: [`https://www.instagram.com/${type}/${m[2]}/media/?size=l`],
        watchUrl: `https://www.instagram.com/${type}/${m[2]}/`,
      };
    }

    // TikTok
    if ((m = raw.match(/tiktok\.com\/.*video\/(\d+)/))) {
      return {
        kind: "tiktok",
        id: m[1],
        vertical: true,
        embed: `https://www.tiktok.com/embed/v2/${m[1]}`,
        thumbs: [],
        watchUrl: raw,
      };
    }

    // Video file hosted with the site
    if (/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(raw)) {
      return { kind: "file", id: raw, vertical: !!item.vertical, embed: raw, thumbs: [], watchUrl: raw };
    }

    // Anything else: opens in a new tab
    return { kind: "link", id: raw, vertical: !!item.vertical, embed: "", thumbs: [], watchUrl: raw };
  }

  function guessPlatformFromUrl(url) {
    const u = String(url || "").toLowerCase();
    if (/youtu\.?be/.test(u)) return "youtube";
    if (u.includes("drive.google")) return "drive";
    if (u.includes("instagram.com")) return "instagram";
    if (u.includes("tiktok.com")) return "tiktok";
    if (u.includes("facebook.com") || u.includes("fb.watch")) return "facebook";
    if (u.includes("vimeo.com")) return "vimeo";
    if (u.includes("linkedin.com")) return "linkedin";
    if (u.includes("behance.net")) return "behance";
    if (u.includes("khamsat.com")) return "khamsat";
    if (/(^|\.)x\.com|twitter\.com/.test(u)) return "x";
    return "";
  }

  /** Platform object: known key → icon/color/translated label; custom text → shown as-is. */
  function resolvePlatform(item, media) {
    let rawName = String(item.platform || "").trim();
    let key = PLATFORM_ALIASES[rawName.toLowerCase()] || rawName.toLowerCase();
    if (!rawName) {
      key = guessPlatformFromUrl(item.platformUrl) || guessPlatformFromUrl(item.video || item.youtube) || (media?.kind === "file" ? "file" : "other");
    }
    if (PLATFORMS[key]) return { key, custom: "", ...PLATFORMS[key] };
    return { key: "custom:" + rawName.toLowerCase(), custom: rawName, icon: "i-globe", color: "#5fb0ff" };
  }

  const platformLabel = (p) => p.custom || t("platform." + p.key) || p.key;

  /** Normalizes one entry from content.js. */
  function normalize(item, index) {
    if (!item) return null;
    const media = parseMedia(item.video || item.youtube, item);
    if (!media && !item.thumbnail) return null;
    const platform = resolvePlatform(item, media);
    const format = item.format === "short" || item.format === "long" ? item.format : media?.vertical ? "short" : "long";
    let category = CATEGORY_ICONS[item.category] ? item.category : format === "short" ? "shorts" : "other";
    const thumbs = [item.thumbnail, ...(media?.thumbs || [])].filter(Boolean);
    const playable = !!media && media.kind !== "link";
    const externalUrl = item.platformUrl || (media && media.kind !== "file" ? media.watchUrl : "");
    // the "View on …" button names wherever that link actually goes
    const linkPlatform = item.platformUrl || !media ? platform : resolvePlatform({ video: media.watchUrl }, media);
    return { index, item, media, platform, linkPlatform, format, category, thumbs, playable, externalUrl };
  }

  const projects = (content.videos || []).map(normalize).filter(Boolean);
  projects.forEach((p, i) => (p.index = i));
  const showreel = content.showreel ? normalize(content.showreel, "showreel") : null;
  const frames = (content.frames || []).map((f) => (typeof f === "string" ? { src: f } : f)).filter((f) => f && f.src);

  /* ------------------------------------------------------------------
     3. Thumbnails (with fallbacks and an automatic cover)
     ------------------------------------------------------------------ */
  function initials(text) {
    const words = String(text || "").trim().split(/\s+/).filter(Boolean);
    return (words.slice(0, 2).map((w) => w[0]).join("") || "▶").toUpperCase();
  }

  function thumbMarkup(p, { eager = false } = {}) {
    const title = pick(p.item, "title");
    const cover = `<span class="thumb-cover" style="--pc:${p.platform.color}" aria-hidden="true">
        ${icon(p.platform.icon)}<b>${esc(initials(title))}</b>
      </span>`;
    if (!p.thumbs.length) return cover;
    const [first, ...rest] = p.thumbs;
    return `${cover}<img src="${esc(safeUrl(first))}" data-fallbacks="${esc(rest.map(safeUrl).join("|"))}" alt="" ${
      eager ? 'fetchpriority="high"' : 'loading="lazy"'
    } decoding="async" />`;
  }

  function wireThumbs(root = document) {
    $$("img[data-fallbacks]", root).forEach((img) => {
      if (img.dataset.wired) return;
      img.dataset.wired = "1";
      const next = () => {
        const list = (img.dataset.fallbacks || "").split("|").filter(Boolean);
        if (list.length) {
          img.dataset.fallbacks = list.slice(1).join("|");
          img.src = list[0];
        } else {
          img.remove(); // the automatic cover underneath stays visible
        }
      };
      img.addEventListener("error", next);
      // YouTube answers a missing maxres thumbnail with a 120×90 grey placeholder
      img.addEventListener("load", () => img.naturalWidth > 0 && img.naturalWidth <= 120 && next());
      if (img.complete) {
        if (!img.naturalWidth) next();
        else if (img.naturalWidth <= 120) next();
      }
    });
  }

  /* ------------------------------------------------------------------
     4. Cards
     ------------------------------------------------------------------ */
  function searchText(p) {
    const it = p.item;
    return [
      it.titleEn, it.titleAr, it.title, it.descEn, it.descAr, it.desc,
      ...(it.tagsEn || []), ...(it.tagsAr || []),
      p.platform.custom, translations.en["platform." + p.platform.key], translations.ar["platform." + p.platform.key],
      translations.en["cat." + p.category], translations.ar["cat." + p.category],
    ].filter(Boolean).join(" ").toLowerCase();
  }

  function cardMarkup(p, { variant = p.format, reveal = true } = {}) {
    const title = pick(p.item, "title");
    const desc = pick(p.item, "desc");
    const tags = pickList(p.item, "tags");
    const pl = p.platform;
    const plLabel = platformLabel(pl);
    const lp = p.linkPlatform;
    const linkLabel = platformLabel(lp);
    const date = p.item.date ? `<span class="card-date">${icon("i-calendar")}${esc(p.item.date)}</span>` : "";

    const thumbInner = `
      ${thumbMarkup(p)}
      <span class="thumb-tags">
        <span class="platform-badge" style="--pc:${pl.color}">${icon(pl.icon)}${esc(plLabel)}</span>
        ${p.item.isNew ? `<span class="thumb-tag is-new">${icon("i-sparkles")}${esc(t("work.new"))}</span>` : ""}
      </span>
      <span class="play-button${p.playable ? "" : " is-external"}">${icon(p.playable ? "i-play" : "i-external")}</span>`;

    const thumb = p.playable
      ? `<button class="thumb thumb--${variant}" type="button" data-project="${p.index}" aria-label="${esc(t("actions.playVideo"))}: ${esc(title)}">${thumbInner}</button>`
      : `<a class="thumb thumb--${variant}" href="${esc(p.externalUrl)}" target="_blank" rel="noopener" aria-label="${esc(t("actions.openProject"))}: ${esc(title)}">${thumbInner}</a>`;

    const primary = p.playable
      ? `<button class="video-trigger" type="button" data-project="${p.index}">${icon("i-play")}<span>${esc(t("actions.watch"))}</span></button>`
      : `<a class="video-trigger" href="${esc(p.externalUrl)}" target="_blank" rel="noopener">${icon("i-external")}<span>${esc(t("actions.viewOn"))} ${esc(linkLabel)}</span></a>`;

    const secondary =
      p.playable && p.externalUrl
        ? `<a class="icon-button platform-link" style="--pc:${lp.color}" href="${esc(p.externalUrl)}" target="_blank" rel="noopener" aria-label="${esc(t("actions.viewOn"))} ${esc(linkLabel)}" title="${esc(t("actions.viewOn"))} ${esc(linkLabel)}">${icon(lp.icon)}</a>`
        : "";

    return `
      <article class="video-card project-card project-card--${variant} card${reveal ? " reveal" : ""}" data-tilt
        data-format="${p.format}" data-category="${p.category}" data-platform="${esc(pl.key)}" data-search="${esc(searchText(p))}">
        ${thumb}
        <div class="video-card-body">
          <div class="card-meta"><span>${icon(CATEGORY_ICONS[p.category])}${esc(t("cat." + p.category))}</span>${date}</div>
          <h3>${esc(title)}</h3>
          ${desc ? `<p>${esc(desc)}</p>` : ""}
          ${tags.length ? `<div class="tag-list">${tags.map((tg) => `<span class="tag-chip">${esc(tg)}</span>`).join("")}</div>` : ""}
        </div>
        <div class="video-card-foot">${primary}${secondary}</div>
      </article>`;
  }

  function afterRender(root) {
    wireThumbs(root);
    enhanceCards(root);
    observeReveal(root);
  }

  /* ------------------------------------------------------------------
     5. Home page rendering
     ------------------------------------------------------------------ */
  function renderShowreel() {
    const box = $("#showreel");
    if (!box) return;
    if (!showreel || !showreel.playable) {
      box.hidden = true;
      return;
    }
    const title = pick(showreel.item, "title");
    box.innerHTML = `
      <button class="thumb" type="button" data-project="showreel" aria-label="${esc(t("actions.playVideo"))}: ${esc(title)}">
        ${thumbMarkup(showreel, { eager: true })}
        <span class="showreel-badge"><span class="live-dot" aria-hidden="true"></span>${esc(t("hero.showreelBadge"))}</span>
        <span class="play-button">${icon("i-play")}</span>
        <span class="thumb-caption">
          <strong>${esc(title)}</strong>
          <span>${esc(pick(showreel.item, "desc"))}</span>
        </span>
      </button>
      <div class="showreel-actions">
        <button class="button" type="button" data-project="showreel">${icon("i-play")}<span>${esc(t("actions.playVideo"))}</span></button>
        ${showreel.externalUrl ? `<a class="button-secondary" href="${esc(showreel.externalUrl)}" target="_blank" rel="noopener">${icon(showreel.linkPlatform.icon)}<span>${esc(t("actions.viewOn"))} ${esc(platformLabel(showreel.linkPlatform))}</span></a>` : ""}
      </div>`;
    wireThumbs(box);
  }

  function renderHomeWork() {
    const grid = $("#video-grid");
    const strip = $("#short-strip");
    if (!grid) return;
    const longs = projects.filter((p) => p.format === "long").slice(0, settings.homeLong ?? 3);
    const shorts = projects.filter((p) => p.format === "short").slice(0, settings.homeShort ?? 5);

    if (!longs.length && !shorts.length) {
      grid.innerHTML = `<div class="empty-state">${icon("i-film")}<p>${esc(t("work.empty"))}</p></div>`;
    } else {
      grid.classList.toggle("is-single", longs.length === 1);
      grid.classList.toggle("is-few", longs.length > 1 && longs.length <= 3);
      grid.innerHTML = longs.map((p) => cardMarkup(p, { variant: "long" })).join("");
      $("#home-long-head")?.toggleAttribute("hidden", !longs.length);
    }
    if (strip) {
      strip.innerHTML = shorts.map((p) => cardMarkup(p, { variant: "short" })).join("");
      $("#home-short-block")?.toggleAttribute("hidden", !shorts.length);
    }
    const count = $("#gallery-cta-count");
    if (count) count.textContent = projects.length;
    afterRender($("#work") || document);
  }

  /* ------------------------------------------------------------------
     6. Gallery page rendering + filters
     ------------------------------------------------------------------ */
  const filters = { q: "", format: "all", cat: "all", platform: "all" };

  function readFiltersFromUrl() {
    const params = new URLSearchParams(location.search);
    ["format", "cat", "platform"].forEach((k) => params.get(k) && (filters[k] = params.get(k)));
    if (params.get("q")) filters.q = params.get("q");
  }

  function writeFiltersToUrl() {
    const params = new URLSearchParams(location.search);
    Object.entries(filters).forEach(([k, v]) => (v && v !== "all" ? params.set(k, v) : params.delete(k)));
    const qs = params.toString();
    history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
  }

  function renderGalleryStats() {
    const set = (id, n) => {
      const el = document.getElementById(id);
      if (el) el.textContent = n;
    };
    set("stat-projects", projects.length);
    set("stat-platforms", new Set(projects.map((p) => p.platform.key)).size);
    set("stat-frames", frames.length);
  }

  function renderGalleryControls() {
    const fmtBox = $("#format-filter");
    const catBox = $("#category-filter");
    const plSelect = $("#platform-filter");
    if (!fmtBox) return;

    const countBy = (key) => projects.reduce((acc, p) => ((acc[p[key]] = (acc[p[key]] || 0) + 1), acc), {});
    const formats = countBy("format");
    fmtBox.innerHTML = [
      ["all", t("format.all"), projects.length, "i-grid"],
      ["short", t("format.short"), formats.short || 0, "i-phone"],
      ["long", t("format.long"), formats.long || 0, "i-monitor"],
    ]
      .map(([k, label, n, ic]) => `<button type="button" class="seg-btn" data-format-filter="${k}" aria-pressed="${filters.format === k}">${icon(ic)}<span>${esc(label)}</span><span class="count">${n}</span></button>`)
      .join("");

    const cats = countBy("category");
    const catKeys = Object.keys(CATEGORY_ICONS).filter((c) => cats[c]);
    catBox.hidden = catKeys.length < 2;
    catBox.innerHTML =
      `<button class="filter-chip" type="button" data-cat-filter="all" aria-pressed="${filters.cat === "all"}">${icon("i-grid")}<span>${esc(t("filters.all"))}</span></button>` +
      catKeys.map((c) => `<button class="filter-chip" type="button" data-cat-filter="${c}" aria-pressed="${filters.cat === c}">${icon(CATEGORY_ICONS[c])}<span>${esc(t("cat." + c))}</span><span class="count">${cats[c]}</span></button>`).join("");

    const plats = {};
    projects.forEach((p) => (plats[p.platform.key] = plats[p.platform.key] || { p: p.platform, n: 0 }).n++);
    plSelect.innerHTML =
      `<option value="all">${esc(t("gallery.allPlatforms"))}</option>` +
      Object.entries(plats).map(([k, v]) => `<option value="${esc(k)}"${filters.platform === k ? " selected" : ""}>${esc(platformLabel(v.p))} (${v.n})</option>`).join("");
    $("#platform-filter-wrap").hidden = Object.keys(plats).length < 2;

    const search = $("#gallery-search");
    if (search && search.value !== filters.q) search.value = filters.q;
  }

  function renderGalleryGrids() {
    const shortGrid = $("#short-grid");
    const longGrid = $("#long-grid");
    if (!shortGrid) return;
    shortGrid.innerHTML = projects.filter((p) => p.format === "short").map((p) => cardMarkup(p, { variant: "short" })).join("");
    longGrid.innerHTML = projects.filter((p) => p.format === "long").map((p) => cardMarkup(p, { variant: "long" })).join("");
    afterRender($("#library"));
    applyGalleryFilters({ animate: false });
  }

  function applyGalleryFilters({ animate = true } = {}) {
    const q = filters.q.trim().toLowerCase();
    let total = 0;
    ["short", "long"].forEach((fmt) => {
      const grid = document.getElementById(fmt + "-grid");
      const section = document.getElementById(fmt + "-form");
      let visible = 0;
      $$(".project-card", grid).forEach((card) => {
        const ok =
          (filters.format === "all" || filters.format === fmt) &&
          (filters.cat === "all" || card.dataset.category === filters.cat) &&
          (filters.platform === "all" || card.dataset.platform === filters.platform) &&
          (!q || q.split(/\s+/).every((w) => card.dataset.search.includes(w)));
        const wasHidden = card.classList.contains("is-hidden");
        card.classList.toggle("is-hidden", !ok);
        if (ok) {
          visible++;
          if (animate && wasHidden) {
            card.classList.remove("is-entering");
            void card.offsetWidth;
            card.classList.add("is-entering", "is-visible");
          }
        }
      });
      if (section) section.hidden = visible === 0;
      total += visible;
    });

    $("#gallery-empty").hidden = total > 0;
    $("#results-count").textContent = total;
    const active = filters.q || filters.format !== "all" || filters.cat !== "all" || filters.platform !== "all";
    $("#clear-filters").hidden = !active;

    $$("[data-format-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.formatFilter === filters.format)));
    $$("[data-cat-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.catFilter === filters.cat)));
    const sel = $("#platform-filter");
    if (sel) sel.value = filters.platform;
    writeFiltersToUrl();
  }

  function initGalleryControls() {
    const lib = $("#library");
    if (!lib) return;
    lib.addEventListener("click", (e) => {
      const f = e.target.closest("[data-format-filter]");
      const c = e.target.closest("[data-cat-filter]");
      if (f) filters.format = f.dataset.formatFilter;
      else if (c) filters.cat = c.dataset.catFilter;
      else if (e.target.closest("#clear-filters, #empty-clear")) {
        Object.assign(filters, { q: "", format: "all", cat: "all", platform: "all" });
        $("#gallery-search").value = "";
      } else return;
      applyGalleryFilters();
    });
    $("#platform-filter").addEventListener("change", (e) => {
      filters.platform = e.target.value;
      applyGalleryFilters();
    });
    $("#gallery-search").addEventListener(
      "input",
      debounce((e) => {
        filters.q = e.target.value;
        applyGalleryFilters();
      }, 160)
    );
    // "/" focuses the search box
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName) && $$(".modal").every((m) => m.hidden)) {
        e.preventDefault();
        $("#gallery-search").focus();
      }
    });
    // jump links in the hero switch the format filter too
    $$("[data-jump-format]").forEach((a) =>
      a.addEventListener("click", () => {
        filters.format = "all";
        applyGalleryFilters();
      })
    );
  }

  /* ------------------------------------------------------------------
     7. Screenshots gallery (both pages)
     ------------------------------------------------------------------ */
  function renderFrames() {
    const gallery = $("#media-gallery");
    if (!gallery) return;
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
          <img src="${esc(safeUrl(f.src))}" alt="" loading="lazy" decoding="async" />
          <span class="media-photo-caption"><span>${esc(caption)}</span>${icon("i-zoom")}</span>
        </button>`;
      })
      .join("");
    observeReveal(gallery);
  }

  /* ------------------------------------------------------------------
     8. Language
     ------------------------------------------------------------------ */
  function renderAll() {
    renderShowreel();
    renderHomeWork();
    renderGalleryStats();
    renderGalleryControls();
    renderGalleryGrids();
    renderFrames();
  }

  function applyLanguage(next, { persist = true } = {}) {
    lang = next === "ar" ? "ar" : "en";
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t(page === "gallery" ? "gallery.pageTitle" : "pageTitle");

    $$("[data-i18n]").forEach((node) => {
      const value = t(node.dataset.i18n);
      if (value) node.textContent = value;
    });
    $$("[data-i18n-aria-label]").forEach((node) => {
      const value = t(node.dataset.i18nAriaLabel);
      if (value) node.setAttribute("aria-label", value);
    });
    $$("[data-i18n-placeholder]").forEach((node) => {
      const value = t(node.dataset.i18nPlaceholder);
      if (value) node.setAttribute("placeholder", value);
    });
    $$("[data-i18n-alt]").forEach((node) => {
      const value = t(node.dataset.i18nAlt);
      if (value) node.setAttribute("alt", value);
    });

    const langBtn = $("#lang-toggle");
    $("#lang-toggle-label").textContent = lang === "ar" ? "EN" : "عربي";
    const label = t(lang === "ar" ? "aria.switchToEnglish" : "aria.switchToArabic");
    langBtn.setAttribute("aria-label", label);
    langBtn.title = label;
    $("#video-modal-frame").title = t("modal.playerTitle");
    syncMenuLabel();

    renderAll();
    if (lightbox.isOpen()) lightbox.show(lightbox.index);
    if (currentProject && !videoModal.hidden) fillModalInfo(currentProject);

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
     9. Header, menu, scroll UI
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
      if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      topbar.classList.toggle("is-scrolled", y > 12);
      backTop?.classList.toggle("is-visible", y > window.innerHeight * 0.8);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  // active nav link: watch every section that an in-page nav link points to
  const navLinks = $$(".nav a, .mobile-nav a");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href.startsWith("#")) link.classList.toggle("active", href === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  new Set(navLinks.map((a) => a.getAttribute("href")).filter((h) => h.startsWith("#") && h.length > 1)).forEach((h) => {
    const el = document.getElementById(h.slice(1));
    if (el) navObserver.observe(el);
  });

  /* ------------------------------------------------------------------
     10. Reveal on scroll (with stagger inside grids)
     ------------------------------------------------------------------ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
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
     11. Cards: cursor spotlight + 3D tilt
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
          card.style.setProperty("--ry", `${(x / r.width - 0.5) * 8}deg`);
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
     12. Modals (video player + image lightbox) with focus trap
     ------------------------------------------------------------------ */
  let lastFocus = null;
  let currentProject = null;

  function trapFocus(modal, e) {
    if (e.key !== "Tab") return;
    const focusables = $$('a[href], button:not([disabled]), iframe:not([hidden]), video:not([hidden]), [tabindex]:not([tabindex="-1"])', modal).filter(
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

  // --- video player
  const videoModal = $("#video-modal");
  const videoFrame = $("#video-modal-frame");
  const videoEl = $("#video-modal-video");
  const videoWrap = $("#video-frame-wrap");
  const videoDialog = $(".modal-dialog", videoModal);

  function fillModalInfo(p) {
    const title = pick(p.item, "title");
    $("#video-modal-title").textContent = title || t("modal.videoTitle");
    const ext = $("#video-modal-ext");
    const plLabel = platformLabel(p.platform);
    const linkLabel = platformLabel(p.linkPlatform);
    if (p.externalUrl) {
      ext.hidden = false;
      ext.href = p.externalUrl;
      ext.setAttribute("aria-label", `${t("actions.viewOn")} ${linkLabel}`);
      ext.title = `${t("actions.viewOn")} ${linkLabel}`;
      ext.innerHTML = icon(p.linkPlatform.icon);
    } else {
      ext.hidden = true;
    }
    const desc = pick(p.item, "desc");
    const info = $("#video-modal-info");
    info.innerHTML = `
      <div class="modal-info-row">
        <span class="platform-badge" style="--pc:${p.platform.color}">${icon(p.platform.icon)}${esc(plLabel)}</span>
        ${p.index !== "showreel" ? `<span class="modal-cat">${icon(CATEGORY_ICONS[p.category])}${esc(t("cat." + p.category))}</span>` : ""}
        ${p.item.date ? `<span class="modal-cat">${icon("i-calendar")}${esc(p.item.date)}</span>` : ""}
      </div>
      ${desc ? `<p>${esc(desc)}</p>` : ""}
      ${p.externalUrl ? `<a class="button-secondary button-sm" href="${esc(p.externalUrl)}" target="_blank" rel="noopener">${icon(p.linkPlatform.icon)}<span>${esc(t("actions.viewOn"))} ${esc(linkLabel)}</span>${icon("i-external")}</a>` : ""}`;
  }

  function openProject(p) {
    if (!p) return;
    if (!p.playable) {
      if (p.externalUrl) window.open(p.externalUrl, "_blank", "noopener");
      return;
    }
    currentProject = p;
    const vertical = !!p.media.vertical;
    videoWrap.classList.toggle("is-vertical", vertical);
    videoDialog.classList.toggle("is-vertical", vertical);
    if (p.media.kind === "file") {
      videoFrame.hidden = true;
      videoFrame.src = "about:blank";
      videoEl.hidden = false;
      videoEl.src = p.media.embed;
      if (p.thumbs[0]) videoEl.poster = p.thumbs[0];
      videoEl.play?.().catch(() => {});
    } else {
      videoEl.hidden = true;
      videoEl.removeAttribute("src");
      videoFrame.hidden = false;
      videoFrame.src = p.media.embed;
    }
    fillModalInfo(p);
    openModal(videoModal);
  }

  function closeVideo() {
    closeModal(videoModal, () => {
      videoFrame.src = "about:blank";
      videoEl.pause?.();
      videoEl.removeAttribute("src");
      videoEl.load?.();
      currentProject = null;
    });
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-project]");
    if (!trigger) return;
    const key = trigger.dataset.project;
    openProject(key === "showreel" ? showreel : projects[+key]);
  });

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal || e.target.closest("[data-close]")) closeVideo();
  });

  // --- lightbox
  const imageModal = $("#image-modal");
  const lightbox = {
    index: 0,
    isOpen: () => !imageModal.hidden,
    show(i) {
      if (!frames.length) return;
      this.index = (i + frames.length) % frames.length;
      const f = frames[this.index];
      const img = $("#image-modal-image");
      img.src = safeUrl(f.src);
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
     13. Small interactions: copy email, counters, year
     ------------------------------------------------------------------ */
  let toastTimer;
  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.innerHTML = icon("i-check") + `<span>${esc(message)}</span>`;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2400);
  }

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
      if (reduceMotion || !target) return;
      const start = performance.now();
      const dur = target > 50 ? 1600 : 1100;
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
     14. Floating emoji background — drifts, bobs, parallaxes and
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
    const countFor = () => Math.max(12, Math.min(48, Math.round((W * H) / 36000)));

    function build() {
      W = window.innerWidth;
      H = window.innerHeight;
      field.textContent = "";
      items = [];
      const count = countFor();
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
        const baseRot = rand(-18, 18);
        items.push({
          el, layer, size,
          x: rand(0, W), y: rand(0, H),
          vx: rand(-0.12, 0.12), vy: -rand(0.5, 1) * layer.drift,
          ox: 0, oy: 0, vox: 0, voy: 0,
          baseRot, rot: baseRot, vrot: 0, scale: 1,
          phase: rand(0, Math.PI * 2), bob: rand(5, 14), bobSpeed: rand(0.0004, 0.0009),
        });
      }
      field.appendChild(frag);
      if (reduceMotion) items.forEach((it) => (it.el.style.transform = `translate3d(${it.x}px, ${it.y}px, 0) rotate(${it.baseRot}deg)`));
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

        let near = 0;
        if (pointer.active) {
          const dx = bx + it.ox + it.size / 2 - pointer.x;
          const dy = by + it.oy + it.size / 2 - pointer.y;
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
        const dx = it.x + it.ox + it.size / 2 - x;
        const dy = it.y + it.oy + it.size / 2 - y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 320) {
          const f = (1 - dist / 320) * 14 * (0.5 + it.layer.depth);
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
    window.addEventListener(
      "pointerdown",
      (e) => {
        setPointer(e.clientX, e.clientY);
        if (!e.target.closest("a, button, input, select, iframe, video, .modal")) burst(e.clientX, e.clientY);
      },
      { passive: true }
    );
    window.addEventListener(
      "touchmove",
      (e) => {
        const tch = e.touches[0];
        if (tch) setPointer(tch.clientX, tch.clientY);
      },
      { passive: true }
    );
    window.addEventListener("touchend", () => setTimeout(() => (pointer.active = false), 300), { passive: true });
    document.addEventListener("pointerleave", () => (pointer.active = false));
    window.addEventListener("blur", () => (pointer.active = false));

    window.addEventListener(
      "scroll",
      () => {
        const dy = window.scrollY - lastScroll;
        lastScroll = window.scrollY;
        const clamped = Math.max(-80, Math.min(80, dy));
        for (const it of items) it.y -= clamped * it.layer.depth * 0.25;
      },
      { passive: true }
    );

    window.addEventListener(
      "resize",
      debounce(() => {
        const oldW = W;
        const oldH = H;
        W = window.innerWidth;
        H = window.innerHeight;
        if (Math.abs(countFor() - items.length) > 6) return build();
        items.forEach((it) => {
          it.x = (it.x / oldW) * W;
          it.y = (it.y / oldH) * H;
        });
      }, 200)
    );

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

  /* ------------------------------------------------------------------
     15. Boot
     ------------------------------------------------------------------ */
  if (page === "gallery") readFiltersFromUrl();
  applyLanguage(initialLanguage(), { persist: false });
  $("#lang-toggle").addEventListener("click", () => applyLanguage(lang === "ar" ? "en" : "ar"));
  initGalleryControls();
  enhanceCards();
  observeReveal();
  initEmojiField();
})();
