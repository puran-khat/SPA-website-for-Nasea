export function renderAbout() {
  return `
    <section class="section card">
      <h2>About Us</h2>
      <p>Select a subgroup from the About Us dropdown:</p>
      <div class="grid">
        <a class="btn btn-ghost" href="#about-bylaw" data-link>By Law</a>
        <a class="btn btn-ghost" href="#about-president-message" data-link>President Message</a>
        <a class="btn btn-ghost" href="#about-history" data-link>History of NASeA</a>
        <a class="btn btn-ghost" href="#about-former-presidents" data-link>Former President</a>
        <a class="btn btn-ghost" href="#about-mission-statement" data-link>Mission Statement</a>
        <a class="btn btn-ghost" href="#about-info" data-link>NASeA Info</a>
      </div>
    </section>
  `;
}
