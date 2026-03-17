const executiveBoard20152017 = [
  {
    designation: "President",
    name: "Bimal Nepal",
    email: "President@NASeAOnline.org",
    phone: "(561) 704-5579",
  },
  {
    designation: "Executive Vice President",
    name: "Shailendra Bajracharya",
    email: "EVP@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "Vice President",
    name: "Tara Prasad Poon Magar",
    email: "VP@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "General Secretary",
    name: "Shiva Bista",
    email: "GS@NASeAOnline.org",
    state: "North Carolina",
  },
  {
    designation: "Joint Secretary",
    name: "Krishna Shrestha",
    email: "JS@NASeAOnline.org",
    state: "Florida",
  },
  {
    designation: "Treasurer",
    name: "Pashupati Neupane",
    email: "Treasurer@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Bhuwan Khanal",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Bidya Gurung",
    email: "BidyaGurung@aol.com",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Namita Ghimire",
    email: "namita_ghimire@yahoo.com",
    state: "Gerogia",
  },
  {
    designation: "Executive Member",
    name: "Mr. Gajendra Aryal",
    state: "Maryland",
  },
  {
    designation: "Executive Member",
    name: "Mr. Giwan R. Pandey",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Mr. Krishna Raj Devkota",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Manoj Jha, Ph.D.",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Mr. Manish Shakya",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Mr. Narendra Baral",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Dr. Niroj Basnet",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Mr. Satish Chandra Gupta",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Suman Silwal, Ph.D.",
    state: "Alabama",
  },
  {
    designation: "Executive Member",
    name: "Mr. Sushil Nepal",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Udhav Karki",
    email: "Udhav_Karki@yahoo.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Mr. Yogeshwor Karki",
    state: "Georgia",
  },
];

export function renderCommittees20152017() {
  return `
    <section class="section card">
      <h2>NASeA Executive Committees 2015-2017</h2>
      <h3>Executive Members 2015-2017</h3>
      <div class="committee-list">
        ${executiveBoard20152017
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
