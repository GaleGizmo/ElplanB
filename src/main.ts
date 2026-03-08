import "./style.css";
import { songs } from "./songs";

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

  const heading = document.createElement("div");
  heading.className = "song-heading";

  const title = document.createElement("h2");
  title.textContent = song.title;

  const artist = document.createElement("p");
  artist.className = "artist";
  artist.textContent = song.artist;

  heading.appendChild(title);
  heading.appendChild(artist);

  const lyricsEl = document.createElement("pre");
  lyricsEl.className = "lyrics";
  lyricsEl.textContent = song.lyrics;

  section.appendChild(heading);
  section.appendChild(lyricsEl);
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
