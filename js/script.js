const emulators = [
  { name: "NES", img: "images/nes.png", alt: "NES", desc: "Play classics across generations." },
  { name: "SNES", img: "images/snes.png", alt: "SNES", desc: "Super Nintendo adventures re‑imagined." },
  { name: "PlayStation", img: "images/psx.png", alt: "PlayStation", desc: "Retro 3D classics brought back to life." },
  { name: "Game Boy", img: "images/gameboy.png", alt: "Game Boy", desc: "Portable nostalgia in your pocket." },
  { name: "NDS", img: "images/nds.png", alt: "Nintendo DS", desc: "Dual‑screen handheld classics." },
  { name: "PSP", img: "images/psp.png", alt: "PSP", desc: "Sony’s portable powerhouse." }
];

function exploreEmulators() {
  window.location.href = "emulators.html";
}

function renderEmulatorCards() {
  const container = document.getElementById("emulatorCards");
  if (!container) return;

  container.innerHTML = emulators
    .map(emulator => `
      <div class="col-6 col-sm-4 col-md-2">
        <div class="card bg-secondary text-light text-center h-100">
          <img src="${emulator.img}" class="card-img-top mx-auto mt-3 emulator-icon" alt="${emulator.alt}">
          <div class="card-body">
            <h5 class="pixel-font text-warning">${emulator.name}</h5>
            <p>${emulator.desc}</p>
          </div>
        </div>
      </div>
    `)
    .join("");
}

function configureYouTubeEmbed() {
  const player = document.getElementById("youtubePlayer");
  if (!player) return;

  const baseSrc = player.getAttribute("data-yt-base");
  if (!baseSrc) return;

  // Add origin only when served over HTTP(S), which works for localhost and Firebase.
  const isHttp = window.location.protocol === "http:" || window.location.protocol === "https:";
  if (!isHttp) {
    player.src = baseSrc;
    return;
  }

  const separator = baseSrc.includes("?") ? "&" : "?";
  player.src = `${baseSrc}${separator}origin=${encodeURIComponent(window.location.origin)}`;
}

function enableCarouselKeyboardControls() {
  const carouselElement = document.getElementById("highlightCarousel");
  if (!carouselElement || typeof bootstrap === "undefined") return;

  const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement);

  document.addEventListener("keydown", (event) => {
    const tag = event.target && event.target.tagName ? event.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || event.target.isContentEditable) return;

    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "l") {
      carousel.prev();
    }

    if (event.key === "ArrowRight" || event.key.toLowerCase() === "r") {
      carousel.next();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderEmulatorCards();
  configureYouTubeEmbed();
  enableCarouselKeyboardControls();
});