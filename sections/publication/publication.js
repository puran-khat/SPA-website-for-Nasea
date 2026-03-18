const yetiViewPointsData = [
  { title: "Yeti View Points - 2021", year: "2021", downloads: ["Download"] },
  {
    title: "Yeti View Points - 2019",
    year: "2019",
    downloads: ["Download"],
    files: ["Yeti-ViewPoint_2019.pdf"],
  },
  {
    title: "Yeti View Points - 2018",
    year: "2018",
    downloads: ["Download"],
    files: ["Yeti-Viewpoints_Nepali-National-Convention-2018.pdf"],
  },
  {
    title: "Yeti View Points - 2017",
    year: "2017",
    downloads: ["Download"],
    files: ["FinalYetiView_2017.pdf"],
  },
  { title: "Yeti View Points - 2016", year: "2016", downloads: ["Download"] },
  { title: "Yeti View Points - 2015", year: "2015", downloads: ["Download"] },
  { title: "Yeti View Points - 2014 Vol 10", year: "2014", downloads: ["Download"] },
  { title: "Yeti View Points - 2013 Vol 9 No 1", year: "2013", downloads: ["Download"] },
  { title: "Yeti View Points - 2012", year: "2012", downloads: ["Download"] },
  { title: "Yeti View Points - 2011", year: "2011", downloads: ["Download"] },
  { title: "Yeti View Points - 2010", year: "2010", downloads: ["Download"] },
  { title: "Yeti View Points - 2009", year: "2009", downloads: ["Download-1", "Download-2", "Download-3"] },
  { title: "Yeti View Points - 2008", year: "2008", downloads: ["Download"] },
  { title: "Yeti View Points - 2007", year: "2007", downloads: ["Download"] },
  { title: "Yeti View Points - 2006", year: "2006", downloads: ["Download"] },
  { title: "Yeti View Points - 2005", year: "2005", downloads: ["Download"] },
  { title: "Yeti View Points - 2004", year: "2004", downloads: ["Download"] },
];

const yetiViewsData = [
  { title: "Yeti Views - 2003", year: "2003", downloads: [] },
  { title: "Yeti Views - 2002", year: "2002", downloads: [] },
  { title: "Yeti Views - 2001 Jan", year: "2001", downloads: ["Download"] },
  { title: "Yeti Views - 2000", year: "2000", downloads: [] },
  { title: "Yeti Views - 1999 Jul Aug", year: "1999", downloads: ["Download"] },
  { title: "Yeti Views - 1998 Aug Vol 7 No 6", year: "1998", downloads: ["Download"] },
  { title: "Yeti Views - 1997 Jan Mar Vol 6 No 1", year: "1997", downloads: ["Download"] },
  { title: "Yeti Views - 1997 Apr Aug Vol 6 No 2", year: "1997", downloads: ["Download"] },
  { title: "Yeti Views - 1997 Oct Dec Vol 6 No 4", year: "1997", downloads: ["Download"] },
  { title: "Yeti Views - 1997-1998 Oct-Jan Vol 5/6 Nos 4/5", year: "1997", downloads: ["Download"] },
  { title: "Yeti Views - 1996 Jan Mar Vol 5 No 1", year: "1996", downloads: ["Download"] },
  { title: "Yeti Views - 1996 Apr Jun Vol 5 No 2", year: "1996", downloads: ["Download"] },
  { title: "Yeti Views - 1996 Jul Sep Vol 5 No 3", year: "1996", downloads: ["Download"] },
  { title: "Yeti Views - 1996 Sep Dec Vol 5 No 4", year: "1996", downloads: ["Download"] },
  { title: "Yeti Views - 1995 Mar Jun Vol 4 Nos 1/2", year: "1995", downloads: ["Download"] },
  { title: "Yeti Views - 1994", year: "1994", downloads: [] },
  { title: "Yeti Views - 1993", year: "1993", downloads: [] },
];

const miscPublicationsData = [
  { title: "गोरखापत्र दैनिक News on Gorkhapatra", year: "unknown", downloads: ["Download"] },
  { title: "Florida Nepal Association Vol 9 No 2 Sep 2001", year: "2001", downloads: ["Download"] },
  { title: "Diyalo Vol 5 No 2 Toronto November 1999", year: "1999", downloads: [] },
  { title: "Diyalo Vol 6 No 1 Toronto February 1999", year: "1999", downloads: [] },
];

