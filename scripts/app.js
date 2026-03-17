import { renderHome, initHomeLightbox } from "../sections/home/home.js";
import { renderAbout } from "../sections/about/about.js";
import { renderAboutPresidentMessage } from "../sections/about/president-message.js?v=20260317";
import { renderAboutHistory } from "../sections/about/history.js";
import { renderAboutFormerPresidents } from "../sections/about/former-presidents.js";
import { renderAboutMissionStatement } from "../sections/about/mission-statement.js";
import { renderAboutInfo } from "../sections/about/info.js";
import { renderCommittees } from "../sections/committees/NASeA Executive Committee 2025-2027.js?v=20260317";
import { renderPastCommittees } from "../sections/committees/past/committees-past.js?v=20260317";
import { renderAdvisors20252027 } from "../sections/committees/committees-advisors.js";
import {
  renderCommittees20212023,
  renderCommittees20192021,
  renderCommittees20172019,
  renderCommittees20152017,
  renderCommittees20132015,
  renderCommittees20112013,
  renderCommittees20092011,
  renderCommittees20072009,
  renderCommittees20052007,
} from "../sections/committees/committee-archives.js?v=20260317";
import {
  renderPublication,
  renderPublicationYetiViewPoints,
  renderPublicationYetiViews,
  renderPublicationMisc,
} from "../sections/publication/publication.js";
import { renderResources } from "../sections/community-resources/resources.js";
import { renderAtlantaSchool } from "../sections/community-resources/resources-atlanta-nepali-school.js";
import { renderNewToUSA } from "../sections/community-resources/resources-new-to-usa.js";
import { renderElection } from "../sections/election/election.js";
import { renderEvents } from "../sections/events/events.js";
import { renderOrganizations } from "../sections/organizations/organizations.js";
import { renderOrganizationsNASeARegion } from "../sections/organizations/organizations-nasea-region.js";
import { renderMembers, initMembersSection } from "../sections/members/members.js";
import { renderFooter } from "../sections/footer.js";

const routes = {
  home: renderHome,
  about: renderAbout,
  "about-president-message": renderAboutPresidentMessage,
  "about-history": renderAboutHistory,
  "about-former-presidents": renderAboutFormerPresidents,
  "about-mission-statement": renderAboutMissionStatement,
  "about-info": renderAboutInfo,
  committees: renderCommittees,
  "committees-current": renderCommittees,
  "committees-past": renderPastCommittees,
  "committees-advisors-2025-2027": renderAdvisors20252027,
  "committees-2021-2023": renderCommittees20212023,
  "committees-2019-2021": renderCommittees20192021,
  "committees-2017-2019": renderCommittees20172019,
  "committees-2015-2017": renderCommittees20152017,
  "committees-2013-2015": renderCommittees20132015,
  "committees-2011-2013": renderCommittees20112013,
  "committees-2009-2011": renderCommittees20092011,
  "committees-2007-2009": renderCommittees20072009,
  "committees-2005-2007": renderCommittees20052007,
  publications: renderPublication,
  "publications-yeti-viewpoints": renderPublicationYetiViewPoints,
  "publications-yeti-views": renderPublicationYetiViews,
  "publications-misc": renderPublicationMisc,
  resources: renderResources,
  "resources-atlanta-nepali-school": renderAtlantaSchool,
  "resources-new-to-usa": renderNewToUSA,
  election: renderElection,
  events: renderEvents,
  organizations: renderOrganizations,
  "organizations-nasea-region": renderOrganizationsNASeARegion,
  members: renderMembers,
};

const nav = document.getElementById("siteNav");
const menuToggle = document.getElementById("menuToggle");
const app = document.getElementById("app");
const siteFooter = document.getElementById("siteFooter");
const aboutToggle = document.getElementById("aboutToggle");
const aboutMenu = document.getElementById("aboutMenu");
const committeeToggle = document.getElementById("committeeToggle");
const committeeMenu = document.getElementById("committeeMenu");
const publicationToggle = document.getElementById("publicationToggle");
const publicationMenu = document.getElementById("publicationMenu");
const resourcesToggle = document.getElementById("resourcesToggle");
const resourcesMenu = document.getElementById("resourcesMenu");
const organizationsToggle = document.getElementById("organizationsToggle");
const organizationsMenu = document.getElementById("organizationsMenu");

