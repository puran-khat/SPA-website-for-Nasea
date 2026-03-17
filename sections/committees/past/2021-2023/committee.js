const executiveBoard20212023 = [
  {
    designation: "President",
    nameState: "Krishna Shrestha, FL",
    email: "President@NASeAOnline.org",
    phone: "(561) 310-0694",
  },
  {
    designation: "Executive Vice President",
    nameState: "Dr. Niroj Basnet, GA",
    email: "EVP@NASeAOnline.org",
  },
  {
    designation: "Vice President",
    nameState: "Satish C Gupta, SC",
    email: "VP@NASeAOnline.org",
  },
  {
    designation: "General Secretary",
    nameState: "Sangam Baniya, TX",
    email: "GS@NASeAOnline.org",
  },
  {
    designation: "Joint Secretary",
    nameState: "Dr Manoj Lamichhane, FL",
    email: "JS@NASeAOnline.org",
  },
  {
    designation: "Treasurer",
    nameState: "Baburam Sharma, GA",
    email: "Treasurer@NASeAOnline.or",
  },
  {
    designation: "Executive Member",
    nameState: "Ashish Subedi, VA",
    email: "ashsubedi2002@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Babu Subedi, NC",
    email: "bsubedi7@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Binita Lakandri, FL",
    email: "lakandri@yahoo.com",
  },
  {
    designation: "Executive Member",
    nameState: "Bishal Sapkota, FL",
    email: "bslsapkota@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Dandapani Chapagai, SC",
    email: "chapagaidanda@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Ganesh Bhattarai, NC",
    email: "bhattaraiganesh66@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Jhanak Thapaliya, FL",
    email: "thapaliyaj@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Kalpana Aryal, MD",
    email: "dipndepot@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Manoj K. Rai, NC",
    email: "1979manojrai@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Krishna Devkota, GA",
    email: "palpanepal@yahoo.com",
  },
  {
    designation: "Executive Member",
    nameState: "Richa Sharma, SC",
    email: "richricha51@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Sita Ghimire Mainali, AL",
    email: "sitadidi@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Dr Suman Silwal, AL",
    email: "ssilwal@hotmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Sunita Khatiwada, FL",
    email: "sunitakw9@gmail.com",
  },
  {
    designation: "Executive Member",
    nameState: "Sushil Poudel, TN",
    email: "sushilpoudel23@gmail.com",
  },
];

export function renderCommittees20212023() {
  return `
    <section class="section card">
      <h2>NASeA Executive Committees 2021-2023</h2>
      <h3>Executive Committee 2021-2023</h3>
      <div class="school-photo-placeholder" style="margin: 1rem auto 0;">
        <img
          class="school-photo-image"
          src="/sections/committees/past/2021-2023/images/EC 2021-2023.png?v=20260317"
          alt="Executive Committee 2021-2023"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="photo-box" style="display:none;">Executive Committee 2021-2023 Photo</div>
      </div>
      <div class="committee-list">
        ${executiveBoard20212023
          .map(
            (member) => `
          <article class="committee-member" style="grid-template-columns: 1fr;">
            <div class="committee-info">
              <h3>${member.designation}</h3>
              <p>${member.nameState}</p>
              <p><a href="mailto:${member.email}">${member.email}</a></p>
              ${member.phone ? `<p>${member.phone}</p>` : ""}
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
