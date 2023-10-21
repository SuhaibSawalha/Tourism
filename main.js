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
  h5.style.color = "blue";
}
lineOnMap(currentH5);
document.querySelectorAll("#map h5").forEach((h5) => {
  h5.addEventListener("mouseover", () => {
    lineOnMap(h5, 0);
  });
  h5.addEventListener("mouseleave", () => {
    lineOnMap(currentH5, 0);
  });
});
