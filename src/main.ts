import "./style.css";
import { songs } from "./songs";

const LANG_LABELS: Record<string, string> = {
  es: "Castellano",
  gl: "Galego",
};

// ─── Build Navigation ────────────────────────────────────────────────────────

const nav = document.getElementById("song-nav") as HTMLElement;
const main = document.getElementById("song-sections") as HTMLElement;

songs.forEach((song) => {
  // Nav button
  const btn = document.createElement("button");
  btn.className = "nav-btn";
  btn.dataset.id = song.id;
  btn.textContent = song.title;
  btn.addEventListener("click", () => {
    const target = document.getElementById(song.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  nav.appendChild(btn);

  // Song section
  const section = document.createElement("section");
  section.id = song.id;
  section.className = "song-section";

  // ── Heading ──────────────────────────────────────────────────────────────
  const heading = document.createElement("div");
  heading.className = "song-heading";

  const titleWrap = document.createElement("div");
  titleWrap.className = "song-heading-text";

  const title = document.createElement("h2");
  title.textContent = song.title;

  const artist = document.createElement("p");
  artist.className = "artist";
  artist.textContent = song.artist;

  titleWrap.appendChild(title);
  titleWrap.appendChild(artist);
  heading.appendChild(titleWrap);

  // ── Translation toggles (only if translations are defined) ────────────────
  const availableLangs = Object.entries(song.translations ?? {}).filter(
    ([, text]) => !!text
  );

  let activeTranslation: string | null = null;
  let translationEl: HTMLPreElement | null = null;

  if (availableLangs.length > 0) {
    const toggleGroup = document.createElement("div");
    toggleGroup.className = "translation-toggles";

    availableLangs.forEach(([lang]) => {
      const toggleBtn = document.createElement("button");
      toggleBtn.className = "translation-btn";
      toggleBtn.dataset.lang = lang;
      toggleBtn.textContent = LANG_LABELS[lang] ?? lang.toUpperCase();

      toggleBtn.addEventListener("click", () => {
        const isSameLang = activeTranslation === lang;

        // Reset all buttons
        toggleGroup
          .querySelectorAll<HTMLButtonElement>(".translation-btn")
          .forEach((b) => b.classList.remove("active"));

        if (isSameLang) {
          // Hide translation
          activeTranslation = null;
          translationEl?.remove();
          translationEl = null;
          lyricsWrapper.classList.remove("with-translation");
        } else {
          // Show translation
          activeTranslation = lang;
          toggleBtn.classList.add("active");

          const text = song.translations?.[lang as "es" | "gl"] ?? "";
          if (!translationEl) {
            translationEl = document.createElement("pre");
            translationEl.className = "lyrics translation-lyrics";
          }
          translationEl.textContent = text;
          lyricsWrapper.appendChild(translationEl);
          lyricsWrapper.classList.add("with-translation");
        }
      });

      toggleGroup.appendChild(toggleBtn);
    });

    heading.appendChild(toggleGroup);
  }

  // ── Lyrics ────────────────────────────────────────────────────────────────
  const lyricsWrapper = document.createElement("div");
  lyricsWrapper.className = "lyrics-wrapper";

  const lyricsEl = document.createElement("pre");
  lyricsEl.className = "lyrics";
  lyricsEl.textContent = song.lyrics;

  lyricsWrapper.appendChild(lyricsEl);

  section.appendChild(heading);
  section.appendChild(lyricsWrapper);
  main.appendChild(section);
});

// ─── Highlight Active Nav Button via IntersectionObserver ────────────────────

const navButtons = new Map<string, HTMLButtonElement>();
nav.querySelectorAll<HTMLButtonElement>(".nav-btn").forEach((btn) => {
  navButtons.set(btn.dataset.id!, btn);
});

function setActive(id: string): void {
  navButtons.forEach((btn, key) => {
    btn.classList.toggle("active", key === id);
    if (key === id) {
      btn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  { threshold: 0.25 },
);

document.querySelectorAll<HTMLElement>(".song-section").forEach((section) => {
  observer.observe(section);
});

// Activate first song on load
if (songs.length > 0) {
  setActive(songs[0].id);
}