siteFooter.innerHTML = renderFooter();

aboutToggle.addEventListener("click", () => {
  const isOpen = aboutMenu.classList.toggle("open");
  aboutToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

committeeToggle.addEventListener("click", () => {
  const isOpen = committeeMenu.classList.toggle("open");
  committeeToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

publicationToggle.addEventListener("click", () => {
  const isOpen = publicationMenu.classList.toggle("open");
  publicationToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

resourcesToggle.addEventListener("click", () => {
  const isOpen = resourcesMenu.classList.toggle("open");
  resourcesToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

organizationsToggle.addEventListener("click", () => {
  const isOpen = organizationsMenu.classList.toggle("open");
  organizationsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute);

document.addEventListener("click", (event) => {
  if (!event.target.closest("#aboutGroup")) {
    closeAboutMenu();
  }
  if (!event.target.closest("#committeeGroup")) {
    closeCommitteeMenu();
  }
  if (!event.target.closest("#publicationGroup")) {
    closePublicationMenu();
  }
  if (!event.target.closest("#resourcesGroup")) {
    closeResourcesMenu();
  }
  if (!event.target.closest("#organizationsGroup")) {
    closeOrganizationsMenu();
  }

  const link = event.target.closest("a[data-link]");
  if (!link) return;

  closeAboutMenu();
  closeCommitteeMenu();
  closePublicationMenu();
  closeResourcesMenu();
  closeOrganizationsMenu();

  if (window.innerWidth < 720) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

function renderRoute() {
  const routeKey = (location.hash.replace("#", "") || "home").toLowerCase();
  const view = routes[routeKey] || routes.home;
  app.innerHTML = view();

  if (routeKey === "members") {
    initMembersSection();
  }
  if (routeKey === "home" || routeKey === "") {
    initHomeLightbox();
  }

  setActiveLink(routeKey);
}

function setActiveLink(routeKey) {
  const isAboutRoute = routeKey === "about" || routeKey.startsWith("about-");
  const isCommitteesRoute =
    routeKey === "committees" ||
    routeKey === "committees-current" ||
    routeKey === "committees-past" ||
    routeKey.startsWith("committees-");

  document.querySelectorAll(".site-nav a").forEach((a) => {
    const target = a.getAttribute("href").replace("#", "");
    const isActive = target === routeKey;
    a.classList.toggle("active", isActive);
  });

  const isPublicationRoute =
    routeKey === "publications" || routeKey.startsWith("publications-");
  const isResourcesRoute =
    routeKey === "resources" || routeKey.startsWith("resources-");
  const isOrganizationsRoute =
    routeKey === "organizations" || routeKey.startsWith("organizations-");

  aboutToggle.classList.toggle("active", isAboutRoute);
  committeeToggle.classList.toggle("active", isCommitteesRoute);
  publicationToggle.classList.toggle("active", isPublicationRoute);
  resourcesToggle.classList.toggle("active", isResourcesRoute);
  organizationsToggle.classList.toggle("active", isOrganizationsRoute);
}

function closeAboutMenu() {
  aboutMenu.classList.remove("open");
  aboutToggle.setAttribute("aria-expanded", "false");
}

function closeCommitteeMenu() {
  committeeMenu.classList.remove("open");
  committeeToggle.setAttribute("aria-expanded", "false");
}

function closePublicationMenu() {
  publicationMenu.classList.remove("open");
  publicationToggle.setAttribute("aria-expanded", "false");
}

function closeResourcesMenu() {
  resourcesMenu.classList.remove("open");
  resourcesToggle.setAttribute("aria-expanded", "false");
}

function closeOrganizationsMenu() {
  organizationsMenu.classList.remove("open");
  organizationsToggle.setAttribute("aria-expanded", "false");
}
