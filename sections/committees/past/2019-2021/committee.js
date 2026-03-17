const executiveBoard20192021 = [
  {
    designation: "President",
    name: "Binaya Aryal",
    email: "President@NASeAOnline.org",
    phone: "(703) 855-8581",
    state: "North Carolina",
  },
  {
    designation: "Executive Vice President",
    name: "Ambika Lohani Sharma",
    email: "EVP@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "Vice President",
    name: "Bishal Bharati",
    email: "VP@NASeAOnline.org",
    state: "North Carolina",
  },
  {
    designation: "General Secretary",
    name: "Krishna Shrestha",
    email: "GS@NASeAOnline.org",
    state: "Florida",
  },
  {
    designation: "Joint Secretary",
    name: "Rama Ghimire",
    email: "JS@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "Treasurer",
    name: "Nirmal Paudel, Ph.D.",
    email: "Treasurer@NASeAOnline.org",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Bandana Khadka",
    email: "khadkabandana76@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Sabitri Ranabhat",
    email: "sabitriranabhat@yahoo.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Bhim Timalsina",
    email: "bhimtimalsina4@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Chet Bhattarai",
    email: "chetdai99@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Dipak Ranabhat",
    email: "dipakranabhat@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "CK Parajuli",
    email: "ckparajuli@gmail.com",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Pralad Shah",
    email: "praladshah@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Sudarsan Ghaire",
    email: "sudangaire78@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Manoj K. Rai",
    email: "1979manojrai@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Narendra Baral",
    email: "narendrapbaral@yahoo.com",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Amod Devkota",
    email: "adcool5@gmail.com",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Bhishma Raj Aryal",
    email: "bhishmararyal@gmail.com",
    state: "Virginia",
  },
  {
    designation: "Executive Member",
    name: "Suman Silwal, Ph.D.",
    email: "ssilwal@hotmail.com",
    state: "Alabama",
  },
  {
    designation: "Executive Member",
    name: "Krishna Raj Devkota",
    email: "palpanepal@yahoo.com",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Sushil Poudel",
    email: "sushilpoudel23@gmail.com",
    state: "Tennessee",
  },
];

export function renderCommittees20192021() {
  return `
    <section class="section card">
      <h2>NASeA Executive Committees 2019-2021</h2>
      <h3>Executive Committee 2019-2021</h3>
      <div class="school-photo-placeholder" style="margin: 1rem auto 0;">
        <img
          class="school-photo-image"
          src="/sections/committees/past/2019-2021/images/EC 2019-2021.png?v=20260317"
          alt="Executive Committee 2019-2021"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="photo-box" style="display:none;">Executive Committee 2019-2021 Photo</div>
      </div>
      <div class="committee-list">
        ${executiveBoard20192021
          .map(
            (member) => `
          <article class="committee-member" style="grid-template-columns: 1fr;">
            <div class="committee-info">
              <h3>${member.designation}</h3>
              <p>${member.name}</p>
              <p><a href="mailto:${member.email}">${member.email}</a></p>
              ${member.phone ? `<p>${member.phone}</p>` : ""}
              <p>${member.state}</p>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
      <a class="btn btn-ghost" href="#committees-past" data-link>Back to Past Committees</a>
    </section>
  `;
}
