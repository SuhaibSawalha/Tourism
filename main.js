let currentH5 = document.querySelector("#map h5:first-child");
function lineOnMap(h5, change = 1) {
  if (change) {
    currentH5 = h5;
  }
  document
    .querySelectorAll("#map h5")
    .forEach((h5) => (h5.style.color = "black"));
  const rect = h5.getBoundingClientRect();
  const line = document.getElementById("lineOnMap");
  const parentRect = document
    .querySelector("#map > div > div > div:nth-child(2)")
    .getBoundingClientRect();
  line.style.width = `${rect.width}px`;
  line.style.left = `${rect.left - parentRect.left}px`;
  line.style.top = `${
    document.querySelector("#map .line").getBoundingClientRect().top -
    parentRect.top -
    1
  }px`;
  h5.style.color = "#0d6efd";
}
window.addEventListener("scroll", () => lineOnMap(currentH5));
document.querySelectorAll("#map h5").forEach((h5) => {
  h5.addEventListener("mouseover", () => {
    lineOnMap(h5, 0);
  });
  h5.addEventListener("mouseleave", () => {
    lineOnMap(currentH5, 0);
  });
});

/**/
const hrefs = [
  "#",
  "#cities",
  "#quds",
  "#map",
  "#places",
  "#trips",
  "#contact",
];
function navbarColor() {
  for (let i = 0; i < hrefs.length; ++i) {
    document.querySelector(
      `.nav-item a[href="${hrefs[i]}"]`
    ).parentElement.style.backgroundColor = "#fff";
  }
  for (let i = hrefs.length - 1; i > 0; --i) {
    if (window.scrollY >= document.querySelector(hrefs[i]).offsetTop - 300) {
      document.querySelector(
        `.nav-item a[href="${hrefs[i]}"]`
      ).parentElement.style.backgroundColor = "#fcac0d";
      return;
    }
  }
  document.querySelector(
    `.nav-item a[href="#"]`
  ).parentElement.style.backgroundColor = "#fcac0d";
}
window.addEventListener("scroll", navbarColor);
window.addEventListener("load", navbarColor);
