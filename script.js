// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//top-menu
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = document.queSelectorAll("a");
topMenuEl.element.addEventListener("click");

//sub menu

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
//Set the CSS position property of subMenuEl to the value of absolute.
// subMenuEl.classList.add("absolute");
// subMenuEl.classList.add("0");

//created fuction
menuLinks.forEach(function (link) {
  // Create an <a> element
  const anchorElement = document.createElement("a");

  // Set the href and text content for the <a> element
  anchorElement.href = link.href;
  anchorElement.textContent = link.text;
  // Append the <a> element to the container
  topMenuEl.appendChild(anchorElement);
});

//main content

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.appendChild(document.createElement("h1")).textContent =
  "DOM Manipulation";
mainEl.classList.add(`flex-ctr`);
