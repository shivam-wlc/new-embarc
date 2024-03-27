const arrowIcons = document.querySelectorAll(".arrowIcon");
const newTexts = document.querySelectorAll(".newText");

const isMobile = window.matchMedia("(max-width: 768px)").matches;
arrowIcons.forEach((arrowIcon, i) => {
  if (isMobile) {
    arrowIcon.addEventListener("click", () => {
      newTexts.forEach((newText, index) => {
        if (i === index) {
          newText.classList.add("dropdownNewClass");

          newText.style.display = "block";
          i % 2 !== 0
            ? (newText.style.textAlign = "left")
            : (newText.style.textAlign = "right");
        } else {
          newText.classList.remove("dropdownNewClass");
          newText.style.display = "none";
        }
      });
    });
  }
});
