const executiveBoard20132015 = [
  {
    designation: "President",
    name: "Dr. Ram Chandra Baral",
    email: "President@NASeAOnline.org",
    phone: "(803) 719-1428 (Main)",
    phone2: "(803) 705-4988 (Secondary)",
    state: "South Carolina",
    address: "PO Box 7593, Columbia, SC 29204",
  },
  {
    designation: "Executive Vice President",
    name: "Bimal Nepal",
    email: "EVP@NASeAOnline.org",
    phone: "(561) 704-5579",
    state: "Florida",
  },
  {
    designation: "Vice President",
    name: "Shailendra Bajracharya",
    email: "VP@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "General Secretary",
    name: "Dr. Tilak Shrestha",
    email: "GS@NASeAOnline.org",
    state: "Alabama",
  },
  {
    designation: "Joint Secretary",
    name: "Ambika Lohani Sharma",
    email: "JS@NASeAOnline.org",
    state: "Georgia",
  },
  {
    designation: "Treasurer (Resigned)",
    name: "Bala Ghimire",
    email: "Treasurer@NASeAOnline.org",
    state: "Illinois",
    address: "5909 N California Ave, Chicago IL, 60659",
  },
  {
    designation: "Executive Member",
    name: "Janak Baral",
    email: "janakbaral@yahoo.com",
    phone: "(770) 990-0897",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Dr. Samar Paija Magar",
    email: "samarpaiza@yahoo.com",
    state: "Mississippi",
  },
  {
    designation: "Executive Member",
    name: "Dr. Nita Thapa",
    email: "nitathapa@yahoo.com",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Dr. Shankar Prasad Parajuli",
    email: "shankarparajuli@yahoo.com",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Dilip Panthee",
    email: "drpanthee@yahoo.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Bishu Sapkota",
    email: "bsapkota2000@yahoo.com",
    phone: "(678) 597-8068",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Pravin Paudel",
    email: "prawin_memo@hotmail.com",
    state: "South Carolina",
  },
  {
    designation: "Executive Member",
    name: "Dipendra N. Lamichhane",
    email: "amrikane@gmail.com",
    state: "North Carolina",
  },
  {
    designation: "Executive Member",
    name: "Choodamani Khanal",
    email: "ckhanal@gmail.com",
    phone: "(305) 485-2369",
    state: "Florida",
  },
  {
    designation: "Executive Member",
    name: "Krishna Shrestha",
    email: "krishnashr@gmail.com",
    state: "Florida",
  },
  {
    designation: "Executive Member",
    name: "Bidya Gurung",
    email: "BidyaGurung@aol.com",
    state: "Georgia",
  },
  {
    designation: "Executive Member",
    name: "Dr. Nar Kaji Gurung",
    email: "nkgurung2002@yahoo.ca",
    state: "Alabama",
  },
  {
    designation: "Executive Member",
    name: "Sujata Dhungel",
    email: "nnsujata@gmail.com",
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
    name: "Dr. Sushil Adhikari",
    email: "sushil.adhikari@auburn.edu",
    state: "Alabama",
  },
];

export function renderCommittees20132015() {
  return `
    <section class="section card">
      <h2>NASeA Executive Committees 2013-2015</h2>
      <h3>Executive Members 2013-2015</h3>
      <div class="school-photo-placeholder" style="margin: 1rem auto 0;">
        <img
          class="school-photo-image"
          src="/sections/committees/past/2013-2015/images/EM 2013-2015.png"
          alt="Executive Members 2013-2015"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="photo-box" style="display:none;">Executive Members 2013-2015 Photo</div>
      </div>
      <p class="muted">NASeA Board of Directors and Officers 2013-2015</p>
      <div class="committee-list">
        ${executiveBoard20132015
          .map(
            (member) => `
          <article class="committee-member" style="grid-template-columns: 1fr;">
            <div class="committee-info">
              <h3>${member.designation}</h3>
              <p>${member.name}</p>
              ${member.email ? `<p><a href="mailto:${member.email}">${member.email}</a></p>` : ""}
              ${member.phone ? `<p>${member.phone}</p>` : ""}
              ${member.phone2 ? `<p>${member.phone2}</p>` : ""}
              ${member.state ? `<p>${member.state}</p>` : ""}
              ${member.address ? `<p>${member.address}</p>` : ""}
            </div>
          </article>
        `
          )
          .join("")}
      </div>

      <div class="section" style="margin-top: 1rem;">
        <p><strong>Mailing Address for President</strong><br>Dr. Ram Chandra Baral<br>PO Box 7593<br>Columbia, SC 29204</p>
        <p><strong>Mailing Address for Treasurer</strong><br>Bala Ghimire<br>5909 N California Ave<br>Chicago IL, 60659</p>
        <p><strong>Mailing Address for Treasurer</strong><br>Bala Ghimire<br>5909 N California Ave<br>Chicago IL, 60659</p>
      </div>

      <a class="btn btn-ghost" href="#committees-past" data-link>Back to Past Committees</a>
    </section>
  `;
}
