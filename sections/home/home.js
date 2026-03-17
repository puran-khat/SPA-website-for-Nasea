import { HOME_NEWS_ARTICLES } from "./home-content.js";

export function renderHome() {
  return `
    <div class="home-layout">
      <div class="home-sidebar">
        <article class="card">
          <div class="cta-row">
            <a class="btn btn-primary" href="#events" data-link>Upcoming Events</a>
            <a class="btn btn-ghost" href="#organizations" data-link>Get Involved</a>
          </div>
        </article>
        <aside class="card">
          <h3>Quick Updates</h3>
          <div class="timeline-item">
            <strong>Community Announcement</strong>
            <p>Election and organizational updates are available for members.</p>
          </div>
          <div class="timeline-item">
            <strong>Relief &amp; Support</strong>
            <p>Fundraising and disbursement reports are published for transparency.</p>
          </div>
        </aside>
      </div>

      <section class="home-news card">
        <h2>Latest News &amp; Bulletins</h2>
        ${HOME_NEWS_ARTICLES.join("\n")}
      </section>
    </div>

    <div id="homeLightbox" class="lightbox-overlay" style="display:none;" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="lightbox-close" id="lightboxClose" aria-label="Close image">&times;</button>
      <img class="lightbox-img" id="lightboxImg" src="" alt="">
    </div>
  `;
}

export function initHomeLightbox() {
  const overlay = document.getElementById("homeLightbox");
  if (!overlay) return;

  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  const closeLightbox = () => {
    overlay.style.display = "none";
    lightboxImg.src = "";
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".news-photo-image").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.style.display === "flex") {
      closeLightbox();
    }
  });
}
