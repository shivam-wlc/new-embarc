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

const menuWrap = document.querySelector(".menu");
const checkBox = document.querySelector("#checkbox22");

const menuss = document.querySelectorAll(".menu ul a");

document.addEventListener("click", (event) => {
  const isMenuOpen = checkBox.checked;
  if (
    isMenuOpen &&
    !menuWrap.contains(event.target) &&
    event.target !== checkBox
  ) {
    checkBox.checked = false; // Close the menu by unchecking the checkbox
  }

  menuss.forEach((menu) => {
    if (isMenuOpen) {
      menu.addEventListener("click", () => {
        checkBox.checked = false; // Close the menu by unchecking the checkbox
      });
    }
  });
});
