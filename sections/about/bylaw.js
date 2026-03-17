const BYLAW_PDF_PATH = "/sections/about/bylaw-files/NASeA_ByLaws.pdf";

export function renderAboutByLaw() {
  return `
    <section class="section card">
      <h2>Official Bylaws Document</h2>
      <p>
        <a class="btn btn-ghost" href="${BYLAW_PDF_PATH}" target="_blank" rel="noopener">
          Open / Download By Laws PDF
        </a>
      </p>
      <iframe
        title="NASeA By Laws PDF"
        src="${BYLAW_PDF_PATH}#page=1"
        width="100%"
        height="900"
        style="border: 1px solid #d8dee8; border-radius: 10px; background: #fff;"
      ></iframe>
    </section>
  `;
}
