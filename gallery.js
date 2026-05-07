const videoLibrary = [
  // Add more entries by copying one object and changing the fields below.
  // Use `format: "short"` or `format: "long"`.
  // Add `videoId` for YouTube items when you want the "Preview here" button to work.
  {
    id: "short-01",
    title: "Short Sample 01",
    format: "short",
    platform: "YouTube",
    href: "https://youtube.com/shorts/XKlFe4DwkMc?si=Qg5gZfiKQ2HJd_BA",
    videoId: "XKlFe4DwkMc",
    poster: "https://i.ytimg.com/vi/XKlFe4DwkMc/hqdefault.jpg",
    description: "A fast vertical sample focused on hook timing, movement, and clean presentation.",
    tags: ["Vertical", "Hook-first", "Captions"],
  },
  {
    id: "short-02",
    title: "Short Sample 02",
    format: "short",
    platform: "YouTube",
    href: "https://youtube.com/shorts/S4ELfEkozTE?si=9KmVd11g2kN26_Wo",
    videoId: "S4ELfEkozTE",
    poster: "https://i.ytimg.com/vi/S4ELfEkozTE/hqdefault.jpg",
    description: "Another short-form cut with quick emphasis, readable rhythm, and mobile-friendly pacing.",
    tags: ["Short-form", "Rhythm", "Mobile-first"],
  },
  {
    id: "short-03",
    title: "Short Sample 03",
    format: "short",
    platform: "YouTube",
    href: "https://youtube.com/shorts/HTfICUpeAUA?feature=share",
    videoId: "HTfICUpeAUA",
    poster: "https://i.ytimg.com/vi/HTfICUpeAUA/hqdefault.jpg",
    description: "A final vertical sample highlighting polished subtitle flow and sharper pacing control.",
    tags: ["Subtitles", "Pacing", "Polish"],
  },
  {
    id: "long-01",
    title: "3D Visual Masterpiece",
    format: "long",
    platform: "LinkedIn",
    href: "https://www.linkedin.com/posts/ibrahim-omar-for-business_davinciresolve-fusion3d-motiondesign-activity-7458156915940970496-loNQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFseUI0BllAIr8GGhNd_zj456TSxEY50HnY",
    poster: "images/Screenshot (543).png",
    description: "Fusion 3D environment work that turns explanatory footage into a deeper visual story.",
    tags: ["Fusion 3D", "Motion Design", "Visual Storytelling"],
  },
  {
    id: "long-02",
    title: "Timeline Architecture",
    format: "long",
    platform: "LinkedIn",
    href: "https://www.linkedin.com/posts/ibrahim-omar-for-business_cubitteam-davinciresolve-motiondesign-activity-7457328974268960768-kV4d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFseUI0BllAIr8GGhNd_zj456TSxEY50HnY",
    poster: "images/Screenshot (541).png",
    description: "A project card centered on keyframing precision, workflow structure, and the craft behind the timeline.",
    tags: ["Cubit Team", "Keyframes", "Workflow"],
  },
  {
    id: "long-03",
    title: "Motion Graphics and Sound Design",
    format: "long",
    platform: "LinkedIn",
    href: "https://www.linkedin.com/posts/ibrahim-omar-for-business_davinciresolve-motiongraphics-sounddesign-activity-7457014470494638080-I5Qx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFseUI0BllAIr8GGhNd_zj456TSxEY50HnY",
    poster: "images/Screenshot (854).png",
    description: "A Cubit Team project built around motion graphics, sound design, and a tighter audiovisual finish.",
    tags: ["Sound Design", "Motion Graphics", "DaVinci Resolve"],
  },
  {
    id: "long-04",
    title: "LinkedIn Group Feature",
    format: "long",
    platform: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:groupPost:12651962-7458160928304324609?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFseUI0BllAIr8GGhNd_zj456TSxEY50HnY",
    poster: "images/Gemini_Generated_Image_tvonj1tvonj1tvon.png",
    description: "A shared group-post entry reserved as another long-form showcase slot in the gallery.",
    tags: ["LinkedIn", "Portfolio Link", "Project Feature"],
  },
];

