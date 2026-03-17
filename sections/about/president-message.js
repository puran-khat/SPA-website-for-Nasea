export function renderAboutPresidentMessage() {
  return `
    <section class="section card">
      <div class="message-layout">
        <article>
          <h2>President's Message</h2>
          <p><strong>Dear NASeA Family,</strong></p>

          <p>
            With profound gratitude and immense pride, I step into the role of
            President of the Nepalese Association of Southeast America (NASeA)
            for the 2025-2027 term. I am deeply honored to be the first woman
            elected to this position in our organization's 34-year history-a
            milestone that reflects the evolving spirit, resilience, and strength
            of our vibrant community.
          </p>

          <p>
            Since NASeA's founding in 1991, it has stood as a beacon of unity,
            culture, and service for the Nepali diaspora across the southeastern
            United States and beyond. My own journey with NASeA began in 1999,
            when I moved to Atlanta and found not just a community, but a
            calling. Over the past 25 years, I've had the privilege to serve in
            various capacities-from leading the Women's Committee and Membership
            Drive to organizing cultural events and expanding outreach. These
            experiences have shaped my unwavering commitment to our shared values
            and the future we envision together.
          </p>

          <h3>Our Vision for NASeA</h3>
          <ul>
            <li>Foster unity through a strong sense of belonging and shared purpose</li>
            <li>Preserve and promote Nepali culture across generations</li>
            <li>Empower youth, women, and families with meaningful opportunities</li>
            <li>Build strategic partnerships in education, healthcare, and entrepreneurship</li>
          </ul>

          <h3>Key Initiatives for 2025-2027</h3>
          <ul>
            <li>Launch a career guidance program tailored for Nepali youth</li>
            <li>
              Organize annual festivals and conventions showcasing Nepali arts,
              music, dance, and cuisine
            </li>
            <li>Expand a family support network to strengthen community care</li>
            <li>Promote and elevate Nepali-owned businesses throughout the Southeast</li>
          </ul>

          <h3>My Commitment to You</h3>
          <p>
            This presidency is not merely a position-it is a promise to serve,
            uplift, and unite. I pledge to listen with an open heart, lead with
            transparency, and include every voice. Together, we will build a
            stronger, more vibrant NASeA-one that reflects the richness of our
            identity and the strength of our unity.
          </p>

          <p>
            Thank you for your trust, your support, and your belief in a shared
            future. Let us walk forward together-with courage, compassion, and
            commitment.
          </p>

          <p>
            <strong>With heartfelt appreciation,</strong><br />
            Bidya Gurung<br />
            President, NASeA (2025-2027)
          </p>

          <p class="muted">#UnityInDiversity #WomenInLeadership #NASeA2025 #NepaliDiaspora</p>
        </article>

        <aside class="president-photo-placeholder">
          <img
            class="president-photo-image"
            src="/sections/about/images/President_Bidya.jpg?v=20260317"
            alt="President Bidya Gurung"
            onerror="if (!this.dataset.retry) { this.dataset.retry = '1'; this.src = 'sections/about/images/President_Bidya.jpg'; return; } this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="photo-box" style="display:none;">President Photo Placeholder</div>
        </aside>
      </div>
    </section>
  `;
}
