import { lifeMembersRaw } from "./data/life-members-raw.js";
import { deceasedMembersRaw } from "./data/deceased-members-raw.js";
import { honoraryMembersRaw } from "./data/honorary-members-raw.js";

const PAGE_SIZE = 100;

const lifeMembers = parseMembersRaw(lifeMembersRaw, "Life Members");
const deceasedMembers = parseMembersRaw(deceasedMembersRaw, "Deceased Life Members");
const honorableMembers = parseMembersRaw(honoraryMembersRaw, "Honorary Life Members");

const categoryMap = {
  life: lifeMembers,
  deceased: deceasedMembers,
  honorable: honorableMembers,
};

export function renderMembers() {
  return `
    <section class="section card">
      <h2>Members</h2>
      <div class="section-subheading-box" role="note" aria-label="Members subheading">
        Directory with search and pagination. Showing ${PAGE_SIZE} per page.
      </div>
      <p class="muted">
        Keep adding new members as one tab-separated row in
        sections/data/life-members-raw.js using this order:
        Title, First Name, Middle Name, Last Name, City, State, Country, Member Type.
      </p>

      <div class="member-toolbar" id="memberToolbar">
        <button class="member-tab active" data-category="life">Life Members (${lifeMembers.length})</button>
        <button class="member-tab" data-category="deceased">Deceased Members (${deceasedMembers.length})</button>
        <button class="member-tab" data-category="honorable">Honorable Members (${honorableMembers.length})</button>
        <input
          id="memberSearch"
          class="member-search"
          type="search"
          placeholder="Search by name, city, or state"
          aria-label="Search members"
        />
      </div>

      <p id="memberCount" class="muted"></p>
      <div id="memberList" class="member-list"></div>
      <div id="memberPagination" class="member-pagination"></div>
    </section>
  `;
}

export function initMembersSection() {
  const toolbar = document.getElementById("memberToolbar");
  const searchInput = document.getElementById("memberSearch");
  const listEl = document.getElementById("memberList");
  const countEl = document.getElementById("memberCount");
  const paginationEl = document.getElementById("memberPagination");

  if (!toolbar || !searchInput || !listEl || !countEl || !paginationEl) return;

  const state = {
    category: "life",
    query: "",
    page: 1,
  };

  const render = () => {
    const all = categoryMap[state.category] || [];
    const filtered = all.filter((m) => {
      const hay = [
        m.title,
        m.firstName,
        m.middleName,
        m.lastName,
        m.city,
        m.state,
        m.country,
        m.memberType,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(state.query);
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    state.page = Math.min(state.page, totalPages);
    const start = (state.page - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    countEl.textContent = `Total ${filtered.length} record(s). Page ${state.page} of ${totalPages}.`;

    if (!pageItems.length) {
      listEl.innerHTML = `<p class="muted">No members found for current filter.</p>`;
    } else {
      listEl.innerHTML = `
        <div class="member-table-wrap">
          <table class="member-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Member Type</th>
              </tr>
            </thead>
            <tbody>
              ${pageItems
                .map(
                  (m) => `
                  <tr>
                    <td>${escapeHtml(m.title)}</td>
                    <td>${escapeHtml(m.firstName)}</td>
                    <td>${escapeHtml(m.middleName)}</td>
                    <td>${escapeHtml(m.lastName)}</td>
                    <td>${escapeHtml(m.city)}</td>
                    <td>${escapeHtml(m.state)}</td>
                    <td>${escapeHtml(m.country)}</td>
                    <td>${escapeHtml(m.memberType)}</td>
                  </tr>
                `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    paginationEl.innerHTML = renderPagination(totalPages, state.page);

    paginationEl.querySelectorAll("button[data-page]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.page = Number(btn.dataset.page || 1);
        render();
      });
    });
  };

  toolbar.querySelectorAll(".member-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      toolbar.querySelectorAll(".member-tab").forEach((x) => x.classList.remove("active"));
      tab.classList.add("active");
      state.category = tab.dataset.category || "life";
      state.page = 1;
      render();
    });
  });

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim().toLowerCase();
    state.page = 1;
    render();
  });

  render();
}

function parseMembersRaw(raw, sectionTitle) {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith(sectionTitle))
    .filter((line) => !line.startsWith("Total Records Found"))
    .filter((line) => !line.startsWith("Title\tFirst Name"))
    .map((line) => {
      const parts = line.split("\t").map((p) => p.trim());
      while (parts.length < 8) parts.push("");
      const [title, firstName, middleName, lastName, city, state, country, memberType] = parts;

      return {
        title,
        firstName,
        middleName,
        lastName,
        city,
        state,
        country,
        memberType,
      };
    });
}

function renderPagination(totalPages, currentPage) {
  if (totalPages <= 1) return "";

  const maxButtons = 7;
  let start = Math.max(1, currentPage - 3);
  let end = Math.min(totalPages, start + maxButtons - 1);
  start = Math.max(1, end - maxButtons + 1);

  const buttons = [];
  if (currentPage > 1) {
    buttons.push(`<button data-page="${currentPage - 1}">Prev</button>`);
  }

  for (let p = start; p <= end; p += 1) {
    buttons.push(
      `<button data-page="${p}" class="${p === currentPage ? "active" : ""}">${p}</button>`
    );
  }

  if (currentPage < totalPages) {
    buttons.push(`<button data-page="${currentPage + 1}">Next</button>`);
  }

  return buttons.join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