const shortFormGrid = document.getElementById("short-form-grid");
const longFormGrid = document.getElementById("long-form-grid");
const totalCount = document.getElementById("total-count");
const shortCount = document.getElementById("short-count");
const longCount = document.getElementById("long-count");
const videoModal = document.getElementById("video-modal");
const videoModalFrame = document.getElementById("video-modal-frame");
const videoModalTitle = document.getElementById("video-modal-title");
const closeVideoModal = document.getElementById("close-video-modal");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getPlatformLabel(video) {
  return video.platform;
}

function getFormatLabel(video) {
  return video.format === "short" ? "Short-form" : "Long-form";
}

function getPrimaryActionLabel(video) {
  return video.videoId ? "Preview here" : "View project";
}

function getSecondaryActionLabel(video) {
  return video.platform === "YouTube" ? "Open on YouTube" : "Open on LinkedIn";
}

function createTagMarkup(tags) {
  return tags
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");
}

function createCardMarkup(video, index) {
  const hasPreview = Boolean(video.videoId);
  const posterSrc = encodeURI(video.poster);
  const primaryAction = hasPreview
    ? `<button class="card-button card-button--primary" type="button" data-preview-id="${escapeHtml(video.id)}">${getPrimaryActionLabel(video)}</button>`
    : `<a class="card-button card-button--primary" href="${escapeHtml(video.href)}" target="_blank" rel="noreferrer">${getPrimaryActionLabel(video)}</a>`;
  const secondaryAction = hasPreview
    ? `
          <a class="card-button card-button--secondary" href="${escapeHtml(video.href)}" target="_blank" rel="noreferrer">
            ${escapeHtml(getSecondaryActionLabel(video))}
          </a>
        `
    : "";

  const previewPill = hasPreview
    ? '<div class="preview-pill">Preview available</div>'
    : '<div class="preview-pill">External post</div>';

  return `
    <article class="gallery-card" style="--card-index: ${index}" data-format="${escapeHtml(video.format)}">
      <div class="card-media card-media--${escapeHtml(video.format)}">
        <img src="${escapeHtml(posterSrc)}" alt="${escapeHtml(video.title)} preview" loading="lazy" />
        <div class="card-badges">
          <span class="badge">${escapeHtml(getFormatLabel(video))}</span>
          <span class="badge">${escapeHtml(getPlatformLabel(video))}</span>
        </div>
        ${previewPill}
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span>${escapeHtml(video.platform)} Sample</span>
        </div>
        <h3 class="card-title">${escapeHtml(video.title)}</h3>
        <p class="card-copy">${escapeHtml(video.description)}</p>
        <div class="tag-list">${createTagMarkup(video.tags)}</div>
        <div class="card-actions">
          ${primaryAction}
          ${secondaryAction}
        </div>
      </div>
    </article>
  `;
}

function renderLibrary() {
  const shortVideos = videoLibrary.filter((video) => video.format === "short");
  const longVideos = videoLibrary.filter((video) => video.format === "long");

  shortFormGrid.innerHTML = shortVideos
    .map((video, index) => createCardMarkup(video, index))
    .join("");

  longFormGrid.innerHTML = longVideos
    .map((video, index) => createCardMarkup(video, index + shortVideos.length))
    .join("");

  totalCount.textContent = String(videoLibrary.length);
  shortCount.textContent = String(shortVideos.length);
  longCount.textContent = String(longVideos.length);
}

function openVideoModal(video) {
  if (!video || !video.videoId) {
    return;
  }

  videoModalTitle.textContent = video.title;
  videoModalFrame.src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`;
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeVideoModalDialog() {
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
  videoModalFrame.src = "about:blank";
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const previewTrigger = event.target.closest("[data-preview-id]");

  if (previewTrigger) {
    const selectedVideo = videoLibrary.find((video) => video.id === previewTrigger.dataset.previewId);
    openVideoModal(selectedVideo);
    return;
  }

  if (event.target === videoModal) {
    closeVideoModalDialog();
  }
});

closeVideoModal.addEventListener("click", closeVideoModalDialog);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoModal.classList.contains("open")) {
    closeVideoModalDialog();
  }
});

renderLibrary();
