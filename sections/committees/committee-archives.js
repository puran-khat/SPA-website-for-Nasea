function renderArchivePage(title) {
  return `
    <section class="section card">
      <h2>${title}</h2>
      <p class="muted">Content placeholder. Add full committee details here later.</p>
      <a class="btn btn-ghost" href="#committees" data-link>Back to Committees</a>
    </section>
  `;
}

export function renderCommittees20212023() {
  return renderArchivePage("NASeA Executive Committees 2021-2023");
}

export function renderCommittees20192021() {
  return renderArchivePage("NASeA Executive Committees 2019-2021");
}

export function renderCommittees20172019() {
  return renderArchivePage("NASeA Executive Committees 2017-2019");
}

export function renderCommittees20152017() {
  return renderArchivePage("NASeA Executive Committees 2015-2017");
}

export function renderCommittees20132015() {
  return renderArchivePage("NASeA Executive Committees 2013-2015");
}

export function renderCommittees20112013() {
  return renderArchivePage("NASeA Executive Committees 2011-2013");
}

export function renderCommittees20092011() {
  return renderArchivePage("NASeA Executive Committees 2009-2011");
}

export function renderCommittees20072009() {
  return renderArchivePage("NASeA Executive Committees 2007-2009");
}

export function renderCommittees20052007() {
  return renderArchivePage("NASeA Executive Committees 2005-2007");
}
