export function renderCommittees() {
  const committeeMembers = [
    { designation: "President", name: "Bidya Gurung", state: "GA" },
    { designation: "Executive Vice President", name: "Dilip Panthi", state: "NC" },
    { designation: "Vice President", name: "Pranaya Lama", state: "GA" },
    { designation: "General Secretary", name: "Shikshya Gautam", state: "GA" },
    { designation: "Joint Secretary", name: "Bimala Adhikari", state: "NC" },
    { designation: "Treasurer", name: "Puran Raj Khatiwada", state: "GA" },
    { designation: "Executive Member", name: "Abhi Rajbanshi", state: "SC" },
    { designation: "Executive Member", name: "Guru Prasad Dhungel", state: "SC" },
    { designation: "Executive Member", name: "Hom P. Lamsal", state: "NC" },
    { designation: "Executive Member", name: "Jay Narayan Sah", state: "GA" },
    { designation: "Executive Member", name: "Kalpana Bhattarai", state: "GA" },
    { designation: "Executive Member", name: "Kusum Baral", state: "SC" },
    { designation: "Executive Member", name: "Nishant Aryal", state: "GA" },
    { designation: "Executive Member", name: "Parbati Timalsina", state: "NC" },
    { designation: "Executive Member", name: "Prativa Khadka", state: "LA" },
    { designation: "Executive Member", name: "Rama Pahari", state: "FL" },
    { designation: "Executive Member", name: "Rubi Baral", state: "GA" },
    { designation: "Executive Member", name: "Rajendra Neupane", state: "SC" },
    { designation: "Executive Member", name: "Shankar P. Parajuli", state: "MA" },
    { designation: "Executive Member", name: "Sangita Malla", state: "LA" },
    { designation: "Executive Member", name: "Subash Pokhrel", state: "MD" },
  ];

  return `
    <section class="section card">
      <h2>NASeA Executive Committee 2025-2027</h2>
      <h3>Current Committee</h3>
      <div class="committee-list">
        ${committeeMembers
          .map(
            (member) => `
          <article class="committee-member">
            <div class="committee-photo">Photo Placeholder</div>
            <div class="committee-info">
              <h3>${member.designation}</h3>
              <p>${member.name}, ${member.state}</p>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}
