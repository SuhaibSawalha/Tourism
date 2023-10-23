/* ! Changing the color and the underline of the current subject in map section*/
//the current opened subject
let currentH5 = document.querySelector("#map h5:first-child");
function lineOnMap(h5, change = 1) {
  //change when hover or click
  if (change) {
    currentH5 = h5;
  }
  //set all the subjects to the defualt (colored black and not underlined)
  document
    .querySelectorAll("#map h5")
    .forEach((h5) => (h5.style.color = "black"));
  //move the underline to the opened or hovered subject
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
  //change the color of the opened or hovered subject
  h5.style.color = "#0d6efd";
}
//set the color and the underline to the defualt
window.addEventListener("scroll", () => lineOnMap(currentH5));
window.addEventListener("load", () => lineOnMap(currentH5));
//change when hover
document.querySelectorAll("#map h5").forEach((h5) => {
  h5.addEventListener("mouseover", () => {
    lineOnMap(h5, 0);
  });
  h5.addEventListener("mouseleave", () => {
    lineOnMap(currentH5, 0);
  });
});

/* ! Changing the color of the nav item depending on the section*/
//storing every section
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
  //set the background of every nav item to the defualt (white)
  for (let i = 0; i < hrefs.length; ++i) {
    document.querySelector(
      `.nav-item a[href="${hrefs[i]}"]`
    ).parentElement.style.backgroundColor = "#fff";
  }
  //find the suitable nav item of the current section to change the color of it
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
//changing the color when scrolling or loading the page
window.addEventListener("scroll", navbarColor);
window.addEventListener("load", navbarColor);

/* ! Responsive nav bar control*/
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  //find if the nav is open or not
  if (
    document
      .querySelector(".navbar-toggler")
      .children[0].classList.contains("navbar-toggler-icon")
  ) {
    //show the nav
    document.querySelector(".collapse-suhaib").style.right = "30px";
    document.querySelector(".navbar-background").style.right = "0";
    document.querySelector(".navbar-stop").style.display = "block";
    document.body.style.overflow = "hidden";
    document.querySelector("nav").style.height = "100vh";
    const icon = document.querySelector(".navbar-toggler-icon");
    icon.classList.remove("navbar-toggler-icon");
    icon.classList.add("bi");
    icon.classList.add("bi-x");
  } else {
    //hide the nav
    document.querySelector(".collapse-suhaib").style.right = "-300px";
    document.querySelector(".navbar-background").style.right = "-300px";
    document.querySelector(".navbar-stop").style.display = "none";
    document.body.style.overflow = "auto";
    document.querySelector("nav").style.height = "60px";
    const icon = document.querySelector(".bi-x");
    icon.classList.remove("bi");
    icon.classList.remove("bi-x");
    icon.classList.add("navbar-toggler-icon");
  }
});