// ── Main intro page ──────────────────────────────────────────────────────────
export function renderPublication() {
  return `
    <section class="section card">
      <h2>Publications</h2>
      <div class="section-subheading-box" role="note" aria-label="Publications subheading">
        NASeA started <strong>Yeti Views</strong> as a quarterly newsletter in 1993. Over the years,
        due to resource constraints, it became an annual publication. After collaborating with
        ANMA's "View Points", the name evolved into <strong>Yeti View Points</strong>.
        This archive also includes miscellaneous publications and news from other organizations.
      </div>
      <p>Click a section below to browse and download issues:</p>
      <ul class="pub-nav-list">
        <li><a href="#publications-yeti-viewpoints" data-link><strong>Yeti ViewPoints</strong> (2004–2021)</a> — Annual magazine published jointly with ANMA</li>
        <li><a href="#publications-yeti-views" data-link><strong>Yeti Views</strong> (1993–2003)</a> — NASeA's original quarterly newsletter</li>
        <li><a href="#publications-misc" data-link><strong>Miscellaneous Publications/News</strong></a> — Publications from other organizations and media</li>
      </ul>
    </section>
  `;
}

// ── Yeti ViewPoints sub-page ─────────────────────────────────────────────────
export function renderPublicationYetiViewPoints() {
  return `
    <section class="section card">
      <h2>Yeti ViewPoints</h2>
      <div class="section-subheading-box" role="note" aria-label="Yeti ViewPoints subheading">
        Annual magazine (2004–2021) published jointly with ANMA. Missing PDF versions are marked as <em>Coming soon</em>.
      </div>
      <p class="muted">Storage path: <code>sections/publication/years/&lt;year&gt;/</code></p>
      ${renderPublicationList(yetiViewPointsData, "yeti-view-points")}
      <p style="margin-top:1.5rem"><a href="#publications" data-link>← Back to Publications</a></p>
    </section>
  `;
}

// ── Yeti Views sub-page ──────────────────────────────────────────────────────
export function renderPublicationYetiViews() {
  return `
    <section class="section card">
      <h2>Yeti Views</h2>
      <div class="section-subheading-box" role="note" aria-label="Yeti Views subheading">
        NASeA's original quarterly newsletter (1993–2003). Missing PDF versions are marked as <em>Coming soon</em>.
      </div>
      <p class="muted">Storage path: <code>sections/publication/years/&lt;year&gt;/</code></p>
      ${renderPublicationList(yetiViewsData, "yeti-views")}
      <p style="margin-top:1.5rem"><a href="#publications" data-link>← Back to Publications</a></p>
    </section>
  `;
}

// ── Miscellaneous sub-page ───────────────────────────────────────────────────
export function renderPublicationMisc() {
  return `
    <section class="section card">
      <h2>Miscellaneous Publications/News</h2>
      <div class="section-subheading-box" role="note" aria-label="Miscellaneous publications subheading">
        Publications from other Nepali organizations and media outlets.
      </div>
      <p class="muted">Storage path: <code>sections/publication/years/&lt;year&gt;/</code></p>
      ${renderPublicationList(miscPublicationsData, "misc-publications")}
      <p style="margin-top:1.5rem"><a href="#publications" data-link>← Back to Publications</a></p>
    </section>
  `;
}

// ── Shared helper ────────────────────────────────────────────────────────────
function renderPublicationList(items, baseSlug) {
  return `
    <ul class="pub-list">
      ${items
        .map((item, index) => {
          const yearFolder = item.year || "unknown";
          const links = item.downloads.length
            ? item.downloads
                .map((label, dlIndex) => {
                  const fileName = item.files?.[dlIndex] || `${baseSlug}-${yearFolder}-${index + 1}-${dlIndex + 1}.pdf`;
                  const href = `/sections/publication/years/${yearFolder}/${fileName}`;
                  return `<a href="${href}" download>${label}</a>`;
                })
                .join(" ")
            : `<span class="muted">Coming soon</span>`;

          return `<li><span>${item.title}</span> <span class="pub-downloads">(${links})</span></li>`;
        })
        .join("")}
    </ul>
  `;
}
