const executiveBoard20112013 = [
  { designation: "President", nameState: "Sanjeeb Sapkota, GA", email: "yessapkota@gmail.com", phone: "678-557-8389" },
  { designation: "Executive Vice President", nameState: "Ram S. Dongol, GA", email: "rsdongol@hotmail.com", phone: "404-310-6808" },
  { designation: "Vice President", nameState: "Dhana Timilsina, GA", email: "timil77@yahoo.com", phone: "404-751-7420" },
  { designation: "General Secretary", nameState: "Sagun Shrestha, GA", email: "saguncha@hotmail.com", phone: "770-943-0140" },
  { designation: "Joint Secretary", nameState: "Bimal Kumar Nepal, FL", email: "bimnepal@gmail.com", phone: "561-704-5579" },
  { designation: "Treasurer", nameState: "Gobinda Shrestha, GA", email: "gobind.shrestha@gmail.com", phone: "404-313-0337" },
  { designation: "Executive Member", nameState: "Janak Baral, GA", email: "janakbaral@yahoo.com", phone: "770-990-0897" },
  { designation: "Executive Member", nameState: "Dr. Ram Chandra Baral, SC", email: "tiptop33@hotmail.com", phone: "803-719-1428" },
  { designation: "Executive Member", nameState: "Hari Bhandari, GA", email: "haribhandariatlanta@gmail.com", phone: "404-502-6339" },
  { designation: "Executive Member", nameState: "Mohan B. Bista, GA", email: "bista_mohan@hotmail.com", phone: "678-577-3376" },
  { designation: "Executive Member", nameState: "Madhav Dhakal, NC", email: "md_dhakal@yahoo.com", phone: "336-471-4709" },
  { designation: "Executive Member", nameState: "Dr. Lila Bahadur Karki, AL", email: "contactlilakarki2010@gmail.com", phone: "334-209-9235" },
  { designation: "Executive Member", nameState: "Kumar, KC, GA", email: "kumarkc001@hotmail.com", phone: "347-531-6431" },
  { designation: "Executive Member", nameState: "Narayan Khadka, NC", email: "khadkapeace@gmail.com", phone: "336-707-0592" },
  { designation: "Executive Member", nameState: "Choodamani Khanal, FL", email: "ckhanal@gmail.com", phone: "305-485-2369" },
  { designation: "Executive Member", nameState: "Priti Khatri, KY", email: "pskhatri@hotmail.com", phone: "502-442-1096" },
  { designation: "Executive Member", nameState: "Madhav Mainali, AL", email: "madhavmainali@gmail.com", phone: "256-280-4179" },
  { designation: "Executive Member", nameState: "Dr. Tilak Shrestha, AL", email: "tilakbs@hotmail.com", phone: "256-970-9112" },
  { designation: "Executive Member", nameState: "Dipendra Bikram Thapa, GA", email: "dipendrat@hotmail.com", phone: "678-428-7876" },
];

export function renderCommittees20112013() {
  return `
    <section class="section card">
      <h2>NASeA Executive Committees 2011-2013</h2>
      <h3>Executive Members 2011-13</h3>
      <p class="muted">NASeA Board of Directors and Officers 2011-2013</p>

      <div class="committee-list">
        ${executiveBoard20112013
          .map(
            (member) => `
          <article class="committee-member" style="grid-template-columns: 1fr;">
            <div class="committee-info">
              <h3>${member.designation}</h3>
              <p>${member.nameState}</p>
              <p><a href="mailto:${member.email}">${member.email}</a></p>
              <p>${member.phone}</p>
            </div>
          </article>
        `
          )
          .join("")}
      </div>

      <div class="section" style="margin-top: 1rem;">
        <p><strong>President (Sanjeeb Sapkota's) Address</strong><br>2821 Valley Spring Dr<br>Lawrenceville, 30044, GA</p>
        <p><strong>Treasurer (Gobinda Shrestha's) Address</strong><br>359 ROSEGLEN DRIVE<br>MARIETTA, GA 30066</p>
      </div>

      <a class="btn btn-ghost" href="#committees-past" data-link>Back to Past Committees</a>
    </section>
  `;
}
