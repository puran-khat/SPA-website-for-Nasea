const executiveBoard20172019 = [
  {
    designation: "President",
    name: "Madhav Dhakal",
    email: "President@NASeAOnline.org",
    phone: "(336) 471-4709",
    state: "North Carolina",
  },
  {
    designation: "Executive Vice President",
    name: "Sushil Nepal (Resigned)",
    state: "North Carolina",
  },
  {
    designation: "Vice President",
    name: "Ambika Lohani Sharma",
    email: "VP@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "General Secretary",
    name: "Krishna Shrestha",
    email: "GS@NASeAOnline.org",
    state: "Florida",
  },
  {
    designation: "Joint Secretary",
    name: "Mohan Bista",
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
    name: "Manoj Jha, Ph.D.",
    email: "amkjha@hotmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Thakur B Karkee, Ph.D.",
    email: "tkarki_n@yahoo.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Bishal Bharati",
    email: "ugly_bishal@yahoo.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Namita Ghimire",
    email: "namita_ghimire@yahoo.com",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Arun Shrestha, Ph.D.",
    email: "*****@hotmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Bhim Prasad Timilsina",
    email: "bhimtimalsina4@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Prashim Poudyal",
    email: "prashim_poudyal@yahoo.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Binita KC, Ph.D.",
    email: "leebinita@gmail.com",
    state: "Tennessee",
  },
  {
    designation: "Executive Member",
    name: "Rama D Ghimire",
    email: "ramadhungel@yahoo.com",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Manish Shakya",
    email: "manish_shakya@hotmail.com",
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
    name: "Pammi Dhungana Parajuli",
    email: "pammid@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Krishna Raj Devkota",
    email: "palpanepal@yahoo.com",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Binaya Aryal",
    email: "binubinaya@hotmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Suman Silwal, Ph.D.",
    email: "ssilwal@hotmail.com",
    state: "Alabama",
  },
];

export function renderCommittees20172019() {
  return `
    <section class="section card">
      <h2>NASeA Executive Committees 2017-2019</h2>
      <h3>Executive Committee 2017-2019</h3>
      <div class="school-photo-placeholder" style="margin: 1rem auto 0;">
        <img
          class="school-photo-image"
          src="/sections/committees/past/2017-2019/images/EC 2017-2019.png?v=20260317"
          alt="Executive Committee 2017-2019"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="photo-box" style="display:none;">Executive Committee 2017-2019 Photo</div>
      </div>
      <div class="committee-list">
        ${executiveBoard20172019
          .map(
            (member) => `
          <article class="committee-member" style="grid-template-columns: 1fr;">
            <div class="committee-info">
              <h3>${member.designation}</h3>
              <p>${member.name}</p>
              ${member.email ? `<p><a href="mailto:${member.email}">${member.email}</a></p>` : ""}
              ${member.phone ? `<p>${member.phone}</p>` : ""}
              ${member.state ? `<p>${member.state}</p>` : ""}
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
